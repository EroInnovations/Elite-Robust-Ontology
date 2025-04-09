const ROUTER = (ELEMENT, STATED, TITLE, DATA, LINK,FUNCTION) => {
    const elementId = ELEMENT ? ELEMENT.id : '';
    
    // Display data on the element or globally
    if (ELEMENT) {
        DISPLAY(ELEMENT, DATA);
    } else {
        DISPLAY('', DATA);
    }

    // If environment is Production, handle the state for production URL
    if (localStorage.getItem("Environment") === "Production") {
        if (STATED && sessionStorage.getItem('PageName') !== TITLE) {
            STORE('', 'PageName', TITLE);
            const state = { data: DATA, elementId };
            history.pushState(state, "", "file:///android_res/");
            return;
        }
        STORE('', 'PageName', TITLE);
        const state = { data: DATA, elementId };
        history.replaceState(state, "", "file:///android_res/");
    } else {
        // For non-production (likely development mode)
        if (STATED && 
            (sessionStorage.getItem('PageName') !== TITLE || 
             !sessionStorage.getItem(TITLE))) {
            STORE('', 'PageName', TITLE);
            const state = { data: DATA, elementId };
            history.pushState(state, "", LINK);
            return;
        }
        STORE('', 'PageName', TITLE);
        const state = { data: DATA, elementId };
        history.replaceState(state, "", LINK);
    }
};

// Listen for the "popstate" event which is fired when navigating back or forward
window.addEventListener("popstate", function (event) {
    if (event.state && event.state.data) {
        const elementId = event.state.elementId;
        const ELEMENT = elementId ? document.querySelector(`#${elementId}`) : null;
        
        // Restore state and data for the element
        if (ELEMENT) {
            // Reload content by re-invoking DISPLAY function
            DISPLAY(ELEMENT, event.state.data);
            
            // Trigger additional reload or functions if necessary
            reloadAdditionalState(event.state.data);
        } else {
            // If no specific element is found, restore globally
            DISPLAY('', event.state.data);
            reloadAdditionalState(event.state.data);
        }
    }
});
