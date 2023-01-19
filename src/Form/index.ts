import {onDomReady} from "../utils/utils";
import {getState, GlobalState, selectState, updateOneState} from '../state/state';
import {gsap} from "gsap";
import {el, els} from "../utils/dom";

const id = 'form'

export function main() {

    /*    formValid,
        buttonClick,
        formSended,*/
    const scrollTrigger = getState().scrollTriggers[`screen11Enter`]
    const formRef = el('#form');
    const inputNames = el('#inputName')
    const inputCompany = el('#inputCompany')
    const inputEmail = el('#inputEmail')
    const inputPhone = el('#inputPhone')
    const inputProjectDetails = el('#inputProjectDetails')

    inputNames.addEventListener('input', e => nameHandler(e))
    inputNames.addEventListener('blur', e => blurHandler(e))
    inputCompany.addEventListener('input', e => companyHandler(e))
    inputCompany.addEventListener('blur', e => blurHandler(e))
    inputEmail.addEventListener('input', e => emailHandler(e))
    inputEmail.addEventListener('blur', e => blurHandler(e))
    inputPhone.addEventListener('input', e => phoneHandler(e))
    inputPhone.addEventListener('blur', e => blurHandler(e))
    inputProjectDetails.addEventListener('input', e => projectDetailsHandler(e))
    inputProjectDetails.addEventListener('blur', e => blurHandler(e))

    selectState((newState: GlobalState) =>  {
        if (getState().nameDirty){
            inputNames.classList.add('checked')
        } else {
            inputNames.classList.remove('checked')
        }
    }, 'nameDirty')

    selectState((newState: GlobalState) =>  {
        if (getState().companyDirty){
            inputCompany.classList.add('checked')
        } else {
            inputCompany.classList.remove('checked')
        }
    }, 'companyDirty')

    selectState((newState: GlobalState) =>  {
        if (getState().emailDirty){
            inputEmail.classList.add('checked')
        } else {
            inputEmail.classList.remove('checked')
        }
    }, 'emailDirty')

    selectState((newState: GlobalState) =>  {
        if (getState().phoneDirty){
            inputPhone.classList.add('checked')
        } else {
            inputPhone.classList.remove('checked')
        }
    }, 'phoneDirty')

    selectState((newState: GlobalState) =>  {
        if (getState().projectDetailsDirty){
            inputProjectDetails.classList.add('checked')
        } else {
            inputProjectDetails.classList.remove('checked')
        }
    }, 'projectDetailsDirty')

    selectState((newState: GlobalState) =>  {
        if (getState().nameDirty && getState().nameError){
            el('.wrongName').classList.add('visible')
            el('.rightName').classList.remove('visible')
            el('.errorMessageName').classList.add('show')
        } else {
            el('.errorMessageName').classList.remove('show')
            if (getState().nameDirty && !getState().nameError){
                el('.rightName').classList.add('visible')
                el('.wrongName').classList.remove('visible')
            } else {
                el('.rightName').classList.remove('visible')
                el('.wrongName').classList.remove('visible')
            }
        }
    }, 'nameDirty', 'nameError')

    selectState((newState: GlobalState) =>  {
        if (getState().companyDirty && getState().companyError){
            el('.wrongCompany').classList.add('visible')
            el('.rightCompany').classList.remove('visible')
            el('.errorMessageCompany').classList.add('show')
        } else {
            el('.errorMessageCompany').classList.remove('show')
            if (getState().companyDirty && !getState().companyError){
                el('.rightCompany').classList.add('visible')
                el('.wrongCompany').classList.remove('visible')
            } else {
                el('.rightCompany').classList.remove('visible')
                el('.wrongCompany').classList.remove('visible')
            }
        }
    }, 'companyDirty', 'companyError')

    selectState((newState: GlobalState) =>  {
        if (getState().emailDirty && getState().emailError){
            el('.wrongEmail').classList.add('visible')
            el('.rightEmail').classList.remove('visible')
            el('.errorMessageEmail').classList.add('show')
        } else {
            el('.errorMessageEmail').classList.remove('show')
            if (getState().emailDirty && !getState().emailError){
                el('.rightEmail').classList.add('visible')
                el('.wrongEmail').classList.remove('visible')
            } else {
                el('.rightEmail').classList.remove('visible')
                el('.wrongEmail').classList.remove('visible')
            }
        }
    }, 'emailDirty', 'emailError')

    selectState((newState: GlobalState) =>  {
        if (getState().phoneDirty && getState().phoneError){
            el('.wrongPhone').classList.add('visible')
            el('.rightPhone').classList.remove('visible')
            el('.errorMessagePhone').classList.add('show')
        } else {
            el('.errorMessagePhone').classList.remove('show')
            if (getState().phoneDirty && !getState().phoneError){
                el('.rightPhone').classList.add('visible')
                el('.wrongPhone').classList.remove('visible')
            } else {
                el('.rightPhone').classList.remove('visible')
                el('.wrongPhone').classList.remove('visible')
            }
        }
    }, 'phoneDirty', 'phoneError')

    selectState((newState: GlobalState) =>  {
        if (getState().projectDetailsDirty && getState().projectDetails){
            el('.rightProjectDetails').classList.add('visible')
        } else {
            el('.rightProjectDetails').classList.remove('visible')
        }
    }, 'projectDetailsDirty', 'projectDetails')

    if (!scrollTrigger) {
        return;
    }
    gsap.context(() => {
            scrollTrigger.toggleActions = 'play none none reset';
            const tl = gsap.timeline({
                scrollTrigger,
                paused: true,
            })
                .from(formRef, {
                    y: 70,
                    duration: 1,
                    ease: 'power4.out',
                    opacity: 0,
                })
                .from([`.input-animation`, '.policy-animation'], {
                    duration: 1,
                    ease: 'power4.out',
                    marginTop: '+=50',
                }, '<0.4')
        }, formRef
    )

    selectState((newState: GlobalState) => {
        if (getState().nameError || getState().companyError || getState().emailError || getState().phoneError) {
            updateOneState('formValid', false)
        } else {
            updateOneState('formValid', true)
        }
    }, 'nameError', 'companyError', 'emailError', 'phoneError')


    selectState((newState: GlobalState) => {
        if (getState().buttonClick > 0) {
            formSend();
        }
    }, 'buttonClick')

    const formSend = async () => {
        if (getState().formValid) {
            let formData = {
                name: getState().name,
                company: getState().company,
                email: getState().email,
                phone: getState().phone,
                project_details: getState().projectDetails,
                action: 'callback_action',
                nonce: window['callback_object']?.nonce
            }

            const fd = new FormData();
            Object.keys(formData).forEach(key => {
                fd.append(key, formData[key])
            })

            let response = await fetch(window['callback_object']?.url, {
                method: "POST",
                body: fd
            })
            if (response.ok) {
                updateOneState('formSended', true)
                updateOneState('name', '')
                updateOneState('company', '')
                updateOneState('email', '')
                updateOneState('phone', '')
                updateOneState('projectdetails', '')
            } else {

            }
        } else {
            updateOneState('nameDirty', true)
            updateOneState('companyDirty', true)
            updateOneState('emailDirty', true)
            updateOneState('phoneDirty', true)
            updateOneState('projectdetailsDirty', true)
        }

    }

    const nameHandler = (e) => {
        updateOneState('name', e.target.value)
        updateOneState('nameDirty', true)

        e.target.value ? updateOneState('nameError', '') : updateOneState('nameError', 'Required field!')
    }

    const companyHandler = (e) => {
        updateOneState('company', e.target.value)
        updateOneState('companyDirty', true)

        e.target.value ? updateOneState('companyError', '') : updateOneState('companyError', 'Required field!')
    }
    const emailHandler = (e) => {
        updateOneState('email', e.target.value)
        updateOneState('emailDirty', true)

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (e.target.value) {
            if (!re.test(String(e.target.value).toLowerCase())) {
                updateOneState('emailError', "Wrong email, please enter a valid one")
            } else {
                updateOneState('emailError', "")
            }
        } else {
            updateOneState('emailError', 'Required field!')
        }

    }
    const phoneHandler = (e) => {
        updateOneState('phone', e.target.value)
        updateOneState('phoneDirty', true)
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (e.target.value) {
            if (!re.test(String(e.target.value).toLowerCase())) {
                updateOneState('phoneError', "Wrong phone number, please enter a valid one")
            } else {
                updateOneState('phoneError', "")
            }
        } else {
            updateOneState('phoneError', 'Required field!')
        }

    }
    const projectDetailsHandler = (e) => {
        updateOneState('projectDetails', e.target.value)
        updateOneState('projectDetailsDirty', true)

    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                updateOneState('nameDirty', true)
                break
            case 'company':
                updateOneState('companyDirty', true)
                break
            case 'email':
                updateOneState('emailDirty', true)
                break
            case 'phone':
                updateOneState('phoneDirty', true)
                break
            case 'project details':
                updateOneState('projectDetailsDirty', true)
                break
        }
    }

}

onDomReady(main);
