const START=()=>{

    ROUTEJS(localStorage.setItem('NovaProjectClouds',''));

    const DATA={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/1Utfr1wkoZSRvM9TOKaTxOX6orYE8AuN2mu4dDtQmhFQ/edit?gid=0#gid=0",
        "sheetName":"APPMANAGER"
    };

    fetch('https://script.google.com/macros/s/AKfycbwc_ZdByDbw4u-OcEcAaJQt11bfAe3znQ7pYre6pl1KOyIrx8E8PN9yIs1KVcLYPjQlOw/exec',{
        method:"Post",
        mode:"cors",
        body:JSON.stringify(DATA)
    })

    .then(res =>res.json())

    .then(data =>{

        data.forEach(element => {

            if (element.ID === NAME){

                fetch(element.AndroidFunctions)
                .then(res =>res.text())
                .then(datata =>{
                    localStorage.setItem('NovaProjectStyles',datata);
                } )
                .catch(error =>{
                    console.log(error);
                });

                fetch(element.AndroidDesign)
                .then(res =>res.text())
                .then(datata =>{
                    localStorage.setItem('NovaProjectFunctions',datata);
                    if (!localStorage.getItem('NovaUpdates')) {
                        localStorage.setItem('NovaUpdates','Updated');
                        window.location.reload();
                    };
                } )
                .catch(error =>{
                    console.log(error);
                });

            };
        });
    })

    .catch(error =>{
    
        console.log(error);
    
    });

};

export{START};