export enum ViewportFit {
    Fill,
    Contain,
    Cover,
}

export class ViewportSettings{
    readonly minX: number;
    readonly minY: number;

    readonly maxX: number;
    readonly maxY: number;

    readonly fit: ViewportFit;

    constructor(minX: number, minY: number, maxX: number, maxY: number, fit: ViewportFit){
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;

        this.fit = fit;
    }

    get x () {return this.minX;}
    get y () {return this.minY;}
    get centerX () {return this.x + this.width / 2;}
    get centerY () {return this.y + this.height / 2;}

    get width() {return this.maxX - this.minX;}
    get height() {return this.maxY - this.minY;}

    get aspectRatio() {return this.width / this.height;}
}