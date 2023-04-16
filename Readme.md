# XPBD Constraint solver physics
A readable implementation of **E**xtended **P**osition **B**ased **D**ynamics (or XPBD) for rigid body simulations. The implementation is largly based on this [excellent paper](https://matthias-research.github.io/pages/publications/PBDBodies.pdf) by [Muller et al.](https://matthias-research.github.io/pages/index.html).

This implementation is focussed on the basics of the constraints solving and the impulse/velocity calculations. The implementation is 2D and can be 'played' in your webbrowser [here](google.com). There is no collision detection and/or resolution in this example. However, this would be rather easy to implement given the existing impulse methods. This is by no means a complete implementation with all features and should not be used as a library in whatever software you are building. However, it can serve as a good starting point or a reference implementation.

The implementation was created as a proof of concept for [Ange's Engine simulator](https://www.youtube.com/watch?v=RKT-sKtR970). There is **no affiliation** between him and this demo.

## Introduction
Position based dynamics is a way to do physics simulation where you derive the velocities from particles, and in this case rigid bodies, from the previous frame. Impulses and velocity changes are applied immediatly instead of collected together and doing one global solve. This makes creating and implementing constraints trivial and comes with the great benefit of unconditional stability*, even with infinitly stiff springs. The convergence rate is slower then traditional methods, but the processing and implementation cost is lower. Even within this browser implementation (which is not that optimized) it is possible to simulate over 600k ticks per second, depending on the size of the scene ofcourse.

With the introduction of the extended position based dynamics this method is also physically accurate. 

*The system cannot "explode" but can still jitter or behave strangly if the constraints cannot be met.

## Basic simulation loop
The basic simulation loop is as follows (and is implemented in `ts/app/SolverScene.ts`):
1. **Move the bodies**. , unconstraint, given their current velocity.
2. **Add external forces**. Things like gravity (this can also be done before step 1, order isn't too important, but be careful not to apply twice)
3. **Initialize all the constraints**. The constraints need to be 'reset' for this update frame.
4. **Update all the constraints**. This step can be repeated as many times as you like.
5. **Derive the bodies velocities**. This step _can_ be skipped in this implementation because in our case we keep track of the change in velocity along the way.
6. **Apply damping**. You can now dampen the velocities to reduce the energy in the system. This step is optional, and in this implementation is is only used in the distance constraint (`ts/lib/xpbd/DistanceConstraint2D`).

## XPBD Formulation

## Implementation overview
The implementation is made as simple as possible. There are few _slight_ optimizations but most of it is straight forward and made for readability.

### Files overview
The folder structure looks a little like this:
 - `ts/lib/xpbd` contains all the simulation code and the constraint functions. This is the most important folder if you want to learn about xpbd.
 - `ts/app/*` contains all the code relating to the app, like the setup of test scenes, menu and some graphics.
 - `ts/lib/math` contains some basic math code. The exact implementation might not be important to XPBD
 - `ts/lib/graphics` contains some basic graphics code to make drawing easier. It is not important for the XPBD
 - `/docs` is a build version of this code, just so it can be easily hosted with github pages. :)

All other folders can be mostly ignored.

For the actual implementation there are only two important folders `ts/app` and `ts/lib/xpbd`. The `ts/app` folder contains all the simulation information for the demo app, while the `ts/lib/xpbd` folder contains all the simulation code and constraints.

The most important files are:
 - `/ts/app/SolverScene.ts`. This file implements the actual position based dynamics solver loop. _It probably should have been moved to the `/ts/lib/xpbd` folder, but whatever_.
 - `/ts/lib/xpbd/RigidBody2D.ts`. This file contains all the rigid body simulation information. It contains comments and has functions to apply forces and impulses. It is the core for this simulation.
 - `/ts/lib/xpbd/DistanceConstraint2D.ts`. This file is the distance constraint, which is the most used and most important constraint in this implementation. It is the only one that implements damping as well and contains the main xpbd constraint evaluation loop. All other constraints are derived from this one.

## Installing
To install, you need:
 - `npm 16.x.x`
 - `node 8.x.x`

Other versions might works as well, it has not been tested (and can be a pain with the SCSS processor).

To install, use:
```bash
npm install
```

To run a local dev server use:
```bash
npm run dev
```

To build a final version:
```bash
npm run build
```

## Notes
 - In this demo the mouse can be used to interact with the scene. This works by applying a `PinConstraint2D` to the mouse position. However, this has a side effect with tick rates greater than browser frame rate. If there are for example 20 substeps, it means that even with a smooth mouse (or touch) motion, you still get only one change ni position per 20 simulation frames, meaning the motion is very jerky. This gets worse the higher your framerate goes. In an ideal situation we would interpolate the mouse position between the frames to ensure a smooth motion but for now this is not implemented.
 - In the browser, you can open the console and use `setSolverRate(x)`, `setGravity(x)` and even `setTimeRate(x)` to change the properties of the scene to anything you like.
 - The app can behave strangly with rescaling on mobile devices. I don't like it either. Refresh the page and it works again :)
 - Oh no I cannot click on one of the bodies. This is probably because the body is bigger than the "click" collider. Use the "toggle visiblity" of the debug visuals in the menu to see the actual circle you can click.
 - When dragging with the mouse it can seem like there is a lot of flexion in the system. There is not. This is because the mouse pin is rather strong to violate other constraints. You are creating a sort of local minimum for the constraints, which is under very high tension, especially considering that many constraints have _infinite_ stiffness