import {calcOverflowOffset, height, isTouchDevice, onDomReady, scrollWidth} from "./utils/utils";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {initSmoothScrollbar} from "./utils/initSmoothScrollbar";
import {scrollDebug, scrollTriggerFactory} from "./utils/scrollTrigger";
import {resizeDetector} from "./utils/heights";
import {updateOneState} from './state/state';
import {el} from "./utils/dom";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

let viewportHeight;

const FIRST_OFFSET = 200;
const OVERLAP = 300;

let bodyScrollBar;
let onScrollToSection;

let videoOverlap = 0;
let screen1Tween = [];
let screen2Tween = [];
let screen3Tween = [];
let screen3HorizontalTween = [];
let screen4Tween = [];
let screen5Tween = [];
let screen5HorizontalTween = [];
let screen6Tween = [];
let screen7Tween = [];
let screen8Tween = [];
let screen8HorizontalTween = [];
let screen9Tween = [];
let screen10Tween = [];
let screen11Tween = [];

let topContainerRef;
let scrollContainerRef;
let ghostRef;
let headerRef;
let chelkaRef;
let screen1Ref;
let screen2Ref;
let screen3Ref;
let screen3SliderRef;
let headerScreen3Ref
let screen4Ref;
let screen5Ref;
let screen5SliderRef;
let screen6Ref;
let screen7Ref;
let screen8Ref;
let screen8SliderRef;
let screen9Ref;
let screen10Ref;
let screen11Ref;
let footerRef;
let submitButtonRef;
let followCursorRef;
let commonScreens;
let footerScreens;
let allScreens;
let setIsHeaderVisibleGlobal;

// id -> scrollDistance
let scrollDistance = new Map();
let startScreenNavigationPositions = new Map();


export function main() {

    function addScreenNavigationPosition(id, height) {
        startScreenNavigationPositions.set(id, height);
    }

    function getScreenNavigationPosition(screenId) {
        return startScreenNavigationPositions.get(screenId);
    }

    function initWindowStaff() {
        window.history.scrollRestoration = "manual";
        videoOverlap = height(screen2Ref) * 0.2
    }

    function scrollAnimationHandler(trigger) {
        if (trigger.vars.id === 'screen1') {
            if (!screen1Tween.length) {
                screen1Tween.push(
                    gsap.to(screen2Ref, {
                        top: `+=${scrollDistance.get('screen1') - videoOverlap}px`,
                        paused: true,
                        ease: 'none',
                    }),
                );

                [screen3Ref, ...commonScreens, ...footerScreens]
                    .forEach(screen => {
                        screen1Tween.push(
                            gsap.to(screen, {
                                top: `+=${scrollDistance.get('screen1') - videoOverlap - videoOverlap / 3}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen1Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen3Horizontal') {
            if (!screen3HorizontalTween.length) {
                [screen3Ref, ...commonScreens, ...footerScreens]
                    .forEach(screen => {
                        screen3HorizontalTween.push(
                            gsap.to(screen, {
                                top: `+=${scrollDistance.get('screen3Horizontal')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen3HorizontalTween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen3') {
            if (!screen3Tween.length) {
                [...commonScreens, ...footerScreens]
                    .forEach(screen => {
                        screen3Tween.push(
                            gsap.to(screen, {
                                top: `-=${height(screen4Ref)}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen3Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen4') {
            if (!screen4Tween.length) {
                [...commonScreens.slice(1), ...footerScreens]
                    .forEach(screen => {
                        screen4Tween.push(
                            gsap.to(screen, {
                                top: `-=${scrollDistance.get('screen4')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen4Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen5Horizontal') {
            if (!screen5HorizontalTween.length) {
                [...commonScreens.slice(1), ...footerScreens]
                    .forEach(screen => {
                        screen5HorizontalTween.push(
                            gsap.to(screen, {
                                top: `+=${scrollDistance.get('screen5Horizontal')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen5HorizontalTween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen5') {
            if (!screen5Tween.length) {
                [...commonScreens.slice(2), ...footerScreens]
                    .forEach(screen => {
                        screen5Tween.push(
                            gsap.to(screen, {
                                top: `-=${scrollDistance.get('screen5')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen5Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen6') {
            if (!screen6Tween.length) {
                [...commonScreens.slice(3), ...footerScreens]
                    .forEach(screen => {
                        screen6Tween.push(
                            gsap.to(screen, {
                                top: `-=${scrollDistance.get('screen6')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen6Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen7') {
            if (!screen7Tween.length) {
                [...commonScreens.slice(4), ...footerScreens]
                    .forEach(screen => {
                        screen7Tween.push(
                            gsap.to(screen, {
                                top: `-=${scrollDistance.get('screen7')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen7Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen8Horizontal') {
            if (!screen8HorizontalTween.length) {
                [...commonScreens.slice(4), ...footerScreens]
                    .forEach(screen => {
                        screen8HorizontalTween.push(
                            gsap.to(screen, {
                                top: `+=${scrollDistance.get('screen8Horizontal')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen8HorizontalTween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen8') {
            if (!screen8Tween.length) {
                [...commonScreens.slice(5), ...footerScreens]
                    .forEach(screen => {
                        screen8Tween.push(
                            gsap.to(screen, {
                                top: `-=${scrollDistance.get('screen8')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen8Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen9') {
            if (!screen9Tween.length) {
                [...commonScreens.slice(6), ...footerScreens]
                    .forEach(screen => {
                        screen9Tween.push(
                            gsap.to(screen, {
                                top: `-=${scrollDistance.get('screen9')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen9Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen10') {
            if (!screen10Tween.length) {
                [...commonScreens.slice(7), ...footerScreens]
                    .forEach(screen => {
                        screen10Tween.push(
                            gsap.to(screen, {
                                top: `-=${scrollDistance.get('screen10')}px`,
                                paused: true,
                                ease: 'none',
                            })
                        )
                    });
            }
            screen10Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }

        if (trigger.vars.id === 'screen11') {
            if (!screen11Tween.length) {
                screen11Tween.push(
                    gsap.to(footerRef, {
                        top: `+=${height(footerRef)}px`,
                        paused: true,
                        ease: 'none',
                    }),
                )
            }

            if (trigger.progress < 0.3 && window.innerWidth > 1440) {
                gsap.set(screen10Ref, {
                    backgroundColor: '',
                })
            }

            if (trigger.progress > 0.6) {

                if (window.innerWidth > 1440) {
                    gsap.set(screen10Ref, {
                        backgroundColor: getComputedStyle(window.document.body).getPropertyValue('--black'),
                    })
                }

                gsap.to(screen11Ref, {
                    scale: trigger.direction === 1 ? 0.9 : 1,
                    ease: 'power2.out',
                })
                gsap.to(submitButtonRef, {
                    xPercent: trigger.direction === 1 ? -5 : 5,
                    y: trigger.direction === 1 ? -(height(screen11Ref) * 0.1) / 2 : 0,
                    ease: 'power2.out',
                })

            }

            screen11Tween.forEach(tween => tween.totalProgress(trigger.progress));
        }
    }

    function initScrollTriggers() {
        let scrollTriggers = {}

        const createScrollTrigger = scrollTriggerFactory(topContainerRef, scrollContainerRef, scrollAnimationHandler);
        let viewportDiff = 0;

        // -----------video wrappers screens--------------
        let startScreen1 = 0;
        let endScreen1 = startScreen1 + height(screen1Ref);
        let screen1Trigger = createScrollTrigger('screen1', startScreen1, endScreen1);
        let screen1Distance = endScreen1 - startScreen1;
        scrollTriggers = {
            ...scrollTriggers,
            screen1: screen1Trigger,
        };
        scrollDistance.set('screen1', screen1Distance);

        scrollDistance.set('screen2', height(screen2Ref) - videoOverlap / 3);

        // next
        let deltaStart3 = height(screen3Ref) > viewportHeight + 120 ? height(screen3Ref) - viewportHeight - 120 : 0
        let startScreen3Horizontal = endScreen1 + height(screen2Ref) - 2 * videoOverlap / 3 + deltaStart3;
        let endScreen3Horizontal = (window.innerWidth > 900 && !isTouchDevice()) ? startScreen3Horizontal + scrollWidth(screen3SliderRef) - height(screen3SliderRef) : startScreen3Horizontal;
        const screen3HorizontalTrigger = createScrollTrigger('screen3Horizontal', startScreen3Horizontal, endScreen3Horizontal);

        scrollTriggers = {
            ...scrollTriggers,
            screen3Horizontal: screen3HorizontalTrigger,
        };

        let screen3HorizontalDistance = endScreen3Horizontal - startScreen3Horizontal;
        scrollDistance.set('screen3Horizontal', screen3HorizontalDistance);

        addScreenNavigationPosition('screen3', startScreen3Horizontal);

        const screenIdEnter = `screen3Enter`;
        const startScreenEnterTrigger = getScreenNavigationPosition('screen3') - viewportHeight / 3
        const screenEnterTrigger = createScrollTrigger(
            screenIdEnter, startScreenEnterTrigger, startScreenEnterTrigger + 100
        );

        // next
        let elHeight = height(screen4Ref);
        let startScreen3 = endScreen3Horizontal;
        let endScreen3 = startScreen3 + (height(screen3Ref) - elHeight) - deltaStart3;
        const screen3Trigger = createScrollTrigger('screen3', startScreen3, endScreen3);

        scrollTriggers = {
            ...scrollTriggers,
            screen3: screen3Trigger,
            screen3Enter: screenEnterTrigger,
        };

        let screen3Distance = endScreen3;
        scrollDistance.set('screen3', screen3Distance);

        // -----------video wrappers screens--------------

        // other
        let lastEndScrollTrigger = endScreen3;
        let endScrollHorizontalTrigger = 0;
        let screenId;
        commonScreens.forEach((screenRef, index) => {
            let screenStartPosition;

            screenId = `screen${index + 4}`;
            const viewportCutOffset = calcOverflowOffset(screenRef, viewportHeight);

            let startScreenHorizontalTrigger = 0;
            let deltaStart8 = height(screen8Ref) > viewportHeight + 60 ? height(screen8Ref) - viewportHeight - 60 : 0
            if (screenId === 'screen5' || screenId === 'screen8') {
                const extraDistance = 0;

                const screenIdHorizontal = `${screenId}Horizontal`;
                startScreenHorizontalTrigger = lastEndScrollTrigger;
                if (screenId === 'screen8') {
                    startScreenHorizontalTrigger += deltaStart8
                }
                const distance = screenId === 'screen5' ? height(screen5SliderRef) : (window.innerWidth > 900 && !isTouchDevice()) ? scrollWidth(screen8SliderRef) - height(screen3SliderRef) : 0;
                endScrollHorizontalTrigger = startScreenHorizontalTrigger + distance;

                const screenHorizontalTrigger = createScrollTrigger(
                    screenIdHorizontal, startScreenHorizontalTrigger, endScrollHorizontalTrigger
                );
                const horizontalDistance = endScrollHorizontalTrigger - startScreenHorizontalTrigger;
                scrollDistance.set(screenIdHorizontal, horizontalDistance);
                scrollTriggers = {
                    ...scrollTriggers,
                    [screenIdHorizontal]: screenHorizontalTrigger,
                };

                lastEndScrollTrigger = endScrollHorizontalTrigger;
                if (screenId === 'screen8') {
                    lastEndScrollTrigger -= deltaStart8
                }
                screenStartPosition = startScreenHorizontalTrigger;
            }

            elHeight = height(screenRef);

            let startScreenTrigger = lastEndScrollTrigger + viewportCutOffset;
            lastEndScrollTrigger = startScreenTrigger + elHeight / 2 - viewportCutOffset / 2;

            if (!screenStartPosition) {
                screenStartPosition = startScreenTrigger - viewportCutOffset;
            }

            addScreenNavigationPosition(screenId, screenStartPosition);

            const screenTrigger = createScrollTrigger(screenId, startScreenTrigger, lastEndScrollTrigger);
            const distance = lastEndScrollTrigger - startScreenTrigger;
            scrollDistance.set(screenId, distance);

            const screenIdEnter = `${screenId}Enter`;
            const startScreenEnterTrigger = getScreenNavigationPosition(screenId) - viewportHeight / 3
            const screenEnterTrigger = createScrollTrigger(
                screenIdEnter, startScreenEnterTrigger, startScreenEnterTrigger
            );

            scrollTriggers = {
                ...scrollTriggers,
                [screenId]: screenTrigger,
                [screenIdEnter]: screenEnterTrigger,
            };
        })

        addScreenNavigationPosition('screen11', lastEndScrollTrigger);
        addScreenNavigationPosition('footer', lastEndScrollTrigger + height(screen11Ref) + height(footerRef) - viewportHeight);

        screenId = `screen11Enter`;
        const startScreen11EnterTrigger = getScreenNavigationPosition('screen11') - viewportHeight / 3;
        const endScreen11EnterTrigger = startScreen11EnterTrigger + 100;
        const screen11EnterTrigger = createScrollTrigger(screenId, startScreen11EnterTrigger, endScreen11EnterTrigger);
        scrollTriggers = {
            ...scrollTriggers,
            [screenId]: screen11EnterTrigger,
        };

        screenId = `screen11`;
        const extraDistance = viewportHeight > height(screen11Ref) ? (viewportHeight - height(screen11Ref)) / 2 : 0;
        const startScreen11Trigger = lastEndScrollTrigger + height(screen11Ref) + extraDistance;
        const endScreen11Trigger = startScreen11Trigger + height(footerRef);
        const screen11Trigger = createScrollTrigger(
            screenId, startScreen11Trigger, endScreen11Trigger, 'bottom', 'bottom',
        );

        scrollDistance.set('screen11', endScreen11Trigger - startScreen11Trigger);
        scrollTriggers = {
            ...scrollTriggers,
            [screenId]: screen11Trigger,
        };

        updateOneState('scrollTriggers', scrollTriggers)
        // setScrollTriggers(scrollTriggers);
    }

    function initScreensPositions() {
        let offsetAccumulator = 0;
        gsap.set(screen1Ref, {
            top: offsetAccumulator,
        });

        offsetAccumulator = videoOverlap;
        gsap.set(screen2Ref, {
            top: `${offsetAccumulator}px`,
        });

        offsetAccumulator += height(screen2Ref) - videoOverlap / 3;
        gsap.set(screen3Ref, {
            top: `${offsetAccumulator}px`,
        });

        offsetAccumulator += height(screen3Ref);
        [...commonScreens, screen11Ref]
            .forEach((screen, index) => {
                gsap.set(screen, {
                    top: `${offsetAccumulator}px`,
                })
                offsetAccumulator += screen.offsetHeight;
            });

        gsap.set(submitButtonRef, {
            top: window.innerWidth > 1400 ? `${offsetAccumulator - 340}px` : window.innerWidth > 1000 ? `${offsetAccumulator - 280}px` : `${offsetAccumulator - 230}px`,
        })

        // put under form
        gsap.set(footerRef, {
            top: `${offsetAccumulator - height(footerRef)}px`,
        })

        gsap.set(ghostRef, {
            height: `${getScreenNavigationPosition('screen11') + height(screen11Ref) + height(footerRef)}px`,
        });
    }


        // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
        // const [popupId, setPopupId] = useState(null);
        // const [cursorState, setCursorState] = useState(null);
        // const [popupScreen, setPopupScreen] = useState(null);
        // const [burger, setBurger] = useState(false);
        // const [formValid, setFormValid] = useState(false);
        // const [buttonClick, setButtonClick] = useState(0);
        // const [scrollTriggers, setScrollTriggers] = useState({});
        // const [formSended, setFormSended] = useState(false)

        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        // if (!bodyScrollBar) {
        //     return
        // }
        // if (burger) {
        //     bodyScrollBar.updatePluginOptions('modal', {open: true})
        // } else {
        //     bodyScrollBar.updatePluginOptions('modal', {open: false})
        // }

        topContainerRef = el("#topContainerRef");
        scrollContainerRef = el("#scrollContainerRef");
        ghostRef = el("#ghostRef");
        headerRef = el("#header");
        chelkaRef = el("#chelkaRef");
        screen1Ref = el("#screen1");
        screen2Ref = el("#screen2");
        screen3Ref = el("#screen3");
        screen3SliderRef = el("#screen3 .slider");
        headerScreen3Ref = el("#screen3 #headerScreen");
        screen4Ref = el("#screen4");
        screen5Ref = el("#screen5");
        screen5SliderRef = el("#screen5 #sliderRef");
        screen6Ref = el("#screen6");
        screen7Ref = el("#screen7");
        screen8Ref = el("#screen8");
        screen8SliderRef = el("#screen8 .slider");
        screen9Ref = el("#screen9");
        screen10Ref = el("#screen10");
        screen11Ref = el("#screen11");
        footerRef = el("#footer");
        submitButtonRef = el("#submit-button");
     /*   followCursorRef = el("#followCursorRef")*/

        // const changeCursorState = (state) => {
        //     setCursorState(state);
        // }
        //
        // const changePopupId = (id, screen) => {
        //     setPopupId(id);
        //     setPopupScreen(screen);
        // }

        /*     const nextPopupId = (screen) => {
                 setPopupId((id) => {
                     if (id + 1 < cmsData.block_8.elements.length) {
                         return id + 1;
                     } else {
                         return 0;
                     }
                 });
                 setPopupScreen(screen);
             }

             const previousPopupId = (screen) => {
                 setPopupId((id) => {
                     if (id === 0) {
                         return cmsData.block_8.elements.length - 1;
                     } else {
                         return id - 1;
                     }
                 });
                 setPopupScreen(screen);
             }*/

        onScrollToSection = (section) => {
            const duration = 2000;
            switch (section) {
                case 'about':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen3'), false)
                    break;
                case 'technology':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen5'), false)
                    break;
                case 'applying':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen7'), false)
                    break;
                case 'bennefits':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen8'), false)
                    break;
                case 'projects':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen9'), false)
                    break;
                case 'steps':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen10'), false)
                    break;
                case 'contacts':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen11'), false)
                    break;
                case 'form':
                    bodyScrollBar.scrollTo(0, getScreenNavigationPosition('screen11'), false)
                    break;
                case 'top':
                    bodyScrollBar.scrollTo(0, 0, duration)
                    break;
            }
        }


      /*  topContainerRef.current.addEventListener('mousemove', (e) => handleCursorFolowMove(e), false);*/

   /*     const handleCursorFolowMove = (e) => {
            const target = e.target
            if (!target) return
            followCursorRef.current.style.left = +e.pageX + 'px'
            followCursorRef.current.style.top = ghostRef.current.scrollTop + e.pageY + 'px'
        }*/

        initWindowStaff();
        bodyScrollBar = initSmoothScrollbar(topContainerRef);

        footerScreens = [
            screen11Ref,
            footerRef,
            submitButtonRef,
        ];

        commonScreens = [
            screen4Ref,
            screen5Ref,
            screen6Ref,
            screen7Ref,
            screen8Ref,
            screen9Ref,
            screen10Ref,
        ]

        allScreens = [
            screen1Ref,
            screen2Ref,
            screen3Ref,
            ...commonScreens,
            ...footerScreens,
        ];

        let ctx = gsap.context(() => {
               viewportHeight = window.innerHeight;
               initScrollTriggers();
               initScreensPositions();
               scrollDebug(bodyScrollBar);
           }, topContainerRef.current);

        resizeDetector(allScreens.map(screenRef => screenRef));
        // bodyScrollBar.updatePluginOptions('modal', {open: false});
      /*  bodyScrollBar.updatePluginOptions('screenStop', {points: Array.from(startScreenNavigationPositions.values())});
*/
}

onDomReady(main);