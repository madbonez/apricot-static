import Scrollbar, {ScrollbarPlugin} from 'smooth-scrollbar';
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {ScrollbarModalPlugin} from "./ScrollbarModalPlugin";
import {ScrollbarScreenStopPlugin} from "./ScrollbarScreenStopPlugin";

export function initSmoothScrollbar(topContainerRef, disabledFirst = true) {
    if (!document || !topContainerRef) {
        return;
    }

    Scrollbar.use(ScrollbarModalPlugin);
    Scrollbar.use(ScrollbarScreenStopPlugin);

    const bodyScrollBar = Scrollbar.init(topContainerRef, {
        damping: 0.03,
        // delegateTo: document,
        alwaysShowTracks: true,
        continuousScrolling: false,
        renderByPixels: true,
        plugins: {
            modal: {
                open: disabledFirst,
            }
        }
    });
    ScrollTrigger.scrollerProxy(topContainerRef, {
        scrollTop(value) {
            if (arguments.length) {
                bodyScrollBar.scrollTop = value;
            }
            return bodyScrollBar.scrollTop;
        }
    });

    bodyScrollBar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({scroller: topContainerRef});

    return bodyScrollBar;
}
