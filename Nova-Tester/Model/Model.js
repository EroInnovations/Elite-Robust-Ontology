import { AUTORUN } from "./AutoRun.js";
import { AUTOSTART } from "./AutoStart.js";
import { NOVASTARTER } from "./Start.js";
const NOVA=()=>{
const DATA=`ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('AUTORUN'));
ROUTEJS(localStorage.getItem('AUTOSTART'));
ROUTEJS(localStorage.getItem('COMPONENTS'));
ROUTEJS(localStorage.getItem('ICONS'));
ROUTEJS(localStorage.getItem('APIS'));
ROUTEJS(localStorage.getItem('PROJECT'));
ROUTEJS(localStorage.getItem('ANDROIDPLUGINS'));
ROUTEJS(localStorage.getItem('TEMPLATES'));
`;
localStorage.setItem('NOVA',DATA);
AUTORUN();
AUTOSTART();
NOVASTARTER();
};
export{NOVA};
`
ROUTEJS(localStorage.getItem('TEMPLATES'));
`

