import React from 'react'
import "./SearchPage.css"
import { useStateValue } from "./StateProvider"
import useGoogleSearch from "./useGoogleSearch"
import { Link } from "react-router-dom";
import Search from "./pages/Search";

import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import {items} from "react-router-dom"

import LocalOfferIcon from "@material-ui/icons/LocalOffer"

import LocalOffer from "@material-ui/icons/LocalOffer"
import RoomIcon from "@material-ui/icons/Room"
import SearchIcon from "@material-ui/icons/Search"
import MoreVertIcon from "@material-ui/icons/MoreVert"


function SearchPage() {
    const [{term='tesla'},dispatch]=useStateValue();

    //LIVE API CALL
    const {data}=useGoogleSearch(term)

     //https://developers.google.com/custom-search/v1using_rest
        
     
     //https://cse.google.com/cse/setup/basic?cx=b34e1cbd68db169d
    
    console.log(data)

    //WHAT IS HAPPENING HERE?
    //HERE WHEN YOU SEARCH A WORD IN GOOGLE SEARCH BAR THAT GOES TO THE DATA LAYER CREATED USING CONTEXT API THAT TERM IS PULLED USING STATEVALUE AND THEN THAT VALUE USES GOOGLE HOOK  THAT IS THE CUSTOM API THAT REQUEST GOOGLE API FOR SEARCH RESULTS
     return (

       
        <div className="searchPage">

        <div className="searchpage__header">
    
           <Link to="/">

           <img className="searchPage__logo"

           src="data:image/png;base64,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"
           alt=""
           
           
           
            />

           </Link>

           <div className="searchPage__headerbody">

        <Search hideButtons />

                <div className="searchPage__options">
                    <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                            <SearchIcon />
                            <Link to="/all">All</Link>
                            </div>
                            <div className="searchPage__option">
                            <DescriptionIcon />
                            <Link to="/news">News</Link>
                            <div className="searchPage__option">
                            <ImageIcon />
                            <Link to="/images">Images</Link>
                            <div className="searchPage__option">
                            <LocalOfferIcon/>
                            <Link to="/shopping">Shopping</Link>
                            <div className="searchPage__option">
                             <RoomIcon />
                             <Link to="/maps">Maps</Link>
                            </div>

                            <div className="searchPage__option">
                             <MoreVertIcon />
                             <Link to="/more">More</Link>
                            </div>
                </div>

                <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                             
                             <Link to="/setting">Setting</Link>
                            </div>

                            <div className="searchPage__option">
                             
                             <Link to="/tools">Tools</Link>
                            </div>
                </div>
                </div>
                </div>


                    </div>

                    


                
                  


                </div>

             

                

        
        

            </div>

        </div>

        {
                        term && (
                            <div className="searchPage__results">

                                <p className="searchPage__resultCount">

                                    About results (0.3 secords) for {term}

                                </p>

                                {
                                    data?.items.map(item => (
                                        <div className="searchPage__result">
                                            <a href={item.link}>
                                              {item.displayLink}

                                            </a>
                                            <a className="searchPage__resultTitle" href={item.link}>
                                                    <h2>{item.title}</h2>

                                            </a>
                                            <p className="searchPage__resultSnippet">{item.snippet}

                                            </p>
                                        </div>
                                    ))
                                }

                                



                           
                            </div>
                        )
                    }

        

        <div className="searchpage__results">

        
        </div>
            
        </div>
    )
}

export default SearchPage
