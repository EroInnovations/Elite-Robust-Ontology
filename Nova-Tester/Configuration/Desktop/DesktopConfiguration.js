import { ROUTER } from "../../Library/Router/Router.js";
import { NOVA } from "../../Model/Model.js";

const DESKTOPCONFIGURATION=()=>{

    if (localStorage.getItem("Status") === 'Desktop' ) {

        ROUTER();

        NOVA();

        return;
        
    };
    
};
export{DESKTOPCONFIGURATION};