import { Vector2 } from "lib/math/Vector2";
import { Constraint2D } from "./Constraint2D";
import { Rigidbody2D } from "./Rigidbody2D";
import { ConstraintAttachment2D } from "./ConstraintAttachment2D";

export class AxisConstraint2D extends Constraint2D {
    compliance: number;

    origin: Vector2;
    axis: Vector2;

    attachment: ConstraintAttachment2D;

    lambda: number = 0;

    constructor(attachment: ConstraintAttachment2D, origin: Vector2, axis: Vector2, compliance: number = 0) {
        super();

        this.attachment = attachment;

        this.origin = origin;
        this.axis = axis;

        this.compliance = compliance;
    }

    init(delta: number): void {
        this.lambda = 0;
    }

    private _normal: Vector2 = new Vector2();
    private _globalAttachmentPosition: Vector2 = new Vector2();
    private _localDirection: Vector2 = new Vector2();
    private _impulse: Vector2 = new Vector2();

    apply(delta: number): void {
        let globalAttachmentPosition = this.attachment.getGlobalAttachmentPosition(this._globalAttachmentPosition);
        
        let direction = Vector2.directionOut(globalAttachmentPosition, this.origin, this._normal);

        let amount = Vector2.dot(direction, this.axis);

        direction.subX(amount * this.axis.x).subY(amount * this.axis.y);

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
    applyDamping(delta: number): void {
        // Not implemented. Reader excercise? :) 
    }
}