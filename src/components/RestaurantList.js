import { useState } from "react";
import {restaurants} from "../assets/restaurants";
import RestaurantCard, {AddVegTag} from "./RestaurantCard"
import { Link } from "react-router-dom";
const Restaurant =() => {
    
   const VegRestaurant = AddVegTag(RestaurantCard);
    const [restData, setResData] = useState(restaurants)
    return (

        <div className="flex items-stretch flex-wrap justify-Center">
            {restData.map(res => {
                return (
                    <div key={res.info.id} className=" w-[100%] md:w-1/2 lg:w-1/3 xl:w-1/4">
                        <Link to={"/restaurant-detail/"+ res.info.id} >
                            {res?.info?.veg ? <VegRestaurant resData={res} /> : <RestaurantCard resData={res} /> }
                        </Link>
                    </div>
                )
          })}
        </div>
    );
}

export default Restaurant;