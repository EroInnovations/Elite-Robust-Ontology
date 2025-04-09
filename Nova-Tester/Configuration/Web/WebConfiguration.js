import { ROUTER } from "../../Library/Router/Router.js";
import { NOVA } from "../../Model/Model.js";

const WEBCONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Website' ) {

        ROUTER();

        NOVA();

        return;
        
    };

};
export{WEBCONFIGURATION};