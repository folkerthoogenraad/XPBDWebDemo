import { Rigidbody2D } from "lib/xpbd/Rigidbody2D";
import { SolverScene } from "./SolverScene";
import { DistanceConstraint2D } from "lib/xpbd/DistanceConstraint2D";
import { ConstraintAttachment2D } from "lib/xpbd/ConstraintAttachment2D";
import { PinConstraint2D } from "lib/xpbd/PinConstraint2D";
import { RigidBodyPaths } from "./paths/RigidBodyPaths";
import { RigidbodyGraphic2D } from "lib/xpbd/graphics/RigidbodyGraphic2D";
import { DistanceConstraintGraphic2D } from "lib/xpbd/graphics/DistanceConstraintGraphic2D";


export function createPendulumTest(count: number, spacing: number = 1, compliance = 0, damperCompliance = -1){
    let scene = new SolverScene();

    let graphics = new RigidBodyPaths();
    graphics.lineWidth = (window as any).lineWidth ?? 0.05;

    let bodyGraphic = graphics.createBody(Math.min(spacing / 2 - 0.1, 0.4));
    let constraintGraphic = graphics.createConnection(spacing);

    let initialBody = new Rigidbody2D().translateTo(0, 0)
    scene.bodies.push(initialBody);
    scene.bodyGraphics.push(new RigidbodyGraphic2D(initialBody, bodyGraphic));

    initialBody.inverseInertia = 0;


    let previousBody = initialBody;

    for(let i = 1; i < count; i++){
        // Very sligth random offset of the x to give it some cool animation :)
        let body = new Rigidbody2D().translateTo(Math.random() * 0.001, -i * spacing);
        let constraint = new DistanceConstraint2D(new ConstraintAttachment2D(body), new ConstraintAttachment2D(previousBody));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;

        body.inverseInertia = 0;

        scene.bodies.push(body);
        scene.constraints.push(constraint);

        scene.bodyGraphics.push(new RigidbodyGraphic2D(body, bodyGraphic));
        scene.constraintGraphics.push(new DistanceConstraintGraphic2D(constraint, constraintGraphic));

        previousBody = body;
    }
    
    let pin = new PinConstraint2D(new ConstraintAttachment2D(initialBody));
    scene.constraints.push(pin);
    
    return scene;
}