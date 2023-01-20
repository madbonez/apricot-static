import {onDomReady} from "../utils/utils";
import {selectState, updateOneState, getState, GlobalState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";
import {initSmoothScrollbar} from "../utils/initSmoothScrollbar";

const id = '#popup'
export function main() {

    let popupScrollBar;
    let popupContentRef = els('.popupContentRef');
    const popupRef = el('#popup');
    const popupCloseRef = els('.popupCloseRef');
    const popupContainer7 = el('.popupContainer_7')
    const popupContainer9 = el('.popupContainer_9')
    const buttonNext = els('#popup .ButtonBlock .buttonArrowRef')

    const popup9 = els('#screen9 .projectBlock').length
    const popup7 = els('#screen7 .blockAnimation').length
    const calcNextPopup = (id) => {
        id = id + 1;
        if (id > popup7 + popup9 - 1) {
            id = popup7
        }
        return id
    }

    buttonNext.forEach((item)=>item.addEventListener('click', (e) => updateOneState('activePopupId', calcNextPopup(getState().activePopupId))));

    selectState((newState: GlobalState) => {
        if (getState().activePopupId){
            popupRef.addEventListener('click', () => {
                updateOneState('activePopupId', null)
            })
            popupCloseRef.forEach((item)=>item.addEventListener('click', () => {
                updateOneState('activePopupId', null)
            }, true))
            popupContentRef[getState().activePopupId].addEventListener('click', (e) => {
                e.stopPropagation()
            })
            popupScrollBar = initSmoothScrollbar(popupContentRef[getState().activePopupId], false);
        }
    }, 'activePopupId')


    const nextPopup = () => {
        popupScrollBar.scrollTo(0, 0)
      //  nextPopupId(9);
    }

    const previousPopup = () => {
        popupScrollBar.scrollTo(0, 0)
     //   previousPopupId(9);
    }

    selectState((newState: GlobalState) => {

            if (getState().activePopupId !== null ){
                popupRef.classList.add('active')
                if (getState().activePopupScreen === '7'){
                    popupContainer7.classList.add('active')
                    popupContainer9.classList.remove('active')
                    for (let i=0; i<popupContentRef.length; i++){
                        if (i === Number(getState().activePopupId)) {
                            popupContentRef[i].classList.add('active')
                        } else {
                            popupContentRef[i].classList.remove('active')
                        }
                    }
                }
                if (getState().activePopupScreen === '9'){
                    popupContainer7.classList.remove('active')
                    popupContainer9.classList.add('active')

                    for (let i=0; i<popupContentRef.length; i++){
                        if (i === Number(getState().activePopupId) ) {
                            popupContentRef[i].classList.add('active')
                        } else {
                            popupContentRef[i].classList.remove('active')
                        }
                    }
                }
            } else {
                popupRef.classList.remove('active')
                popupContainer7.classList.remove('active')
                popupContainer9.classList.remove('active')
                for (let i=0; i<popupContentRef.length; i++){
                    popupContentRef[i].classList.remove('active')
                }
            }
    }, 'activePopupId')
}

onDomReady(main);
