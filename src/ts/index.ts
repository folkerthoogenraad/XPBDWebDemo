import { SolverScene } from "app/SolverScene";
import { createEngineTestScene as createEngineTest } from "app/EngineTestScene";
import { ConstraintAttachment2D } from "lib/xpbd/ConstraintAttachment2D";
import { PinConstraint2D } from "lib/xpbd/PinConstraint2D";
import { Rigidbody2D } from "lib/xpbd/Rigidbody2D";
import { Graphics2D } from "lib/graphics/Graphics2D";
import { ViewportFit, ViewportSettings } from "lib/settings/ViewportSettings";
import { Vector2 } from "lib/math/Vector2";
import { createPendulumTest } from "app/PendulumTestScene";
import { initMenu } from "app/Menu";
import { createCloth } from "app/ClothTestScene";
import { createBridgeScene } from "app/BridgeTestScene";
import { createComplicatedScene } from "app/ComplicatedSceneTest";


let graphics: Graphics2D;
let scene: SolverScene;

let sceneName: string = "";
let substeps: number = 10;
let gravityRate: number = 1;
let timeRate: number = 1;
let drawOverlay: boolean = false;

function setupMouseControls(canvas: HTMLCanvasElement) {
   let selected: Rigidbody2D | undefined = undefined;

   let touchId = -1;

   let offsetX = 0;
   let offsetY = 0;

   // Hacky nullable stuff.
   let constraint = new PinConstraint2D(new ConstraintAttachment2D(selected!), new Vector2());
   constraint.enabled = false;
   constraint.compliance = 0.000001;
   constraint.damperCompliance = 0.001;

   let select = (body?: Rigidbody2D) => {
      selected = body;

      constraint.attachment = new ConstraintAttachment2D(selected!, body?.inverseBasis?.transform(new Vector2(offsetX, offsetY)));
      constraint.enabled = body !== undefined;

      if(scene.constraints.indexOf(constraint) < 0){
         scene.constraints = [constraint, ...scene.constraints];
      }
   }

   // TODO touch controls too
   canvas.addEventListener("mousedown", (ev) => {
      let p = graphics.canvasToViewport(ev.offsetX, ev.offsetY);

      let distance = 0.4;

      scene.bodies.forEach(body => {
         let d = Vector2.fDistance(p.x, p.y, body.position.x, body.position.y);

         if (d < distance) {
            distance = d;
            offsetX = p.x - body.position.x;
            offsetY = p.y - body.position.y;
            select(body);
         }
      });
   });
   canvas.addEventListener("touchstart", (ev) => {
      for(let i = 0; i < ev.changedTouches.length; i++){
         let touch = ev.changedTouches.item(i);
         ev.preventDefault();
         
         if (touch == null) continue;

         let p = graphics.canvasToViewport(touch?.clientX, touch?.clientY);
   
         let distance = 0.4;
   
         scene.bodies.forEach(body => {
            let d = Vector2.fDistance(p.x, p.y, body.position.x, body.position.y);
   
            if (d < distance) {
               distance = d;
               offsetX = p.x - body.position.x;
               offsetY = p.y - body.position.y;
               select(body);

               touchId = touch!.identifier;
               constraint.origin.apply(p.x, p.y);
            }
         });
      }
   });


   canvas.addEventListener("mousemove", (ev) => {
      let p = graphics.canvasToViewport(ev.offsetX, ev.offsetY);

      constraint.origin.apply(p.x, p.y);
   });

   canvas.addEventListener("touchmove", ev => {
      for(let i = 0; i < ev.changedTouches.length; i++){
         let touch = ev.changedTouches.item(i);

         if(touch?.identifier == touchId){
            let p = graphics.canvasToViewport(touch.clientX, touch.clientY);
            
            constraint.origin.apply(p.x, p.y);
         }
      }
   });

   canvas.addEventListener("touchend", ev => {
      select(undefined);
      touchId = -1;
   });
   canvas.addEventListener("touchcancel", ev => {
      select(undefined);
      touchId = -1;
   });

   canvas.addEventListener("mouseup", ev => {
      select(undefined);
   });
   canvas.addEventListener("mouseleave", ev => {
      select(undefined);
   });

}
function setupResizing(canvas: HTMLCanvasElement){
   let sync = () => {
      let v = graphics.viewportSettings;
      
      graphics = new Graphics2D(canvas);
      graphics.setViewportSettings(v);
   };

   window.addEventListener("resize", () => sync());

   sync();
}

function setSolverRate(s: number) {
   substeps = s;
   scene.substeps = s;

   sync();
}
function setGravity(s: number){
   gravityRate = s;
   sync();
}
function setTimeRate(s: number){
   timeRate = s;
   sync();
}

function setupButtons(){
   const clickOn = (id: string, action: () => void) => {
      let element = document.getElementById(id);

      element?.addEventListener("click", action);
   };

   clickOn("scene-pendulum-3", goto3Pendulum);
   clickOn("scene-pendulum-4", goto4Pendulum);
   clickOn("scene-pendulum-10", goto10Pendulum);
   clickOn("scene-rope-soft", gotoSoftRope);
   clickOn("scene-bridge", gotoBridge);
   clickOn("scene-cloth", gotoCloth);
   clickOn("scene-engine-4", gotoEngineScene4Cylinder);
   clickOn("scene-engine-10", gotoEngineScene10Cylinder);
   clickOn("scene-engine-100", gotoEngineScene100Cylinder);
   clickOn("scene-complicated", gotoComplicated);

   clickOn("settings-toggle-overlay", toggleOverlay);

   clickOn("settings-substep-1", () => setSolverRate(1));
   clickOn("settings-substep-10", () => setSolverRate(10));
   clickOn("settings-substep-20", () => setSolverRate(20));
   clickOn("settings-substep-100", () => setSolverRate(100));
   clickOn("settings-substep-1000", () => setSolverRate(1000));
   clickOn("settings-substep-10000", () => setSolverRate(10000));

   clickOn("settings-gravity-1", () => setGravity(1));
   clickOn("settings-gravity-2", () => setGravity(2));
   clickOn("settings-gravity-4", () => setGravity(4));
   clickOn("settings-gravity-8", () => setGravity(8));
}

function toggleOverlay(){
   drawOverlay = !drawOverlay;
}

function gotoEngineScene4Cylinder() { 
   sceneName = "Engine, with 4 cylinders";
   scene =createEngineTest(4);
   graphics.setViewportSettings(new ViewportSettings(-3, -3, 3, 3, ViewportFit.Contain));
   sync();
}
function gotoEngineScene10Cylinder() { 
   sceneName = "Engine, with 10 cylinders";
   scene = createEngineTest(10);
   graphics.setViewportSettings(new ViewportSettings(-8, -3, 8, 3, ViewportFit.Contain));
   sync();
}
function gotoEngineScene100Cylinder() { 
   sceneName = "Engine, with 100 cylinders";
   scene = createEngineTest(100);
   graphics.setViewportSettings(new ViewportSettings(-80, -3, 80, 3, ViewportFit.Contain));

   sync();
}
function goto3Pendulum() { 
   sceneName = "Pendulum, with 2 loose bodies";
   scene = createPendulumTest(3, 2);
   graphics.setViewportSettings(new ViewportSettings(-2, -5, 2, 7, ViewportFit.Contain));

   sync();
}
function gotoDamperTest() { 
   sceneName = "Pendulum, with 2 loose bodies";
   scene = createPendulumTest(2, 2, 0.001, 0.1);
   graphics.setViewportSettings(new ViewportSettings(-2, -5, 2, 7, ViewportFit.Contain));

   sync();
}
function goto4Pendulum() { 
   sceneName = "Pendulum, with 3 loose bodies";
   scene = createPendulumTest(4, 1.5, 0, 0.01);
   graphics.setViewportSettings(new ViewportSettings(-2, -5, 2, 7, ViewportFit.Contain));

   sync();
}
function goto10Pendulum() { 
   sceneName = "Pendulum, with 9 loose bodies";
   scene = createPendulumTest(10, 0.5);
   graphics.setViewportSettings(new ViewportSettings(-2, -3, 2, 7, ViewportFit.Contain));

   sync();
}
function gotoSoftRope() { 
   sceneName = "Soft rope (20 nodes), 100kN/unit of stretching, with damping";
   scene = createPendulumTest(20, 0.25, 0.00001, 0.001);
   graphics.setViewportSettings(new ViewportSettings(-2, -3, 2, 7, ViewportFit.Contain));

   sync();
}
function gotoBridge() { 
   sceneName = "A bridge";
   scene = createBridgeScene(7, 1, 0, 0.1);
   graphics.setViewportSettings(new ViewportSettings(-1, -2, 8, 6, ViewportFit.Contain));

   sync();
}
function gotoCloth() { 
   sceneName = "Cloth";
   scene = createCloth(10, 10, 0.0001, 0.01);
   graphics.setViewportSettings(new ViewportSettings(0, -1, 10, 12, ViewportFit.Contain));

   sync();
}
function gotoComplicated() { 
   sceneName = "Complicated. Recommended to use 'Toggle debug overlay' in the menu.";
   scene = createComplicatedScene();
   graphics.setViewportSettings(new ViewportSettings(-5, -5, 5, 5, ViewportFit.Contain));

   sync();
}
function sync(){
   scene.substeps = substeps;
   scene.timeRate = timeRate;
   scene.gravityRate = gravityRate;

   let infoOverlay = document.getElementById("info-overlay");

   if(!infoOverlay) return;

   let info = "";

   info += sceneName + "<br/>";
   info += `${graphics.width}x${graphics.height}  (x${devicePixelRatio}) <br />`;
   info += (substeps * 60) + "Hz <br />";
   info += (scene.bodies.length) + " bodies<br />";
   info += (scene.constraints.length) + " constraints<br />"; 
   info += (gravityRate) + "x gravity";

   infoOverlay.innerHTML = info;
}

document.addEventListener("DOMContentLoaded", async () => {
   initMenu();

   // Expose functions :)
   (window as any).setGravity = setGravity;
   (window as any).setSolverRate = setSolverRate;
   (window as any).setTimeRate = setTimeRate;
   
   let canvas = document.getElementById("canvas") as HTMLCanvasElement;
   
   graphics = new Graphics2D(canvas);
   graphics.setViewportSettings(new ViewportSettings(-3, -3, 3, 3, ViewportFit.Contain));

   setupResizing(canvas);
   setupMouseControls(canvas);

   setupButtons();

   let lineWidth = 0.06;

   (window as any).lineWidth = lineWidth;

   goto3Pendulum();

   scene.substeps = 1;

   let update = (delta: number) => {
      scene.update(delta);
   };

   let draw = () => {
      graphics.setup();

      let background = "#e0ddd5";
      let foreground = "#352f20";
      
      graphics.setFillColor(background);
      graphics.drawBackground();

      graphics.setLineWidth(lineWidth);
      graphics.setStrokeColor(background);
      graphics.setFillColor(foreground);
      scene.draw(graphics);

      if(drawOverlay){
         scene.drawDebug(graphics, 0.3);
      }
   }

   let previousTime = window.performance.now();
   let tick = () => {
      requestAnimationFrame(tick);

      let currentTime = window.performance.now();

      let delta = (currentTime - previousTime) / 1000;

      if(delta > 1 / 30){
         delta = 1 / 30;
      }

      previousTime = currentTime;

      // In reality you should _never_ use the actual elapsed delta but a fixed delta time
      // but this is fine for a nice and smooth browser experience.
      update (delta);
      draw();
   }

   requestAnimationFrame(tick);
});
