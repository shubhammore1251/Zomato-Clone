import React from 'react'
import NextArrow from '../Reuse/NextArrow';
import PrevArrow from '../Reuse/PrevArrow';
import Slider from "react-slick";

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const Collections = ({ list }) => {
    return (
        <div className='collection-wrapper'>
            <div className="max-width collection">
                <div className="collection-title">Collections</div>
                <div className="collection-subtitle-row">
                    <div className='coll-subtitle-text'>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
                    </div>

                    <div className="collection-loc cursor-pointer">
                        <div>All collections in Mumbai</div>
                        <i className="fi fi-sr-caret-right absolute-center"></i>
                    </div>
                </div>

                <Slider {...settings}>
                    {list.map((item) => {
                        return (
                            <div key={item.id}>
                                <div className="collection-cover">
                                    <img src={item.cover} alt={item.title} className="collection-img" />

                                    <div className="gradient-bg"></div>

                                    <div className="collection-card-title">{item.title}</div>

                                    <div className="collection-card-subtitle">
                                        <div>{item.places}</div>
                                        <i className="fi fi-sr-caret-right absolute-center"></i>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>

            </div>
        </div>
    )
}

export default Collections
