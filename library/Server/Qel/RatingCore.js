import { GETDATA } from "../../../Functions/GetData/GetData.js";
import { JSONADDER } from "../../../Functions/JsonAdder/JsonAdder.js";
import { LOCALDEJSONDATA } from "../../../Functions/localDejsonData/localDejsonData.js";
import { UPDATEDATA } from "../../../Functions/UpdateData/UpdateData.js";

export const RATINGCORE=()=>{

    const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

    GETDATA(API,'Products',(data)=>{

        LOCALDEJSONDATA('RatedData',(RatedData)=>{

            REDUX(data,(Element)=>{

                if (RatedData.includes(Element.ID)) {
                    
                    if (localStorage.getItem('User')) {

                        JSONADDER(Element.ProductRated,[localStorage.getItem('User')],(Rateddata)=>{

                            const INFO=[Element.ProductName,Element.ProductPrice,Element.ProductDetails,Element.ProductCatergory,Element.ProductImage,Element.ProductImageOne,Element.ProductImageTwo,Element.ProductImageThree,Element.CreatedOn,Element.CreatedBy,Element.Approved,Element.ProductNumber,Rateddata,Element.ProductComments,Element.ProductSaved,Element.ProductShop,Element.ProductBought];

                            UPDATEDATA(API,'Products',Element.ID,INFO,(Data)=>{

                                console.log(Data);

                            },(Data)=>{

                                console.log(Data);

                            });

                        });
                        
                    };

                } else {
                    
                }

            });

        });

    });

};