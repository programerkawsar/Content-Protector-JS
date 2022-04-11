// Disabled Copy, Cut, and Paste
export default function disableCopyCutPaste(selector) {
    // Added HTML attribute to the selector
    selector.setAttribute('oncopy', 'return false');
    selector.setAttribute('oncut', 'return false');
    selector.setAttribute('onpaste', 'return false');
}
