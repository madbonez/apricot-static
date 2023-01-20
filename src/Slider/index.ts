import {onDomReady, isTouchDevice} from "../utils/utils";
import {getState, GlobalState, selectState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {Draggable} from "gsap/dist/Draggable";
import {el, els} from "../utils/dom";


export function main() {


    const sliders = els('.slider')
    for (let ii: number = 0; ii < sliders.length; ii++) {
        const slider = sliders[ii];
        const slides = slider.querySelectorAll('.circleImage')
        const scrollerRef = slider.querySelector('.scrollerRef')
        const sliderRef = slider.querySelector('.sliderRef')
        let circleWidth = 0
        let overlap = 60
        let timeline
        let enterTimeline
        let breakpoints = []
        let indicatorActive = 5;
        let endDragTween
        let scrollTrigger = getState().scrollTriggers[`screen${slider.dataset.block}Horizontal`]
        let enterScrollTrigger = getState().scrollTriggers[`screen${slider.dataset.block}Enter`]
        const indicators = slider.querySelectorAll('.indicators')

        const targetToString = (arr1, arr2) => {
            const result = arr1.map((item) => {
                    return `#screen${slider.dataset.block} .circle-image-${item}`
                }).join(', ')
                + (arr2.length > 0 ? `, ${arr2.map((item) => {
                    return `#screen${slider.dataset.block} .circle-text-${item}`
                }).join(' , ')}` : '')
            return result
        }



        gsap.registerPlugin(ScrollTrigger, Draggable);

        gsap.context(() => {
            let allCircles: any = gsap.utils.toArray(slider.querySelectorAll(".circle"));
            circleWidth = allCircles[0].offsetHeight;
            overlap = circleWidth * 0.1 > 60 ? 60 : circleWidth * 0.1;
            let accumulator = 0;
            allCircles.forEach((circle: any, index) => {
                let offset = index === 0 ? 0 : overlap;
                gsap.set(circle, {
                    x: circleWidth * index - offset * index,
                })
                accumulator += circleWidth - offset;
            })
            sliderRef.style.width = `${accumulator}px`;


        }, scrollerRef);

        // if (!scrollTrigger || !enterScrollTrigger) {
        //     return;
        // }

        if ((window.innerWidth > 900 && !isTouchDevice())) {
            sliderRef.addEventListener('mouseenter', (e) => handleCursorFolowEnter(e), false);
            sliderRef.addEventListener('mouseleave', (e) => handleCursorFolowLeave(e), false);
        }



        const handleCursorFolowEnter = (e) => {
            updateOneState('cursorState', 'enter')
        }
        const handleCursorFolowLeave = (e) => {
            updateOneState('cursorState', 'leave')
        }

        const indicatorChange = (id) => {
            gsap.context(() => {
                if (id !== indicatorActive) {
                    gsap.fromTo(slider.querySelector(`.indicator-${id}`),
                        {
                            x: -12,
                            y: 24,
                            opacity: 0,
                            ease: 'back.out(1.7)',
                            duration: 0.5,

                        },
                        {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            ease: 'back.out(1.7)',
                            duration: 0.5,

                        })

                    gsap.to(slider.querySelector(`.indicator-${indicatorActive}`), {
                        x: 12,
                        y: -24,
                        opacity: 0,
                        ease: 'back.out(1.7)',
                        duration: 0.5,
                    })
                    indicatorActive = id
                }
            }, scrollerRef);
        }
        indicatorChange(0)
        onScrollTriggersReady()
        function onScrollTriggersReady() {

            const handlerIndicatorMouseEnter = (id) => {
                if (window.innerWidth > 900 && !isTouchDevice() && id !== indicatorActive) {
                    gsap.context(() => {
                        gsap.fromTo(slider.querySelector(`.indicator-${id}`),
                            {
                                x: -12,
                                y: 24,
                                opacity: 0,
                                ease: 'back.out(1.7)',
                                delay: 0.5,
                            },
                            {
                                x: 0,
                                y: 0,
                                opacity: 1,
                                ease: 'back.out(1.7)',
                                delay: 0.5,
                            })
                    }, scrollerRef)
                }
            }
            const handlerIndicatorMouseLeave = (id) => {
                if (window.innerWidth > 900 && !isTouchDevice() && id !== indicatorActive) {
                    gsap.context(() => {
                        gsap.to(slider.querySelector(`.indicator-${id}`), {
                            x: 12,
                            y: -24,
                            opacity: 0,
                            ease: 'back.out(1.7)',
                            delay: 0.5,
                        })
                    }, scrollerRef)
                }
            }
            const handlerIndicatorClick = (id) => {
                const mapperX = gsap.utils.mapRange(0, (circleWidth - overlap) * (slides.length * 2 - 1), 0, 1)

                gsap.to(timeline, {
                        progress: mapperX(2 * id * (circleWidth - overlap)),
                        ease: 'power4.out',
                        onComplete: () => {
                            (window.innerWidth > 900 && !isTouchDevice()) ? scrollTrigger.scroll(breakpoints[id]) : ''
                            indicatorUpdate()
                        }
                    }
                )
            }
            const indicatorUpdate = () => {
                const mapperX = gsap.utils.mapRange(0, (circleWidth - overlap) * (2 * slides.length - 1), 0, 1)
                const breakpointsNorm = breakpoints.map((item) => Math.round(mapperX(item - scrollTrigger.start) * 1000))
                if (breakpointsNorm.findIndex((item) => item > Math.round(timeline.progress() * 1000)) > 0) {
                    indicatorChange(breakpointsNorm.findIndex((item) => item > Math.round(timeline.progress() * 1000)) - 1)
                } else {
                    indicatorChange(breakpointsNorm.length - 2)
                }
            }

            function calcBreakpoints( slides, circleWidth, overlap) {
                if (breakpoints.length || !scrollTrigger) {
                    return;
                }

                breakpoints.push(scrollTrigger.start);
                let acc = scrollTrigger.start;
                for (let i = 0; i < slides.length - 1; i++) {
                    acc += (circleWidth - overlap) * 2
                    breakpoints.push(acc);
                }
                breakpoints.push((circleWidth - overlap) * (2 * slides.length - 1) + scrollTrigger.start)
            }

            for (let y=0; y<indicators.length; y++){
                indicators[y].addEventListener( 'mouseenter' , () => handlerIndicatorMouseEnter(y))
                indicators[y].addEventListener( 'mouseleave' , () => handlerIndicatorMouseLeave(y))
                indicators[y].addEventListener( 'click' , () => handlerIndicatorClick(y))
            }

             calcBreakpoints(slides,circleWidth, overlap);
            scrollTrigger.scrub = true;

            const allTargets = slides.length > 3 ? targetToString([0, 1, 2, 3], [0, 1, 2, 3]) : targetToString([0, 1, 2], [0, 1, 2])
            const targetsStep1 = slides.length > 3 ? targetToString([0, 1, 2, 3], [1, 2, 3]) : targetToString([0, 1, 2], [1, 2])
            const targetsStep2 = slides.length > 3 ? targetToString([1, 2, 3], [2, 3]) : targetToString([1, 2], [2])
            const targetsStep3 = slides.length > 3 ? targetToString([2, 3], [3]) : targetToString([2], [])
            const targetsStep4 = slides.length > 3 ? targetToString([3], []) : ''

            timeline = (window.innerWidth > 900 && !isTouchDevice()) ? gsap.timeline({
                paused: true,
                scrollTrigger,
                ease: 'none',

            }) : gsap.timeline({
                paused: true,
                ease: 'none',
            })

            timeline
                .to(targetsStep1, {
                    x: `-=${circleWidth - overlap}px`,
                    ease: 'none',
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                })
                .addLabel('overlap1', '<')
                .to(slider.querySelectorAll('.imageAnimation'), {
                    attr: {
                        x: "+=10%",
                        ease: 'none',
                    },
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                }, '<')
                .to(allTargets, {
                    x: `-=${circleWidth - overlap}px`,
                    ease: 'none',
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                })
                .addLabel('shift1', '<')
                .to(slider.querySelectorAll('.imageAnimation'), {
                    attr: {
                        x: "+=10%",
                        ease: 'none',
                    },
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                }, '<')
                .to(targetsStep2, {
                    x: `-=${circleWidth - overlap}px`,
                    ease: 'none',

                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,

                })
                .addLabel('overlap2', '<')
                .to(slider.querySelectorAll('.imageAnimation'), {
                    attr: {
                        x: "+=10%",
                        ease: 'none',
                    },
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                }, '<')
                .to(allTargets, {
                    x: `-=${circleWidth - overlap}px`,
                    ease: 'none',
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                })
                .addLabel('shift2', '<')
                .to(slider.querySelectorAll('.imageAnimation'), {
                    attr: {
                        x: "+=10%",
                        ease: 'none',

                    },
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                }, '<')
                .to(targetsStep3, {
                    x: `-=${circleWidth - overlap}px`,
                    ease: 'none',
                    onComplete: indicatorUpdate,
                    onReverseComplete: indicatorUpdate,
                })
                .addLabel('overlap3', '<')
                .to(slider.querySelectorAll('.imageAnimation'), {
                    attr: {
                        ease: 'none',
                        x: "+=10%",
                    },
                    onReverseComplete: indicatorUpdate,
                    onComplete: indicatorUpdate,
                }, '<');


            if (slides.length > 3) {
                timeline
                    .to(allTargets, {
                        x: `-=${circleWidth - overlap}px`,
                        ease: 'none',
                        onReverseComplete: indicatorUpdate,
                        onComplete: indicatorUpdate,

                    })
                    .addLabel('shift3', '<')
                    .to(slider.querySelectorAll('.imageAnimation'), {
                        attr: {
                            ease: 'none',
                            x: "+=10%",
                        },
                        onReverseComplete: indicatorUpdate,
                        onComplete: indicatorUpdate,
                    }, '<')
                    .to(targetsStep4, {
                        x: `-=${circleWidth - overlap}px`,
                        ease: 'none',
                        onComplete: indicatorUpdate,
                        onReverseComplete: indicatorUpdate,
                    })
                    .addLabel('overlap4', '<')
                    .to(slider.querySelectorAll('.imageAnimation'), {
                        attr: {
                            ease: 'none',
                            x: "+=10%",
                        },
                        onReverseComplete: indicatorUpdate,
                        onComplete: indicatorUpdate,
                    }, '<');
            }

            let startDrag;
            let progress;
            let scrollProgress;
            let moveDeltaControl = 0;
            const mapperX = (window.innerWidth > 900 && !isTouchDevice()) ?
                gsap.utils.mapRange(0, scrollTrigger?.end - scrollTrigger?.start, 0, 1) :
                gsap.utils.mapRange(0, (circleWidth - overlap) * (slides.length * 2 - 1), 0, 1)

            const startDragHandle = (e) => {
                if (endDragTween?.isActive()) {
                    return;
                }
                updateOneState('cursorState', 'toSmall')
                startDrag = e.clientX ? e.clientX : e.changedTouches?.[0]?.clientX;
                progress = timeline.progress();
                scrollProgress = scrollTrigger.scroll();
            }

            const updateTimeline = (e) => {

                if (endDragTween?.isActive()) {
                    return;
                }
                let moveDrag = e.clientX ? e.clientX : e.changedTouches?.[0]?.clientX;
                const moveDelta = (moveDrag - startDrag);
                let nextPosition = (window.innerWidth > 900 && !isTouchDevice()) ? scrollProgress - moveDelta : progress - mapperX(moveDelta);
                if (!moveDelta) {
                    return;
                }

                if (moveDeltaControl && Math.abs(moveDelta) < moveDeltaControl) {
                    startDrag = moveDrag
                    scrollProgress = scrollTrigger.scroll();
                    progress = timeline.progress();
                    moveDeltaControl = Math.abs(moveDelta);
                    return;
                }

                moveDeltaControl = Math.abs(moveDelta);

                if ((window.innerWidth > 900 && !isTouchDevice())) {
                    if (nextPosition >= scrollTrigger.end) {
                        nextPosition = scrollTrigger.end;
                    }

                    if (nextPosition <= scrollTrigger.start) {
                        nextPosition = scrollTrigger.start
                    }
                    scrollTrigger.scroll(nextPosition)
                } else {
                    gsap.to(timeline, {
                            progress: nextPosition,
                            ease: 'power4.out',
                        }
                    )
                }
                indicatorUpdate()
            }

            const endDragHandle = (e) => {
                if (endDragTween?.isActive()) {
                    return;
                }
                if (e.clientX - startDrag > 0) {
                    if ((window.innerWidth > 900 && !isTouchDevice())) {
                        for (let j = 0; j < breakpoints.length; j++) {
                            if (scrollTrigger.scroll() > breakpoints[j]
                                && scrollTrigger.scroll() < breakpoints[j + 1]) {
                                endDragTween = gsap.to(timeline, {
                                        progress: mapperX(breakpoints[j] - scrollTrigger.start),
                                        ease: 'power1.out',
                                        duration: 0.8,
                                        onComplete: () => {

                                            scrollTrigger.scroll(breakpoints[j])
                                            indicatorUpdate()
                                        }
                                    }
                                )
                            }
                        }
                    } else {
                        for (let i = 0; i < slides.length; i++) {
                            if (timeline.progress() > mapperX(i * 2 * (circleWidth - overlap)) &&
                                timeline.progress() < mapperX((i + 1) * 2 * (circleWidth - overlap))) {
                                endDragTween = gsap.to(timeline, {
                                    progress: mapperX(i * 2 * (circleWidth - overlap)),
                                    ease: 'power1.out',
                                    duration: 0.8,
                                    onComplete: indicatorUpdate
                                })
                            }
                        }
                    }

                } else {
                    if ((window.innerWidth > 900 && !isTouchDevice())) {
                        for (let j = 1; j < breakpoints.length; j++) {
                            if (scrollTrigger.scroll() < breakpoints[j]
                                && scrollTrigger.scroll() > breakpoints[j - 1]) {
                                if (j === breakpoints.length - 1) {

                                    endDragTween = gsap.to(timeline, {
                                            progress: 1,
                                            duration: 0.8,
                                            ease: 'power1.out',
                                            onComplete: () => {
                                                scrollTrigger.scroll(scrollTrigger.end)
                                                indicatorUpdate()
                                            }
                                        }
                                    )
                                } else {

                                    endDragTween = gsap.to(timeline, {
                                            progress: mapperX(breakpoints[j] - scrollTrigger.start),
                                            duration: 0.8,
                                            ease: 'power1.out',
                                            onComplete: () => {
                                                scrollTrigger.scroll(breakpoints[j]);
                                                indicatorUpdate()
                                            }
                                        }
                                    )
                                }
                            }
                        }
                    } else {

                        for (let i = 1; i < slides.length; i++) {
                            if (timeline.progress() < mapperX(i * 2 * (circleWidth - overlap)) &&
                                timeline.progress() > mapperX((i - 1) * 2 * (circleWidth - overlap))) {
                                endDragTween = gsap.to(timeline, {
                                    progress: mapperX(i * 2 * (circleWidth - overlap)),
                                    ease: 'power1.out',
                                    duration: 0.8,
                                    onComplete: indicatorUpdate
                                })
                            }
                            if (timeline.progress() > mapperX(i * 2 * (circleWidth - overlap))) {
                                endDragTween = gsap.to(timeline, {
                                    progress: 1,
                                    ease: 'power1.out',
                                    duration: 0.8,
                                    onComplete: indicatorUpdate
                                })
                            }
                        }

                    }

                }
            }

            Draggable.create(slider.querySelector('.drag'), {
                type: "x",
                trigger: sliderRef,
                duration: 0.4,
                ease: 'power4.out',
                lockAxis: true,
                onDragStart: (e) => startDragHandle(e),
                onDrag: (e) => updateTimeline(e),
                onDragEnd: (e) => endDragHandle(e),
            });
        }

        enterScrollTrigger.scrub = false;
        enterScrollTrigger.toggleActions = 'play none none reset';
        enterTimeline = gsap.timeline({
            paused: true,
            scrollTrigger: enterScrollTrigger,
        })
            .to(sliderRef, {
                xPercent: -100,
                ease: 'back.out(1.7)',
                duration: 0.8
            })
    }
}

onDomReady(main);
