const HOMEMOVIES=(ELEMENT)=>{

    DEJSON("local",'HomePageLayOut',(data)=>{

        REDUX(data,(MyData)=>{
            
            VIEW(ELEMENT,'','transparent','98%','37%',(SECTIONS)=>{

                STYLED(SECTIONS,'overflow','hidden');

                if (MyData.Display === 'Single' ) {

                    SHUFFLEDDATAGETTER("MovieLander",'MovieLander',(Movies)=>{

                        if (MyData.Type === Movies.Catergory ) {

                            CLEAR(SECTIONS);

                            IMAGEHOLDER(SECTIONS,'HomeImages',Movies.Image,'','100%','',()=>{

                                JSONIFICATION(Movies,(MyMoviesData)=>{

                                    STORE('','CurrentMovie',MyMoviesData);

                                    NAVIGATOR('Yes',ANDROIDMOVIEDETAILSPAGE,'ANDROIDHOMEPAGE');

                                });
                                
                            });

                            BOTTOMLEFTTEXT(SECTIONS,'','',Movies.MovieName,'0.5','#cdcdcd50','brown','0.1%','1%','2.5%','5%',()=>{

                                JSONIFICATION(Movies,(MyMoviesData)=>{

                                    STORE('','CurrentMovie',MyMoviesData);

                                    NAVIGATOR('Yes',ANDROIDMOVIEDETAILSPAGE,'ANDROIDHOMEPAGE');

                                });

                            });

                            RIGHTROUNDBUTTON(SECTIONS,'','brown','Get','','30%','35px','3.6%','1%','5px',()=>{

                                JSONIFICATION(Movies,(MyMoviesData)=>{

                                    STORE('','CurrentMovie',MyMoviesData);

                                    NAVIGATOR('Yes',ANDROIDMOVIEDETAILSPAGE,'ANDROIDHOMEPAGE');

                                });
                            });
        
                        };
                       
                    });

                } else {

                    LEFTTEXT(SECTIONS,'','',MyData.Page,'20px','','2%',()=>{

                    });

                    RIGHTICON(SECTIONS,'',WHITESINGLEBACKICON,'20px','180','5%',()=>{

                        alert(MyData.Type)

                    });

                    VIEW(SECTIONS,'','transparent','100%','100%',(ELEMS)=>{

                        CLEAR(ELEMS);

                        STYLED(ELEMS,'position','absolute');
                        STYLED(ELEMS,'left','0');
                        STYLED(ELEMS,'top','40px');
                        STYLED(ELEMS,'overflow-x','auto');
                        STYLED(ELEMS,'overflow-y','hidden');
                        STYLED(ELEMS,'border-radius','0');
                        STYLED(ELEMS,'display','inline-flex');

                        SHUFFLEDDATAGETTER("MovieLander",'MovieLander',(Movies)=>{

                            if (MyData.Type === Movies.Catergory ) {
    
                                VIEW(ELEMS,'','transparent','40%','100%',(MOVIESHOLDER)=>{

                                    CLEAR(MOVIESHOLDER);

                                    STYLED(MOVIESHOLDER,'overflow','hidden');
                                    STYLED(MOVIESHOLDER,'margin-left','1%');
                                    STYLED(MOVIESHOLDER,'margin-right','1%');
                                    STYLED(MOVIESHOLDER,'flex-shrink','0');
                                    
                                    IMAGEHOLDER(MOVIESHOLDER,'HomeImagers',Movies.Image,'','100%','100%',()=>{

                                        JSONIFICATION(Movies,(MyMoviesData)=>{

                                            STORE('','CurrentMovie',MyMoviesData);

                                            NAVIGATOR('Yes',ANDROIDMOVIEDETAILSPAGE,'ANDROIDHOMEPAGE');

                                        });

                                    });
                                    
                                });
                                
                            };
                           
                        });

                    });
                    
                };

            });

        });

    });

};

const CATERGORIESMOVIES=(ELEMENT)=>{

    CLEAR(ELEMENT);

    DATAGETTER("Catergory","Catergory",(data)=>{

        VIEW(ELEMENT,'','transparent','32%','30%',(CATHOLDER)=>{

            STYLED(CATHOLDER,'display','inline-table');
            STYLED(CATHOLDER,'margin-top','0.5%');
            STYLED(CATHOLDER,'margin-left','0.5%');
            STYLED(CATHOLDER,'margin-right','0.5%');
            STYLED(CATHOLDER,'display','inline-table');

            FIXEDIMAGEHOLDER(CATHOLDER,'',data.Image,'',()=>{

            });
           
        });

    });
    
};