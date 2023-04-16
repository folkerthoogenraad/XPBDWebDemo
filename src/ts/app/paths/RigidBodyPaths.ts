export class RigidBodyPaths {
    lineWidth: number = 1;

    createConnection(length: number): Path2D{
        let path = new Path2D();

        let w = this.lineWidth / 2;

        path.moveTo(0, -w);
        path.lineTo(length, -w);
        path.lineTo(length, w);
        path.lineTo(0, w);
        path.lineTo(0, -w);
        path.closePath();

        return path;
    }

    createBody(radius: number){
        let path = new Path2D();

        let holeRadius = this.lineWidth;

        // Regular shape
        path.moveTo(0, radius);
        path.arc(0, 0, radius, 0, Math.PI * 2);
        path.closePath();

        // Hole
        path.moveTo(radius / 2 + holeRadius, 0);
        path.arc(radius / 2,  0, holeRadius, 0, Math.PI * 2, true);
        path.closePath();

        return path;
    }
}