import { GETDATA } from "../../../Functions/GetData/GetData.js";
import { JSONADDER } from "../../../Functions/JsonAdder/JsonAdder.js";
import { LOCALDEJSONDATA } from "../../../Functions/localDejsonData/localDejsonData.js";

export const RATINGCORE=()=>{

    const API='https://docs.google.com/spreadsheets/d/18BUoCg4yVUrxWv8RG885ZIn2fjkURGgjIrCi6otCxFk/edit?usp=sharing';

    GETDATA(API,'Products',(data)=>{

        LOCALDEJSONDATA('RatedData',(RatedData)=>{

            REDUX(data,(Element)=>{

                if (RatedData.includes(Element.ID)) {
                    
                    if (localStorage.getItem('User')) {

                        JSONADDER(Element.ProductRated,[localStorage.getItem('User')],(Rateddata)=>{

                            console.log(Rateddata);

                        });
                        
                    };

                } else {
                    
                }

            });

        });

    });

};