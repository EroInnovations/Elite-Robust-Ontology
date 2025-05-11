const ROUTE=(NEWPAGE, FUNCTION, FUNCTIONBACK)=>{
    
    sessionStorage.setItem("PreviousPage", FUNCTIONBACK);
  
    if (NEWPAGE) {
    
        history.pushState({ data: FUNCTION() }, "", "");

    } else {

        history.replaceState({ data: FUNCTION() }, "", "");

    };
    
    window.addEventListener("popstate", function (event) {
    
        const previousPageFunction = sessionStorage.getItem("PreviousPage");
    
        if (previousPageFunction) {
    
            const func = new Function("return " + previousPageFunction)();
    
            func();
    
        };
    
    });

};

export { ROUTE };
