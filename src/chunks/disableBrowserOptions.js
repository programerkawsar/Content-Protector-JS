// Disabled Hot Keys for Save or Save as, View Source, and Print Page
export default function disableBrowserOptions() {
    document.addEventListener('keydown', (e) => {
        // Ctrl+S (Windows and Linux), Command+S (MacOS)
        if ((e.ctrlKey && e.key === 's') || (e.metaKey && e.key === 's')) {
            e.preventDefault();
        }

        // Ctrl+U (Windows and Linux), Command+U (MacOS)
        if ((e.ctrlKey && e.key === 'u') || (e.metaKey && e.key === 'u')) {
            e.preventDefault();
        }

        // Ctrl+P (Windows and Linux), Command+P (MacOS)
        if ((e.ctrlKey && e.key === 'p') || (e.metaKey && e.key === 'p')) {
            e.preventDefault();
        }
    });
}
