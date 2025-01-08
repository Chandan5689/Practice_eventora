import React from "react";
import Header from "./Header";
import { getDiscoverEventsData } from "../data/DiscoverImages";
import { getDiscoverImages } from "../data/DiscoverImages";
import Traditional2 from "../assests/Discover_images/traditional2.jpg";
import '../App.css'
import { MdOutlineDateRange } from "react-icons/md";
import { FaRegClock, FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
function EventDetail() {
    const getEventData = getDiscoverEventsData()
    // const [current, setCurrent] = useState(0);
    const EventItem = getEventData.find(EventItem => EventItem.id === 1)
    return (
        <div className=" w-[100%] mx-auto">
            <div>
                <Header />
            </div>

            <div className="mt-8 w-[98vw] h-[400px] relative" key={EventItem.id}>
                <div className="w-[100%] h-[100%] mx-auto">

                <img src={getDiscoverImages(EventItem.discoverImage)} alt={EventItem.imageTitle} className="w-[100%] h-[100%] object-cover object-center blur-lg opacity-80" />
                </div>

                <div className="w-[100%] absolute top-8 left-12 flex flex-col gap-2 text-white capitalize">
                    <div className="text-[19px] cursor-pointer">
                        {EventItem.imageTitle}
                    </div>
                    <div className="flex items-center gap-[6px] cursor-pointer ">
                        <span><MdOutlineDateRange size={24} /></span>
                        <span className="pt-[6px]">{EventItem.eventdate}</span>
                    </div>
                    <div className="flex items-center gap-[6px] cursor-pointer">
                        <span><FaRegClock size={24} /></span>
                        <span className="pt-[6px] lowercase">{EventItem.eventTime}</span></div>
                    <div className="flex items-center gap-[6px] cursor-pointer">
                        <span><IoLocationOutline size={24}/></span>
                        <span className="pt-[6px]">{EventItem.eventLocation}</span>
                    </div>
                </div>
                <div className="absolute top-[70%] left-[10%] flex gap-10">
                    <div className="cursor-pointer bg-white px-[32px] py-[9px] rounded-[18px] flex justify-center items-center gap-2">
                        <span className="text-[17px] font-normal">Price:</span>
                        <span className="font-medium text-[20px]">{EventItem.eventPrice}</span>
                    </div>
                    <div className=" cursor-pointer bg-white px-4 py-[9px] rounded-[18px] flex justify-center items-center gap-2 text-[20px]">
                        <span className="font-normal"><FaRegHeart /></span>
                        <span className="font-medium">Remind me</span>
                    </div>
                </div>

                <div className="w-[160px] h-[180px] absolute top-11 left-[58%] border border-[#fffdfd] rounded-[15px] drop-shadow-eventDetail ">
                    <img src={getDiscoverImages(EventItem.discoverImage)} alt={EventItem.imageTitle} className="object-fit w-[100%] h-[100%] rounded-[15px]" />
                </div>
            </div>
        </div>

    )
}

export default EventDetail