const HOSTINGINSTALLER=()=>{

    if (navigator.onLine) {

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
    
                if (localStorage.getItem('Environment') === 'Development')  {
        
                    localStorage.setItem("PROJECT",'');
        
                    if (!localStorage.getItem('Updates')) {
        
                        localStorage.setItem('Updates','On');
    
                        localStorage.setItem("Hosting",'Active');
        
                        location.reload();
                            
                    };
    
                    return
        
                }; 
    
                if (element.ID === localStorage.getItem("NAME") ) {
    
                    if (element.AppState) {
    
                        localStorage.removeItem('Hosting');
    
                        location.reload();
                        
                    } else {
    
                        if (localStorage.getItem('Hosting')) {
    
                            localStorage.setItem('Hosting','Active');
                            
                        } else {
    
                            localStorage.setItem('Hosting','Active');
    
                            location.reload();
                            
                        };
    
                    };
    
                };
    
            });
    
        })
    
        .catch(error =>{
        
            console.log(error);
        
        });


        return;
        
    }

};
export{HOSTINGINSTALLER};