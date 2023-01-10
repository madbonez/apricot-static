import {onDomReady} from "../utils/utils";
import { getState, GlobalState, selectState, updateState } from '../state/state';

const id = '#screen1'
export function main() {
/*    document.querySelector(`${id} button`).addEventListener('click', () => {
        console.log('clicked 1');

        const state: GlobalState = getState();
        updateState({
            counter: (state.counter ?? 0) + 1,
        })
    });*/
}

onDomReady(main);
