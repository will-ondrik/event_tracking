/**
 * @class MetaData
 * @description This class is responsible for creating a metadata object
 * @returns {Object} MetaData
 */
class MetaData {
    constructor(){
        console.log('MetaData event');
        this.sessionId = sessionStorage.getItem('sessionId') || null;
        this.geolocation = navigator.geolocation || null;
        this.language = navigator.language;
        this.timestamp = new Date().toISOString();
        this.browser = this.getBrowser(navigator);
        this.os = this.getOS(navigator);

    }

    getBrowser(navigator){
        if (navigator.brave) {
            return 'Brave';
        }

        const browser = navigator.userAgent;
        switch (browser) {
            case browser.indexOf('Chrome') > -1:
                return 'Chrome';
            case browser.indexOf('Firefox') > -1:
                return 'Firefox';
            case browser.indexOf('Safari') > -1:
                return 'Safari';
            case browser.indexOf('Edge') > -1:
                return 'Edge';
            case browser.indexOf('MSIE') > -1:
                return 'Internet Explorer';
            default:
                return 'Unknown';
        }

    }

    getOS(navigator) {
        const userAgent = navigator.userAgent;
    
        const osPatterns = [
            { name: "Windows", regex: /Windows NT/i },
            { name: "MacOS", regex: /Mac OS X/i },
            { name: "Linux", regex: /Linux/i },
            { name: "Android", regex: /Android/i },
            { name: "iOS", regex: /(iPhone|iPad|iPod)/i }
        ];
    
        for (const os of osPatterns) {
            if (os.regex.test(userAgent)) {
                console.log('os.name', os.name);
                return os.name;
            }
        }
    
        return "Unknown OS";
    }

}

export default MetaData;