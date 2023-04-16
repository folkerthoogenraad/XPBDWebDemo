import { Vector2 } from "lib/math/Vector2";
import { Constraint2D } from "./Constraint2D";
import { Rigidbody2D } from "./Rigidbody2D";
import { ConstraintAttachment2D } from "./ConstraintAttachment2D";

export class DistanceConstraint2D extends Constraint2D {
    // Compliance is the inverse of stiffness (1 / springCoefficient)
    compliance: number;
    // Dampercompliance is the inverse of stiffness related to velocity (1 / damperCoefficient)
    damperCompliance: number = -1;

    restDistance: number;

    from: ConstraintAttachment2D;
    to: ConstraintAttachment2D;

    // The lambda's are accumulators that are reset per frame. This way you can evaluate the constraint multiple times per frame without increasing stiffness.
    lambda: number = 0;
    damperLambda: number = 0;

    // The total force applied over a frame (in this case we only take spring force into account, but it is trivial to add damper force as well)
    forceApplied: Vector2 = new Vector2();

    constructor(from: ConstraintAttachment2D, to: ConstraintAttachment2D, distance?: number, compliance: number = 0) {
        super();

        this.from = from;
        this.to = to;

        if(distance !== undefined){
            this.restDistance = distance;
        }
        else{
            this.restDistance = this.calculateDistance();
        }
        this.compliance = compliance;
    }

    init(delta: number): void {
        // Reset the accumulators
        this.lambda = 0;
        this.damperLambda = 0;

        this.forceApplied.setZero();
    }

    // Variables needed in the apply function that we don't want to reallocate
    private _fromGlobalAttachmentPosition: Vector2 = new Vector2();
    private _toGlobalAttachmentPosition: Vector2 = new Vector2();

    private _direction: Vector2 = new Vector2();
    private _fromLocalDirection: Vector2 = new Vector2();
    private _toLocalDirection: Vector2 = new Vector2();

    private _impulse: Vector2 = new Vector2();

    apply(delta: number): void {
        if(this.compliance < 0) return;

        let fromGlobalAttachmentPosition = this.from.getGlobalAttachmentPosition(this._fromGlobalAttachmentPosition);
        let toGlobalAttachmentPosition = this.to.getGlobalAttachmentPosition(this._toGlobalAttachmentPosition);
        
        let direction = Vector2.directionOut(fromGlobalAttachmentPosition, toGlobalAttachmentPosition, this._direction);
        let distance = direction.length;
        
        if(distance == 0) return;

        direction.scale(1 / distance);

        let fromLocalDirection = this.from.getLocalDirection(direction, this._fromLocalDirection);
        let toLocalDirection = this.to.getLocalDirection(direction, this._toLocalDirection);
        
        let w1 = this.from.getLocalGeneralizedInverseMass(fromLocalDirection);
        let w2 = this.to.getLocalGeneralizedInverseMass(toLocalDirection);

        let alpha = this.compliance / (delta * delta);

        let c = distance - this.restDistance;
        let deltaLambda = (-c + this.lambda * alpha) / (w1 + w2 + alpha);

        this.lambda += deltaLambda;

        let impulse = this._impulse.set(direction).scale(deltaLambda);

        this.from.body.addImmediateImpulseAt(-impulse.x, -impulse.y, fromGlobalAttachmentPosition.x, fromGlobalAttachmentPosition.y, delta);
        this.to.body.addImmediateImpulseAt(impulse.x, impulse.y, toGlobalAttachmentPosition.x, toGlobalAttachmentPosition.y, delta);
        
        // Just house keeping, not needed for the actual calculations
        this.forceApplied
            .addX(impulse.x / (delta * delta))
            .addY(impulse.y / (delta * delta));
    }

    
    // Variables needed in the applyDamping function that we don't want to reallocate
    private _fromVelocity: Vector2 = new Vector2();
    private _toVelocity: Vector2 = new Vector2();
    private _damperImpulse: Vector2 = new Vector2();

    applyDamping(delta: number): void {
        if (this.damperCompliance < 0) return;

        let fromGlobalAttachmentPosition = this.from.getGlobalAttachmentPosition(this._fromGlobalAttachmentPosition);
        let toGlobalAttachmentPosition = this.to.getGlobalAttachmentPosition(this._toGlobalAttachmentPosition);
        
        let direction = Vector2.directionOut(fromGlobalAttachmentPosition, toGlobalAttachmentPosition, this._direction);
        let distance = direction.length;
        
        if(distance == 0) return;

        direction.scale(1 / distance);

        let fromVelocity = this.from.body.getPointVelocity(fromGlobalAttachmentPosition.x, fromGlobalAttachmentPosition.y, this._fromVelocity);
        let toVelocity = this.to.body.getPointVelocity(toGlobalAttachmentPosition.x, toGlobalAttachmentPosition.y, this._toVelocity);

        let velocityDifference = Vector2.dot(toVelocity, direction) - Vector2.dot(fromVelocity, direction);

        let fromLocalDirection = this.from.getLocalDirection(direction, this._fromLocalDirection);
        let toLocalDirection = this.to.getLocalDirection(direction, this._toLocalDirection);
        
        let w1 = this.from.getLocalGeneralizedInverseMass(fromLocalDirection);
        let w2 = this.to.getLocalGeneralizedInverseMass(toLocalDirection);

        let alpha = this.damperCompliance / (delta);

        let c = velocityDifference;
        let deltaLambda = (-c + this.damperLambda * alpha) / (w1 + w2 + alpha);

        this.damperLambda += deltaLambda;

        let impulse = this._damperImpulse.set(direction).scale(deltaLambda * delta);

        this.from.body.addVelocityImpulseAt(-impulse.x, -impulse.y, fromGlobalAttachmentPosition.x, fromGlobalAttachmentPosition.y, delta);
        this.to.body.addVelocityImpulseAt(impulse.x, impulse.y, toGlobalAttachmentPosition.x, toGlobalAttachmentPosition.y, delta);
    }

    // ========================================================= //
    // Helper functions
    // ========================================================= //
    resetRestDistance(){
        this.restDistance = this.calculateDistance();
    }

    calculateDistance(){
        let fromGlobalAttachmentPosition = this.from.getGlobalAttachmentPosition(this._fromGlobalAttachmentPosition);
        let toGlobalAttachmentPosition = this.to.getGlobalAttachmentPosition(this._toGlobalAttachmentPosition);
        
        let direction = Vector2.directionOut(fromGlobalAttachmentPosition, toGlobalAttachmentPosition, this._direction);
        let distance = direction.length;

        return distance;
    }

    get springCoefficient(){
        if(this.compliance < 0) return 0;

        return 1 / this.compliance;
    }
    set springCoefficient(v: number){
        if(v <= 0){
            this.compliance = -1;
        }
        else{
            this.compliance = 1 / v;
        }
    }

    get damperCoefficient(){
        if(this.damperCompliance < 0) return 0;

        return 1 / this.damperCompliance;
    }
    set damperCoefficient(v: number){
        if(v <= 0){
            this.damperCompliance = -1;
        }
        else{
            this.damperCompliance = 1 / v;
        }
    }
}