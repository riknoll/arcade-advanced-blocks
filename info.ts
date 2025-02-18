namespace advancedBlocks {
    //% blockId=advanced_infoSetLifeImage
    //% block="set life image $image"
    //% image.shadow=screen_image_picker
    //% blockNamespace=info
    //% group=Advanced
    //% weight=100
    export function setLifeImage(image: Image): void {
        info.setLifeImage(image);
    }

    //% blockId=advanced_infoShowLife
    //% block="set life visible $on"
    //% on.shadow=toggleOnOff
    //% blockNamespace=info
    //% group=Advanced
    //% weight=90
    //% blockGap=8
    export function showLife(on: boolean): void {
        info.showLife(on);
    }

    //% blockId=advanced_infoShowScore
    //% block="set score visible $on"
    //% on.shadow=toggleOnOff
    //% blockNamespace=info
    //% group=Advanced
    //% weight=80
    //% blockGap=8
    export function showScore(on: boolean): void {
        info.showScore(on);
    }

    //% blockId=advanced_infoShowCountdown
    //% block="set countdown visible $on"
    //% on.shadow=toggleOnOff
    //% blockNamespace=info
    //% group=Advanced
    //% weight=70
    export function showCountdown(on: boolean): void {
        info.showCountdown(on);
    }

    //% blockId=advanced_infoSetBorderColor
    //% block="set HUD border color $color"
    //% color.shadow=colorindexpicker
    //% blockNamespace=info
    //% group=Advanced
    //% weight=60
    //% blockGap=8
    export function setBorderColor(color: number): void {
        info.setBorderColor(color);
    }

    //% blockId=advanced_infoBorderColor
    //% block="HUD border color"
    //% blockNamespace=info
    //% group=Advanced
    //% weight=55
    export function borderColor(): number {
        return info.borderColor();
    }

    //% blockId=advanced_infoSetBackgroundColor
    //% block="set HUD background color $color"
    //% color.shadow=colorindexpicker
    //% blockNamespace=info
    //% group=Advanced
    //% weight=50
    //% blockGap=8
    export function setBackgroundColor(color: number): void {
        info.setBackgroundColor(color);
    }

    //% blockId=advanced_infoBackgroundColor
    //% block="HUD background color"
    //% blockNamespace=info
    //% group=Advanced
    //% weight=45
    export function backgroundColor(): number {
        return info.backgroundColor();
    }

    //% blockId=advanced_infoSetFontColor
    //% block="set HUD text color $color"
    //% color.shadow=colorindexpicker
    //% blockNamespace=info
    //% group=Advanced
    //% weight=40
    //% blockGap=8
    export function setFontColor(color: number): void {
        info.setFontColor(color);
    }

    //% blockId=advanced_infoFontColor
    //% block="HUD text color"
    //% blockNamespace=info
    //% group=Advanced
    //% weight=35
    export function fontColor(): number {
        return info.fontColor();
    }
}