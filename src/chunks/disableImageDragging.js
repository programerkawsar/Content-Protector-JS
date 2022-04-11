// Disabled Image Dragging by Mouse
export default function disableImageDragging(selector) {
    // Get all image attributes from selector
    const images = selector.querySelectorAll('img');

    if (images.length !== 0) {
        // Add CSS property in each image attribute
        images.forEach((item) => {
            item.style.setProperty('pointer-events', 'none', 'important');
        });
    }
}
