import { IMAGE_URL } from "../utility/constants";
const RestaurantCard =({resData}) => {
    return (
        <div className="mg:mr-4 lg:mr-5 mb-2 p-5 hover:border-black border-transparent hover:shadow-2xl border-solid rounded-md border">
            <div className="w-[100%] h-[182px] overflow-hidden rounded-lg mb-2">
                <img  className="w-[100%] h-[100%] object-cover" src={IMAGE_URL + resData.info.cloudinaryImageId} alt="restaurant image"/>
            </div>
            <div className="text-[16px] font-semibold text-neutral-900 flex flex-wrap items-start justify-between flex-col" >
                <h3 className="mb-3">{resData.info.name}</h3>
                <p className="text-neutral-600 mb-4 text-ellipsis overflow-hidden ... w-[100%]">{resData.info.cuisines.join(", ")}</p>
                <div className="flex justify-between items-start text-md font-semibold text-neutral-700">
                    <p>{resData.info.avgRating} ratings</p>
                    <p>{resData.info.areaName}</p>
                </div>
            </div>
        </div>
    );
}

export const AddVegTag = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <div className="absolute top-5 left-5 bg-green-700 text-white py-1 px-3 rounded-md"><p>Veg</p></div>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;