import {onDomReady} from "../utils/utils";
import {getState, GlobalState, selectState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";

export function main() {

    let buttonArrows = els('.buttonArrowRef')

    for (let i = 0; i < buttonArrows.length; i++) {

        const circle = buttonArrows[i].querySelector('.circle')
        const arrow = buttonArrows[i].querySelector('.arrow')

        const onMouseOverButton = () => {
            gsap.to(circle, {
                scale: 14,
                duration: 0.6,
                ease: 'power4.Out'
            })
            gsap.to(arrow, {
                duration: 0.6,
                x: 38,
                y: -46,
                ease: 'power4.Out'
            });
        }

        const onMouseLeaveButton = () => {
            gsap.to(circle, {
                scale: 1,
                duration: 0.6,
                ease: 'power4.Out'
            })
            gsap.fromTo(arrow, {
                duration: 0.6,
                x: -38,
                y: 46,
                ease: 'power4.Out'
            }, {
                duration: 0.6,
                x: 0,
                y: 0,
                ease: 'power4.Out'
            })
        }

        const onClickHandler = () => {
            console.log('asdasd')

            gsap.to(circle, {
                scale: 12,
                duration: 0.6,
                ease: 'power4.Out'
            })
            gsap.to(arrow, {
                duration: 0.6,
                x: 38,
                y: -46,
                ease: 'power4.Out'
            });
            gsap.to(circle, {
                delay: 1,
                scale: 1,
                duration: 0.6,
                ease: 'power4.Out'
            })
            gsap.fromTo(arrow, {
                delay: 1,
                duration: 0.6,
                x: -38,
                y: 46,
                ease: 'power4.Out'
            }, {
                duration: 0.6,
                x: 0,
                y: 0,
                ease: 'power4.Out'
            })
        }

        buttonArrows[i].addEventListener('mouseleave', (e) => onMouseLeaveButton())
        buttonArrows[i].addEventListener('click', (e) => onClickHandler(), {capture: false,})
        buttonArrows[i].addEventListener('mouseenter', (e) => onMouseOverButton())
    }


}

onDomReady(main);
