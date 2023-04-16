import { Vector2 } from "lib/math/Vector2";
import { AxisConstraint2D } from "lib/xpbd/AxisConstraint2D";
import { Constraint2D } from "lib/xpbd/Constraint2D";
import { DistanceConstraint2D } from "lib/xpbd/DistanceConstraint2D";
import { PinConstraint2D } from "lib/xpbd/PinConstraint2D";
import { Rigidbody2D } from "lib/xpbd/Rigidbody2D";
import { DistanceConstraintGraphic2D } from "lib/xpbd/graphics/DistanceConstraintGraphic2D";
import { RigidbodyGraphic2D } from "lib/xpbd/graphics/RigidbodyGraphic2D";
import { Graphics2D } from "lib/graphics/Graphics2D";

export class SolverScene {
    bodies: Rigidbody2D[] = [];
    constraints: Constraint2D[] = [];

    bodyGraphics: RigidbodyGraphic2D[] = [];
    constraintGraphics: DistanceConstraintGraphic2D[] = [];

    substeps: number = 1;
    constraintSubsteps: number = 1;

    gravityRate: number = 1;
    timeRate: number = 1;

    update(delta: number) {
        for (let i = 0; i < this.substeps; i++) {
            // Note that we do have to divide delta into the substeps here.
            this.step(delta / this.substeps * this.timeRate);
        }
    }

    private step(delta: number) {
        // Update all the bodies first
        this.bodies.forEach(body => {
            // Move with current velocity
            body.applyMotion(delta);

            // Apply gravity, if applicable
            if (body.inverseMass > 0) {
                body.addImmediateForce(0, 9.81 / body.inverseMass * this.gravityRate, delta);
            }
        });

        // Update all the constraints
        this.constraints.forEach(constraint => {
            if (constraint.enabled) {
                constraint.init(delta)
            }
        });
        for (let i = 0; i < this.constraintSubsteps; i++) {
            this.constraints.forEach(constraint => {
                if (constraint.enabled) {
                    // Note: we don't need to divide the delta because of the lambda in the constraints.
                    // Constraints can be evaluated many times per frame without increasing energy.
                    constraint.apply(delta);
                }
            });
        }

        // Recalculate all the velocities. This step _can_ be skipped because 
        // we calculate the velocity immediatly when applying impulses
        // but this will be additionally robust if we move objects without affecting the velocity.
        this.bodies.forEach(body => body.recalculateVelocity(delta));

        
        // Then finally we perform damping as well. Please note that in most of the examples we don't actually do much of any damping (damperCompliance < 0)
        for (let i = 0; i < this.constraintSubsteps; i++) {
            this.constraints.forEach(constraint => {
                if (constraint.enabled) {
                    // Note: we don't need to divide the delta because of the lambda in the constraints.
                    // Constraints can be evaluated many times per frame without increasing energy.
                    constraint.applyDamping(delta);
                }
            });
        }
    }

    draw(graphics: Graphics2D){
        this.constraintGraphics.forEach(graphic => graphic.draw(graphics));
        this.bodyGraphics.forEach(graphic => graphic.draw(graphics));
    }

    drawDebug(graphics: Graphics2D, bodyRadius: number) {
        let scale = 4;

        graphics.setLineWidthInPoints(2);

        graphics.setStrokeColor("red");

        this.constraints.forEach(constraint => {
            if (!constraint.enabled) return;

            if ((constraint instanceof DistanceConstraint2D)) {
                let from = constraint.from.getGlobalAttachmentPosition(new Vector2());
                let to = constraint.to.getGlobalAttachmentPosition(new Vector2());

                graphics.drawLine(from.x, from.y, to.x, to.y);
                graphics.drawCircle(from.x, from.y, graphics.pointSize * scale, false);
                graphics.drawCircle(to.x, to.y, graphics.pointSize * scale, false);
            }
            if ((constraint instanceof PinConstraint2D)) {
                let attachment = constraint.attachment.getGlobalAttachmentPosition(new Vector2());
                let origin = constraint.origin;

                let size = scale * graphics.pointSize * 1;

                graphics.drawLine(origin.x, origin.y, attachment.x, attachment.y);
                graphics.drawLine(attachment.x - size, attachment.y - size, attachment.x + size, attachment.y + size);
                graphics.drawLine(attachment.x - size, attachment.y + size, attachment.x + size, attachment.y - size);
            }
            if ((constraint instanceof AxisConstraint2D)) {
                let attachment = constraint.attachment.getGlobalAttachmentPosition(new Vector2());
                let origin = constraint.origin;
                let axis = constraint.axis;

                origin = attachment;

                let axisSize = scale * graphics.pointSize * 8;

                let anx = axis.y * axisSize / 4;
                let any = -axis.x * axisSize / 4;

                graphics.drawLine(origin.x - anx, origin.y - any, origin.x + anx, origin.y + any);
                graphics.drawLine(origin.x - axis.x * axisSize, origin.y - axis.y * axisSize, origin.x + axis.x * axisSize, origin.y + axis.y * axisSize);
            }
        });

        graphics.setStrokeColor("green");
        this.bodies.forEach(body => {
            graphics.drawCircle(body.position.x, body.position.y, bodyRadius, false);

            graphics.drawLine(body.position.x, body.position.y, body.position.x + body.basis.xx * bodyRadius * 1.1, body.position.y + body.basis.xy * bodyRadius * 1.1);
        });
    }
}