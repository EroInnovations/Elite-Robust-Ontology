import { COMMUNITYLOADER3 } from "../Design/CommunityRiseLoader/Loader3.js";
import { DEVELOPMENTLOADER3 } from "../Design/DevelopmentLoader/DeveloperLoader3.js";
import { DESKTOPCONFIGURATION } from "./Desktop/DesktopConfiguration.js";
import { DEVELOPMENTCONFIGURATION } from "./Development/Development.js";
import { MOBILECONFIGURATION } from "./Mobile/MobileConfiguration.js";
import { WEBCONFIGURATION } from "./Web/WebConfiguration.js";

const CONFIGURATION=()=>{

    if (!localStorage.getItem('Updates')) {

        const body=document.querySelector(".body");

        if (localStorage.getItem('Environment') === 'Development') {

            DEVELOPMENTLOADER3(body);

            DEVELOPMENTCONFIGURATION();
            
        }else{

            LOADERS(body);

        };
    
    };

    if (localStorage.getItem('BuildNumber') === '1010' ) {

        MOBILECONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('BuildNumber') === '8080' ) {

        WEBCONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('BuildNumber') === '6060' ) {

        DESKTOPCONFIGURATION();

        return;
        
    };

    if (localStorage.getItem('BuildNumber') === '0101' ) {

        DEVELOPMENTCONFIGURATION();

        return;
        
    };

};

const LOADERS=(body)=>{

    if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {

        COMMUNITYLOADER3(body);
        
    } else {

        if (localStorage.getItem('NAME') !== 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {
       
            DEVELOPMENTLOADER3(body);
    
        };
        
    };

};
export{CONFIGURATION};