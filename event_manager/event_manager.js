import ClickEvent from '../events/click.js';
import HoverEvent from '../events/hover.js';
import PageView from '../events/page_view.js';
import MetaData from '../browser/metadata.js';

/**
 * @class EventManager
 * @description EventManager class is responsible for tracking user events on the website.
 * @returns {Object} EventManager
 */
class EventManager {
    constructor() {
        this.sessionId = this.createSessionId.bind(this);
        this.cache = {}; 
        this.init = this.init.bind(this);
    }

    createSessionId() {
        let sessionId = sessionStorage.getItem('sessionId') || null;

        if (sessionId === null) {
            sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            sessionStorage.setItem('sessionId', sessionId);
        }
        return sessionId;
    }

    init() {
        document.addEventListener('click', (event) => {
            if (!(event.target instanceof HTMLElement)) {
                return;
            } 
            const clickEvent = new ClickEvent(event);
            this.cache[clickEvent.timestamp] = clickEvent;
        });

        document.addEventListener('mouseenter', (event) => {
            const hoverEvent = new HoverEvent(event);
            this.cache[hoverEvent.timestamp] = hoverEvent;
        });

        document.addEventListener('DOMContentLoaded', (event) => {
            const pageView = new PageView();
            this.cache[pageView.timestamp] = pageView;

            const metadata = new MetaData();
            console.log('metadata', metadata);

            if (!(this.cache[metadata])) {
                this.cache[metadata] = metadata
            }
        });

        document.addEventListener("DOMContentLoaded", this.injectTrackingPixel());

        document.addEventListener("visibilitychange", function logData() {
            if (document.visibilityState === "hidden") {
                console.log("Visibility change")
              navigator.sendBeacon("http://localhost:8080//beacon", "works!");
            }
          });
    }

    async injectTrackingPixel() {
        try {
            const response = await fetch("http://localhost:8080/pixel");
            const data = await response.json();
    
            console.log("User Geolocation:", data.geolocation);
    
            const img = new Image();
            img.src = data.pixel; // Base64-encoded tracking pixel
            img.width = 1;
            img.height = 1;
            img.style.position = "absolute";
            img.style.left = "-9999px"; 
            img.style.top = "-9999px"; 
            img.alt = "";
            document.body.appendChild(img);
        } catch (error) {
            console.error("Error fetching tracking pixel:", error);
        }
    }    
        
}

export default EventManager;

/*
Constructor
- run popup for permissions
    - if permission granted
        - set cookie
    - if permission denied
        - no cookie set
        - aggregate data

- timer
- current url
- 


Events
- click -- done
- hover -- done
- form submission
- scroll
- session duration
- page view -- done

Data
- browser/operating system
    navigator.userAgent -- needs to be parsed

- referrer
    document.referrer

- device type


- bounce rate
- page view time
- exit pages
- operating system
- geolocation
- traffic source
- user language

*/



/*
- users
- new users
- sessions
- pageviews
- pages per session
- avg session duration
- bounce rate
- exit rate
- conversion rate


*/