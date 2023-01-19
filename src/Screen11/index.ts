import {onDomReady} from "../utils/utils";
import {getState} from '../state/state';
import {gsap} from "gsap";
import {el} from "../utils/dom";

const id = '#screen11'

export function main() {

    const innerRef= el('#screen11')
    const scrollTrigger = getState().scrollTriggers[`screen11Enter`]
    const titleFormRef = el('#screen11 .titleFormRef')

        if (!scrollTrigger) {
            return;
        }
        gsap.context(() => {
                scrollTrigger.toggleActions = 'play none none reset';
                const tl = gsap.timeline({
                    scrollTrigger,
                    paused: true,
                })
                    .from(`.title-form`, {
                        marginTop: 70,
                        duration: 1,
                        lineHeight: (50 + parseInt(window.getComputedStyle(titleFormRef).lineHeight)) + 'px',
                        ease: 'power4.out',
                        opacity: 0,
                    })
            }, innerRef
        )
}

onDomReady(main);
