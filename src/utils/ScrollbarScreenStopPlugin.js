import {ScrollbarPlugin} from "smooth-scrollbar";

export class ScrollbarScreenStopPlugin extends ScrollbarPlugin {
    static pluginName = 'screenStop';

    static defaultOptions = {
        points: [],
    };

    onRender(remainMomentum) {
        // remainMomentum {x: 0, y: 0}

        if (!remainMomentum.y) {
            return;
        }
        const direction = remainMomentum.y / Math.abs(remainMomentum.y);
        let nextPointMatch;
        this.options.points.forEach((p, index) => {
            if (direction === 1) {
                if (this.scrollbar.scrollTop < p && index === 0) {
                    nextPointMatch = p;
                }

                if (this.scrollbar.scrollTop < p &&  this.scrollbar.scrollTop > this.options.points[index - 1]) {
                    nextPointMatch = p;
                }
            } else {
                if (this.scrollbar.scrollTop > p && index === this.options.points.length - 1) {
                    nextPointMatch = p;
                }

                if (this.scrollbar.scrollTop < p &&  this.scrollbar.scrollTop > this.options.points[index - 1]) {
                    nextPointMatch = this.options.points[index - 1];
                }
            }
        })

        if (!nextPointMatch) {
            return;
        }

        if (direction === 1 && this.scrollbar.scrollTop + remainMomentum.y >= nextPointMatch) {
            this.scrollbar.setMomentum(0, direction * (nextPointMatch - this.scrollbar.scrollTop));
        }

        if (direction === -1 && this.scrollbar.scrollTop + remainMomentum.y <= nextPointMatch) {
            this.scrollbar.setMomentum(0, direction * (this.scrollbar.scrollTop - nextPointMatch));
        }
    }
}
