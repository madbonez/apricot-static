export function getHeightsSum(elements) {
    return {
        total: elements.reduce((acc, el) => {
            acc += el.offsetHeight;
            return acc;
        }, 0),
        all: elements.map(el => el.offsetHeight)
    }
}


export function resizeDetector(allScreensEl) {
    let resizeDetectorFn = (first) => {
        const last = getHeightsSum(
            allScreensEl
        );
        if (first.total !== last.total) {
            console.error('CRITICAL ERROR:::: Some screens jumps', first.total, last.total)

            first.all.forEach((item, index) => {
                if (item !== last.all[index]) {
                    console.log('jumpers list: ' + allScreensEl[index].className);
                }
            })
        }
    }
    resizeDetectorFn = resizeDetectorFn.bind(null, getHeightsSum(allScreensEl));
    setTimeout(resizeDetectorFn, 2000);
}
