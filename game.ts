namespace advancedBlocks {
    //% blockId=advanced_gameDeltaTimeMillis
    //% block="milliseconds since last frame"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=100
    //% blockGap=8
    export function deltaTimeMillis(): number {
        return game.currentScene().eventContext.deltaTimeMillis;
    }

    //% blockId=advanced_gameMillis
    //% block="milliseconds since reset"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=95
    export function millis(): number {
        return control.millis();
    }

    //% blockId=advanced_gameRegisterFrameHandler
    //% block="register frame handler with priority $priority"
    //% handlerStatement=1
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=90
    export function registerFrameHandler(priority: number, handler: () => void) {
        game.currentScene().eventContext.registerFrameHandler(priority, handler);
    }

    //% blockId=advanced_gamePushScene
    //% block="push game scene"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=80
    //% blockGap=8
    export function pushScene() {
        game.pushScene();
    }

    //% blockId=advanced_gamePopScene
    //% block="pop game scene"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=70
    export function popScene() {
        game.popScene();
    }

    //% blockId=advanced_gameOnScenePush
    //% block="on scene push"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=60
    //% blockGap=8
    export function onScenePush(handler: () => void) {
        game.addScenePushHandler(handler);
    }

    //% blockId=advanced_gameOnScenePop
    //% block="on scene pop"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=50
    export function onScenePop(handler: () => void) {
        game.addScenePopHandler(handler);
    }

    //% blockId=advanced_gameShowSystemPauseMenu
    //% block="show system pause menu"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=40
    //% blockGap=8
    export function showSystemPauseMenu() {
        scene.systemMenu.showSystemMenu();
    }

    //% blockId=advanced_gameCloseSystemPauseMenu
    //% block="close system pause menu"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=35
    //% blockGap=8
    export function closeSystemPauseMenu() {
        return scene.systemMenu.closeMenu();
    }

    //% blockId=advanced_gameIsSystemPauseMenuVisible
    //% block="is system pause menu visible"
    //% blockNamespace=Game
    //% group=Advanced
    //% weight=30
    //% blockGap=8
    export function isSystemPauseMenuVisible(): boolean {
        return scene.systemMenu.isVisible();
    }

    //% blockId=advanced_gameAddSystemPauseMenuEntry
    //% block="add system pause menu entry $name $icon"
    //% icon.shadow=screen_image_picker
    //% blockNamespace=Game
    //% handlerStatement=1
    //% group=Advanced
    //% weight=25
    export function addSystemPauseMenuEntry(name: string, icon: Image, handler: () => void) {
        scene.systemMenu.addEntry(() => name, handler, icon);
    }
}