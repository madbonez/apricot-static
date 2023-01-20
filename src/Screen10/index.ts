import {onDomReady, isTouchDevice} from "../utils/utils";
import {getState, GlobalState, selectState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";
import {Draggable} from "gsap/dist/Draggable";

const id = '#screen10'

export function main() {

    const innerRef = el('#screen10')
    const scrollTrigger = getState().scrollTriggers[`screen10Enter`]
    const stepBlock = els('#screen10 .stepBlock')
    const stepContainer = el('#screen10 .stepContainer')
    let activeStep = 0

    const xStart = stepContainer.getBoundingClientRect().x

    const changeActiveStep = () => {
        console.log('slede10 to small')
        updateOneState('cursorState', 'toSmall')
        if (activeStep <= Math.floor((xStart + 20 - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width)) {
            activeStep = Math.floor((xStart + 20 - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width)
        }
        if (activeStep > Math.floor((xStart - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width)) {
            activeStep = Math.floor((xStart - stepContainer.getBoundingClientRect().x) / stepBlock[0].getBoundingClientRect().width) + 1
        }
        if ((xStart - stepContainer.getBoundingClientRect().x) < 1) {
            activeStep = 0
        }
        changeAtiveClass()
    }

    const changeAtiveClass = () => {
        for (let i = 0; i < stepBlock.length; i++) {
            stepBlock[activeStep].querySelector('.circle').classList.add('active')
            if (i !== activeStep) {
                stepBlock[i].querySelector('.circle').classList.remove('active')
            }
        }
    }

    gsap.registerPlugin(Draggable);
    Draggable.create(stepContainer, {
        type: "x",
        duration: 0.4,
        ease: 'power4.out',
        lockAxis: true,
        bounds: {
            minX: -stepBlock[0].getBoundingClientRect().width * (stepBlock.length - 1),
            maxX: 0
        },
        onDrag: changeActiveStep,
    });

    if (!scrollTrigger) {
        return;
    }

    if (window.innerWidth > 900 && !isTouchDevice()) {
        innerRef.addEventListener('mouseenter', (e) => handleCursorFolowMove(e), false);
        innerRef.addEventListener('mouseleave', (e) => handleCursorFolowLeave(e), false);
    }

    const handleCursorFolowMove = (e) => {
        console.log('slede10 enter')
        updateOneState('cursorState', 'enter')
    }
    const handleCursorFolowLeave = (e) => {
        console.log('leave')
        updateOneState('cursorState', 'leave')
    }

    gsap.context(() => {
            scrollTrigger.toggleActions = 'play none none reset';
            const tl = gsap.timeline({
                scrollTrigger,
                paused: true,
            })
                .from(stepContainer, {
                    xPercent: 100,
                    ease: 'back.out(1.7)',
                    duration: 0.8,
                })
        },
        innerRef
    )
}

onDomReady(main);
