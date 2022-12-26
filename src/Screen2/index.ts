import {onDomReady} from "../utils/utils";
import { GlobalState, selectState } from '../state/state';

const id = '#screen2'
export function main() {

    document.querySelector(`${id} button`).addEventListener('click', () => {
        console.log('clicked 2');
    })

    selectState((newState: GlobalState) => {
        console.log('State from select ',  newState.counter);
    })
}

onDomReady(main);
