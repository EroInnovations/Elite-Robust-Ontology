import { COMMUNITYLOADER1 } from "../Design/CommunityRiseLoader/Loader1.js";
import { DEVELOPMENTLOADER1 } from "../Design/DevelopmentLoader/DevelopmentLoader.js";
import { ENVIRONMENT } from "../Environment/Environment.js";
const START=()=>{

    if (!localStorage.getItem('Updates')) {

        const body=document.querySelector(".body");

        if (localStorage.getItem('Environment') === 'Development') {
           
            DEVELOPMENTLOADER1(body);
            
        }else{

            LOADERS(body);

        };

    };

    ENVIRONMENT();
 
};

const LOADERS=(body)=>{

    if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {

        COMMUNITYLOADER1(body);
        
    } else {

        if (localStorage.getItem('NAME') !== 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {
       
            DEVELOPMENTLOADER1(body);

        };
        
    };

};

export{START};