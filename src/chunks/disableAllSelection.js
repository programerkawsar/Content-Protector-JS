// Disabled all types of text selections for all browsers
export default function disableAllSelection(selector) {
    // Added CSS properties to the selector
    selector.style.setProperty('-webkit-touch-callout', 'none', 'important');
    selector.style.setProperty('-webkit-user-select', 'none', 'important');
    selector.style.setProperty('-khtml-user-select', 'none', 'important');
    selector.style.setProperty('-moz-user-select', 'none', 'important');
    selector.style.setProperty('-ms-user-select', 'none', 'important');
    selector.style.setProperty('user-select', 'none', 'important');
}
