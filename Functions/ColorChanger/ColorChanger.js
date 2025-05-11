let intervalID;
const COLORCHANGER = (ELEMENT) => {

    let index = 0;

    intervalID = setInterval(() => {
        
        index = (index + 1) % COLOR.length;

        STYLED(ELEMENT, "border", `1px solid ${COLOR[index].name}`);

        STYLED(ELEMENT, "background", "transparent");

    }, 2000);
    
};

export{COLORCHANGER};