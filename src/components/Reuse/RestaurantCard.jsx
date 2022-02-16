import React from 'react'

const RestaurantCard = ({restaurant}) => {

    const name = restaurant?.info?.name ?? "";

    const coverImg = restaurant?.info?.image?.url;

    const delTime = restaurant?.order?.deliveryTime;

    const rating = restaurant?.info?.rating?.rating_text;

    const approxPrice = restaurant?.info?.cfo?.text;

    const offers = restaurant?.bulkOffers ?? [];

    const cuisines = restaurant?.info?.cuisine?.map((item)=> item.name).slice(0,3);

    const bottomCont = restaurant?.bottomContainers;

    const goldOff = restaurant?.gold?.text;

    const proOff = offers.length >1 ? offers[0].text : null;

    const discount = offers.length>1 ? offers[1].text: offers.length ===1 ? offers[0].text: null;

    return (
        <div className='explore-card cursor-pointer'>
           <div className="explore-card-cover">
               <img src={coverImg} alt={name} className='explore-card-img'/>
               <div className="del-time">{delTime}</div>
               {proOff && <div className='proff'>{proOff}</div>}
               {goldOff && <div className='goldoff'>{goldOff}</div>}
               {discount && <div className='discount'>{discount}</div>}
           </div>

           <div className="rest-row">
                <div className="rest-name">{name}</div>
                {rating && <div className='rest-rating absolute-center'>{rating} <i className="fi fi-sr-star"></i></div>}
           </div>

           <div className="rest-row">
                {cuisines.length && <div className="rest-cuisines">{cuisines.map((item,i)=>{
                    return (
                        <span className='rest-cuisines-tag'>{item}{i!==cuisines.length-1 && ","}</span>
                    )
                })}
                </div>}
                
                {approxPrice && <div className="approx-price">{approxPrice}</div>}  
           </div>

           {bottomCont.length>0 && (
            <div>
               <div className='card-sperator'></div>
               <div className="card-bottom">
                  <img src={bottomCont[0]?.image?.url} alt={bottomCont[0]?.text} style={{height: "18px"}}/>
                  <div className="card-bottom-text">{bottomCont[0]?.text}</div>
                </div> 
            </div>
           )}
        </div>
    )
}

export default RestaurantCard
