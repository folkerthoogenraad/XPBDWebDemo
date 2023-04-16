import { Rigidbody2D } from "lib/xpbd/Rigidbody2D";
import { SolverScene } from "./SolverScene";
import { AxisConstraint2D } from "lib/xpbd/AxisConstraint2D";
import { DistanceConstraint2D } from "lib/xpbd/DistanceConstraint2D";
import { PinConstraint2D } from "lib/xpbd/PinConstraint2D";
import { ConstraintAttachment2D } from "lib/xpbd/ConstraintAttachment2D";
import { Vector2 } from "lib/math/Vector2";
import { AxleCosntraint2D } from "lib/xpbd/AxleConstraint2D";
import { EnginePartPaths } from "app/paths/EnginePartPaths";
import { RigidbodyGraphic2D } from "lib/xpbd/graphics/RigidbodyGraphic2D";
import { DistanceConstraintGraphic2D } from "lib/xpbd/graphics/DistanceConstraintGraphic2D";

interface Cylinder {
    piston: Rigidbody2D,
    counterWeight: Rigidbody2D,
    
    crankArm: DistanceConstraint2D,

    phase: number,

}

function addPiston(scene: SolverScene, x: number, y: number, phase: number): Cylinder {
    let radius = 0.5;
    
    let piston = new Rigidbody2D();
    piston.translateTo(x, y - 1.5 + Math.sin(phase));
 
    // Make sure we cannot rotate the piston.
    piston.inverseInertia = 0;
 
    let counterWeight = new Rigidbody2D();
    counterWeight.translateTo(x, y);
 
    let pistonWalls = new AxisConstraint2D(new ConstraintAttachment2D(piston), new Vector2(x, y), new Vector2(0, 1));
    
    // TODO this distance is now set to 2 but this means the whole thing starts off with some energy in the system because the constraints are not met
    let crankArm = new DistanceConstraint2D(
            new ConstraintAttachment2D(piston), 
            new ConstraintAttachment2D(counterWeight, 
            Vector2.angled(phase).scale(radius)), 
            1.5);
    
    let crankShaft = new PinConstraint2D(new ConstraintAttachment2D(counterWeight), counterWeight.position.clone());
 
    scene.bodies.push(piston);
    scene.bodies.push(counterWeight);
 
    scene.constraints.push(pistonWalls);
    scene.constraints.push(crankShaft);
    scene.constraints.push(crankArm);

    return {
        piston,
        counterWeight,
        crankArm,
        phase,
    }
}
function addAxle(scene: SolverScene, bodies: Rigidbody2D[]){
    for(let i = 0; i < bodies.length - 1; i++){
        let constraint = new AxleCosntraint2D(bodies[i], bodies[i + 1]);

        scene.constraints.push(constraint);
    }
}
function addCylinders(scene: SolverScene, amount: number): Cylinder[]{
    let cylinders: Cylinder[] = [];

    let spacing = 1.5;

    let phaseOffset = Math.PI;
    
    let width = (amount - 1) * spacing;

    for(let i = 0; i < amount; i++) {
        cylinders.push(addPiston(scene, -width / 2 + spacing * i, 0, phaseOffset * i));
    }

    return cylinders;
}
function addGraphics(scene: SolverScene, cylinders: Cylinder[]){
    let g = new EnginePartPaths();
    g.lineWidth = (window as any).lineWidth ?? 0.05;

    let piston = g.createPiston(1, 0.8);
    let arm = g.createArm(1.5
        );
    let counterWeight = g.createCounterWeight(0.5);

    cylinders.forEach(cylinder => {
        scene.bodyGraphics.push(new RigidbodyGraphic2D(cylinder.piston, piston));
        scene.bodyGraphics.push(new RigidbodyGraphic2D(cylinder.counterWeight, counterWeight).setRotationalOffset(cylinder.phase));

        scene.constraintGraphics.push(new DistanceConstraintGraphic2D(cylinder.crankArm, arm));
    });
}

export function createEngineTestScene(cylinderCount: number){
    let scene = new SolverScene();

    let cylinders = addCylinders(scene, cylinderCount);

    addAxle(scene, cylinders.map(cylidner => cylidner.counterWeight));

    addGraphics(scene, cylinders);
 
    return scene;
}