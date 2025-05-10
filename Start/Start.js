import { CLOUDCONNECTION } from "../Connection/CloudConnect.js";
import { CONNECTION } from "../Connection/Connection.js"
import { NOVA } from "../Connection/Nova.js";
import { LOADER } from "../Connection/NovaLoader.js";
export const START=()=>{
    NOVA();LOADER();
    CONNECTION('../library/Styles/Styles.css','NOVASTYLES');
    CONNECTION('../library/Styles/Classes.css','NOVACLASSES');
    CONNECTION('../library/Styles/Components.css','NOVACOMPONENTS');
    CONNECTION('../library/Functions/Functions.js','FUNCTIONS');
    CONNECTION('../library/Functions/Plugins.js','PLUGINS');
    CONNECTION('../library/Functions/Assets.js','ASSETS');
    CONNECTION('../library/Functions/Connection.js','APIS');
    if (localStorage.getItem('Environment') === 'Development') {
        CONNECTION('../Project/Project.js','PROJECT');
        CONNECTION('../Project/Project.css','PROJECTSTYLES');  
        if (localStorage.getItem('Updates')) {
            console.log('Updates Recieved');
        }else{
            localStorage.setItem('Updates','Approved');
            setTimeout(() => {
                location.reload();
            }, 2000); 
        };
    };
    if (localStorage.getItem('Environment') !== 'Development') {
        CLOUDCONNECTION();    
        return;
    };
};