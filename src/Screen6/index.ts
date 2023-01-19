import {onDomReady, getRandomInt} from "../utils/utils";
import {getState, GlobalState, selectState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {el, els} from "../utils/dom";

const id = '#screen6'

export function main() {

    const innerRef = el('#screen6')
    const scrollTrigger = getState().scrollTriggers[`screen6Enter`]
    const imageRef = els('#screen6 .imageRef')
    const accordionElements = els('#screen6 .accordion-element')


    for (let i = 0; i < accordionElements.length; i++) {
        accordionElements[i].addEventListener('click', () => handleClick(i))
    }

    selectState((newState: GlobalState) => {
        for (let i = 0; i < accordionElements.length; i++) {
            const accordionElementUl = accordionElements[i].querySelector('.element-ul')
            if (i === getState().activeRowIndex) {
                accordionElements[i].classList.add('active')
                accordionElementUl.classList.remove('item-list')
                accordionElementUl.classList.add('itemlistactive')
            } else {
                accordionElements[i].classList.remove('active')
                accordionElementUl.classList.remove('itemlistactive')
                accordionElementUl.classList.add('item-list')
            }
        }

        gsap.to('.item-list',
            {
                height: 0,
                duration: 0.6,
                ease: 'back.out(1.7)'
            })
        gsap.to('.itemlistactive',
            {
                height: 'auto',
                duration: 0.6,
                ease: 'back.out(1.7)'
            })
    }, 'activeRowIndex')

    selectState((newState: GlobalState) => {
        for (let i = 0; i < imageRef.length; i++) {
            if (i === getState().imageNumber) {
                imageRef[i].classList.add('visible')
            } else {
                imageRef[i].classList.remove('visible')
            }
        }
    }, 'imageNumber')

    const handleClick = (index) => {
        console.log('click')
        updateOneState('imageNumber', getRandomInt(4));
        index === getState().activeRowIndex ? updateOneState('activeRowIndex', undefined) : updateOneState('activeRowIndex', index)
    }

    if (!scrollTrigger) {
        return;
    }

    scrollTrigger.toggleActions = 'play none none reset';
    const tl = gsap.timeline({
        scrollTrigger,
        paused: true,
    })
        .from(imageRef, {
            y: 70,
            duration: 0.8,
            opacity: 0,
            ease: 'power4.out'
        })
        .from('.accordion-item', {
            y: 70,
            duration: 1,
            marginBottom: 50,
            ease: 'power4.out',
            opacity: 0,
        }, '<0.4')
}

onDomReady(main);
