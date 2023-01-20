import {onDomReady} from "../utils/utils";
import {getState, GlobalState, selectState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";

const id = '#ContentBlock'

export function main() {

    const contentBlockRefs = els('.contentBlockRef')

    for (let i=0; i<contentBlockRefs.length; i++){
        const contentBlock = contentBlockRefs[i]
        const blockTextRef = contentBlock.querySelector('.blockTextRef')

            const scrollTrigger = getState().scrollTriggers[`screen${contentBlock.dataset.block}Enter`]
            gsap.context(() => {
                    scrollTrigger.toggleActions = 'play none none reset';
                    const tl = gsap.timeline({
                        scrollTrigger,
                        paused: true,
                    })
                        .from(blockTextRef, {
                            marginTop: 70,
                            duration: 1,
                            lineHeight: (50 + parseInt(window.getComputedStyle(blockTextRef).lineHeight)) + 'px',
                            ease: 'power4.out',
                            opacity: 0,
                        })
                }, contentBlock
            )

    }

/*    let scrollTriggers = contentBlockRefs.forEach((elem) => {
        return getState().scrollTriggers[`screen${elem.dataset.block}Enter`]
    })
    for (let elem in contentBlockRefs) {
        const index = el('.contentBlock').dataset.block;
    }


    const scrollTriggers = getState().scrollTriggers[`screen${index}Enter`]*/


}

onDomReady(main);
