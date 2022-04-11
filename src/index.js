// Imported all chunks file
import disableAllSelection from './chunks/disableAllSelection';
import disableBrowserOptions from './chunks/disableBrowserOptions';
import disableContextMenu from './chunks/disableContextMenu';
import disableCopyCutPaste from './chunks/disableCopyCutPaste';
import disableDevTools from './chunks/disableDevTools';
import disableImageDragging from './chunks/disableImageDragging';

// JavaScript DOM selector you can also change it
// The contents inside of this DOM selector will be protected
const selector = document.body;

// Init all functions
disableAllSelection(selector);
disableCopyCutPaste(selector);
disableImageDragging(selector);
disableBrowserOptions(selector);
disableContextMenu();
disableDevTools();
