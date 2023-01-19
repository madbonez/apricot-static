import {onDomReady} from "../utils/utils";
import {getState, GlobalState, selectState} from '../state/state';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {el} from "../utils/dom";

const id = '#screen5'

export function main() {
    gsap.registerPlugin(ScrollTrigger);
    const scrollTrigger = getState().scrollTriggers[`screen5Horizontal`]
    const sliderRef = el("#screen5 #sliderRef");
    const innerRef = el('#screen5')

    if (!scrollTrigger) {
        return;
    }

    const offset = sliderRef.offsetHeight - innerRef.offsetHeight + 150;
    scrollTrigger.scrub = true;
    gsap.context(() => {
        const timeline = gsap.timeline({
            paused: true,
            scrollTrigger,
        }).to(sliderRef, {
            y: `-=${offset}px`,
        })
    }, innerRef)


}

onDomReady(main);
