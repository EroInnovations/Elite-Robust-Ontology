import { COMMUNITYLOADER4 } from "../Design/CommunityRiseLoader/Loader4.js";
import { DEVELOPMENTLOADER4 } from "../Design/DevelopmentLoader/DeveloperLoader4.js";

const NOVASTARTER=()=>{

    const PROJECTPATH='https://eroinnovations.github.io/Nova/Build/';

    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0",
        "sheetName":"APPMANAGER"
    };

    if ( localStorage.getItem('Environment') === 'Development' ) {

        localStorage.setItem("PROJECT",'');

        if (!localStorage.getItem('Updates')) {

            localStorage.setItem('Updates','On');

            Reload();
            
        };

        return;
        
    };

    fetch('https://script.google.com/macros/s/AKfycbwc_ZdByDbw4u-OcEcAaJQt11bfAe3znQ7pYre6pl1KOyIrx8E8PN9yIs1KVcLYPjQlOw/exec',{
        method:"Post",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res =>res.json())

    .then(data =>{

        if (!localStorage.getItem('Updates')) {
    
            const body=document.querySelector(".body");

            if (localStorage.getItem('Environment') === 'Development') {

                DEVELOPMENTLOADER4(body);
                
            }else{
    
                LOADERS(body);
    
            };
    
        };

        data.forEach(element => {

            if (localStorage.getItem('Environment') === 'Development')  {
    
                localStorage.setItem("PROJECT",'');
    
                if (!localStorage.getItem('Updates')) {
    
                    localStorage.setItem('Updates','On');

                    localStorage.setItem("Hosting",'Active');
    
                    Reload();
                        
                };

                return
    
            }; 

            if (element.ID === localStorage.getItem("NAME") ) {

                localStorage.setItem("AppIcon",element.AppIcon);

                if (element.AppState) {

                    localStorage.setItem("Hosting",'Expired');

                    const body=document.querySelector(".body");
        
                    body.innerHTML=`
        
                        <h1 style="color: red;">Alert</h1>
            
                        <h2>Service Hosting </h2>
            
                        <p>The Hosting Service to This Product has Expired 
            
                        <br><br>
                        
                        If your the Owner Please Pay To Keep It Online</p>
                        
                        <button style="width: 50%;height: 50px;background: blue;outline: none;border: none;color: #cdcdcd;margin: 2% auto;border-radius: 50px;">Pay Now</button>
            
                        <button style="width: 50%;height: 50px;background: forestgreen;outline: none;border: none;color: #cdcdcd;margin: 2% auto;border-radius: 50px;">Contact Us</button>
            
                        <p>If You Think There Is a Mistake</p>

                        <button style="width: 50%;height: 50px;background: teal;outline: none;border: none;color: #cdcdcd;margin: 2% auto;border-radius: 50px;" class='DeleteAllData' >Update Site</button>
            
                        <p>Powered by</p>
            
                        <h3>Elite Robust Ontology</h2>
                    
                    `;

                    const DeleteAllData=document.querySelector('.DeleteAllData');

                    DeleteAllData.addEventListener('click',()=>{
        
                        localStorage.clear();
        
                        sessionStorage.clear();
        
                        Reload();
        
                    });

                    return
                    
                };

                if (localStorage.getItem('Environment') === 'Production') {
    
                    fetch(PROJECTPATH+element.AndroidDesign)
                        
                    .then(res =>res.text())
                        
                    .then(data =>{

                        localStorage.setItem("PROJECT",data);
                          
                        if (!localStorage.getItem('Updates')) {
        
                            localStorage.setItem('Updates','On');

                            localStorage.setItem("Hosting",'Active');
        
                            Reload();
                                    
                        };

                    })

                    .catch(error =>{
    
                        console.log(error);
                        
                    });

                    return;

                };

                if (localStorage.getItem('Environment') === 'Web') {
                                
                    fetch(PROJECTPATH+element.WebDesign)
                        
                    .then(res =>res.text())
                        
                    .then(data =>{

                        localStorage.setItem("PROJECT",data);
                          
                            if (!localStorage.getItem('Updates')) {
        
                                localStorage.setItem('Updates','On');

                                localStorage.setItem("Hosting",'Active');
        
                                Reload();
                                    
                            };

                        })

                    .catch(error =>{
    
                        console.log(error);
                        
                    });
                            
                    return;
    
                };

                if (localStorage.getItem('Environment') === 'Desktop') {
                                
                    fetch(PROJECTPATH+element.DesktopDesign)
                        
                    .then(res =>res.text())
                        
                    .then(data =>{

                        localStorage.setItem("PROJECT",data);
                          
                        if (!localStorage.getItem('Updates')) {
        
                            localStorage.setItem('Updates','On');

                            localStorage.setItem("Hosting",'Active');
        
                            Reload();
                                    
                        };

                    })

                    .catch(error =>{
    
                        console.log(error);
                        
                    });
                            
                    return;
    
                };

            };

        });

    })

    .catch(error =>{
    
        console.log(error);
    
    });

};

const LOADERS=(body)=>{

    if (localStorage.getItem('NAME') === 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {

        COMMUNITYLOADER4(body);
        
    } else {

        if (localStorage.getItem('NAME') !== 'd8c2c6df-f989-44b3-9c81-d95c31892e28' ) {
       
            DEVELOPMENTLOADER4(body);
    
        };
        
    };

};

export{NOVASTARTER};