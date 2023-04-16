import { Vector2 } from "./Vector2";

export class Matrix2 {
    // [xx  yx]
    // [xy  yy]
    xx: number;
    xy: number;
    yx: number;
    yy: number;

    // ============================================================= //
    // Constructor
    // ============================================================= //
    constructor(m00: number, m01: number, m10: number, m11: number) {
        // [m00  m01]
        // [m10  m11]
        this.xx = m00;
        this.xy = m10;

        this.yx = m01;
        this.yy = m11;
    }

    // [m00  m01]
    // [m10  m11]
    get m00() { return this.xx; }
    get m01() { return this.yx; }
    get m10() { return this.xy; }
    get m11() { return this.yy; }
    
    // ============================================================= //
    // Getters
    // ============================================================= //
    get determinant(){
        return Vector2.fCross(this.xx, this.xy, this.yx, this.yy);
    }

    // ============================================================= //
    // Linear transformations
    // ============================================================= //
    transformX(x: number, y: number){ return x * this.xx + y * this.yx; }
    transformY(x: number, y: number){ return x * this.xy + y * this.yy; }
    transform(input: Vector2) {
        return this.transformOut(input, new Vector2());
    }
    transformOut(input: Vector2, output: Vector2){
        let x = this.transformX(input.x, input.y);
        let y = this.transformY(input.x, input.y);

        return output.apply(x, y);
    }

    // ============================================================= //
    // Setting this
    // ============================================================= //
    setX(x: number, y: number){
        this.xx = x;
        this.xy = y;

        return this;
    }
    setY(x: number, y: number){
        this.yx = x;
        this.yy = y;

        return this;
    }
    inverse(){
        let determinant = this.determinant;

        return this.adjugate().scale(1/determinant);
    }
    transpose(){
        let temp = this.xy;
        this.xy = this.yx;
        this.yx = temp;

        return this;
    }
    adjugate(){
        // [a  b]
        // [c  d]
        // 
        // [ d -b]
        // [-c  a]

        let a = this.xx;
        let b = this.yx;
        let c = this.xy;
        let d = this.yy;

        this.xx = d;
        this.xy = -c;
        this.yx = -b;
        this.yy = a;

        return this;
    }
    scale(n: number){
        this.xx *= n;
        this.xy *= n;
        this.yx *= n;
        this.yy *= n;

        return this;
    }
    setAsRotation(angle: number){
        // [c  s]
        // [-s c]

        let s = Math.sin(angle);
        let c = Math.cos(angle);

        this.setX(c, s);
        this.setY(-s, c);

        return this;
    }
    setAsIdentity(){
        this.setX(1, 0);
        this.setY(0, 1);

        return this;
    }
    setAs(other: Matrix2){
        this.xx = other.xx;
        this.xy = other.xy;
        this.yx = other.yx;
        this.yy = other.yy;

        return this;
    }
    
    // ============================================================= //
    // Cloning
    // ============================================================= //
    clone(){
        return new Matrix2(this.m00, this.m01, this.m10, this.m11);
    }
    
    // ============================================================= //
    // Static creations
    // ============================================================= //
    static identity() { return new Matrix2(1, 0, 0, 1); }
    static scaled(x: number, y: number) { return new Matrix2(x, 0, 0, y); }
    static rotation(angle: number) { return new Matrix2(0, 0, 0, 0).setAsRotation(angle); }
}