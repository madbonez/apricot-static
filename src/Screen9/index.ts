import {onDomReady} from "../utils/utils";
import {getState, selectState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";

const id = '#screen9'
export function main() {

    const innerRef = el('#screen9')
    const scrollTrigger = getState().scrollTriggers[`screen9Enter`]
    const projectBlock = els('#screen9 .projectBlock')

    for(let i=0; i<projectBlock.length; i++) {
        projectBlock[i].addEventListener('click', ()=>{
            updateOneState('activePopupScreen' , '9' )
            updateOneState('activePopupId' , projectBlock[i].dataset.popup )
        })
        projectBlock[i].addEventListener('mouseenter', ()=>onMouseEnter(projectBlock[i].dataset.popup))
        projectBlock[i].addEventListener('mouseleave', ()=>onMouseLeave(projectBlock[i].dataset.popup))
    }

    /*    const [arrProjectList, setProjectList] = useState(projectListAll.slice(0, 2));
    const handleClick = () => {
        return () => {
            if (arrProjectList.length < 5) {
                return setProjectList(projectListAll)
            } else {
                return setProjectList(projectListAll.slice(0, 4))
            }
        }
    }*/

    const videoPlay = (e) => {
        e.target.play()
    }
    const videoPause = (e) => {
        e.target.pause()
    }

    const onMouseEnter = (id) => {
        const tl = gsap.timeline({})
            .fromTo(`.arrow2-${id}`, {
                    x: -20,
                    y: 0,
                    duration: 0.5,
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 0,
                    y: -20,
                    ease: 'power4.Out'
                },)
            .fromTo(`.arrow-${id}`, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    visibility: 'hidden',
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 20,
                    visibility: 'visible',
                    y: -20,
                    ease: 'power4.Out'
                }, '<')

    }
    const onMouseLeave = (id) => {
        const tl = gsap.timeline({})

            .fromTo(`.arrow2-${id}`, {
                    x: -20,
                    y: 0,
                    duration: 0.5,
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 0,
                    y: -20,
                    ease: 'power4.Out'
                },)
            .fromTo(`.arrow-${id}`, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    visibility: 'hidden',
                    ease: 'power4.Out'
                },
                {
                    duration: 0.5,
                    x: 20,
                    visibility: 'visible',
                    y: -20,
                    ease: 'power4.Out'
                }, '<')

    }

        if (!scrollTrigger) {
            return;
        }
        gsap.context(() => {
                scrollTrigger.toggleActions = 'play none none reset';

                const tl = gsap.timeline({
                    scrollTrigger,
                    paused: true,
                })
                    .from(['.button', '.tags'], {
                        y: 70,
                        duration: 0.5,
                        ease: 'power4.out',
                        opacity: 0,
                        delay: 0.4
                    },)

                gsap.utils.toArray('.projectBlock').forEach((item, index) => {
                    const tl2 = gsap.timeline({
                        scrollTrigger,
                        paused: true,
                    })
                        .from(item, {
                            y: 80,
                            duration: 1,
                            delay: 0.4 + 0.1 * (index + 1),
                            ease: 'power4.out',
                            opacity: 0,
                        })
                },)
            },
            innerRef)



}

onDomReady(main);
