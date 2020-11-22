//Creating Custom HOOK
//THIS CUSTOM HOOK WILL MAKE REQUEST TO GOOGLE API FOR FETCHING THE DATA

import API_KEY from "./keys";
import { useState  , useEffect} from "react"

const CONTEXT_KEY="8bad290ab03a7c0e3";


//CUSTOM API
const useGooleSearch= (term) => {
    const [data,setData]=useState(null);

    useEffect(()=>{
        const fetchData=async() =>{
        fetch(
            `https://www.googleapis.com/customsearch/v1?key=
            ${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
    }
        fetchData()}  ,[term]  )

        return{data}
    
};

export default useGooleSearch;