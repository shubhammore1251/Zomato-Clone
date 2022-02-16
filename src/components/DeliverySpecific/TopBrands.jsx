import React from 'react';
import NextArrow from '../Reuse/NextArrow';
import PrevArrow from '../Reuse/PrevArrow';
import Slider from "react-slick";

const topBrandList = [

    {
        id:1,
        time: "29 min",
        title: "McDonald's",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp"
    },
    {
        id:2,
        time: "30 min",
        title: "Domino's Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png?output-format=webp"
    },
    {
        id:3,
        time: "22 min",
        title: "Subway",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d919948baa416a7dc8f85ab7d5db05c3_1611383508.png?output-format=webp"
    },
    {
        id:4,
        time: "31 min",
        title: "Burger King",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp"
    },
    {
        id:5,
        time: "30 min",
        title: "Pizza Hut",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id:6,
        time: "26 min",
        title: "The Belgian Waffle Co.",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f6e2cc03503ef28f9cba0ac3ff5c208d_1496986434.png"
    },
    {
        id:7,
        time: "32 min",
        title: "Meraki",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9c390005a3b36e2f209b5868d536973f_1639679267.png"
    },
    {
        id:8,
        time: "54 min",
        title: "KFC",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png"
    },
    {
        id:9,
        time: "19 min",
        title: "Merwans Cake Stop",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ea590b040a4902b757fd6126439bd5c3_1605071443.png"
    },
    {
        id:10,
        time: "19 min",
        title: "NIC - Natural Ice Creams",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f38a3c7db2e3a79f97de3336de685e11_1583993741.png"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};


const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className="collection-title">
               Top brands for you
            </div>

            <Slider {...settings}>
                    {topBrandList.map((brand)=>{
                        return(
                            <div className='brands-data cursor-pointer' key={brand.id}>
                                <div className="brand-image-div">
                                    <div className="brand-image">
                                        <img src={brand.cover} alt={brand.title} className="top-brand-image"/>
                                    </div>
                                </div>
                                
                                <div className="brand-info">
                                    <h3 className='brand-info-text'>{brand.title}</h3>
                                    <h3 className='brand-info-text'>{brand.time}</h3>
                                </div>
                                
                            </div>
                        )
                    })}
                </Slider>
        </div>
    )
}

export default TopBrands
