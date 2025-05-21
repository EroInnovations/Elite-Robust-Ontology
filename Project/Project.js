const API='https://docs.google.com/spreadsheets/d/1wez9KwMHDo9WVgofpMJL4CqB9gJSaoJGIk6M02eKjPQ/edit?usp=sharing';

const NOVASTART=()=>{

    CONNECTOR();

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const CONNECTOR=()=>{

    SESSIONDEJSONDATA('urlInfo',(datata)=>{

        GETDATA(API,'CloudToken',(data)=>{

            REDUX(data,(Element)=>{

                if (Element.ID === datata.query.ID ) {

                    JSONIFICATION(Element,(MyDaat)=>{

                        STOREDATA('','UrlDaat',MyDaat);

                        STOREDATA('','UrlId',datata.query.ID);

                        HOMEPAGE();

                    });
                    
                }

            })

        });

    });

}

const HOMEPAGE=()=>{

    if (sessionStorage.getItem('UrlDaat')) {

        SESSIONDEJSONDATA('UrlDaat',(MyData)=>{

            URLCOLLECTED(MyData.UserKey,(data)=>{

                console.log(data);

                DISPLAY('',`

                    <br><br>
        
                    <h1>Elite Pay</h1>

                    <br>

                    <p>Receipt Number <br><br> ${sessionStorage.getItem('UrlId')} </p>
    
                    <div class='TopNav'>
    
                        <h1 class='LeftText'>Paid</h1>

                        <h1 class='RightText'>${data.query.Name}</h1>
                    
                    </div>

                    <div class='TopNav'>
    
                        <h1 class='LeftText'>Amount</h1>

                        <h1 class='RightText'>${data.query.Amount}</h1>
                    
                    </div>

                    <h1>Paid On</h1>

                    <h1 class='RightText'>${data.query.PayeeId}</h1>
        
                `);

            });

        });

    } else {

        DISPLAY('',`

            <h1>Elite Pay</h1>

            <h1>Invalid Receipt</h1>
            
        `);
        
    };

};