import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
        <div className = 'headerContainer'>
            <div className = 'headerImage'>
            <ImageThumbnail />
            </div>
            <div className = 'headerRight'>
                <HeaderTitle /> 
                <HeaderContent />
             </div>
         </div>

            );
};

export default HeaderContainer;