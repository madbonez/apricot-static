import * as $fU9C9$pixijs from "pixi.js";
import {gsap as $fU9C9$gsap} from "gsap";
import {PixiPlugin as $fU9C9$PixiPlugin} from "gsap/dist/PixiPlugin";




function $2e6f12cfe07f95cc$export$30ab75b34c35ad58(graphics, pixiApp) {
    graphics.position.x = pixiApp.screen.width / 2;
    graphics.position.y = pixiApp.screen.height / 2;
    graphics.pivot.x = pixiApp.screen.width / 2;
    graphics.pivot.y = pixiApp.screen.height / 2;
}
function $2e6f12cfe07f95cc$export$8daab6f91f7ff730(circleProps, graphicCircle, gradient) {
    graphicCircle.clear();
    graphicCircle.beginTextureFill({
        texture: gradient
    });
    graphicCircle.drawCircle(circleProps.centerX, circleProps.centerY, circleProps.radius);
    graphicCircle.endFill();
}
function $2e6f12cfe07f95cc$export$248d38f6296296c5(object1, object2) {
    const props1 = Object.getOwnPropertyNames(object1);
    const props2 = Object.getOwnPropertyNames(object2);
    if (props1.length !== props2.length) return false;
    for(let i = 0; i < props1.length; i += 1){
        const prop = props1[i];
        if (object1[prop] !== object2[prop]) return false;
    }
    return true;
}



const $75acb1b27998d891$export$d9a5c63e84da538e = (centerXInit, centerYInit, circleProps, circleRadius, boundsRadius, catchRadius, SIZE, graphicsText, textContainer)=>{
    let lastState = "outside";
    let textTl = (0, $fU9C9$gsap).timeline({
        ease: "none"
    });
    let centerX = centerXInit;
    let centerY = centerYInit;
    let outsideAnimation = false;
    let insideAnimation = false;
    return (newSate, pointerX, pointerY, deltaX, deltaY, width, height)=>{
        if (lastState !== "inside" && newSate === "inside" && !outsideAnimation && !insideAnimation) {
            insideAnimation = true;
            let newCenterX = (boundsRadius - circleRadius) * (pointerX - SIZE / 2) / boundsRadius + SIZE / 2;
            let newCenterY = (boundsRadius - circleRadius) * (pointerY - SIZE / 2) / boundsRadius + SIZE / 2;
            centerX = newCenterX;
            centerY = newCenterY;
            (0, $fU9C9$gsap).to(circleProps, {
                centerX: centerX,
                centerY: centerY,
                duration: 0.3
            });
            (0, $fU9C9$gsap).to(textContainer, {
                x: centerX - width / 2,
                y: centerY - height / 2,
                duration: 0.3,
                onComplete: ()=>{
                    insideAnimation = false;
                }
            });
            textTl.fromTo(graphicsText, {
                delay: 0.1,
                duration: 0.3,
                alpha: 1
            }, {
                delay: 0.1,
                duration: 0.3,
                alpha: 0,
                y: "0"
            }).fromTo(graphicsText, {
                alpha: 0,
                duration: 0.3,
                y: "140"
            }, {
                alpha: 1,
                duration: 0.3,
                y: "70"
            });
        }
        if (lastState === "inside" && newSate === "inside" && !outsideAnimation && !insideAnimation) {
            let newCenterX1 = (boundsRadius - circleRadius) * (pointerX - SIZE / 2) / boundsRadius + SIZE / 2;
            let newCenterY1 = (boundsRadius - circleRadius) * (pointerY - SIZE / 2) / boundsRadius + SIZE / 2;
            let inDuration = centerX - newCenterX1 > 5 || centerY - newCenterY1 > 5 ? 0.1 : 0;
            centerX = newCenterX1;
            centerY = newCenterY1;
            (0, $fU9C9$gsap).to(circleProps, {
                centerX: centerX,
                centerY: centerY,
                duration: inDuration
            });
            (0, $fU9C9$gsap).to(textContainer, {
                x: centerX - width / 2,
                y: centerY - height / 2,
                duration: inDuration
            });
        }
        if (lastState !== "outside" && newSate === "outside" && !outsideAnimation && !insideAnimation) {
            outsideAnimation = true;
            centerX = centerXInit;
            centerY = centerYInit;
            (0, $fU9C9$gsap).to(circleProps, {
                centerX: centerX,
                centerY: centerY,
                ease: "back.out(1.7)",
                duration: 0.5
            });
            (0, $fU9C9$gsap).to(textContainer, {
                x: centerX - width / 2,
                y: centerY - height / 2,
                ease: "back.out(1.7)",
                duration: 0.5,
                onComplete: ()=>{
                    outsideAnimation = false;
                }
            });
        }
        lastState = newSate;
    };
};



const $625b00338270f8e9$export$ae03f9e41a1c5d66 = (centerXInit, centerYInit, circleProps, textProps, circleRadius, boundsRadius, catchRadius, SIZE, graphicsText)=>{
    return (font)=>{
        (0, $fU9C9$gsap).timeline().to(circleProps, {
            radius: circleRadius * 0.7,
            duration: 0.3,
            ease: "back.out(1.7)"
        }).to(textProps, {
            fontSize: font.size * 0.7,
            duration: 0.3,
            ease: "back.out(1.7)"
        }, "<").to(circleProps, {
            delay: 3,
            radius: circleRadius,
            duration: 0.8
        }).to(textProps, {
            fontSize: font.size,
            duration: 0.8
        }, "<");
    };
};


class $7edd130c3195427b$export$949fe8a0f138bb7e {
    constructor(rootElement, text, debugMode, color, textColor, heightGradient, font, size, radius){
        this.rootElement = rootElement;
        this.text = text;
        this.debugMode = debugMode;
        this.color = color;
        this.textColor = textColor;
        this.heightGradient = heightGradient;
        this.font = font;
        this.size = size;
        this.radius = radius;
        this.lastCircleProps = {};
        this.lastTextProps = {};
        this.init();
    }
    setText(text) {
        this.text = text;
        this.graphicsText.text = this.text;
    }
    init() {
        (0, $fU9C9$PixiPlugin).registerPIXI($fU9C9$pixijs);
        (0, $fU9C9$gsap).registerPlugin((0, $fU9C9$PixiPlugin));
        const RADIUS = this.radius;
        const BOUNDS_RADIUS = this.size * 18 / 40;
        const CATCH_RADIUS = this.size * 19 / 40;
        const SIZE = this.size;
        const app = new $fU9C9$pixijs.Application({
            antialias: true,
            width: SIZE,
            height: SIZE,
            backgroundColor: 0x000000,
            backgroundAlpha: this.debugMode ? 1 : 0
        });
        this.rootElement.style.cursor = "pointer";
        this.rootElement.appendChild(app.view);
        const container = new $fU9C9$pixijs.Container();
        container.interactive = true;
        container.interactiveChildren = true;
        container.hitArea = new $fU9C9$pixijs.Rectangle(0, 0, SIZE, SIZE);
        // сегмент круга. эффект жвачки
        const graphicCurve = new $fU9C9$pixijs.Graphics();
        graphicCurve.interactive = true;
        graphicCurve.cursor = "pointer";
        // анимированный круг
        const graphicCircle = new $fU9C9$pixijs.Graphics();
        graphicCircle.interactive = true;
        graphicCircle.cursor = "pointer";
        // внутри начинает притягиваться к курсору
        const graphicsHiddenCatchCircle = new $fU9C9$pixijs.Graphics();
        graphicsHiddenCatchCircle.interactive = true;
        graphicsHiddenCatchCircle.cursor = "pointer";
        // внутри двигаем круг вместе с курсором
        const graphicsHiddenBoundsCircle = new $fU9C9$pixijs.Graphics();
        graphicsHiddenBoundsCircle.interactive = true;
        graphicsHiddenBoundsCircle.cursor = "pointer";
        const textProps = new $fU9C9$pixijs.TextStyle({
            fontFamily: this.font.fontFamily,
            fontSize: this.font.size,
            lineHeight: this.font.lineHeight,
            fill: this.textColor
        });
        this.graphicsText = new $fU9C9$pixijs.Text(this.text, textProps);
        this.graphicsText.pivot = {
            x: 0,
            y: 70
        };
        this.graphicsText.y = 70;
        this.graphicsText.alpha = 1;
        const textContainer = new $fU9C9$pixijs.Container();
        textContainer.cursor = "pointer";
        textContainer.position = {
            x: SIZE / 2 - this.graphicsText.width / 2,
            y: SIZE / 2 - this.graphicsText.height / 2
        };
        textContainer.addChild(this.graphicsText);
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = SIZE;
        const ctx = canvas.getContext("2d");
        const grd = ctx.createLinearGradient(0, 0, 0, SIZE);
        function createGradTexture(color1, color2, size, heightGradient) {
            const lineY = heightGradient / canvas.height;
            grd.addColorStop(0, "#ff9300");
            grd.addColorStop(lineY, "#ff9300");
            grd.addColorStop(lineY, "#FFFFFF");
            grd.addColorStop(1, "#FFFFFF");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, size, size);
            return $fU9C9$pixijs.Texture.from(canvas);
        }
        const gradient = createGradTexture(this.color, this.textColor, SIZE, this.heightGradient);
        container.addChild(graphicCircle);
        container.addChild(graphicsHiddenCatchCircle);
        container.addChild(graphicsHiddenBoundsCircle);
        container.addChild(textContainer);
        (0, $2e6f12cfe07f95cc$export$30ab75b34c35ad58)(graphicCircle, app);
        (0, $2e6f12cfe07f95cc$export$30ab75b34c35ad58)(graphicsHiddenCatchCircle, app);
        (0, $2e6f12cfe07f95cc$export$30ab75b34c35ad58)(graphicsHiddenBoundsCircle, app);
        const centerXInit = app.screen.width / 2, centerYInit = app.screen.height / 2;
        const offsetX = ()=>app.view.getBoundingClientRect().x, offsetY = ()=>app.view.getBoundingClientRect().y;
        graphicsHiddenCatchCircle.beginFill(0, this.debugMode ? 0.101 : 0.001);
        graphicsHiddenCatchCircle.drawCircle(centerXInit, centerYInit, CATCH_RADIUS);
        graphicsHiddenCatchCircle.endFill();
        graphicsHiddenBoundsCircle.beginFill(0, this.debugMode ? 0.101 : 0.001);
        graphicsHiddenBoundsCircle.drawCircle(centerXInit, centerYInit, BOUNDS_RADIUS);
        graphicsHiddenBoundsCircle.endFill();
        app.stage.addChild(container);
        const circleProps = {
            centerX: centerXInit,
            centerY: centerYInit,
            radius: RADIUS
        };
        (0, $2e6f12cfe07f95cc$export$8daab6f91f7ff730)(circleProps, graphicCircle, gradient);
        const stateListenerHandler = (0, $75acb1b27998d891$export$d9a5c63e84da538e)(centerXInit, centerYInit, circleProps, RADIUS, BOUNDS_RADIUS, CATCH_RADIUS, SIZE, this.graphicsText, textContainer);
        const clickCircleHandler = (0, $625b00338270f8e9$export$ae03f9e41a1c5d66)(centerXInit, centerYInit, circleProps, textProps, RADIUS, BOUNDS_RADIUS, CATCH_RADIUS, SIZE, this.graphicsText);
        container.on("mousemove", (e)=>{
            let pointerX = e.x - offsetX(), pointerY = e.y - offsetY();
            const pointerInsideMagnitudeBounds = graphicsHiddenCatchCircle.containsPoint({
                x: pointerX,
                y: pointerY
            });
            const pointerInsideCircleBounds = graphicsHiddenBoundsCircle.containsPoint({
                x: pointerX,
                y: pointerY
            });
            let nextState;
            if (pointerInsideMagnitudeBounds) nextState = "entered";
            if (pointerInsideCircleBounds) nextState = "inside";
            if (!pointerInsideMagnitudeBounds && !pointerInsideCircleBounds) nextState = "outside";
            if (nextState) stateListenerHandler(nextState, pointerX, pointerY, e.movement.x, e.movement.y, this.graphicsText.width, this.graphicsText.height);
        });
        container.on("click", (e)=>{
            let pointerX = e.x - offsetX(), pointerY = e.y - offsetY();
            const pointerInsideCircleBounds = graphicsHiddenBoundsCircle.containsPoint({
                x: pointerX,
                y: pointerY
            });
            if (pointerInsideCircleBounds) clickCircleHandler(this.font);
        });
        container.on("mouseleave", (e)=>{
            stateListenerHandler("outside", centerXInit, centerYInit, e.movement.x, e.movement.y, this.graphicsText.width, this.graphicsText.height);
        });
        // main animation loop
        app.ticker.add(()=>{
            if (!(0, $2e6f12cfe07f95cc$export$248d38f6296296c5)(circleProps, this.lastCircleProps)) {
                (0, $2e6f12cfe07f95cc$export$8daab6f91f7ff730)(circleProps, graphicCircle, gradient);
                this.lastCircleProps = Object.assign({}, circleProps);
            }
            if (!(0, $2e6f12cfe07f95cc$export$248d38f6296296c5)(textProps, this.lastTextProps)) {
                textContainer.position = {
                    x: circleProps.centerX - this.graphicsText.width / 2,
                    y: circleProps.centerY - this.graphicsText.height / 2
                };
                this.lastTextProps = Object.assign({}, textProps);
            }
        });
    }
}




export {$7edd130c3195427b$export$949fe8a0f138bb7e as LqButton};
