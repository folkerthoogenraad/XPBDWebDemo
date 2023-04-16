import { Vector2 } from "lib/math/Vector2";
import { Constraint2D } from "./Constraint2D";
import { Rigidbody2D } from "./Rigidbody2D";
import { ConstraintAttachment2D } from "./ConstraintAttachment2D";
import { MathHelper } from "lib/math/MathHelper";


export class AxleCosntraint2D extends Constraint2D {
    compliance: number;

    from: Rigidbody2D;
    to: Rigidbody2D;

    lambda: number = 0;

    gearRatio: number = 1;

    constructor(from: Rigidbody2D, to: Rigidbody2D, compliance: number = 0) {
        super();

        this.from = from;
        this.to = to;

        this.compliance = compliance;
    }

    init(delta: number): void {
        this.lambda = 0;
    }

    apply(delta: number): void {
        let diff = MathHelper.shortestAngle(
            MathHelper.normalizeAngle(this.from.rotation * this.gearRatio), 
            MathHelper.normalizeAngle(this.to.rotation));

        if(diff == 0) return;

        let w1 = this.from.inverseInertia;
        let w2 = this.to.inverseInertia * this.gearRatio;

        let alpha = this.compliance / (delta * delta);

        let c = Math.abs(diff);
        let deltaLambda = (-c + this.lambda * alpha) / (w1 + w2 + alpha);

        this.lambda += deltaLambda;

        let rotationalImpulse = Math.sign(diff) * deltaLambda;
        
        this.from.rotation -= rotationalImpulse * this.from.inverseInertia / this.gearRatio;
        this.from.angularVelocity -= rotationalImpulse * this.from.inverseInertia / delta / this.gearRatio;
        this.to.rotation += rotationalImpulse * this.to.inverseInertia;
        this.to.angularVelocity += rotationalImpulse * this.to.inverseInertia / delta;
    }
    applyDamping(delta: number): void {
        // Not implemented. Reader excercise? :) 
    }
}