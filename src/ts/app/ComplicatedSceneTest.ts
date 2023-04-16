import { Rigidbody2D } from "lib/xpbd/Rigidbody2D";
import { SolverScene } from "./SolverScene";
import { DistanceConstraint2D } from "lib/xpbd/DistanceConstraint2D";
import { ConstraintAttachment2D } from "lib/xpbd/ConstraintAttachment2D";
import { PinConstraint2D } from "lib/xpbd/PinConstraint2D";
import { RigidBodyPaths } from "./paths/RigidBodyPaths";
import { RigidbodyGraphic2D } from "lib/xpbd/graphics/RigidbodyGraphic2D";
import { DistanceConstraintGraphic2D } from "lib/xpbd/graphics/DistanceConstraintGraphic2D";
import { Vector2 } from "lib/math/Vector2";
import { AxisConstraint2D } from "lib/xpbd/AxisConstraint2D";

function addGraphics(scene: SolverScene, spacing = 1){
    let graphics = new RigidBodyPaths();
    graphics.lineWidth = (window as any).lineWidth ?? 0.05;

    scene.bodies.forEach(body => {
        let bodyGraphic = graphics.createBody(Math.sqrt(body.mass) * 0.2);

        scene.bodyGraphics.push(new RigidbodyGraphic2D(body, bodyGraphic));
    });
    scene.constraints.forEach(constraint => {
        if(!(constraint instanceof DistanceConstraint2D)) return;

        let constraintGraphic = graphics.createConnection(constraint.restDistance);
        
        scene.constraintGraphics.push(new DistanceConstraintGraphic2D(constraint, constraintGraphic));
    });
}

export function createComplicatedScene(){
    let scene = new SolverScene();

    let topWeight = new Rigidbody2D().translate(0, -2);
    topWeight.mass = 4;
    topWeight.inertia = 4;

    let rightWeight = new Rigidbody2D().translateTo(3, 0);
    rightWeight.mass = 5;
    rightWeight.inertia = 5;

    let leftWeight = new Rigidbody2D().translateTo(-3, 0);
    leftWeight.mass = 5;
    leftWeight.inertia = 5;

    let weight = new Rigidbody2D();
    weight.mass = 10;
    weight.inertia = 10;
    
    let left = new Rigidbody2D().translateTo(-0.5, 1);
    let leftBottom = new Rigidbody2D().translateTo(-0.5, 2);
    let right = new Rigidbody2D().translateTo(0.5, 1);

    left.mass = 1;
    right.mass = 2;

    let leftConnection = new DistanceConstraint2D(new ConstraintAttachment2D(left, new Vector2(0, 0)), new ConstraintAttachment2D(weight, new Vector2(-0.5, 0)));
    let rightConnection = new DistanceConstraint2D(new ConstraintAttachment2D(right, new Vector2(0, 0)), new ConstraintAttachment2D(weight, new Vector2(0.5, 0)));
    let leftBottomConnection = new DistanceConstraint2D(new ConstraintAttachment2D(left, new Vector2(0, 0)), new ConstraintAttachment2D(leftBottom, new Vector2(0, 0)));

    let weightConnectionRight = new DistanceConstraint2D(new ConstraintAttachment2D(rightWeight, new Vector2(-0.3, 0)), new ConstraintAttachment2D(weight, new Vector2(0.5, 0)));
    let weightConnectionLeft = new DistanceConstraint2D(new ConstraintAttachment2D(leftWeight, new Vector2(0.3, 0)), new ConstraintAttachment2D(weight, new Vector2(-0.5, 0)));

    let weightPin = new PinConstraint2D(new ConstraintAttachment2D(weight));
    let rightWeightAxis = new AxisConstraint2D(new ConstraintAttachment2D(rightWeight), new Vector2(0, 0), new Vector2(1, 0));
    let leftWeightAxis = new AxisConstraint2D(new ConstraintAttachment2D(leftWeight), new Vector2(0, 0), new Vector2(1, 0));

    let leftTopConnection = new DistanceConstraint2D(new ConstraintAttachment2D(leftWeight), new ConstraintAttachment2D(topWeight, new Vector2(-0.3, 0)));
    let rightTopConnection = new DistanceConstraint2D(new ConstraintAttachment2D(rightWeight), new ConstraintAttachment2D(topWeight, new Vector2(0.3, 0)));

    scene.bodies.push(weight);
    scene.bodies.push(left);
    scene.bodies.push(right);
    scene.bodies.push(leftBottom);
    scene.bodies.push(rightWeight);
    scene.bodies.push(leftWeight);
    scene.bodies.push(topWeight);

    scene.constraints.push(weightPin);
    scene.constraints.push(leftConnection);
    scene.constraints.push(rightConnection);
    scene.constraints.push(leftBottomConnection);
    scene.constraints.push(rightWeightAxis);
    scene.constraints.push(leftWeightAxis);

    scene.constraints.push(weightConnectionRight);
    scene.constraints.push(weightConnectionLeft);

    scene.constraints.push(leftTopConnection);
    scene.constraints.push(rightTopConnection);

    addGraphics(scene);
    
    return scene;
}