import React from 'react';

function AboutUs() {
  return (
    <section className="about-us">
      <h2 className="about-us__title title">about us</h2>
      <p className="about-us__text">Global technologies</p>

      <div className="about-us__desktop-container">
        <div className="about-us__chart-img-container">
          <picture>
            <source media="(min-width: 1440px)" srcSet="/trading/my-app/build/img/Chart.png" width="497" height="493"/>

            <img src="/trading/my-app/build/img/Chart.png" alt="" className="about-us__chart-img" aria-hidden="true"/>
          </picture>
          <ul className="about-us__chart-img-numbers">
            <li className="about-us__chart-img-number">10</li>
            <li className="about-us__chart-img-number">20</li>
            <li className="about-us__chart-img-number">30</li>
            <li className="about-us__chart-img-number">40</li>
          </ul>
        </div>

        <div className="about-us__level">
          <h3 className="about-us__level-title">Level 1</h3>
          <p className="about-us__level-text about-us__level-text--bleu">Deploy a multi-legged futures strategy by
                simultaneously placing orders to buy
                and sell from the same order ticket.</p>
          <p className="about-us__level-text about-us__level-text--pink">Place and manage orders based on the Level 2
                order
                book, which provides a live
                display of all bids and offers waiting to be executed.</p>

          <button className="about-us__button btn btn--without-icon">Start Now</button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
