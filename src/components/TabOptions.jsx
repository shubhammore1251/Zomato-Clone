/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react'
import { Link} from 'react-router-dom'

/*The Delivery, NightLife and Dinning tabs array*/
const tabs = [

    {
        id: 1,
        name: "Delivery",
        active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
        backdrop: "#FCEEC0",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
        path: "/delivery"
    },
    {
        id: 2,
        name: "Dinning",
        active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
        backdrop: "#E5F3F3",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
        path: "/dinning"
    },
    {
        id: 3,
        name: "Nightlife",
        active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
        backdrop: "#EDF4FF",
        inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
        path: "/nightlife"
    }
]

const TabOptions = ({activeTab,setActiveTab}) => {
    
    
    /*UseEffect to parse the stored tab name in localStorage*/
    useEffect(() => {
        const state = JSON.parse(localStorage.getItem("tab_name"));
        setActiveTab(state);
    }, [])
   
    /*UseEffect to store the tab name in localStorage so that we can use to retain the state array of tabs after page reload*/
    useEffect(() => {
        localStorage.setItem("tab_name", JSON.stringify(activeTab));
    }, [activeTab])
    

    /*If the path is "/" then we want the state to be set to Delivery by default*/
    useEffect(() => {
        if(window.location.pathname==='/'){
           setActiveTab("Delivery"); 
        }
    }, [activeTab])
  
    return (
        <div className='tab-options'>
            <div className="max-width options-wrapper">
                {tabs.map((tab)=> {
                    return (
                        <Link to={tab.path} key={tab.id} className="navigate-routes" onClick={()=> setActiveTab(tab.name)}>
                            
                            <div  onClick={()=> setActiveTab(tab.name)} className={`tab-item absolute-center cursor-pointer ${activeTab === tab.name && "active-tab"}`}>
                           
                            <div className="tab-image-cont absolute-center" style={{backgroundColor: `${activeTab===tab.name?tab.backdrop: ""}`}}>
                                <img src={activeTab===tab.name?tab.active_img : tab.inactive_img} alt={tab.source} className='tab-image'/>
                            </div>
                            <div className='tab-name'>{tab.name}</div>
                            
                            </div>
                        </Link>  
                    )
                })}
            </div>
        </div>
    )
}

export default TabOptions
