// This class should probably be immutable but isn't for performance reasons...
export class Vector2 {
    x: number;
    y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    add(other: Vector2) {
        this.x += other.x;
        this.y += other.y;

        return this;
    }
    addX(x: number) {this.x += x; return this; }
    addY(y: number) {this.y += y; return this; }

    sub(other: Vector2) {
        this.x -= other.x;
        this.y -= other.y;

        return this;
    }
    subX(x: number) {this.x -= x; return this; }
    subY(y: number) {this.y -= y; return this; }
    
    mul(other: Vector2) {
        this.x *= other.x;
        this.y *= other.y;

        return this;
    }
    mulX(x: number) {this.x *= x; return this; }
    mulY(y: number) {this.y *= y; return this; }

    div(other: Vector2) {
        this.x /= other.x;
        this.y /= other.y;

        return this;
    }
    divX(x: number) {this.x /= x; return this; }
    divY(y: number) {this.y /= y; return this; }

    scale(scaler: number) {
        this.x *= scaler;
        this.y *= scaler;

        return this;
    }
    set(other: Vector2) {
        this.x = other.x;
        this.y = other.y;

        return this;
    }
    setZero() {
        this.x = 0;
        this.y = 0;

        return this;
    }
    apply(x: number, y: number) {
        this.x = x;
        this.y = y;

        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;

        return this;
    }

    normalize() {
        let length = this.length;

        if (length > 0) {
            this.x /= length;
            this.y /= length;
        }

        return this;
    }

    perpendicularize(){
        let t = this.y;

        this.y = this.x;
        this.x = -t;
        
        return this;
    }

    get normalized() {
        return this.clone().normalize();
    }

    get sqrLength() {
        return Vector2.dot(this, this);
    }

    get length() {
        return Math.sqrt(this.sqrLength);
    }

    get angle() {
        return Vector2.fAngle(this.y, this.x);
    }

    distanceTo(other: Vector2) {
        return Vector2.distance(this, other);
    }
    directionTo(other: Vector2) {
        return Vector2.direction(this, other);
    }

    static direction(a: Vector2, b: Vector2) {
        return this.directionOut(a, b, new Vector2());
    }
    static directionOut(a: Vector2, b: Vector2, out: Vector2) {
        let dx = Vector2.dx(a, b);
        let dy = Vector2.dy(a, b);

        out.x = dx;
        out.y = dy;

        return out;
    }
    static tangent(a: Vector2, b: Vector2) {
        return Vector2.tangentOut(a, b, new Vector2());
    }
    static tangentOut(a: Vector2, b: Vector2, out: Vector2) {
        return Vector2.directionOut(a, b, out);
    }
    static normal(a: Vector2, b: Vector2) {
        return Vector2.normalOut(a, b, new Vector2());
    }
    static normalOut(a: Vector2, b: Vector2, out: Vector2) {
        return Vector2.directionOut(a, b, out).perpendicularize();
    }
    static distance(a: Vector2, b: Vector2) {
        return Vector2.fDistance(a.x, a.y, b.x, b.y);
    }

    lerpTo(other: Vector2, f: number) {
        return Vector2.lerpOut(this, other, this, f);
    }

    static lerp(a: Vector2, b: Vector2, f: number) {
        return this.lerpOut(a, b, new Vector2(), f);
    }

    static lerpOut(a: Vector2, b: Vector2, out: Vector2, f: number) {
        out.x = a.x + (b.x - a.x) * f;
        out.y = a.y + (b.y - a.y) * f;

        return out;
    }

    static dot(a: Vector2, b: Vector2) {
        return this.fDot(a.x, a.y, b.x, b.y);
    }

    static cross(a: Vector2, b: Vector2) {
        return this.fCross(a.x, a.y, b.x, b.y);
    }

    static angled(angle: number) {
        return new Vector2(Math.cos(angle), Math.sin(angle));
    }
    

    // ============================================================== //
    // Helper functions to work without the Vector2 class
    // ============================================================== //
    static dx(a: Vector2, b: Vector2) {
        return b.x - a.x;
    }
    static dy(a: Vector2, b: Vector2) {
        return b.y - a.y;
    }
    static fDot(ax: number, ay: number, bx: number, by: number){
        return ax * bx + ay * by;
    }
    static fDistance(ax: number, ay: number, bx: number, by: number){
        let dx = ax - bx;
        let dy = ay - by;

        return this.fLength(dx, dy);
    }
    static fCross(ax: number, ay: number, bx: number, by: number){
        return ax * by - ay * bx;
    }
    static fSquareLength(x: number, y: number){
        return this.fDot(x, y, x, y);
    }
    static fAngle(x: number, y: number){
        return Math.atan2(y, x);
    }
    static fLength(x: number, y: number){
        return Math.sqrt(this.fSquareLength(x, y));
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    toString(){
        return `(${this.x},${this.y})`;
    }
    toShortString(){
        return `(${Math.round(this.x * 100) / 100},${Math.round(this.y * 100) / 100})`;
    }

    static readonly zero: Vector2 = new Vector2(0, 0);
    static readonly one: Vector2 = new Vector2(1, 1);
    static readonly unitX: Vector2 = new Vector2(1, 0);
    static readonly unitY: Vector2 = new Vector2(0, 1);
}