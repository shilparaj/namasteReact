import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../utility/useFetch";
const User = ({name, location, contact}) => {

    //const [data,setData] = useFetch("https://dummy.restapiexample.com/api/v1/employees");
    return (
    
        <div className="user-card">
            <h1>Name: {name}</h1>
            <h2>Location : {location}</h2>
            <h2>Contact: {contact}</h2>
        </div>
    )
}

export default User;