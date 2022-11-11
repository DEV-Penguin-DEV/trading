import React from 'react';
import { Link } from 'react-router-dom';
import './soon.css';

function Soon() {
  return (
    <div className="soon__container">
      <Link to="/trading/my-app/build/" ><h1 className="soon__title">На главную</h1></Link>
      <div className="content-container">
        <p className='soon__text'>Soon</p>
        <div className="holder">
          <div className="circle-stripes-preloader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Soon;
