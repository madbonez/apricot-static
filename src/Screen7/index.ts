import {onDomReady} from "../utils/utils";
import {getState, GlobalState, selectState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {el, els} from "../utils/dom";

const id = '#screen7'
export function main() {

    const innerRef = el('#screen7');
    const scrollTrigger = getState().scrollTriggers[`screen7Enter`]
    const block = els('#screen7 .block')

    for(let i=0; i<block.length; i++) {
        block[i].addEventListener('click', ()=>{
            updateOneState('activePopupId' , block[i].dataset.popup )
            updateOneState('activePopupScreen' , '7' )
        })
        block[i].addEventListener('mouseover', ()=>onMouseOverButton(block[i].dataset.popup))
        block[i].addEventListener('mouseleave', ()=>onMouseLeaveButton(block[i].dataset.popup))
    }

    const onMouseOverButton = (id) => {
        const tl = gsap.timeline({})
            .fromTo(`#screen7 .arrow2-${id}`, {
                    x: -20,
                    y: 0,
                    duration: 0.5,
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 0,
                    y: -20,
                    ease: 'power4.Out'
                },)
            .fromTo(`#screen7 .arrow-${id}`, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    visibility: 'hidden',
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 20,
                    visibility: 'visible',
                    y: -20,
                    ease: 'power4.Out'
                }, '<')

        gsap.to(`#screen7 .line-${id}`, {
            background: '#04000A',
            width: '50%',
            height: 1,
            duration: 0.5,
        })
    }
    const onMouseLeaveButton = (id) => {
        const tl = gsap.timeline({})

            .fromTo(`#screen7 .arrow2-${id}`, {
                    x: -20,
                    y: 0,
                    duration: 0.5,
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 0,
                    y: -20,
                    ease: 'power4.Out'
                },)
            .fromTo(`#screen7 .arrow-${id}`, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    visibility: 'hidden',
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 20,
                    visibility: 'visible',
                    y: -20,
                    ease: 'power4.Out'
                }, '<')

        gsap.to(`#screen7 .line-${id}`, {
            background: '#EEF1FA',
            width: '100%',
            duration: 0.5,
        })
    }

        if (!scrollTrigger) {
            return;
        }
        scrollTrigger.toggleActions = 'play none none reset';
        const tl = gsap.timeline({
            scrollTrigger,
            paused: true,
        })
            .from('#screen7 .contentBlockAnimation', {
                y: 208,
                duration: 1,
                opacity: 0,
                ease: 'power4.out',
            },)
            .from('#screen7  .blockAnimation', {
                duration: 1,
                ease: 'power4.out',
                marginBottom: "+=78",
            }, '<0.4')
}

onDomReady(main);
