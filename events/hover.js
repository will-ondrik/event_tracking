/**
 * @class HoverEvent
 * @description Tracks hover events on the page.
 * @param {Event} event
 * @returns {Object} HoverEvent
 */
class HoverEvent {
    constructor(event) {
        console.log('HoverEvent', event);
        const target = event.target;

        this.className = target.classList?.length 
            ? Array.from(target.classList.join(" "))
            : target.className || null;
        this.tagName = target.tagName;
        this.id = target.id || null;
        this.text = target.innerText || null;
        this.timestamp = new Date().toISOString();
        this.url = window.location.href;
        this.coordinates = {
            xCoord: event.pageX,
            yCoord: event.pageY,
        };
    }
}

export default HoverEvent;