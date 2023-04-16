import { Vector2 } from "lib/math/Vector2";
import { Constraint2D } from "./Constraint2D";
import { Rigidbody2D } from "./Rigidbody2D";
import { ConstraintAttachment2D } from "./ConstraintAttachment2D";

export class PinConstraint2D extends Constraint2D {
    compliance: number;
    damperCompliance: number = -1;

    origin: Vector2;

    attachment: ConstraintAttachment2D;

    lambda: number = 0;
    damperLambda: number = 0;

    constructor(attachment: ConstraintAttachment2D, origin?: Vector2, compliance: number = 0) {
        super();

        this.attachment = attachment;

        if(origin === undefined){
            this.origin = attachment.body.position.clone();
        }
        else{
            this.origin = origin;
        }

        this.compliance = compliance;
    }

    init(delta: number): void {
        this.lambda = 0;
        this.damperLambda = 0;
    }

    private _normal: Vector2 = new Vector2();
    private _globalAttachmentPosition: Vector2 = new Vector2();
    private _localDirection: Vector2 = new Vector2();
    private _impulse: Vector2 = new Vector2();

    apply(delta: number): void {
        let globalAttachmentPosition = this.attachment.getGlobalAttachmentPosition(this._globalAttachmentPosition);
        
        let direction = Vector2.directionOut(globalAttachmentPosition, this.origin, this._normal);
        let distance = direction.length;
        
        if(distance == 0) return;

        direction.scale(1 / distance);

        let localDirection = this.attachment.getLocalDirection(direction, this._localDirection);
        
        let w1 = this.attachment.getLocalGeneralizedInverseMass(localDirection);
        let w2 = 0;

        let alpha = this.compliance / (delta * delta);

        let c = distance;
        let deltaLambda = (-c + this.lambda * alpha) / (w1 + w2 + alpha);

        this.lambda += deltaLambda;

        let impulse = this._impulse.set(direction).scale(deltaLambda);
        
        this.attachment.body.addImmediateImpulseAt(-impulse.x, -impulse.y, globalAttachmentPosition.x, globalAttachmentPosition.y, delta);
    }

    private _velocity: Vector2 = new  Vector2();
    private _damperImpulse: Vector2 = new  Vector2();

    applyDamping(delta: number): void {
        if(this.damperCompliance < 0) return;

        let globalAttachmentPosition = this.attachment.getGlobalAttachmentPosition(this._globalAttachmentPosition);
        
        let velocity = this.attachment.body.getPointVelocity(globalAttachmentPosition.x, globalAttachmentPosition.y, this._velocity);
        let amount = velocity.length;
        
        if(amount == 0) return;

        let direction = this._normal.set(velocity).scale(1 / amount);

        let localDirection = this.attachment.getLocalDirection(direction, this._localDirection);
        
        let w1 = this.attachment.getLocalGeneralizedInverseMass(localDirection);
        let w2 = 0;

        let alpha = this.damperCompliance / (delta);

        let c = -amount;
        let deltaLambda = (-c + this.damperLambda * alpha) / (w1 + w2 + alpha);

        this.damperLambda += deltaLambda;

        let impulse = this._damperImpulse.set(direction).scale(deltaLambda * delta);

        this.attachment.body.addVelocityImpulseAt(-impulse.x, -impulse.y, globalAttachmentPosition.x, globalAttachmentPosition.y, delta);
    }
}