export const NOVA=()=>{
const DATA=`ROUTEJS(localStorage.getItem('ASSETS'));
ROUTEJS(localStorage.getItem('APIS'));
ROUTECSS(localStorage.getItem('NOVASTYLES'));
ROUTECSS(localStorage.getItem('NOVACLASSES'));
ROUTECSS(localStorage.getItem('NOVACOMPONENTS'));
ROUTEJS(localStorage.getItem('FUNCTIONS'));
ROUTEJS(localStorage.getItem('PROJECT'));
ROUTECSS(localStorage.getItem('PROJECTSTYLES'));
ROUTEJS(localStorage.getItem('AUTORUN'));
`;
localStorage.setItem('NOVA',DATA);
};