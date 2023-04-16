import { MathHelper } from "lib/math/MathHelper";
import { Matrix2 } from "lib/math/Matrix2";
import { Vector2 } from "lib/math/Vector2";

export class Rigidbody2D {
    inverseMass: number;
    inverseInertia: number;

    position: Vector2;
    
    velocity: Vector2;
    angularVelocity: number;
    
    private _previousPosition: Vector2;
    private _previousRotation: number;

    private _basisDirty: boolean = false;
    private _basisInverseDirty: boolean = false;
    private _basis: Matrix2;
    private _basisInverse: Matrix2;

    private _rotation: number;

    constructor(){
        this.position = new Vector2();

        this._rotation = 0;
        this._previousPosition = this.position.clone();
        this._previousRotation = this._rotation;

        this.velocity = new Vector2();
        this.angularVelocity = 0;

        this.inverseMass = 1;
        this.inverseInertia = 1;

        this._basis = Matrix2.identity();
        this._basisInverse = Matrix2.identity();
    }

    get mass(){
        return 1 / this.inverseMass;
    }
    set mass(v: number){
        this.inverseMass = 1 / v;
    }
    get inertia() {
        return 1 / this.inverseInertia;
    }
    set inertia(v: number) {
        this.inverseInertia = 1 / v;
    }
    get basis(): Matrix2{
        if(this._basisDirty){
            this.syncBasis();
        }
        return this._basis;
    }
    get inverseBasis(): Matrix2{
        if(this._basisInverseDirty){
            this.syncBasisInverse();
        }
        return this._basisInverse;
    }
    get rotation(){
        return this._rotation;
    }
    set rotation(rotation: number){
        this._rotation = rotation;

        this.markBasisDirty();
    }

    applyMotion(delta: number){
        this.position.x += this.velocity.x * delta;
        this.position.y += this.velocity.y * delta;

        this.rotation += this.angularVelocity * delta;
    }

    recalculateVelocity(delta: number){
        this.velocity.x = Vector2.dx(this._previousPosition, this.position) / delta;
        this.velocity.y = Vector2.dy(this._previousPosition, this.position) / delta;

        this._rotation = MathHelper.normalizeAngle(this._rotation);
        this._previousRotation = MathHelper.normalizeAngle(this._previousRotation);
        
        let angleDiff = MathHelper.shortestAngle(this._previousRotation, this._rotation);

        this.angularVelocity = angleDiff / delta;
        
        this._previousPosition.set(this.position);
        this._previousRotation = this._rotation;
    }

    rotate(angle: number): Rigidbody2D{
        this.rotation += angle;
        return this;
    }
    translate(x: number, y: number): Rigidbody2D{
        this.position.addX(x).addY(y);
        this._previousPosition.addX(x).addY(y);

        return this;
    }
    translateTo(x: number, y: number): Rigidbody2D{
        this.position.apply(x, y);
        this._previousPosition.apply(x, y);

        return this;
    }

    addImmediateForce(fx: number, fy: number, delta: number){
        // F = m * a
        // a = F / m

        let ax = fx * this.inverseMass;
        let ay = fy * this.inverseMass;

        this.velocity.x += ax * delta;
        this.velocity.y += ay * delta;

        this.position.x += ax * delta * delta;
        this.position.y += ay * delta * delta;
    }
    addImmediateImpulse(ix: number, iy: number, delta: number){
        let dx = ix * this.inverseMass;
        let dy = iy * this.inverseMass;
        this.position.x += dx;
        this.position.y += dy;

        this.velocity.x += dx / delta;
        this.velocity.y += dy / delta;
    }
    
    addImmediateImpulseAt(ix: number, iy: number, px: number, py: number, delta: number){
        let dx = ix * this.inverseMass;
        let dy = iy * this.inverseMass;

        this.position.x += dx;
        this.position.y += dy;

        this.velocity.x += dx / delta;
        this.velocity.y += dy / delta;

        let angularImpulse = Vector2.fCross(ix, iy, px - this.position.x, py - this.position.y) * this.inverseInertia;

        // console.log(Math.round(angularImpulse * 10) / 10);

        this.rotation -= angularImpulse;
        this.angularVelocity -= angularImpulse / delta;
    }
    
    addVelocityImpulseAt(ix: number, iy: number, px: number, py: number, delta: number){
        let dx = ix * this.inverseMass;
        let dy = iy * this.inverseMass;

        this.velocity.x += dx / delta;
        this.velocity.y += dy / delta;

        let angularImpulse = Vector2.fCross(ix, iy, px - this.position.x, py - this.position.y) * this.inverseInertia;

        this.angularVelocity -= angularImpulse / delta;
    }

    getPointVelocity(x: number, y: number, output: Vector2): Vector2{
        output.x = this.velocity.x;
        output.y = this.velocity.y;

        let dx = x - this.position.x;
        let dy = y - this.position.y;

        output.x += -dy * this.angularVelocity;
        output.y += dx * this.angularVelocity;

        return output;
    }

    private markBasisDirty(){
        this._basisDirty = true;
        this._basisInverseDirty = true;
    }

    private syncBasis(){
        this._basis.setAsRotation(this.rotation);
        this._basisDirty = false;
    }

    private syncBasisInverse(){
        // this._basisInverse.setAs(this.basis).inverse();
        this._basisInverse.setAsRotation(-this.rotation);
        this._basisInverseDirty = false;
    }
}