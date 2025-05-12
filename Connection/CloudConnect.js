import { START } from "../Start/Start.js";
import { CONNECTION } from "./Connection.js";

export const CLOUDCONNECTION=()=>{

    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0",
        "sheetName":"APPMANAGER"
    };

    fetch('https://script.google.com/macros/s/AKfycbyHFabMyQk2EoZXk8VV-L4dBKPAe6knmhyAm1W6sQ9_WRmq5clAozbfIznoCHY0l1ssSQ/exec',{
        method:"Post",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res =>res.json())

    .then(data =>{

        data.forEach(element => {

            if (element.ID === localStorage.getItem("NAME") ) {

                localStorage.setItem("AppIcon",element.AppIcon);

                if (localStorage.getItem('Environment') === 'Production') {
    
                    CONNECTION(element.AndroidDesign,'PROJECT');

                    CONNECTION(element.AndroidFunctions,'PROJECTSTYLES');

                    const requiredKeys = [
                        'FUNCTIONS',
                        'NOVA',
                        'PLUGINS',
                        'APIS',
                        'AUTORUN',
                        'NOVACLASSES',
                        'NOVACOMPONENTS',
                        'ASSETS',
                        'NOVASTYLES'
                    ];

                    const allKeysPresent = requiredKeys.every(key => localStorage.getItem(key));

                    if (!allKeysPresent) {
                        console.log('Some Updates Missing');
                        START();
                    } else {
                        console.log('All Updates Recieved');
                        if (localStorage.getItem('Updates') === 'Approved') {
                            localStorage.setItem('Updated', new Date().toISOString());
                        } else {
                            localStorage.setItem('Updates', 'Approved');
                            setTimeout(() => {
                                location.reload();
                            }, 2000);
                        };
                    };

                    return;

                };

            };

        });

    })

    .catch(error =>{
    
        console.log(error);
    
    });

}