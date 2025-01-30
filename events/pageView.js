/**
 * @class PageView
 * @description This class is responsible for creating a page view event object
 * @returns {Object} PageView
 */
class PageView {
    constructor() {
        const startTime = new Date();
        this.sessionId = getSessionId() || null; // TODO: retrieve cookie
        this.timestamp = new Date().toISOString();
        this.url = window.location.href;
    }

    getSessionId() {

    }

    // Returns the duration of the page view in milliseconds
    getDuration(startTime) {
        const endTime = new Date();
        return endTime - startTime;
    }
    
}