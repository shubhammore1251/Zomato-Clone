import React from 'react'

const DeliveryItems = ({item}) => {
    return (
        <div className='cursor-pointer'>
            <div className="delivery-item-cover">
                <img src={item.cover} alt={item.title} className='del-item-img'/>
            </div>
            
            <div className='del-item-title'>{item.title}</div>
        </div>
    )
}

export default DeliveryItems
