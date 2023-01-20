(function () {
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequireb921"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequireb921"] = parcelRequire;
}

var $ix1dx = parcelRequire("ix1dx");

var $gkwRL = parcelRequire("gkwRL");

var $h8x9E = parcelRequire("h8x9E");

var $1A24E = parcelRequire("1A24E");
const $6c9c18d8981b5793$var$id = "form";
function $6c9c18d8981b5793$export$f22da7240b7add18() {
    const scrollTrigger = (0, $gkwRL.getState)().scrollTriggers[`screen11Enter`];
    const formRef = (0, $1A24E.el)("#formRef");
    const inputNames = (0, $1A24E.el)("#inputName");
    const inputCompany = (0, $1A24E.el)("#inputCompany");
    const inputEmail = (0, $1A24E.el)("#inputEmail");
    const inputPhone = (0, $1A24E.el)("#inputPhone");
    const inputProjectDetails = (0, $1A24E.el)("#inputProjectDetails");
    const submitButtonMob = (0, $1A24E.el)("#formRef .submitButton");
    inputNames.addEventListener("input", (e)=>nameHandler(e));
    inputNames.addEventListener("blur", (e)=>blurHandler(e));
    inputCompany.addEventListener("input", (e)=>companyHandler(e));
    inputCompany.addEventListener("blur", (e)=>blurHandler(e));
    inputEmail.addEventListener("input", (e)=>emailHandler(e));
    inputEmail.addEventListener("blur", (e)=>blurHandler(e));
    inputPhone.addEventListener("input", (e)=>phoneHandler(e));
    inputPhone.addEventListener("blur", (e)=>blurHandler(e));
    inputProjectDetails.addEventListener("input", (e)=>projectDetailsHandler(e));
    inputProjectDetails.addEventListener("blur", (e)=>blurHandler(e));
    submitButtonMob.addEventListener("click", ()=>{
        (0, $gkwRL.updateOneState)("buttonClick", (0, $gkwRL.getState)().buttonClick + 1);
    });
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().nameDirty) inputNames.classList.add("checked");
        else inputNames.classList.remove("checked");
    }, "nameDirty");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().companyDirty) inputCompany.classList.add("checked");
        else inputCompany.classList.remove("checked");
    }, "companyDirty");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().emailDirty) inputEmail.classList.add("checked");
        else inputEmail.classList.remove("checked");
    }, "emailDirty");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().phoneDirty) inputPhone.classList.add("checked");
        else inputPhone.classList.remove("checked");
    }, "phoneDirty");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().projectDetailsDirty) inputProjectDetails.classList.add("checked");
        else inputProjectDetails.classList.remove("checked");
    }, "projectDetailsDirty");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().nameDirty && (0, $gkwRL.getState)().nameError) {
            (0, $1A24E.el)(".wrongName").classList.add("visible");
            (0, $1A24E.el)(".rightName").classList.remove("visible");
            (0, $1A24E.el)(".errorMessageName").classList.add("show");
        } else {
            (0, $1A24E.el)(".errorMessageName").classList.remove("show");
            if ((0, $gkwRL.getState)().nameDirty && !(0, $gkwRL.getState)().nameError) {
                (0, $1A24E.el)(".rightName").classList.add("visible");
                (0, $1A24E.el)(".wrongName").classList.remove("visible");
            } else {
                (0, $1A24E.el)(".rightName").classList.remove("visible");
                (0, $1A24E.el)(".wrongName").classList.remove("visible");
            }
        }
    }, "nameDirty", "nameError");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().companyDirty && (0, $gkwRL.getState)().companyError) {
            (0, $1A24E.el)(".wrongCompany").classList.add("visible");
            (0, $1A24E.el)(".rightCompany").classList.remove("visible");
            (0, $1A24E.el)(".errorMessageCompany").classList.add("show");
        } else {
            (0, $1A24E.el)(".errorMessageCompany").classList.remove("show");
            if ((0, $gkwRL.getState)().companyDirty && !(0, $gkwRL.getState)().companyError) {
                (0, $1A24E.el)(".rightCompany").classList.add("visible");
                (0, $1A24E.el)(".wrongCompany").classList.remove("visible");
            } else {
                (0, $1A24E.el)(".rightCompany").classList.remove("visible");
                (0, $1A24E.el)(".wrongCompany").classList.remove("visible");
            }
        }
    }, "companyDirty", "companyError");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().emailDirty && (0, $gkwRL.getState)().emailError) {
            (0, $1A24E.el)(".wrongEmail").classList.add("visible");
            (0, $1A24E.el)(".rightEmail").classList.remove("visible");
            (0, $1A24E.el)(".errorMessageEmail").classList.add("show");
        } else {
            (0, $1A24E.el)(".errorMessageEmail").classList.remove("show");
            if ((0, $gkwRL.getState)().emailDirty && !(0, $gkwRL.getState)().emailError) {
                (0, $1A24E.el)(".rightEmail").classList.add("visible");
                (0, $1A24E.el)(".wrongEmail").classList.remove("visible");
            } else {
                (0, $1A24E.el)(".rightEmail").classList.remove("visible");
                (0, $1A24E.el)(".wrongEmail").classList.remove("visible");
            }
        }
    }, "emailDirty", "emailError");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().phoneDirty && (0, $gkwRL.getState)().phoneError) {
            (0, $1A24E.el)(".wrongPhone").classList.add("visible");
            (0, $1A24E.el)(".rightPhone").classList.remove("visible");
            (0, $1A24E.el)(".errorMessagePhone").classList.add("show");
        } else {
            (0, $1A24E.el)(".errorMessagePhone").classList.remove("show");
            if ((0, $gkwRL.getState)().phoneDirty && !(0, $gkwRL.getState)().phoneError) {
                (0, $1A24E.el)(".rightPhone").classList.add("visible");
                (0, $1A24E.el)(".wrongPhone").classList.remove("visible");
            } else {
                (0, $1A24E.el)(".rightPhone").classList.remove("visible");
                (0, $1A24E.el)(".wrongPhone").classList.remove("visible");
            }
        }
    }, "phoneDirty", "phoneError");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().projectDetailsDirty && (0, $gkwRL.getState)().projectDetails) (0, $1A24E.el)(".rightProjectDetails").classList.add("visible");
        else (0, $1A24E.el)(".rightProjectDetails").classList.remove("visible");
    }, "projectDetailsDirty", "projectDetails");
    if (!scrollTrigger) return;
    (0, $h8x9E.gsap).context(()=>{
        scrollTrigger.toggleActions = "play none none reset";
        const tl = (0, $h8x9E.gsap).timeline({
            scrollTrigger: scrollTrigger,
            paused: true
        }).from(formRef, {
            y: 70,
            duration: 1,
            ease: "power4.out",
            opacity: 0
        }).from([
            `.input-animation`,
            ".policy-animation"
        ], {
            duration: 1,
            ease: "power4.out",
            marginTop: "+=50"
        }, "<0.4");
    }, formRef);
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().nameError || (0, $gkwRL.getState)().companyError || (0, $gkwRL.getState)().emailError || (0, $gkwRL.getState)().phoneError) (0, $gkwRL.updateOneState)("formValid", false);
        else (0, $gkwRL.updateOneState)("formValid", true);
    }, "nameError", "companyError", "emailError", "phoneError");
    (0, $gkwRL.selectState)((newState)=>{
        if ((0, $gkwRL.getState)().buttonClick > 0) formSend();
    }, "buttonClick");
    const formSend = async ()=>{
        if ((0, $gkwRL.getState)().formValid) {
            let formData = {
                name: (0, $gkwRL.getState)().name,
                company: (0, $gkwRL.getState)().company,
                email: (0, $gkwRL.getState)().email,
                phone: (0, $gkwRL.getState)().phone,
                project_details: (0, $gkwRL.getState)().projectDetails,
                action: "callback_action",
                nonce: window["callback_object"]?.nonce
            };
            const fd = new FormData();
            Object.keys(formData).forEach((key)=>{
                fd.append(key, formData[key]);
            });
            let response = await fetch(window["callback_object"]?.url, {
                method: "POST",
                body: fd
            });
            if (response.ok) {
                (0, $gkwRL.updateOneState)("formSended", true);
                (0, $gkwRL.updateOneState)("name", "");
                (0, $gkwRL.updateOneState)("company", "");
                (0, $gkwRL.updateOneState)("email", "");
                (0, $gkwRL.updateOneState)("phone", "");
                (0, $gkwRL.updateOneState)("projectdetails", "");
            }
        } else {
            (0, $gkwRL.updateOneState)("nameDirty", true);
            (0, $gkwRL.updateOneState)("companyDirty", true);
            (0, $gkwRL.updateOneState)("emailDirty", true);
            (0, $gkwRL.updateOneState)("phoneDirty", true);
            (0, $gkwRL.updateOneState)("projectDetailsDirty", true);
        }
    };
    const nameHandler = (e)=>{
        (0, $gkwRL.updateOneState)("name", e.target.value);
        (0, $gkwRL.updateOneState)("nameDirty", true);
        e.target.value ? (0, $gkwRL.updateOneState)("nameError", "") : (0, $gkwRL.updateOneState)("nameError", (0, $1A24E.el)("#formRef .errorMessageName").dataset.error_required);
    };
    const companyHandler = (e)=>{
        (0, $gkwRL.updateOneState)("company", e.target.value);
        (0, $gkwRL.updateOneState)("companyDirty", true);
        e.target.value ? (0, $gkwRL.updateOneState)("companyError", "") : (0, $gkwRL.updateOneState)("companyError", (0, $1A24E.el)("#formRef .errorMessageCompany").dataset.error_required);
    };
    const emailHandler = (e)=>{
        (0, $gkwRL.updateOneState)("email", e.target.value);
        (0, $gkwRL.updateOneState)("emailDirty", true);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (e.target.value) {
            if (!re.test(String(e.target.value).toLowerCase())) (0, $gkwRL.updateOneState)("emailError", (0, $1A24E.el)("#formRef .errorMessageEmail").dataset.error_email);
            else (0, $gkwRL.updateOneState)("emailError", "");
        } else (0, $gkwRL.updateOneState)("emailError", (0, $1A24E.el)("#formRef .errorMessageEmail").dataset.error_required);
    };
    const phoneHandler = (e)=>{
        (0, $gkwRL.updateOneState)("phone", e.target.value);
        (0, $gkwRL.updateOneState)("phoneDirty", true);
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (e.target.value) {
            if (!re.test(String(e.target.value).toLowerCase())) (0, $gkwRL.updateOneState)("phoneError", (0, $1A24E.el)("#formRef .errorMessagePhone").dataset.error_phone);
            else (0, $gkwRL.updateOneState)("phoneError", "");
        } else (0, $gkwRL.updateOneState)("phoneError", (0, $1A24E.el)("#formRef .errorMessagePhone").dataset.error_required);
    };
    const projectDetailsHandler = (e)=>{
        (0, $gkwRL.updateOneState)("projectDetails", e.target.value);
        (0, $gkwRL.updateOneState)("projectDetailsDirty", true);
    };
    const blurHandler = (e)=>{
        switch(e.target.name){
            case "name":
                (0, $gkwRL.updateOneState)("nameDirty", true);
                break;
            case "company":
                (0, $gkwRL.updateOneState)("companyDirty", true);
                break;
            case "email":
                (0, $gkwRL.updateOneState)("emailDirty", true);
                break;
            case "phone":
                (0, $gkwRL.updateOneState)("phoneDirty", true);
                break;
            case "project details":
                (0, $gkwRL.updateOneState)("projectDetailsDirty", true);
                break;
        }
    };
}
(0, $ix1dx.onDomReady)($6c9c18d8981b5793$export$f22da7240b7add18);

})();
