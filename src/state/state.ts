export interface GlobalState {
    scrollTriggers: object;
    counter?: number;
    cmsData: any;
    activePopupId: string | null;
    activePopupScreen: string | null;
    cursorState: null | 'leave' | 'enter' | 'toSmall';
    scroll3width: number;
    scroll8width: number;
    burger: boolean;
    scrollPage: string;
    activeRowIndex: number | null;
    imageNumber: number;
    formValid: boolean;
    buttonClick: number;
    formSended: boolean;

    name: string;
    company: string;
    email: string;
    phone: string;
    projectDetails: string;
    nameDirty: boolean;
    companyDirty: boolean;
    emailDirty: boolean;
    phoneDirty: boolean;
    projectDetailsDirty: boolean;
    nameError: string;
    companyError: string;
    emailError: string;
    phoneError: string;

}

let globalState: GlobalState = {
    scrollTriggers: {},
    cmsData: {
        "path_to_image": "/image",
        "cursor": "Drag",
        "header": {
            "logo": "A|Apricot",
            "menu": [{",title": "About us", "link": "about"}, {"title": "Technology", "link": "technology"}, {
                "title": "Applying",
                "link": "applying"
            }, {"title": "Bennefits", "link": "bennefits"}, {"title": "Projects", "link": "projects"}, {
                "title": "Steps",
                "link": "steps"
            }, {"title": "Contacts", "link": "contacts"}],
            "languages": [{
                "title": "English",
                "link": "\/"
            },
                {
                    "title": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    "link": "\/ru\/"
                },
                {
                    "title": "\u0570\u0561\u0575\u0565\u0580\u0565\u0576",
                    "link": "\/hy\/"
                }
            ],
            "button_title": "Get in touch",
            "button_title_mobile": "Get <br\/> in touch"
        },
        "block_1": {
            "title": "Own your reality",
            "link_title_mobile": "Get in touch",
            "video_link": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/764937143\/rendition\/1080p\/file.mp4?loc=external&signature=4388a208c86b8a90f77a44e530be9a0d5226ac93ec8a0598c6b0008e535d2d5b",
            "video_preview_image": "/image/screen2/1.png"
        },
        "block_2": {
            "block_name": "About us",
            "title": "Apricot is a startup in the field of Immersive Technologies",
            "elements": [{
                "text": "We develop solutions for heavy and light industries, armed forces, as well as civil engineering solutions, based on the technologies of virtual and augmented reality",
                "image": "/image/screen3/01.png"
            }, {
                "text": "Apart from the design of solutions \r\nand technical support, we also provide our customers services in consulting and strategic planning in the field  of emerging technologies.",
                "image": "/image/screen3/02.png"
            }, {
                "text": "We are a team of highly qualified experts \r\nin immersive technologies with vast experience and an impressive portfolio of successfully implemented projects in various industries, including defense, education, and entertainment.",
                "image": "/image/screen3/03.png"
            }]
        },
        "block_3": {
            "block_name": "Our Goals",
            "title": "Creation of breakthrough technologies in the field of training simulators and Industry 4.0"
        },
        "block_4": {
            "block_name": "Technology",
            "background_text": "y — Technology — Technology — Technolog",
            "elements": [{
                "image": "image/screen5/1.png",
                "title": "Virtual Reality",
                "text": "A completely simulated virtual environment, with a panoramic view and a possibility of interaction with other participants through visual, tactile, auditory perception, etc."
            }, {
                "image": "image/screen5/2.png",
                "title": "Augmented Reality",
                "text": "Enabling the display of additional graphical elements linked to real-life objects. Adapted for mobile devices"
            }, {
                "image": "image/screen5/3.png",
                "title": "Mixed Reality",
                "text": "A technology that is similar to AR, enhanced by headset, and glasses with an integrated camera"
            }, {
                "image": "image/screen5/4.png",
                "title": "Metaverse",
                "text": "This collective environment is shared the resulting space practically improved convergence physical reality outer space, including the sum of all turnovers in the world, augmented reality and the Internet"
            }]
        },
        "block_5": {
            "block_name": "Sectors",
            "elements": [{
                "title": "Industry",
                "texts": ["Production line simulation and sequencing", "Planning of standard procedures and emergency scenarios", "Freshmen training - navigation through various areas and rooms"]
            }, {
                "title": "Military-industrial complex",
                "texts": ["The VR complex creates an environment as close as possible to combat, which allows the employee to prepare for the upcoming operational and combat operations anywhere in the world", "Shooting simulators from all types of weapons", "Simulators for training assault units"]
            }, {
                "title": "Entertainment",
                "texts": ["VR gaming content", "Amusement Parks", "Genuine experiences of visiting any place without physical travel", "Creation of an extensive information field, from text data to video content"]
            }, {
                "title": "Retail",
                "texts": ["Possibility to interact with the virtual environment, e.g. online shopping or bookingd", "Creation of AR navigation"]
            }, {
                "title": "Education",
                "texts": ["Various training courses", "Historical projects with a virtual immersion in the relevant epoch", "Teaching schoolchildren and students with the use of virtual simulators"]
            }, {
                "title": "Development",
                "texts": ["Apartment visualization", "Free movement", "Interaction with the environment for the creation of the desired interior", "Visualization of any objects and spaces, from a simple room to an entire city"]
            }],
            "random_images": [{"image": "image/screen6/1.png"}, {"image": "image/screen6/2.png"}, {"image": "image/screen6/3.png"}, {"image": "image/screen6/4.png"}]
        },
        "block_6": {
            "block_name": "Applying",
            "elements": [{
                "preview": {
                    "title": "Training",
                    "text": "Applying the technology of virtual reality in industry primarily serves for efficient training. Immersive simulators effectively translate skills and knowledge to personnel, reducing the time it takes them to attain a high level of expertise."
                },
                "detail": {
                    "title": "Training",
                    "topText": "Applying the technology of virtual reality in industry primarily serves for efficient training. Immersive simulators effectively translate skills and knowledge to personnel, reducing the time it takes them to attain a high level of expertise. In a safe immersive environment, specialists learn and practice basic skills for plant operation and maintenance, and learn proven action plans for a variety of situations.",
                    "image": "image/screen7/1.png",
                    "sub_title": "These can include accident prevention training at a plant, synchronization of multiple employees operations - infrequent, but critical procedures.",
                    "rightBottomText": "Thanks to virtual reality, a person not only formally memorizes the sequence of actions but also visually drills out the order of actions at each stage of work for both planned and emergency situations. VR technology enables the training of a large number of people and the creation of comprehensive industry-related courses. Immersive training is implemented both at the level of VR simulator to work with specific equipment, and at the level of an entire virtual plant. Here, the possibilities are only limited by the company&amp;#39;s budget.",
                    "leftBottomText": "",
                    "list": [null]
                }
            }, {
                "preview": {
                    "title": "Designing",
                    "text": "AR and VR technologies are presently used to provide easier solutions for a variety of problems, from  designing new industrial lines and end products to training personnel and assisting with repair work."
                },
                "detail": {
                    "title": "Designing",
                    "topText": "AR and VR technologies are presently used to provide easier solutions for a variety of problems, from designing new industrial lines and end products to training personnel and assisting with repair work. These technologies allow companies to reduce mishandling risks, as well as minimize human error in working at hazardous sites.",
                    "image": "image/screen7/2.png",
                    "sub_title": "The possibility of visualizing the future production facility or a manufactured product is one of the greatest advantages offered by Immersive Technologies. This is achieved by 3D design with subsequent visualization of the generated 3D models in augmented or virtual reality. This brings the quality and speed of industrial design to a whole new level, and also allows for eliminating errors both in methods of execution and in ergonomics.",
                    "rightBottomText": "VR enables visualizing and interacting with aircraft CAD geometry because it provides an environment that is identical to the inside of the physical mockups which is built for each aircraft during the design phase. Likewise, apart from the visualization of CAD representations of parts, it\u2019s possible to move elements around their installed position, reach around obstacles, etc. It has the most beneficial impact on: \u2013 flight deck design\u2013 maintainability or accessibility verification assembly planning&#8221;\n",
                    "leftBottomText": "",
                    "list": []
                }
            }, {
                "preview": {
                    "title": "Military",
                    "text": "Immersive technologies has been adopted by the military \u2013 this includes all three services (army, navy and air force) \u2013 where it is used for training purposes."
                },
                "detail": {
                    "title": "Military",
                    "topText": "A virtual reality simulation enables them to do so but without the risk of death or a serious injury. They can re-enact a particular scenario, for example engagement with an enemy in an environment in which they experience this but without the real world risks. This has proven to be safer and less costly than traditional training methods.",
                    "image": "image/screen7/3.png",
                    "sub_title": "Immersive technologies has been adopted by the military \u2014 this includes all three services (army, navy and air force) \u2014 where it is used for training purposes. This is particularly useful for training soldiers for combat situations or other dangerous settings where they have to learn how to react in an appropriate manner.",
                    "leftBottomText": "",
                    "rightBottomText": "",
                    "list": [
                        "Multiplayer simulators of various types of weapons",
                        "Shooting simulators from any type of weapons with immersion in an environment as close as possible to combat",
                        "Simulators of RPGs, NLAW, Javeline, ATGMs, MANPADS and various types of small arms",
                        "Assault Room",
                        "Simulators for training assault units",
                        "VR-creation complex, as close as possible to combat, which allows you to prepare the action for theupcoming operational-combat action in any perception of the world",
                        "Simulators of various types of heavy and light military equipment",
                        "Simulators for training crews of various types of military equipment",
                        "The VR-complex creates an environment as close as possible to the combat and includes various",
                        "scenarios of military operations"
                    ]
                }
            }, {
                "preview": {
                    "title": "Engineers\u2019 learning tool",
                    "text": "Immersive technologies has been adopted by the military \u2013 this includes all three services (army, navy and air force) \u2013 where it is used for training purposes."
                },
                "detail": {
                    "title": "Engineers\u2019 learning tool",
                    "topText": "",
                    "image": "image/screen7/4.png",
                    "sub_title": "",
                    "leftBottomText": "Engineers don\u2019t have accessible that many studying materials. They often need to wait for some complex structure to become available as a learning tool With the help of VR technology, their learning process would go much faster since it creates a virtual environment that allows engineers to view that composite structures and learn how to manage them well.&#8221;",
                    "rightBottomText": "",
                    "list": []
                }
            }, {
                "preview": {
                    "title": "Maintenance",
                    "text": "The use of Immersive Technologies significantly increases the efficiency of repair work control."
                },
                "detail": {
                    "title": "Maintenance",
                    "topText": "The use of Immersive Technologies significantly increases the efficiency of repair work control. AR glasses, phone or tablet allow quick access to technical documentation, ongoing production data, and repair knowledge bases at the break location, thus increasing the quality of maintenance operations, reducing the repair time, and hence any downtime loss. As example it\u2019s an AR application that overlays the machine with its own 3D model in real-time.",
                    "image": "image/screen7/5.png",
                    "sub_title": "The technology brings into sight everything that is under the equipment framework: from specific pieces to internal processes. This speeds up the technical maintenance service, as you will no longer need to keep multi-page manuals or seek high-cost professional advice",
                    "leftBottomText": "",
                    "rightBottomText": "The use of Immersive Technologies significantly increases the efficiency of repair work control. AR glasses, phone or tablet allow quick access to technical documentation, ongoing production data, and repair knowledge bases at the break location, thus increasing the quality of maintenance operations, reducing the repair time, and hence any downtime loss. As example it’s an AR application that overlays the machine with its own 3D model in real-time.",
                    "list": ""
                }
            }]
        },
        "block_7": {
            "title": "Benefits",
            "elements": [{
                "text": "Achieving a significant economic effect in the process of training and operation",
                "image": "/image/screen8/01.png"
            }, {
                "text": "Reducing the risks of improper operation of equipment and the role of the human factor when working at hazardous facilities",
                "image": "/image/screen8/02.png"
            }, {
                "text": "Increasing the effectiveness of the learning process and increasing the flow of trainees",
                "image": "/image/screen8/03.png"
            }, {
                "text": "The ability to model the maximum number of emergency situations at the enterprise and the method of leveling risks",
                "image": "/image/screen8/04.png"
            }]
        },
        "block_8": {
            "block_name": "Completed projects",
            "tags": ["IT sector", "production", "training", "factories", "universities", "schools", "entertainment", "retail"],
            "button_previous_text": "Previous",
            "button_next_title": "Next",
            "elements": [{
                "preview": {
                    "title": "Biochemical laboratory",
                    "tags": ["VR", "Training"],
                    "video_link": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/765485982\/rendition\/720p\/file.mp4?loc=external&signature=a1be537800625d608f76c263f0ee4cca5ac424418d81606a45427c75fac8aea0"
                },
                "detail": {
                    "title": "Simulator of chemical production with simulation of work in a chemical isolator",
                    "characteristics": [{"name": "Industry", "value": "pharmaceutical"}, {
                        "name": "Technology",
                        "value": "VR"
                    }],
                    "video_link_1": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/765485982\/rendition\/720p\/file.mp4?loc=external&signature=a1be537800625d608f76c263f0ee4cca5ac424418d81606a45427c75fac8aea0",
                    "sub_title": "Simulator of chemical production with simulation of work in a chemical isolator.",
                    "video_link_2": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/765424814\/rendition\/1080p\/file.mp4?loc=external&signature=87d09378576a45932cb4e4e3e1486e42327f597f9d2cc7c801e68f70e20f0a41",
                    "list": [
                        "Laboratory Simulation of work in the Bio-Chemical Laboratory. The laboratory is assembled from a real sample. The participant is in the laboratory as an employee, and he has to perform certain tasks related to the technical part.",
                        "There is a strict sequence of actions that must be followed in real life. In this scenario, the VR simulator allows you to get acquainted with the tasks, perform them using fine motor skills, follow the mandatory sequence of tasks, which is extremely important in real life.",
                        "In this simulator, if any mistake is made, there will be no critical outcome, due to which the risk of a threat to the life and health of workers is minimized."
                    ]
                }
            }, {
                "preview": {
                    "title": "Mars",
                    "tags": ["VR", "Training"],
                    "video_link": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/765485967\/rendition\/720p\/file.mp4?loc=external&signature=b29c801ef9a86487d9c1c25ef29d96e1457ec0c1fda0e3166f6c3592adc98220"
                },
                "detail": {
                    "title": "Mars Simulation of work on Mars",
                    "characteristics": [{"name": "Industry", "value": "pharmaceutical"}, {
                        "name": "Technology",
                        "value": "VR"
                    }],
                    "video_link_1": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/765485967\/rendition\/720p\/file.mp4?loc=external&signature=b29c801ef9a86487d9c1c25ef29d96e1457ec0c1fda0e3166f6c3592adc98220",
                    "sub_title": "Mars Simulation of work on Mars",
                    "video_link_2": "https:\/\/player.vimeo.com\/progressive_redirect\/playback\/765471334\/rendition\/1080p\/file.mp4?loc=external&signature=7d89ad0de67a794723b49b21149f6ea1b119bc4606e2ff1fa6e81926d6dc18be",
                    "list": [
                        "The VR simulator makes it possible to simulate being on the surface of Mars, conduct work and research, collect analyzes, interact with the rover or with other astronauts. ",
                        "The simulator is suitable for demonstrating the theoretical part in order to get a visual experience.",
                        "You can program any action according to a pre-thought-out scenario."
                    ]
                }
            }]
        },
        "block_9": {
            "block_name": "Steps",
            "title": "Step-by-step process from application, information exchange, technical assignment, contract and finished product",
            "elements": [{"text": "Application form"}, {"text": "Initial call with discussion of the task"}, {"text": "Exchange of materials (drawings, models, photos, videos)"}, {"text": "Technical description"}, {"text": "Approval of the terms of reference"}, {"text": "Commercial offer and contract signing"}, {"text": "Completing the task"}]
        },
        "block_10": {
            "title": "Let\u2019s start a project",
            "name_title": "Name",
            "company_title": "Company",
            "email_title": "Email",
            "phone_title": "Phone",
            "project_details_title": "Project details",
            "required_error": "Required field!",
            "email_error": "Wrong email, please enter a valid one",
            "phone_error": "Wrong phone number, please enter a valid one",
            "policy_text_1": "By clicking the Submit button you agree to our",
            "policy_text_2": "Privacy Policy terms",
            "policy_link": "#",
            "submit_text": "Submit",
            "thanks_image": "/image/form/3.png",
            "thanks_text_1": "Thanks for the application,",
            "thanks_text_2": "we will contact you soon!"
        },
        "footer": {
            "title": "Get in touch",
            "email": "Info@apricotxr.com",
            "email_href": "mailto:Info@apricotxr.com",
            "address_region": "Armenia, Yerevan",
            "phone": "+374 94 282499",
            "phone_href": "tel:+374 94 282499",
            "address_detail": "Abelyan st. 6\/1, B 302",
            "copyright_text": "\u00a9 2022, Apicot",
            "policy_text": "Privacy policy",
            "policy_link": "",
            "social_links": [{
                "id": "instagram",
                "link": "https://instagram.com/apricot_xr?igshid=YmMyMTA2M2Y="
            }, {
                "id": "whatsapp",
                "link": "https://api.whatsapp.com/send?phone=79032296363"
            }, {
                "id": "linkedin",
                "link": "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A82477794&keywords=apricot&origin=RICH_QUERY_SUGGESTION&position=0&searchId=f07d22a6-2365-469c-96d2-73ee219d0076&sid=a8D"
            }],
            "to_top_button_title": "Back to top"
        }
    },
    activePopupId: null,
    activePopupScreen: null,
    cursorState: null,
    scroll3width: 0,
    scroll8width: 0,
    burger: false,
    scrollPage: '',
    activeRowIndex: 0,
    imageNumber: 0,
    formValid: true,
    buttonClick: 0,
    formSended: false,

    name: '',
    company: '',
    email: '',
    phone: '',
    projectDetails: '',
    nameDirty:  false,
    companyDirty:  false,
    emailDirty:  false,
    phoneDirty:  false,
    projectDetailsDirty: false,
    nameError: 'Required field!',
    companyError: 'Required field!',
    emailError: 'Required field!',
    phoneError: 'Required field!',

};
const listeners = {
    all: [],
    scrollTriggers: [],
    counter: [],
    cmsData: [],
    activePopupId: [],
    activePopupScreen: [],
    cursorState: [],
    scroll3width: [],
    scroll8width: [],
    burger: [],
    scrollPage: [],
    activeRowIndex: [],
    imageNumber: [],
    formValid: [],
    buttonClick: [],
    formSended: [],


    name: [],
    company: [],
    email: [],
    phone: [],
    projectDetails: [],
    nameDirty:   [],
    companyDirty:   [],
    emailDirty:   [],
    phoneDirty:   [],
    projectDetailsDirty:  [],
    nameError: [],
    companyError:[],
    emailError: [],
    phoneError: [],
};

export function updateState(newState: GlobalState) {
    globalState = {
        ...newState,
    }

    listeners.all.forEach(fn => fn(globalState))
}

export function updateOneState(key: string, object: any) {
    globalState[key] = object,
        listeners[key].forEach(fn => fn(globalState))
}

export function getState(): GlobalState {
    return globalState;
}

export function selectState(fn: (newState: GlobalState) => void , ...keys:[string]) {


    if (keys) {
        for (let item of keys) {
            if (listeners[item].indexOf(fn) === -1) {
                listeners[item].push(fn);
            }
            fn(globalState[item]);
        }

    } else {
        if (listeners.all.indexOf(fn) === -1) {
            listeners.all.push(fn);
        }
        fn(globalState);
    }
}

export function unsubscribe(fn, ...keys) {

    if (keys) {
        for (let key of keys) {
            const index = listeners[key].indexOf(fn);
            if (index !== -1) {
                listeners[key].splice(index, 1);
            }
        }


    } else {
        const index = listeners.all.indexOf(fn);
        if (index !== -1) {
            listeners.all.splice(index, 1);
        }
    }


}
