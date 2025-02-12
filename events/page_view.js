/**
 * @class PageView
 * @description This class is responsible for creating a page view event object
 * @returns {Object} PageView
 */
class PageView {
    constructor() {
        console.log('PageView event');
        const startTime = new Date();
        this.sessionId = this.getSessionId() || null; // TODO: retrieve cookie
        this.timestamp = new Date().toISOString();
        this.url = window.location.href;
    }

    getSessionId() {
       return sessionStorage.getItem('sessionId');
    }

    // ms duration
    getDuration(startTime) {
        return new Date() - startTime;
    }
    
}

export default PageView;