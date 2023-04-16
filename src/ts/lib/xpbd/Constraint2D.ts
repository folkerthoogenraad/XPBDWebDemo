export abstract class Constraint2D {
    enabled: boolean = true;
    
    abstract init(delta: number): void;
    abstract apply(delta: number): void;
    abstract applyDamping(delta: number): void;
}