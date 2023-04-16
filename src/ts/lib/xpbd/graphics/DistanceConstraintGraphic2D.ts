import { Graphics2D } from "lib/graphics/Graphics2D";
import { Rigidbody2D } from "../Rigidbody2D";
import { Vector2 } from "lib/math/Vector2";
import { DistanceConstraint2D } from "../DistanceConstraint2D";

export class DistanceConstraintGraphic2D {
    constraint: DistanceConstraint2D;

    path: Path2D;

    constructor(constraint: DistanceConstraint2D, path: Path2D){
        this.constraint = constraint;
        this.path = path;
    }

    private _positionFrom: Vector2 = new Vector2();
    private _positionTo: Vector2 = new Vector2();

    draw(graphics: Graphics2D){
        graphics.push();

        let from = this.constraint.from.getGlobalAttachmentPosition(this._positionFrom);
        let to = this.constraint.to.getGlobalAttachmentPosition(this._positionTo);

        graphics.translate(from.x, from.y);
        
        let dx = Vector2.dx(from, to);
        let dy = Vector2.dy(from, to);

        let distance = Vector2.fLength(dx, dy);

        let angle = Vector2.fAngle(dx, dy);

        graphics.rotate(angle);

        graphics.scale(distance / this.constraint.restDistance, 1);

        graphics.drawPath(this.path, false);
        graphics.drawPath(this.path, true);

        graphics.pop();
    }
}