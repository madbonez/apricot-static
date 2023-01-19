import {onDomReady} from "../utils/utils";
import {selectState, updateOneState, getState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";

const id = '#header'

export function main() {

    const header = el('.header')
    const burgerIcon = el('.burger-icon')
    const closeIcon = el('.close-icon')
    const navbarLink = els('.navbarLink')
    const buttonArrow = el('.header__buttonArrow')
    const logo = el('#header .logo')
    const buttonWhite = el('#header .buttonWhite')

    buttonArrow.addEventListener('click', () => {
        updateOneState('scrollPage', 'form')
    })

    logo.addEventListener('click', () => {
        updateOneState('scrollPage', 'top')
    })

    buttonWhite.addEventListener('click', () => {
        burgerIcon.classList.add('visible')
        closeIcon.classList.remove('visible')
        header.classList.remove('navActive')
        updateOneState('scrollPage', 'form')
    })
    //  const [lang, setlang] = useState('En');

    for (let i = 0; i < navbarLink.length; i++) {
        navbarLink[i].addEventListener('click',
            () => {
                burgerIcon.classList.add('visible')
                closeIcon.classList.remove('visible')
                header.classList.remove('navActive')
                updateOneState('scrollPage', navbarLink[i].dataset.link)
            }
        )
    }

    const burgerChange = () => {
        updateOneState('burger', () => !getState().burger)
        header.classList.toggle('navActive')
        burgerIcon.classList.toggle('visible')
        closeIcon.classList.toggle('visible')
    }

    const mobileBtn = el('.mobileBtn')
    mobileBtn.addEventListener('click', burgerChange)
}

onDomReady(main);
