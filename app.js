import { loadData } from './services/Menu.js';
import Store from './services/Store.js';

// Turning Store into a global variable by attaching it to the window
window.app = {
    store: Store,
}

// It's better to wait for the event for manipulating the DOM
// Before that the DOM elements might not loaded
window.addEventListener("DOMContentLoaded", () => {
    loadData();
});