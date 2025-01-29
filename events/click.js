/**
 * ClickEvent
 * @description This class is responsible for creating a click event object
 * @param {Event} event
 * @returns {Object} ClickEvent
 */
class ClickEvent {
    constructor(event) {
        const target = event.target;

        this.className = target.classList?.length
            ? Array.from(target.classList.join(" "))
            : target.className || null;
        this.tagName = target.tagName
        this.id = target.id || null;
        this.text = target.innerText || null;
        this.timestamp = new Date.toISOString();
        this.url = window.location.href;
        this.coordinates = {
            xCoord: event.pageX,
            yCoord: event.pageY,
        };
    }
}

