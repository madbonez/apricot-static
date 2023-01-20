import {onDomReady} from "../utils/utils";
import {getState, GlobalState, selectState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";

export function main() {

    const buttonGreyRef = els('.buttonGreyRef');

    const onMouseOverGreyButton = () => {
        const tl = gsap.timeline({})
            .to('.buttonGreyAnimation', {
                duration: 0.5,
                ease: 'power4.out',
                left: 0,
                width: 228,
                height: 228,
            })
            .to('.buttonGrey', {
                duration: 0.5,
                color: getComputedStyle(window.document.body).getPropertyValue('--white')
            }, '<');

    };

    const onMouseLeaveGreyButton = () => {
        const tl = gsap.timeline({})
            .to('.buttonGreyAnimation', {
                left: '100%',
                duration: 0.5,
                ease: 'power4.out',
            })
            .to('.buttonGrey', {
                duration: 0.5,
                color: getComputedStyle(window.document.body).getPropertyValue('--black')
            }, '<');
    };

    const popup9 = els('#screen9 .projectBlock').length
    const popup7 = els('#screen7 .blockAnimation').length
    const calcPreviousePopup = (id) => {
        id = id - 1;
        if (id < popup7) {
            id = popup7 + popup9 - 1
        }
        return id
    }

    buttonGreyRef.forEach((item)=>item.addEventListener('click', (e) => updateOneState('activePopupId', calcPreviousePopup(getState().activePopupId))));
    buttonGreyRef.forEach((item)=>item.addEventListener('mouseover', () => onMouseOverGreyButton()));
    buttonGreyRef.forEach((item)=>item.addEventListener('mouseleave', () => onMouseLeaveGreyButton()));
}

onDomReady(main);
