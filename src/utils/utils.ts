export function test() {
    console.log('test');
}

export function onDomReady(fn) {
    document.addEventListener("DOMContentLoaded", fn);
}
