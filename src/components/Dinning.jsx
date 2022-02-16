import React from 'react'
import { dinning } from '../data/dineOut';
import Collections from './Di&NLSepcific/Collections'
import ExploreSection from './Reuse/ExploreSection';
import Filters from './Reuse/Filters';

/*Collection List array*/
const collectionList=[
    {
        id:"1",
        title: "Trending this week",
        cover: "https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735746.png",
        places: "30 Places"
    },
    {
        id:"2",
        title: "Newly Opened",
        cover: "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015793.jpg",
        places: "50 Places"
    },
    {
        id:"3",
        title: "Best of Mumbai",
        cover: "https://b.zmtcdn.com/data/collections/28d243a9d5e5874fefa0f058f28555dd_1615460077.jpg",
        places: "167 Places"
    },
    {
        id:"4",
        title: "Work Friendly Places!",
        cover: "https://b.zmtcdn.com/data/collections/332d70c0ff0894191d1661739ce18fbd_1605194226.jpg",
        places: "23 Places"
    },
    {
        id:"5",
        title: "Gourmet Pizza",
        cover: "https://b.zmtcdn.com/data/collections/178b0ddc2dcb90698f3e25bdaf12142d_1615461448.jpg",
        places: "16 Places"
    },
    {
        id:"6",
        title: "Sweet Tooth",
        cover: "https://b.zmtcdn.com/data/collections/cfcf7265a91246c355bdf4d4442cf97a_1615540340.jpg",
        places: "17 Places"
    },
    {
        id:"7",
        title: "Sunday Brunches",
        cover: "https://b.zmtcdn.com/data/collections/16aa00197f90fcf760577695444583c8_1551076991.jpg",
        places: "30 Places"
    },
    {
        id:"8",
        title: "Microbreweries",
        cover: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
        places: "10 Places"
    }
]

/*Filters Array Displaying the Filters*/
const dinningFilters=[
      
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
        icon: <i className="fi fi-sr-map"></i>,
        title: 'Distance'
    }, 
    {
        id: 4,
        title: 'Online Bookings'
    },
    {
        id: 5,
        icon: <i className="fi fi-rr-angle-down"></i>,
        title: 'Cuisines'
    },
    {
        id: 6,
        title: 'Pure Veg'
    },
    {
        id: 7,
        icon: <i className="fi fi-rr-angle-down"></i>,
        title: 'Pro Offers'
    },
    {
        id: 8,
        title: 'Outdoor Seating'
    },
    {
        id: 9,
        title: 'Serves Alcohol'
    },
    {
        id: 10,
        title: 'Open Now'
    },
    {
        id: 11,
        icon: <i className="fi fi-rr-angle-down"></i>,
        title: 'More filters'
    },
    {
        id: 12,
        title: 'Cafes'
    }


]

/*Resturant array imported stored in the variable for Dinning*/
const dinningList = dinning;

const Dinning = () => {
    return (
        <div>
           <Collections list={collectionList}/>

           <div className="max-width">
               <Filters filterList={dinningFilters}/>
           </div>

           <ExploreSection list={dinningList} collectionTitle="Dine-Out Restaurants in Mumbai"/>
        </div>
    )
}

export default Dinning