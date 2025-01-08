import React from "react";
import ImageCarousel from "./ImageCarousel";
import ExploreIcons from "./ExploreIcons";
import DiscoverEvents from "./DiscoverEvents";
import Disclaimer from "./Disclaimer";
import '../App.css'
function Body() {
    const slides = [
        { url: "https://images.pexels.com/photos/18465378/pexels-photo-18465378/free-photo-of-man-in-traditional-clothing-with-golden-hat-in-festival.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { url: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { url: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      
      ];
    return (
        <div className="w-[100%]">
            <ImageCarousel slides={slides} CarouselTitle='Discover Unforgettable Events' CarouselDescrip='A place where experiences come to life' />
        
            <div>
                <ExploreIcons/>
            </div>

            <DiscoverEvents SectionTitle='Discover Events'/>
            <DiscoverEvents SectionTitle='Events near you'/>
            <Disclaimer />
            <DiscoverEvents SectionTitle='Entertainment' />
        </div>
    )
}

export default Body