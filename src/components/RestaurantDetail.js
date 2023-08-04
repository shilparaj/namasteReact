import { useParams } from "react-router-dom";
import { useFetch } from "../utility/useFetch";
import { useState, useEffect, useContext } from "react";
import {RESTAURANT_DETAIL_URL} from "../utility/constants";
import {UserContext} from "../utility/UserContext";

const ResturantDetail =() => {

    const userInfo = useContext(UserContext);

    const {id} = useParams();
    const URL = RESTAURANT_DETAIL_URL + id;
    const [resDetail, setResDetail] = useFetch(URL);
    console.warn(resDetail);
    return(
            resDetail ? <div className=" container my-[80px] py-[40px]">
                    {resDetail?.cards[0]?.card?.card?.info && 
                        <div>
                            <h2>{resDetail?.cards[0]?.card?.card.info.name}</h2>
                            <p className="font-size-sm">{resDetail?.cards[0]?.card?.card.info.avgRatingString}</p>
                            <p>{resDetail?.cards[0]?.card?.card.info.costForTwoMessage}</p>
                            <p>{userInfo.name}</p>
                        </div>

                    
                    }
                </div>
                : <div>
                    <p> Something went wrong with fetching the data </p>
                </div>
    );



}

export default ResturantDetail;