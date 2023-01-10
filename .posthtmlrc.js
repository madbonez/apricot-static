const sequence = require('post-sequence');

const plugins = {
    "posthtml-extend": {
        root: "./"
    },
    "posthtml-include": {},
    "posthtml-expressions": {
        "locals": {
            "slides": [
                {
                    "text": "We develop solutions for heavy and light industries, armed forces, as well as civil engineering solutions, based on the technologies of virtual and augmented reality",
                    "image": "././public/image/screen3/01.png"
                },
                {
                    "text": "Apart from the design of solutions \r\nand technical support, we also provide our customers services in consulting and strategic planning in the field  of emerging technologies.",
                    "image": "././public/image/screen3/02.png"
                },
                {
                    "text": "We are a team of highly qualified experts \r\nin immersive technologies with vast experience and an impressive portfolio of successfully implemented projects in various industries, including defense, education, and entertainment.",
                    "image": "././public/image/screen3/03.png"
                }
            ]
        }
    }
}

const posthtmlConfig = {
    plugins: sequence(plugins, {processor: 'posthtml', namespace: true})
};

module.exports = posthtmlConfig;