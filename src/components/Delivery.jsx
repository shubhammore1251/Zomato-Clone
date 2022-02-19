import React from 'react'
import { resturants } from '../data/resturant'
import DeliveryCollections from './DeliverySpecific/DeliveryCollections'
import ExploreSection from './Reuse/ExploreSection'
import Filters from './Reuse/Filters'
import TopBrands from './DeliverySpecific/TopBrands'

/*Filters Array Displaying the Filters*/
const deliveryFilters = [

  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders"></i>,
    title: 'Filters'
  },
  {
    id: 2,
    title: 'Rating: 4.0+'
  },
  {
    id: 3,
    icon: <i className="fi fi-rr-clock"></i>,
    title: 'Delivery Time'
  },
  {
    id: 4,
    title: 'Great Offers'
  },
  {
    id: 5,
    icon: <i className="fi fi-rr-angle-down"></i>,
    title: 'Cuisines'
  },
  {
    id: 6,
    title: 'Pure Veg'
  }
]

/*Resturant array imported stored in the variable for Delivery*/
const restaurantList = resturants;

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>

      <DeliveryCollections />

      <TopBrands />

      <ExploreSection list={restaurantList} collectionTitle="Delivery Restaurants in Mumbai" />
    </div>
  )
}

export default Delivery
