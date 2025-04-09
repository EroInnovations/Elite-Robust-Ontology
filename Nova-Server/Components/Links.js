const ROUTER = (ELEMENT, STATED, TITLE, DATA, LINK) => {
    const elementId = ELEMENT ? ELEMENT.id : '';
    if (ELEMENT) {
      DISPLAY(ELEMENT, DATA);
    } else {
      DISPLAY('', DATA);
    }
    if (localStorage.getItem("Environment") === "Production") {
      if (STATED && sessionStorage.getItem('PageName') !== TITLE) {
        STORE('','PageName',TITLE);
        const state = { data: DATA, elementId };
        history.pushState(state, "", "file:///android_res/"); 
        return; 
      }
      STORE('','PageName',TITLE);
      const state = { data: DATA, elementId };
      history.replaceState(state, "", "file:///android_res/"); 
    } else {
      if (STATED && 
          (sessionStorage.getItem('PageName') !== TITLE || 
           !sessionStorage.getItem(TITLE))) {
        STORE('','PageName',TITLE);
        const state = { data: DATA, elementId };
        history.pushState(state, "", LINK);
        return;
      }
      STORE('','PageName',TITLE);
      const state = { data: DATA, elementId };
      history.replaceState(state, "", LINK); 
    }
  };
  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.data) {
      const elementId = event.state.elementId;
      const ELEMENT = elementId ? document.querySelector(elementId) : null;
  
      if (ELEMENT) {
        DISPLAY(ELEMENT, event.state.data);
  
        if (sessionStorage.getItem(TITLE)) {
          const componentState = sessionStorage.getItem();
        }
      } else {
        DISPLAY('', event.state.data);
      }
    }
});