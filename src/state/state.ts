export interface GlobalState {
    counter?: number;
}

let globalState: GlobalState = {};
const listeners = [];

export function updateState(newState: GlobalState) {
    globalState = {
        ...newState,
    }

    listeners.forEach(fn => fn(globalState))
}

export function getState(): GlobalState {
    return globalState;
}

export function selectState(fn: (newState: GlobalState) => void) {
    if (listeners.indexOf(fn) === -1) {
        listeners.push(fn);
    }

    fn(globalState);
}

export function unsubscribe(fn) {
    const index = listeners.indexOf(fn);
    if (index !== -1) {
        listeners.splice(index, 1);
    }
}
