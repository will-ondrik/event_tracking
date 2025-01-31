import EventManager from './event_manager/event_manager.js';

function main() {
    console.log('Running...');  
    const eventManager = new EventManager();
    eventManager.createSessionId();
    eventManager.init();
}

main();