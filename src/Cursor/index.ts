import {onDomReady, isTouchDevice} from "../utils/utils";
import {getState, GlobalState, selectState} from '../state/state';
import {gsap} from "gsap";
import {el} from "../utils/dom";

export function main() {

    const innerRef = el('#cursor')
    let timelineCursor

    selectState((newState: GlobalState) =>  {

        if (window.innerWidth > 900 && !isTouchDevice()) {
            if (!timelineCursor) {
                timelineCursor = gsap.timeline({paused: true})
                    .to(innerRef, {
                        opacity: 1,
                    })
                    .to(innerRef, {
                        width: 70,
                        height: 70,
                        delay: 0.3,
                        duration: 0.3,
                        ease: 'power4.out',
                    })
                    .fromTo('#cursor .cursorArrow', {
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            delay: 0.3,
                            duration: 0.3,
                            ease: 'power4.out',
                        }, '<')
                    .to(innerRef, {
                        width: 140,
                        height: 140,
                        duration: 0.3,
                        ease: 'power4.out',
                    })
                    .to('#cursor .cursorText', {
                        display: 'block',
                        duration: 0.1,
                        opacity: 0,
                        y: +70,
                    }, '<')
                    .fromTo('#cursor .cursorText', {
                            y: +70,
                        },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.3,
                            ease: 'power4.out',
                        }, '<0.1')
                    .to('#cursor .cursorText', {
                        duration: 3,
                    })
                    .addLabel('smallCursor')
                    .fromTo('#cursor .cursorText', {
                            y: 0,
                            opacity: 1,
                        },
                        {
                            y: -70,
                            opacity: 0,
                            duration: 0.7,
                            ease: 'power4.out',
                        },)
                    .to('#cursor .cursorText', {
                        display: 'none',
                        duration: 0.1,
                    })
                    .to(innerRef, {
                        width: 70,
                        height: 70,
                        duration: 0.8,
                        ease: 'power4.out',
                    }, '<')
            }


            if (getState().cursorState === 'enter') {
                innerRef.style.display = 'flex'
                timelineCursor.play();
            }
            if (getState().cursorState  === 'toSmall') {
                innerRef.style.display = 'flex'
                timelineCursor.seek(timelineCursor.nextLabel()).resume();
            }
            if (getState().cursorState  === 'leave') {
                innerRef.style.display = 'none'
                timelineCursor.pause().progress(0);
            }
        }

    }, 'cursorState')

}

onDomReady(main);
