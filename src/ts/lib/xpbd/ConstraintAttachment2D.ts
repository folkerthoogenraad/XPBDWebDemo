import { Vector2 } from "lib/math/Vector2";
import { Rigidbody2D } from "./Rigidbody2D";

export class ConstraintAttachment2D {
    readonly body: Rigidbody2D;
    readonly relativePosition: Vector2;
    readonly isCentral: boolean;

    constructor(body: Rigidbody2D, relativePosition?: Vector2){
        this.body = body;
        this.relativePosition = relativePosition ?? new Vector2();
        this.isCentral = relativePosition === undefined;
    }

    getLocalGeneralizedInverseMass(normal: Vector2): number {
        if(this.isCentral){
            return this.body.inverseMass;
        }
        else {
            let cross = Vector2.cross(normal, this.relativePosition);

            return this.body.inverseMass + cross * this.body.inverseInertia * cross;
        }
    }

    getLocalDirection(input: Vector2, output: Vector2): Vector2{
        return this.body.inverseBasis.transformOut(input, output);
    }

    getGlobalAttachmentPosition(output: Vector2): Vector2{
        return this.body.basis
            .transformOut(this.relativePosition, output)
            .add(this.body.position);
    }
}