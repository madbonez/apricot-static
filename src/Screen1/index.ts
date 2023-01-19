import {onDomReady} from "../utils/utils";
import {gsap} from "gsap";
import {el} from "../utils/dom";
import {updateOneState} from "../state/state";


const id = '#screen1'
export function main() {

    const word1Ref = document.querySelector("#word1Ref")
    const word2Ref = document.querySelector("#word2Ref")
    const word3Ref = document.querySelector("#word3Ref")
    const buttonArrow = el('#screen1 .buttonArrow')

    let tl = gsap.timeline();
    tl.from(word1Ref, {y: 120, opacity: 0, ease: 'power4.Out', duration: 1, delay: 0.15});
    tl.from(word2Ref, {y: 120, opacity: 0, ease: 'power4.Out', duration: 1}, "<0.15");
    tl.from(word3Ref, {y: 120, opacity: 0, ease: 'power4.Out', duration: 1}, "<0.15");

    buttonArrow.addEventListener('click', () => {
        updateOneState('scrollPage', 'form')
    })

}

onDomReady(main);
