import { Rigidbody2D } from "lib/xpbd/Rigidbody2D";
import { SolverScene } from "./SolverScene";
import { DistanceConstraint2D } from "lib/xpbd/DistanceConstraint2D";
import { ConstraintAttachment2D } from "lib/xpbd/ConstraintAttachment2D";
import { PinConstraint2D } from "lib/xpbd/PinConstraint2D";
import { RigidBodyPaths } from "./paths/RigidBodyPaths";
import { RigidbodyGraphic2D } from "lib/xpbd/graphics/RigidbodyGraphic2D";
import { DistanceConstraintGraphic2D } from "lib/xpbd/graphics/DistanceConstraintGraphic2D";

function addGraphics(scene: SolverScene, spacing = 1){
    let graphics = new RigidBodyPaths();
    graphics.lineWidth = (window as any).lineWidth ?? 0.05;

    let bodyGraphic = graphics.createBody(0.2);
    let constraintGraphic = graphics.createConnection(spacing);

    scene.bodies.forEach(body => {
        scene.bodyGraphics.push(new RigidbodyGraphic2D(body, bodyGraphic));
    });
    scene.constraints.forEach(constraint => {
        if(!(constraint instanceof DistanceConstraint2D)) return;
        
        scene.constraintGraphics.push(new DistanceConstraintGraphic2D(constraint, constraintGraphic));
    });
}

export function createBridgeScene(count: number, spacing: number = 1, compliance = 0, damperCompliance = -1){
    let scene = new SolverScene();

    for(let i = 0; i < count; i++){
        let body1 = new Rigidbody2D().translateTo(i * spacing, 0);
        let body2 = new Rigidbody2D().translateTo(i * spacing + spacing * 0.5, -spacing);

        // This is not needed but is nice for grabbing it (because otherwise you introduce random rotations into the bridge)
        body1.inverseInertia = 0;
        body2.inverseInertia = 0;

        scene.bodies.push(body1);
        scene.bodies.push(body2);
    }

    
    // Spokes
    for(let i = 0; i < scene.bodies.length - 1; i++){
        let from = scene.bodies[i];
        let to = scene.bodies[i + 1];
        let constraint = new DistanceConstraint2D(new ConstraintAttachment2D(from), new ConstraintAttachment2D(to));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;

        scene.constraints.push(constraint);
    }
    
    // Even connections
    for(let i = 0; i < scene.bodies.length - 2; i += 2){
        let from = scene.bodies[i];
        let to = scene.bodies[i + 2];
        let constraint = new DistanceConstraint2D(new ConstraintAttachment2D(from), new ConstraintAttachment2D(to));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;

        scene.constraints.push(constraint);
    }

    // Uneven connections
    for(let i = 1; i < scene.bodies.length - 2; i += 2){
        let from = scene.bodies[i];
        let to = scene.bodies[i + 2];
        let constraint = new DistanceConstraint2D(new ConstraintAttachment2D(from), new ConstraintAttachment2D(to));
        constraint.compliance = compliance;
        constraint.damperCompliance = damperCompliance;

        scene.constraints.push(constraint);
    }

    let pin = new PinConstraint2D(new ConstraintAttachment2D(scene.bodies[0]));
    scene.constraints.push(pin);

    addGraphics(scene);
    
    return scene;
}