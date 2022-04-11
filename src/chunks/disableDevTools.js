// Imported devtools plugin
// This plugin will be used for checking Developer’s Tools are open or not
import devtools from 'devtools-detect';

// Hide content when Developer’s Tools are opend
export default function disableDevTools() {
    // Warning page HTML
    const html = `
        <div style="display: flex; height: 100vh; align-items: center; justify-content: center; text-align: center;">
            <div>
                <h1 style="color: red;">Opps!</h1>
                <p style="margin-bottom: 6px;">Developer Tools are not allowed on this page to protect the contents!</p>
                <p style="margin: 0;">Please close the Developer Toolbar and <a href="">refresh</a> the page</p>
            </div>
        </div>
    `;

    // Check if it's open
    if (devtools.isOpen) {
        document.body.innerHTML = html;
    }

    // Get notified when it's opened/closed or orientation changes
    window.addEventListener('devtoolschange', (e) => {
        if (e.detail.isOpen) {
            document.body.innerHTML = html;
        }
    });
}
