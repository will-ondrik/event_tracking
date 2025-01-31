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
        this.browser = getBrowser(navigator);
        this.os = getOS(navigator);

    }

    getBrowser(navigator){

    }

    getOS(navigator) {

    }

}

export default MetaData;