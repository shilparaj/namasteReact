import { useEffect, useState } from "react"

export const useFetch = (URL)  =>{

     const [data, setData]= useState("");
     useEffect(()=>{
        fetchData();
        
     },[]);

     const fetchData = async() => {
        const data = await fetch(URL);
        const jsonData = await data.json();
        setData(jsonData.data);
     }

     return [data, setData];
}