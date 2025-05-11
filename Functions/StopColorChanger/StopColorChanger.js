let intervalID;
const STOPCOLORCHANGER = (ELEMENT, COLOR) => {

    clearInterval(intervalID);

    STYLED(ELEMENT, "border", "1px solid transparent");

    STYLED(ELEMENT, "background", COLOR);
    
};

export{STOPCOLORCHANGER};