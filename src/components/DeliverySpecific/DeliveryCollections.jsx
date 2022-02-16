import React from 'react';
import NextArrow from '../Reuse/NextArrow';
import PrevArrow from '../Reuse/PrevArrow';
import Slider from "react-slick";
import DeliveryItems from './DeliveryItems';

const deliveryItems = [
    {
        id: 1,
        title: 'Pizza',
        cover: "https://b.zmtcdn.com/data/homepage_dish_data/4/7cf2db5ec261a0fa27a502d3196a6f60.png"
    },
    {
        id: 2,
        title: 'Burger',
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id: 3,
        title: 'Fries',
        cover: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png?output-format=webp"
    },
    {
        id: 4,
        title: 'Chicken',
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
        id: 5,
        title: 'Rolls',
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
        id: 6,
        title: 'Biryani',
        cover: "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id: 7,
        title: 'Aamras',
        cover: "https://b.zmtcdn.com/data/dish_photos/081/bdface0bff2cdbb02ba8758e350e7081.jpg"
    },
    {
        id: 8,
        title: 'Noodles',
        cover: "https://b.zmtcdn.com/data/homepage_dish_data/2/d541098e14dd80d1a17a08594aa43460.png"
    },
    {
        id: 9,
        title: 'Shake',
        cover: "https://b.zmtcdn.com/data/homepage_dish_data/4/5ffc7d46cf7f0b09b98441c03c269478.png"
    },
    {
        id: 10,
        title: 'Waffles',
        cover: "https://b.zmtcdn.com/data/homepage_dish_data/4/9dc673463c0e68b0d7eb86708309f232.png"
    },
    {
        id: 11,
        title: 'Cake',
        cover: "https://b.zmtcdn.com/data/homepage_dish_data/2/78261817faa51e9456cfab592c189a62.png"
    },{
        id: 12,
        title: 'Sandwich',
        cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
};

const DeliveryCollections = () => {
    return (
        <div className='delivery-coll'>
            <div className="max-width">
                <div className='collection-title'>Eat what makes you happy</div>

                <Slider {...settings}>
                    {deliveryItems.map((item)=>{
                        return(
                           <DeliveryItems item={item} key={item.id}/>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default DeliveryCollections
