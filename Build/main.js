const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

const NOVASTART=()=>{

    APPDATA();

    APPMODE(localStorage.getItem('Color')||'#333333');

    ROUTE('',HOMEPAGE,'HOMEPAGE');

};

const APPDATA=()=>{

    if (navigator.onLine) {

        GETDATA(API,'Products',(data)=>{

            const DATA={
                'Name':'QelProducts',
                'data':data
            };

            STOREINDEXED('QelProducts','QelProducts',DATA,(resback)=>{

                if (resback === false ) {

                    UPDATEINDEX('QelProducts','QelProducts',DATA,()=>{

                    });
                    
                }else{

                    NOVASTART();
                };

            });

        },(Error)=>{

            console.log(Error);

        });

        GETDATA(API,'Catergory',(data)=>{

            const DATA={
                'Name':'Catergory',
                'data':data
            };

            STOREINDEXED('Catergory','Catergory',DATA,(resback)=>{

                if (resback === false ) {

                    UPDATEINDEX('Catergory','Catergory',DATA,()=>{

                    });
                    
                }else{

                };

            });

        },(Error)=>{

            console.log(Error);

        });
        
    }

};

const HOMEPAGE=()=>{

    DISPLAY('',`

        <div class='HomeDiv'>

            <br><br>

            <h1 class='SectionName'>Categories </h1>

            <br>

            <div class='CatergorySection' id='HomeCatergories'></div>

            <br><br>

            <h1 class='SectionName'>New Stock </h1>

            <div class='DataDiv' ></diV>

            <br><br>

            <h1 class='SectionName'>Top Selling Products </h1>

            <div class='DataDiv' ></diV>

            <br><br>

            <h1 class='SectionName'>Most Liked  Products </h1>

            <div class='DataDiv' ></diV>

            <br><br><br><br>
        
        </div>

        <footer class='RoundFooter'>

            <img src='${WHITETRENDINGTOPICSICON}'/>

            <img src='${WHITESHOPPINGCART}'/>

            <img src='${WHITESETTINGSICON}'/>

        </footer>
        
    `);

    CATEGORIESDATA();

};

const CATEGORIESDATA=()=>{

    const HomeCatergories=document.querySelector('#HomeCatergories');

    GETINDEXED('Catergory','Catergory',(data)=>{

        DISPLAY(HomeCatergories,'');

        REDUX(data,(Element)=>{

            REDUX(Element.data,(element)=>{

                CREATEELEMENT(HomeCatergories,'div','CatergoriesDisplay',(ELEMENT)=>{

                    DISPLAY(ELEMENT,`

                        <div class='SectionImageHolder'>

                            <img class='SectionImage' src='${element.ProductImage}'/>

                        </div>

                        <p class='Catergor'>${element.ProductName}</p>

                    `);

                });

                console.log(element);

            });

        });

    });

};