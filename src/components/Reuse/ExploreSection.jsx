import React from 'react'
import RestaurantCard from './RestaurantCard'

const ExploreSection = ({list,collectionTitle}) => {
    
    
    return (
        <div className='max-width explore-section'>
            <div className='collection-title'>{collectionTitle}</div>
            <div className="explore-grid">
                {list.map((restaurant)=>{
                   return <RestaurantCard key={restaurant.info.resId} restaurant={restaurant}/>
                })}
            </div>
        </div>
    )
}

export default ExploreSection
