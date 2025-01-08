import React from "react";

function Disclaimer(){
    return(
        <div className="bg-black w-[84vw] lg-[88vw] lg:h-[400px] h-auto mx-auto rounded-[18px] text-white  mb-[120px] pb-10 ">
            <div className=" lg:pt-[56px] pt-[40px] w-[88%] pl-14">
                <span className="lg:text-[34px] text-[28px]">Let’s Discover Events That Bring Us Together!</span>
                <div className="lg:text-[26px] text-[18px] pt-1 pl-4  leading-9">From sports and concerts to entertainment and culture, explore events that connect people, spark fun, and create lasting memories. Whatever your interest, there's an event waiting for you!</div>
                <div className="pt-6 pl-6">
                    <button className="bg-white text-black py-4 px-8 rounded-[40px] lg:text-[24px] text-[20px] hover:shadow-red-400  hover:shadow-md transition-shadow ease-in-out delay-100">Post Event</button>
                </div>
            </div>
            
        </div>
    )
}

export default Disclaimer