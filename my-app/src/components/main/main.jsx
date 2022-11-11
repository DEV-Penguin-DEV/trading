import React from 'react';
import AboutUs from '../about-us/about-us';
import Articles from '../articles/articles';
import FirstScreen from '../first-screen/first-screen';
import FutureMarket from '../future-market/future-market';

function Main() {
  return (
    <main className="main-content container">
      <h1 className="main-content__title title">crypto trading</h1>
      <FirstScreen/>

      <div className="container-content">
        <AboutUs/>

        <FutureMarket/>

        <Articles/>
      </div>
    </main>
  );
}

export default Main;
