export function el<T extends HTMLElement>(selector: string): T {
    return document.querySelector(selector);
}

export function els(selector: string) {
    return document.querySelectorAll(selector);
}