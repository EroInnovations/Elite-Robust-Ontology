import { APIS } from "../Apis/Apis.js";
import { ASSETSICONS } from "../Assets/Assets.js";
import { COMPONENTS } from "../Components/Components.js";
import { FUNCTIONS } from "../Functions/Functions.js";
import { PLUGINS } from "../Plugins/Plugins.js";
import { TEMPLATES } from "../Templates/Templates.js";
const ROUTER=()=>{
    FUNCTIONS();
    COMPONENTS();
    ASSETSICONS();
    APIS();
    PLUGINS();
    TEMPLATES();
};
export{ROUTER};