import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent.js';
import HeaderTitle from './HeaderTitle.js';
import ImageThumbnail from './ImageThumbnail.js';

const HeaderContainer = () => {
    return (
      <div className = 'headerContainer'>
          <div className ='theImage'>
              <ImageThumbnail />
              <HeaderTitle /> 
              

    </div> 


    );
};
    