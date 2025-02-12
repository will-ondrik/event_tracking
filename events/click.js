/**
 * @class ClickEvent
 * @description This class is responsible for creating a click event object
 * @param {Event} event
 * @returns {Object} ClickEvent
 */
class ClickEvent {
    constructor(event) {
        console.log('ClickEvent', event);
        const target = event.target;

        this.className = this.getClass(target);
        this.tagName = target.tagName;
        this.id = target.id || null;
        this.sessionId = sessionStorage.getItem('sessionId') || null;
        this.text = target.innerText || null;
        this.timestamp = new Date().toISOString();
        this.url = window.location.href;
        this.coordinates = {
            xCoord: event.pageX,
            yCoord: event.pageY,
        };
    }

    getClass(target) {
        if (!(target instanceof HTMLElement) || !target.classList) {
            this.className = null;
            return;
        }

        this.className = target.classList?.length ? Array.from(target.classList.join(" ")) : target.className || null;
        console.log('this.className', this.className);
    }
}

export default ClickEvent;