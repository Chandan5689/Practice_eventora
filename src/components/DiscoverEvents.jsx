import React from "react";
import { getDiscoverEventsData } from "../data/DiscoverImages";
import { getDiscoverImages } from "../data/DiscoverImages";
import Calender from "../assests/calender.png";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";
import {Link} from "react-router-dom";
import '../App.css'

function DiscoverEvents({ SectionTitle }) {
    const getDiscoverEventData = getDiscoverEventsData();
    const slideLeft = () => {
        let slider = document.getElementById('sliderDis');
        slider.scrollLeft = slider.scrollLeft - 250;
    }
    const slideRight = () => {
        let slider = document.getElementById('sliderDis');
        slider.scrollLeft = slider.scrollLeft + 250;
    }
    return (
        <div className=" my-[20px] w-[100%] capitalize ">
            <h2 className="text-[44px] pl-[30px] font-medium">{SectionTitle}</h2>
            <div className="text-[19px] w-[100%] h-[480px] flex justify-evenly items-center relative">

                <div onClick={slideLeft} className="z-10 absolute top-[30%] left-0 bg-[#d9d9d9d0] opacity-70 w-[32px] h-[54px] rounded-e-[50px] cursor-pointer hover:opacity-100 transition-all"><span className="text-[26px] font-medium absolute top-[13px]  "><FaChevronLeft /></span></div>
                <div onClick={slideRight} className="z-10 absolute top-[30%] right-0 bg-[#d9d9d9d0] opacity-70 w-[32px] h-[54px] rounded-s-[50px] cursor-pointer hover:opacity-100 transition-all"><span className="absolute top-[13px] text-[26px] pl-[7px] font-medium"><FaChevronRight /></span></div>

                <div className=" w-[100%] h-[100%] overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide" id="sliderDis">
                
                    {getDiscoverEventData.map(item => (
                        
                        <div className=" h-[100%] inline-block p-6 " >
                            
                            <div className="hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] rounded-t-[16px] rounded-b-[16px] transition-all" key={item.id} ><Link to='/EventDetail' >
                                <img src={getDiscoverImages(item.discoverImage)} alt={item.imageTitle} className="w-[220px] h-[190px] object-cover rounded-t-[16px]" />
                                <div className="bg-[#f3f3f3] w-[220px] rounded-b-[16px] pl-3 py-3">
                                    <span className="underlineGray">{item.imageTitle}</span>
                                    <div className="flex gap-2 py-[2px] ">
                                        <img src={Calender} alt="calender" className="w-5 h-5 " />
                                        <div className="underlineGray">{item.eventdate}</div>
                                    </div>
                                    <span className="capitalize underlineGray">{item.eventLocation}</span>
                                    <div className="flex justify-end pr-4 text-[22px]">{item.eventPrice}</div>
                                </div>
                                </Link>
                            </div>
                            
                        </div>
                        
                    ))}
                    
                </div>

            </div>
        </div>
    )
}

export default DiscoverEvents