import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {gsap} from "gsap";

let isDebugMode = false;
if (typeof window !== 'undefined') {
    isDebugMode = !!localStorage?.getItem('isDebugMode');
}

export function scrollTriggerFactory(scrollerEl, triggerEl, updateHandler) {
    return (id, startFromTop, endFromTop, scrollerStart = 'top', scrollerEnd = 'top', elStart = 'top', elEnd = 'top') => {
        const trigger = ScrollTrigger.create({
            id: id,
            markers: isDebugMode && id.indexOf('Horizontal') === -1 ? {
                startColor: "red",
                endColor: "orange",
                fontSize: "18px"
            } : false,
            scroller: scrollerEl,
            trigger: triggerEl,
            start: `${elStart}+=${startFromTop} ${scrollerStart}`,
            end: `${elEnd}+=${endFromTop} ${scrollerEnd}`,
            onUpdate: updateHandler,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            // leads to bug with Slider do not uncomment it
            // preventOverlaps: true,
            anticipatePin: true,
        })
        // scrollDistance
        return trigger;
    }
}

export function scrollDebug(bodyScrollBar) {
    if (isDebugMode) {
        bodyScrollBar.addListener(({offset}) => {
            gsap.set([
                ...document.querySelectorAll('.gsap-marker-end'),
                ...document.querySelectorAll('.gsap-marker-start'),
                ...document.querySelectorAll('.gsap-marker-scroller-start'),
                ...document.querySelectorAll('.gsap-marker-scroller-end'),
            ], {marginTop: -offset.y})
        });
    }
}
