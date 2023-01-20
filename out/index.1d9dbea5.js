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

var $jbrIz = parcelRequire("jbrIz");

var $dfMDe = parcelRequire("dfMDe");

var $l6B09 = parcelRequire("l6B09");

var $7Hbkn = parcelRequire("7Hbkn");
const $19765fbb24d1077a$var$id = "form";
function $19765fbb24d1077a$export$f22da7240b7add18() {
    const scrollTrigger = (0, $dfMDe.getState)().scrollTriggers[`screen11Enter`];
    const formRef = (0, $7Hbkn.el)("#formRef");
    const inputNames = (0, $7Hbkn.el)("#inputName");
    const inputCompany = (0, $7Hbkn.el)("#inputCompany");
    const inputEmail = (0, $7Hbkn.el)("#inputEmail");
    const inputPhone = (0, $7Hbkn.el)("#inputPhone");
    const inputProjectDetails = (0, $7Hbkn.el)("#inputProjectDetails");
    const submitButtonMob = (0, $7Hbkn.el)("#formRef .submitButton");
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
        (0, $dfMDe.updateOneState)("buttonClick", (0, $dfMDe.getState)().buttonClick + 1);
    });
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().nameDirty) inputNames.classList.add("checked");
        else inputNames.classList.remove("checked");
    }, "nameDirty");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().companyDirty) inputCompany.classList.add("checked");
        else inputCompany.classList.remove("checked");
    }, "companyDirty");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().emailDirty) inputEmail.classList.add("checked");
        else inputEmail.classList.remove("checked");
    }, "emailDirty");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().phoneDirty) inputPhone.classList.add("checked");
        else inputPhone.classList.remove("checked");
    }, "phoneDirty");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().projectDetailsDirty) inputProjectDetails.classList.add("checked");
        else inputProjectDetails.classList.remove("checked");
    }, "projectDetailsDirty");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().nameDirty && (0, $dfMDe.getState)().nameError) {
            (0, $7Hbkn.el)(".wrongName").classList.add("visible");
            (0, $7Hbkn.el)(".rightName").classList.remove("visible");
            (0, $7Hbkn.el)(".errorMessageName").classList.add("show");
        } else {
            (0, $7Hbkn.el)(".errorMessageName").classList.remove("show");
            if ((0, $dfMDe.getState)().nameDirty && !(0, $dfMDe.getState)().nameError) {
                (0, $7Hbkn.el)(".rightName").classList.add("visible");
                (0, $7Hbkn.el)(".wrongName").classList.remove("visible");
            } else {
                (0, $7Hbkn.el)(".rightName").classList.remove("visible");
                (0, $7Hbkn.el)(".wrongName").classList.remove("visible");
            }
        }
    }, "nameDirty", "nameError");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().companyDirty && (0, $dfMDe.getState)().companyError) {
            (0, $7Hbkn.el)(".wrongCompany").classList.add("visible");
            (0, $7Hbkn.el)(".rightCompany").classList.remove("visible");
            (0, $7Hbkn.el)(".errorMessageCompany").classList.add("show");
        } else {
            (0, $7Hbkn.el)(".errorMessageCompany").classList.remove("show");
            if ((0, $dfMDe.getState)().companyDirty && !(0, $dfMDe.getState)().companyError) {
                (0, $7Hbkn.el)(".rightCompany").classList.add("visible");
                (0, $7Hbkn.el)(".wrongCompany").classList.remove("visible");
            } else {
                (0, $7Hbkn.el)(".rightCompany").classList.remove("visible");
                (0, $7Hbkn.el)(".wrongCompany").classList.remove("visible");
            }
        }
    }, "companyDirty", "companyError");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().emailDirty && (0, $dfMDe.getState)().emailError) {
            (0, $7Hbkn.el)(".wrongEmail").classList.add("visible");
            (0, $7Hbkn.el)(".rightEmail").classList.remove("visible");
            (0, $7Hbkn.el)(".errorMessageEmail").classList.add("show");
        } else {
            (0, $7Hbkn.el)(".errorMessageEmail").classList.remove("show");
            if ((0, $dfMDe.getState)().emailDirty && !(0, $dfMDe.getState)().emailError) {
                (0, $7Hbkn.el)(".rightEmail").classList.add("visible");
                (0, $7Hbkn.el)(".wrongEmail").classList.remove("visible");
            } else {
                (0, $7Hbkn.el)(".rightEmail").classList.remove("visible");
                (0, $7Hbkn.el)(".wrongEmail").classList.remove("visible");
            }
        }
    }, "emailDirty", "emailError");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().phoneDirty && (0, $dfMDe.getState)().phoneError) {
            (0, $7Hbkn.el)(".wrongPhone").classList.add("visible");
            (0, $7Hbkn.el)(".rightPhone").classList.remove("visible");
            (0, $7Hbkn.el)(".errorMessagePhone").classList.add("show");
        } else {
            (0, $7Hbkn.el)(".errorMessagePhone").classList.remove("show");
            if ((0, $dfMDe.getState)().phoneDirty && !(0, $dfMDe.getState)().phoneError) {
                (0, $7Hbkn.el)(".rightPhone").classList.add("visible");
                (0, $7Hbkn.el)(".wrongPhone").classList.remove("visible");
            } else {
                (0, $7Hbkn.el)(".rightPhone").classList.remove("visible");
                (0, $7Hbkn.el)(".wrongPhone").classList.remove("visible");
            }
        }
    }, "phoneDirty", "phoneError");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().projectDetailsDirty && (0, $dfMDe.getState)().projectDetails) (0, $7Hbkn.el)(".rightProjectDetails").classList.add("visible");
        else (0, $7Hbkn.el)(".rightProjectDetails").classList.remove("visible");
    }, "projectDetailsDirty", "projectDetails");
    if (!scrollTrigger) return;
    (0, $l6B09.gsap).context(()=>{
        scrollTrigger.toggleActions = "play none none reset";
        const tl = (0, $l6B09.gsap).timeline({
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
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().nameError || (0, $dfMDe.getState)().companyError || (0, $dfMDe.getState)().emailError || (0, $dfMDe.getState)().phoneError) (0, $dfMDe.updateOneState)("formValid", false);
        else (0, $dfMDe.updateOneState)("formValid", true);
    }, "nameError", "companyError", "emailError", "phoneError");
    (0, $dfMDe.selectState)((newState)=>{
        if ((0, $dfMDe.getState)().buttonClick > 0) formSend();
    }, "buttonClick");
    const formSend = async ()=>{
        if ((0, $dfMDe.getState)().formValid) {
            let formData = {
                name: (0, $dfMDe.getState)().name,
                company: (0, $dfMDe.getState)().company,
                email: (0, $dfMDe.getState)().email,
                phone: (0, $dfMDe.getState)().phone,
                project_details: (0, $dfMDe.getState)().projectDetails,
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
                (0, $dfMDe.updateOneState)("formSended", true);
                (0, $dfMDe.updateOneState)("name", "");
                (0, $dfMDe.updateOneState)("company", "");
                (0, $dfMDe.updateOneState)("email", "");
                (0, $dfMDe.updateOneState)("phone", "");
                (0, $dfMDe.updateOneState)("projectdetails", "");
            }
        } else {
            (0, $dfMDe.updateOneState)("nameDirty", true);
            (0, $dfMDe.updateOneState)("companyDirty", true);
            (0, $dfMDe.updateOneState)("emailDirty", true);
            (0, $dfMDe.updateOneState)("phoneDirty", true);
            (0, $dfMDe.updateOneState)("projectDetailsDirty", true);
        }
    };
    const nameHandler = (e)=>{
        (0, $dfMDe.updateOneState)("name", e.target.value);
        (0, $dfMDe.updateOneState)("nameDirty", true);
        e.target.value ? (0, $dfMDe.updateOneState)("nameError", "") : (0, $dfMDe.updateOneState)("nameError", (0, $7Hbkn.el)("#formRef .errorMessageName").dataset.error_required);
    };
    const companyHandler = (e)=>{
        (0, $dfMDe.updateOneState)("company", e.target.value);
        (0, $dfMDe.updateOneState)("companyDirty", true);
        e.target.value ? (0, $dfMDe.updateOneState)("companyError", "") : (0, $dfMDe.updateOneState)("companyError", (0, $7Hbkn.el)("#formRef .errorMessageCompany").dataset.error_required);
    };
    const emailHandler = (e)=>{
        (0, $dfMDe.updateOneState)("email", e.target.value);
        (0, $dfMDe.updateOneState)("emailDirty", true);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (e.target.value) {
            if (!re.test(String(e.target.value).toLowerCase())) (0, $dfMDe.updateOneState)("emailError", (0, $7Hbkn.el)("#formRef .errorMessageEmail").dataset.error_email);
            else (0, $dfMDe.updateOneState)("emailError", "");
        } else (0, $dfMDe.updateOneState)("emailError", (0, $7Hbkn.el)("#formRef .errorMessageEmail").dataset.error_required);
    };
    const phoneHandler = (e)=>{
        (0, $dfMDe.updateOneState)("phone", e.target.value);
        (0, $dfMDe.updateOneState)("phoneDirty", true);
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (e.target.value) {
            if (!re.test(String(e.target.value).toLowerCase())) (0, $dfMDe.updateOneState)("phoneError", (0, $7Hbkn.el)("#formRef .errorMessagePhone").dataset.error_phone);
            else (0, $dfMDe.updateOneState)("phoneError", "");
        } else (0, $dfMDe.updateOneState)("phoneError", (0, $7Hbkn.el)("#formRef .errorMessagePhone").dataset.error_required);
    };
    const projectDetailsHandler = (e)=>{
        (0, $dfMDe.updateOneState)("projectDetails", e.target.value);
        (0, $dfMDe.updateOneState)("projectDetailsDirty", true);
    };
    const blurHandler = (e)=>{
        switch(e.target.name){
            case "name":
                (0, $dfMDe.updateOneState)("nameDirty", true);
                break;
            case "company":
                (0, $dfMDe.updateOneState)("companyDirty", true);
                break;
            case "email":
                (0, $dfMDe.updateOneState)("emailDirty", true);
                break;
            case "phone":
                (0, $dfMDe.updateOneState)("phoneDirty", true);
                break;
            case "project details":
                (0, $dfMDe.updateOneState)("projectDetailsDirty", true);
                break;
        }
    };
}
(0, $jbrIz.onDomReady)($19765fbb24d1077a$export$f22da7240b7add18);


