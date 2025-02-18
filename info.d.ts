declare namespace info {
    //% blockId=advanced_infoSetLifeImage
    //% block="set life image $image"
    //% image.shadow=screen_image_picker
    //% group=Advanced
    //% weight=100
    function setLifeImage(image: Image): void;

    //% blockId=advanced_infoShowLife
    //% block="set life visible $on"
    //% group=Advanced
    //% weight=90
    //% blockGap=8
    function showLife(on: boolean) : void;

    //% blockId=advanced_infoShowScore
    //% block="set score visible $on"
    //% group=Advanced
    //% weight=80
    //% blockGap=8
    function showScore(on: boolean): void;

    //% blockId=advanced_infoShowCountdown
    //% block="set countdown visible $on"
    //% group=Advanced
    //% weight=70
    function showCountdown(on: boolean): void;

    //% blockId=advanced_infoSetBorderColor
    //% block="set HUD border color $color"
    //% color.shadow=colorindexpicker
    //% group=Advanced
    //% weight=60
    //% blockGap=8
    function setBorderColor(color: number): void;

    //% blockId=advanced_infoBorderColor
    //% block="HUD border color"
    //% group=Advanced
    //% weight=55
    function borderColor(): number;

    //% blockId=advanced_infoSetBackgroundColor
    //% block="set HUD background color $color"
    //% color.shadow=colorindexpicker
    //% group=Advanced
    //% weight=50
    //% blockGap=8
    function setBackgroundColor(color: number): void;

    //% blockId=advanced_infoBackgroundColor
    //% block="HUD background color"
    //% group=Advanced
    //% weight=45
    function backgroundColor(): number;

    //% blockId=advanced_infoSetFontColor
    //% block="set HUD text color $color"
    //% color.shadow=colorindexpicker
    //% group=Advanced
    //% weight=40
    //% blockGap=8
    function setFontColor(color: number): void;

    //% blockId=advanced_infoFontColor
    //% block="HUD text color"
    //% group=Advanced
    //% weight=40
    function fontColor(): number
}