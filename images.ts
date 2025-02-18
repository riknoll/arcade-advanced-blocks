interface Image {
    //% blockId=advanced_imageScroll
    //% block="scroll $this by dx $dx dy $dy"
    //% this.shadow=variables_get
    //% this.defl=picture
    //% blockNamespace=images
    //% inlineInputMode=inline
    //% group=Advanced
    //% blockNamespace="images"
    //% weight=100
    scroll(dx: int32, dy: int32): void;

    //% blockId=advanced_imageDrawCircle
    //% block="draw circle in $this at cx $cx cy $cy radius $r $c"
    //% blockNamespace=images
    //% this.shadow=variables_get
    //% this.defl=picture
    //% r.defl=5
    //% c.shadow=colorindexpicker
    //% inlineInputMode=inline
    //% group=Advanced
    //% weight=90
    drawCircle(cx: number, cy: number, r: number, c: color): void;

    //% blockId=advanced_imageFillCircle
    //% block="fill circle in $this at cx $cx cy $cy radius $r $c"
    //% this.shadow=variables_get
    //% this.defl=picture
    //% r.defl=5
    //% c.shadow=colorindexpicker
    //% blockNamespace="images"
    //% inlineInputMode=inline
    //% group=Advanced
    //% weight=80
    fillCircle(cx: number, cy: number, r: number, c: color): void;

    //% blockId=advanced_imageFillTriangle
    //% block="fill triangle in $this with points x0 $x0 y0 $y0 x1 $x1 y1 $y1 x2 $x2 y2 $y2 $col"
    //% this.shadow=variables_get
    //% this.defl=picture
    //% col.shadow=colorindexpicker
    //% blockNamespace=images
    //% inlineInputMode=inline
    //% group=Advanced
    //% weight=70
    fillTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, col: number): void;

    //% blockId=advanced_imageDrawTriangle
    //% block="draw triangle in $this with points x0 $x0 y0 $y0 x1 $x1 y1 $y1 x2 $x2 y2 $y2 $col"
    //% this.shadow=variables_get
    //% this.defl=picture
    //% col.shadow=colorindexpicker
    //% blockNamespace=images
    //% inlineInputMode=inline
    //% group=Advanced
    //% weight=65
    //% helper=drawTriangle
    drawTriangle(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, col: number): void;

    //% blockId=advanced_imageFillPolygon4
    //% block="fill polygon4 in $this with points x0 $x0 y0 $y0 x1 $x1 y1 $y1 x2 $x2 y2 $y2 x3 $x3 y3 $y3 $col"
    //% this.shadow=variables_get
    //% this.defl=picture
    //% col.shadow=colorindexpicker
    //% blockNamespace=images
    //% inlineInputMode=inline
    //% group=Advanced
    //% blockNamespace="images"
    //% weight=60
    fillPolygon4(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, col: number): void;

    //% blockId=advanced_imageDrawPolygon4
    //% block="draw polygon4 in $this with points x0 $x0 y0 $y0 x1 $x1 y1 $y1 x2 $x2 y2 $y2 x3 $x3 y3 $y3 $col"
    //% this.shadow=variables_get
    //% this.defl=picture
    //% col.shadow=colorindexpicker
    //% blockNamespace=images
    //% inlineInputMode=inline
    //% group=Advanced
    //% blockNamespace="images"
    //% weight=55
    //% helper=drawPolygon4
    drawPolygon4(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, col: number): void;
}

namespace imageHelpers {
    export function drawTriangle(picture: Image, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, col: number) {
        picture.drawLine(x0, y0, x1, y1, col);
        picture.drawLine(x1, y1, x2, y2, col);
        picture.drawLine(x2, y2, x0, y0, col);
    }

    export function drawPolygon4(picture: Image, x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, col: number) {
        picture.drawLine(x0, y0, x1, y1, col);
        picture.drawLine(x1, y1, x2, y2, col);
        picture.drawLine(x2, y2, x3, y3, col);
        picture.drawLine(x3, y3, x0, y0, col);
    }
}