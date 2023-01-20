import {onDomReady} from "../utils/utils";
import {getState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {el} from "../utils/dom";
import {LqButton} from "../public/scripts/lq-button";

const id = '#submit-button'

export function main() {
    const innerRef = el('#submit-button')
    const screen11Ref = el('#screen11')
    const buttonRef = el('#submit-button #buttonRef')
    const lqButtonRef = el('#submit-button #lqButtonRef')

    buttonRef.addEventListener('click', ()=>{updateOneState('buttonClick', getState().buttonClick +1)})

    const color1 = getComputedStyle(window.document.body).getPropertyValue('--orange').replace('#', '0x').trim();
    let FontFaceObserver = require('fontfaceobserver');
    let font = new FontFaceObserver('Inter-SemiBold');

    font.load(null, 30000).then(() => {
        let heightGradient = screen11Ref.getBoundingClientRect().bottom - lqButtonRef.getBoundingClientRect().top
        let size, radius, font
        if (window.innerWidth > 1400) {
            size = 500;
            radius = 120;
            font = {size: 36, lineHeight: 44, fontFamily: 'Inter-SemiBold'};
        } else {
            if (window.innerWidth > 1000) {
                size = 420;
                radius = 120;
                font = {size: 36, lineHeight: 44, fontFamily: 'Inter-SemiBold'};
            } else {
                size = 350;
                radius = 100;
                font = {size: 28, lineHeight: 36, fontFamily: 'Inter-SemiBold'};
            }
        }

        if (window.innerWidth <= 640) {
            heightGradient = 0;
        }

        let lqButton = new LqButton(
            lqButtonRef,
            innerRef.dataset.text,
            false,
            color1,
            '0xffffff',
            heightGradient,
            font,
            size,
            radius,
        );
    });
}

onDomReady(main);
