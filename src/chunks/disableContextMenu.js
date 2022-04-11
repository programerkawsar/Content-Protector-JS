// Disabled Mouse Right Click or Context Menu
export default function disableContextMenu() {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
}
