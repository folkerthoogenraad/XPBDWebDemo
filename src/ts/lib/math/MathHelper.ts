export class MathHelper {
    static avarage(...values: number[]){
        let sum = 0;

        for(let i = 0; i < values.length; i++){
            sum += values[i];
        }

        return sum / values.length;
    }
    static weightedAvarage(weights: number[], values: number[]){
        if(weights.length != values.length) throw new Error("weights and avlues don't match length");

        let sum = 0;
        let weightSum = 0;

        for(let i = 0; i < values.length; i++){
            weightSum += weights[i];
            sum += values[i] * weights[i];
        }

        return sum / weightSum;
    }
    static min(...values: number[]){
        let min = values[0];

        for(let i = 1; i < values.length; i++){
            if(values[i] < min) values[i] = min;
        }

        return min;
    }
    static max(...values: number[]){
        let max = values[0];

        for(let i = 1; i < values.length; i++){
            if(values[i] > max) values[i] = max;
        }

        return max;
    }
    static remap(min: number, max: number, newMin: number, newMax: number, v: number): number{
        let f = this.inverseLerp(min, max, v);

        return this.lerp(newMin, newMax, f);
    }
    static lerp(a: number, b: number, f: number): number{
        return a + (b - a) * f;
    }
    static inverseLerp(a: number, b: number, v: number): number{
        return (v - a) / (b - a);
    }
    static clamp(v: number, min: number, max: number): number{
        if(v < min) return min;
        if(v > max) return max;

        return v;
    }
    static clip(v: number): number{
        return this.clamp(v, 0, 1);
    }
    static normalizeAngle(angle: number){
        angle %= Math.PI * 2;

        if(angle < 0){
            angle += Math.PI * 2;
        }

        return angle;
    }
    static shortestAngle(from: number, to: number){
        let diff = (to - from + Math.PI) % (Math.PI * 2) - Math.PI;
        return diff < -Math.PI ? diff + Math.PI * 2 : diff;
    
    }
}
