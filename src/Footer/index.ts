import {onDomReady} from "../utils/utils";
import {selectState, updateOneState, getState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";

const id = '#footer'
export function main() {

    const orangeText = el('#footer .orangeText')
    const socialAnimation = els('#footer .socialAnimation')
    const infoLinks = el('#footer .infoLinksInnerDiv')
    const buttonBack = el('#footer .buttonBack')

    orangeText.addEventListener('mouseover', (e) => onMouseOverOrangeText(e))
    orangeText.addEventListener('mouseleave', (e) => onMouseLeaveOrangeText(e))

    for (let i=0; i<socialAnimation.length; i++){
        socialAnimation[i].addEventListener('mouseover', (e) => onMouseOverSocial(socialAnimation[i].dataset.index))
        socialAnimation[i].addEventListener('mouseleave', (e) => onMouseLeaveSocial(socialAnimation[i].dataset.index))
    }

    infoLinks.addEventListener('mouseover', () => onMouseOverLinks())
    infoLinks.addEventListener('mouseleave', () => onMouseLeaveLinks())

    buttonBack.addEventListener('mouseover', () => onMouseOverTop())
    buttonBack.addEventListener('mouseleave', () => onMouseLeaveTop())
    buttonBack.addEventListener('click', () =>  updateOneState('scrollPage', 'top'))

    const onMouseOverOrangeText = (e) => {
        gsap.timeline()
            .to(e.target, {
                    color: getComputedStyle(window.document.body).getPropertyValue('--orange'),
                    duration: 0.8,
                    ease: 'power4.out',
                },
            )
    }

    const onMouseLeaveOrangeText = (e) => {
        gsap.timeline()
            .to(e.target, {
                    color: getComputedStyle(window.document.body).getPropertyValue('--white'),
                    duration: 0.8,
                    ease: 'power4.out',
                },
            )
    }

    const onMouseOverSocial = (id) => {
        gsap.timeline()
            .to(`.socialAnimation${id} svg`, {
                    color: getComputedStyle(window.document.body).getPropertyValue('--orange'),
                    duration: 0.4,
                    ease: 'power4.out',
                },
            )
    }
    const onMouseLeaveSocial = (id) => {
        gsap.timeline()
            .to(`.socialAnimation${id} svg`, {
                    color: getComputedStyle(window.document.body).getPropertyValue('--white'),
                    duration: 0.4,
                    ease: 'power4.out',
                },
            )
    }

    const onMouseOverTop = () => {

        gsap.timeline()
            .to('.arrow', {
                y: -30,
                duration: 0.6,
                ease: 'power4.out',
            })
            .to('.textToTop', {
                    color: getComputedStyle(window.document.body).getPropertyValue('--orange'),
                    duration: 0.6,
                    ease: 'power4.out',
                },
                '<'
            )
            .to('.arrowAnimation', {
                y: -30,
                duration: 0.6,
                ease: 'power4.out',
            }, '<')
    }
    const onMouseLeaveTop = () => {
        gsap.timeline()
            .to('.arrow', {
                y: 0,
                duration: 0.6,
                ease: 'power4.out',
            })
            .to('.textToTop', {
                    color: getComputedStyle(window.document.body).getPropertyValue('--white'),
                    duration: 0.6,
                    ease: 'power4.out',
                },
                '<'
            )
            .to('.arrowAnimation', {
                y: 0,
                duration: 0.6,
                ease: 'power4.out',
            }, '<')

    }

    const onMouseOverLinks = () => {

        gsap.timeline()
            .to('.infoLink', {
                y: -25,
                duration: 0.6,
                ease: 'power4.out',
                color: getComputedStyle(window.document.body).getPropertyValue('--orange'),
            })
            .to('.actionInfoLinks', {
                y: -20,
                duration: 0.6,
                ease: 'power4.out',
            }, '<')
    }
    const onMouseLeaveLinks = () => {
        gsap.timeline()
            .to('.infoLink', {
                y: 0,
                duration: 0.6,
                ease: 'power4.out',
                color: getComputedStyle(window.document.body).getPropertyValue('--white'),
            })
            .to('.actionInfoLinks', {
                y: 0,
                duration: 0.6,
                ease: 'power4.out',
            }, '<')
    }

}

onDomReady(main);
