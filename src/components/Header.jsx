import React from 'react'

const Header = () => {
    return (
        <div className='max-width header'>
            <div className="brand">
                <a href="/">zomato</a>
            </div>

            <div className="header-comp">
                <div className="location-search-container">

                    <div className="location-wrapper">
                        <div className="location-icons-name">
                            <i className="fi fi-sr-marker absolute-center location-icon"></i>
                            <div>Mumbai</div>
                        </div>
                        <i className="fi fi-sr-caret-down absolute-center"></i>
                    </div>

                    <div className="search-bar">
                        <i className="fi fi-rr-search absolute-center search-icon"></i>
                        <input placeholder="Search for restaurant, cuisine or a dish" className="search-input" />
                    </div>
                </div>

                <div className="profile-wrapper">
                    <img src="https://cdn-icons-png.flaticon.com/512/1256/1256271.png" alt='user-img' className='profile-image'/>

                    <span className="user-name">User</span>
                    <i className="fi fi-sr-angle-small-down absolute-center profile-options"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
