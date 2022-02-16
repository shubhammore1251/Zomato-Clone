import React from 'react'
import { nightLife } from '../data/nightLife'
import Collections from './Di&NLSepcific/Collections';
import ExploreSection from './Reuse/ExploreSection';
import Filters from './Reuse/Filters';

/*Collection List array*/
const collectionList=[
    {
        id:"1",
        title: "Microbreweries",
        cover: "https://b.zmtcdn.com/data/collections/df4ccbf9f6b6db21b07d12a18577b5af_1582106658.jpg",
        places: "10 Places"
    },
    {
        id:"2",
        title: "Artisan Cocktails",
        cover: "https://b.zmtcdn.com/data/collections/42e666d436d9a3b90431e6cc4a6b242d_1582106525.jpg?output-format=webp",
        places: "18 Places"
    },
    {
        id:"3",
        title: "Where's The Party?",
        cover: "https://b.zmtcdn.com/data/collections/4c645d68d0ad4c624abab81374c8997c_1582106595.jpg?output-format=webp",
        places: "12 Places"
    },
    {
        id:"4",
        title: "Happy Hours",
        cover: "https://b.zmtcdn.com/data/collections/332d70c0ff0894191d1661739ce18fbd_1605194226.jpg",
        places: "21 Places"
    },
    {
        id:"5",
        title: "Beer in a Bar",
        cover: "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp",
        places: "9 Places"
    }
]

/*Filters Array Displaying the Filters*/
const nightLifeFilters=[
      
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
        title: 'Pubs & Bars'
    },
    {
        id: 5,
        icon: <i className="fi fi-rr-angle-down"></i>,
        title: 'Pro Offers'
    }
    
]

/*Resturant array imported stored in the variable for NightLife*/
const nightList = nightLife;

const NightLife = () => {
    return (
        <div>
            <Collections list={collectionList}/>

            <div className="max-width">
                <Filters filterList={nightLifeFilters}/>
            </div>

            <ExploreSection list={nightList}/>
        </div>
    )
}

export default NightLife
