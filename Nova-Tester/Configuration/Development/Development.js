import { ROUTER } from "../../Library/Router/Router.js"
import { NOVA } from "../../Model/Model.js";

const DEVELOPMENTCONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Development' ) {

        ROUTER();

        NOVA();

        return;
        
    };
}
export{DEVELOPMENTCONFIGURATION}