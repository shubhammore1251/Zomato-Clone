import React from 'react'

const FilterItem = ({filter}) => {
    return (
        <div className='filter-item cursor-pointer'>
            {filter.icon && filter.icon}
            <div className='filter-name'>{filter.title}</div>
        </div>
    )
}

export default FilterItem
