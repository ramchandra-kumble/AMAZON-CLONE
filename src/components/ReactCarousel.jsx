import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../styles/ReactCarousel.css'
const ReactCarousel = () => {
        return (
            <Carousel>
                <div className='carousel'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/ApparelGW/ATF/AS/feb/under599/2._CB661133742_.jpg" />
                    
                </div>
                <div className='carousel'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" />
                    
                </div>
                <div className='carousel'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/Feb/SSW/1500PC._CB660551243_.jpg" />
                    
                </div>
                <div className='carousel'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/CoolPad/Cool6/GW/D21073017_WLD_BAU_Coolpad_Cool6_Tall_hero_1500x600._CB660470371_.jpg"/>
                </div>
                <div className='carousel'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/kitchen/Herotators/XCM_Manual_1231691_1222782_IN_in_x999_store_in_en_3179209_1500x600_en_IN._CB410654551_.jpg" />
                    
                </div>
            </Carousel>
        );
    }

    export default ReactCarousel;