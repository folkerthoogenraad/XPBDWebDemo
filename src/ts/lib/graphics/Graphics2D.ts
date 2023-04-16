import { DocumentSettings, DocumentUnits } from "lib/settings/DocumentSettings";
import { ViewportFit, ViewportSettings } from "lib/settings/ViewportSettings";

function generateDocumentSettingsFromCanvas(canvas: UseableCanvas){
    let width = canvas.width;
    let height = canvas.height;

    if (canvas instanceof HTMLCanvasElement){
        width = canvas.offsetWidth * window.devicePixelRatio;
        height = canvas.offsetHeight * window.devicePixelRatio;
    }

    return new DocumentSettings(width, height, DocumentSettings.DefaultDPI * window.devicePixelRatio, DocumentUnits.px);
}
function generateViewportSettingsFromCanvas(canvas: UseableCanvas){
    return new ViewportSettings(0, 0, canvas.width, canvas.height, ViewportFit.Contain);
}

type UseableCanvas = HTMLCanvasElement|OffscreenCanvas;
type UseableContext = CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D;
type UseableImage = HTMLVideoElement | HTMLImageElement | HTMLCanvasElement | ImageBitmap | OffscreenCanvas;

export class Graphics2D {
    readonly canvas: UseableCanvas;
    readonly context: UseableContext;

    private readonly _documentSettings: DocumentSettings;
    private _viewportSettings: ViewportSettings;

    constructor(canvas: HTMLCanvasElement|OffscreenCanvas, documentSettings?: DocumentSettings, viewportSettings?: ViewportSettings){
        this.canvas = canvas;
        let context = this.canvas.getContext("2d");

        if(context === null){
            throw new Error("Failed to initialize context");
        }

        this.context = context as CanvasRenderingContext2D;

        this._documentSettings = documentSettings ?? generateDocumentSettingsFromCanvas(canvas);
        this._viewportSettings = viewportSettings ?? generateViewportSettingsFromCanvas(canvas);

        this.canvas.width = this.documentSettings.widthInPixels;
        this.canvas.height = this.documentSettings.heightInPixels;

        this.context.lineCap = "round";
        this.context.miterLimit = 0.1;

        this.setup();
    }

    // ======================================================= //
    // Setup
    // ======================================================= //
    setup(){
        this.context.resetTransform();
        
        this.context.clearRect(0, 0, this.width, this.height);

        let aspectRatio = this._viewportSettings.aspectRatio;

        let minSize = Math.min(this.width / aspectRatio, this.height);
        let maxSize = Math.max(this.width / aspectRatio, this.height);
        
        this.context.translate(this.width / 2, this.height / 2);
        
        if(this._viewportSettings.fit === ViewportFit.Fill){
            this.context.scale(this.width / 2, this.height / 2);
        }

        if(this._viewportSettings.fit === ViewportFit.Contain){
            this.context.scale(minSize / 2, minSize / 2);
        }
        
        if(this._viewportSettings.fit === ViewportFit.Cover){
            this.context.scale(maxSize / 2, maxSize / 2);
        }
        
        // Viewport shouldn't have a width and height, but just one type of unit (height?) that scales this automatically based on factors... (landscape/portrait?)
        // Then we can also eliminate one of the viewport fit categories right? Because we either match height or width
        this.context.scale(1 / (this._viewportSettings.width / 2), 1 / (this._viewportSettings.height / 2));
        
        
        if(this._viewportSettings.fit !== ViewportFit.Fill){
            this.context.scale(aspectRatio, 1);
        }

        this.context.translate(-this._viewportSettings.centerX, -this._viewportSettings.centerY);
        
    }


    // ======================================================= //
    // Settings
    // ======================================================= //
    setFillColor(color: string){
        this.context.fillStyle = color;
    }
    setFillPattern(pattern: CanvasPattern){
        this.context.fillStyle = pattern;
    }
    setStrokeColor(color: string){
        this.context.strokeStyle = color;
    }
    setLineWidthInPoints(width: number){
        this.context.lineWidth = this.pointSize * width;
    }
    setLineWidth(width: number){
        this.context.lineWidth = width;
    }

    // Returns the size of a pixel in viewport units
    get pixelSize(){
        let t = this.context.getTransform();
        
        let sr = Math.sqrt(t.a * t.a + t.b * t.b);
        let st = Math.sqrt(t.c * t.c + t.d * t.d);

        return 1 / ((sr + st) / 2);
    }
    // Returns the size of a point in viewport units
    get pointSize(){
        return this.pixelSize * this._documentSettings.pixelsPerPoint;
    }
    
    // ======================================================= //
    // Helpers
    // ======================================================= //
    // TODO this should be wrappnig the pattern in some way to still receive the image....
    createPattern(image: UseableImage): CanvasPattern|null{
        return this.context.createPattern(image, "repeat");
    }
    transformPattern(image: UseableImage, pattern: CanvasPattern, widthInPoints: number, heightInPoints: number, angle: number){
        let s = Math.sin(angle);
        let c = Math.cos(angle);

        let w = 1 / image.width * this.pointSize * widthInPoints;
        let h = 1 / image.height * this.pointSize * heightInPoints;

        let matrix = [
            c * w, s * w, 0,
            -s * h, c * w, 0,
        ];

        // [a c e]
        // [b d f]
        // [0 0 1]

        pattern.setTransform(new DOMMatrix([
            matrix[0], matrix[3], 
            matrix[1], matrix[4],
            matrix[2], matrix[5]
        ]));
    }

    // ======================================================= //
    // Translations
    // ======================================================= //
    push(){
        this.context.save();
    }
    pop(){
        this.context.restore();
    }
    scale(x: number, y: number){
        this.context.scale(x, y);
    }
    rotate(angle: number){
        this.context.rotate(angle);
    }
    rotateDeg(angle: number){
        this.context.rotate(angle / 180 * Math.PI);
    }
    translate(x: number, y: number){
        this.context.translate(x, y);
    }

    // ======================================================= //
    // Drawing
    // ======================================================= //
    drawRectangle(x: number, y: number, width: number, height: number, fill: boolean){
        this.context.beginPath();

        this.context.moveTo(x, y);
        this.context.lineTo(x + width, y);
        this.context.lineTo(x + width, y + height);
        this.context.lineTo(x, y + height);
        
        this.context.closePath();

        if(fill){
            this.context.fill();
        }
        else{
            this.context.stroke();
        }
    }
    drawCircle(x: number, y: number, radius: number, fill: boolean){
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, false);
        
        if(fill){
            this.context.fill();
        }
        else{
            this.context.stroke();
        }
    }
    drawLine(x: number, y: number, x2: number, y2: number){
        this.context.beginPath();

        this.context.moveTo(x, y);
        this.context.lineTo(x2, y2);

        this.context.stroke();
    }

    drawPath(path: Path2D, fill: boolean): Path2D;
    drawPath(createPath: (path: Path2D) => void, fill: boolean): Path2D;
    drawPath(pathOrCreatePath: Path2D|((path: Path2D) => void), fill: boolean): Path2D{
        if(typeof(pathOrCreatePath) === "object"){
            let path = pathOrCreatePath as Path2D;

            if(fill) this.context.fill(path);
            else this.context.stroke(path);

            return path;
        }
        else{
            let path = new Path2D();

            pathOrCreatePath(path);

            if(fill) this.context.fill(path);
            else this.context.stroke(path);

            return path;
        }
    }

    drawPaths(paths: Path2D[], fill: boolean){
        paths.forEach(path => this.drawPath(path, fill));
    }

    drawImage(image: UseableImage, x: number, y: number): void;
    drawImage(image: UseableImage, x: number, y: number, w: number, h: number): void;
    drawImage(image: UseableImage, x: number, y: number, w?: number, h?: number): void{
        this.context.drawImage(image, x, y, w ?? image.width, h ?? image.height);
    }

    drawBackground(){
        let f = this.canvasToViewport(0, 0);
        let t = this.canvasToViewport(this.width, this.height);

        this.drawRectangle(f.x, f.y, t.x - f.x, t.y - f.y, true);
    }

    // ======================================================= //
    // Clipping
    // ======================================================= //
    clipRectangle(x: number, y: number, w: number, h: number): Path2D {
        return this.clip((path) => {
            path.rect(x, y, w, h);
            path.closePath();
        });
    }
    clip(path: Path2D): Path2D;
    clip(createPath: (path: Path2D) => void): Path2D;
    clip(pathOrCreatePath: Path2D|((path: Path2D) => void)): Path2D{
        if(typeof(pathOrCreatePath) === "object"){
            let path = pathOrCreatePath as Path2D;

            this.context.clip(path);

            return path;
        }
        else{
            let path = new Path2D();

            pathOrCreatePath(path);

            this.context.clip(path);

            return path;
        }
    }

    // ======================================================= //
    // Settings and conversions
    // ======================================================= //
    setViewportSettings(settings: ViewportSettings){
        this._viewportSettings = settings;
        this.setup();
    }
    canvasToViewport(x: number, y: number): {x: number, y: number} {
        if(this.canvas instanceof HTMLCanvasElement){
            x /= this.canvas.offsetWidth;
            y /= this.canvas.offsetHeight;
            x *= this.canvas.width;
            y *= this.canvas.height;
        }

        let transform = this.context.getTransform();

        transform.invertSelf();
   
        return transform.transformPoint({x, y});
    }

    // ======================================================= //
    // Getters
    // ======================================================= //
    get width(){
        return this.canvas.width;
    }
    get height(){
        return this.canvas.height;
    }
    get viewportSettings(){
        return this._viewportSettings;
    }
    get documentSettings(){
        return this._documentSettings;
    }
}