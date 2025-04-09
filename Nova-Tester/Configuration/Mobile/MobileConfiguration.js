import { ROUTER } from "../../Library/Router/Router.js";
import { NOVA } from "../../Model/Model.js";

const MOBILECONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Android' ) {

        ROUTER();

        NOVA();

        return;
        
    };

    if (localStorage.getItem("Status") === 'Ios' ) {

        ROUTER();

        NOVA();

        return;
        
    };
    
};
export{MOBILECONFIGURATION};