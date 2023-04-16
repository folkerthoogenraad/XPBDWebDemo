import { Rigidbody2D } from "lib/xpbd/Rigidbody2D";
import { SolverScene } from "./SolverScene";
import { DistanceConstraint2D } from "lib/xpbd/DistanceConstraint2D";
import { ConstraintAttachment2D } from "lib/xpbd/ConstraintAttachment2D";
import { PinConstraint2D } from "lib/xpbd/PinConstraint2D";
import { RigidBodyPaths } from "./paths/RigidBodyPaths";
import { RigidbodyGraphic2D } from "lib/xpbd/graphics/RigidbodyGraphic2D";
import { DistanceConstraintGraphic2D } from "lib/xpbd/graphics/DistanceConstraintGraphic2D";


export function createCloth(width: number, height: number, compliance = 0, damperCompliance= 0){
    let scene = new SolverScene();

    let graphics = new RigidBodyPaths();
    graphics.lineWidth = (window as any).lineWidth ?? 0.05;

    let bodyGraphic = graphics.createBody(0.1);
    let constraintGraphic = graphics.createConnection(1);

    // Create all bodies
    for(let j = 0; j < height; j++){
        for(let i = 0; i < width; i++){
            let body = new Rigidbody2D().translateTo(i, j);
            body.inverseInertia = 0;
    
            scene.bodies.push(body);
    
            scene.bodyGraphics.push(new RigidbodyGraphic2D(body, bodyGraphic));
        }
    }

    const getBody = (i: number, j: number) => {
        return scene.bodies[i + j * width];
    };

    // Sideways
    for(let j = 0; j < height; j++){
        for(let i = 0; i < width - 1; i++){
            let constraint = new DistanceConstraint2D(new ConstraintAttachment2D(getBody(i, j)), new ConstraintAttachment2D(getBody(i + 1, j)), undefined, compliance);
            constraint.damperCompliance = damperCompliance;

            scene.constraints.push(constraint);
            scene.constraintGraphics.push(new DistanceConstraintGraphic2D(constraint, constraintGraphic));
        }
    }

    // Top to bottom
    for(let j = 0; j < height - 1; j++){
        for(let i = 0; i < width; i++){
            let constraint = new DistanceConstraint2D(new ConstraintAttachment2D(getBody(i, j)), new ConstraintAttachment2D(getBody(i, j+ 1)), undefined, compliance);
            constraint.damperCompliance = damperCompliance;

            scene.constraints.push(constraint);
            scene.constraintGraphics.push(new DistanceConstraintGraphic2D(constraint, constraintGraphic));
        }
    }
    
    // Pin the corners
    let pinLeft = new PinConstraint2D(new ConstraintAttachment2D(getBody(0, 0)));
    let pinRight = new PinConstraint2D(new ConstraintAttachment2D(getBody(width - 1, 0)));

    scene.constraints.push(pinLeft);
    scene.constraints.push(pinRight);
    // scene.constraints.push(pinTop);
    // scene.constraints.push(pinBottom);
    
    return scene;
}