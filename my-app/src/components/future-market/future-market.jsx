import React from 'react';

function FutureMarket() {
  return (
    <section className="future-market">
      <div className="future-market__desktop-container">
        <h2 className="future-market__title">The future <span className="future-market__title--of">of</span> Cryptocurrency
              trading <span className="future-market__title--platform">platform</span></h2>
        <p className="future-market__text">Take advantage span of time and sales, futures spread orders and depth trader —
              plus,
              trade directly from charts.</p>
        <a href="#" className="future-market__link link-hover--underline">Learn more</a>
      </div>

      <div className="future-market__diagram future-market-diagram">
        <div className="future-market-diagram__top-section future-market-diagram__section">
          <div className="future-market-diagram__block">P2P Networks</div>
          <div className="future-market-diagram__block">Artificial Intelligence</div>
          <div className="future-market-diagram__block">Storage Networks</div>
        </div>

        <div className="future-market-diagram__middle-section future-market-diagram__section">
          <div className="future-market-diagram__block">Public Data</div>
          <div className="future-market-diagram__block">Encrypted Private Data *</div>
        </div>

        <div className="future-market-diagram__bottom-section future-market-diagram__section">
          <div className="future-market-diagram__block">Indexing</div>
          <div className="future-market-diagram__block">API</div>

          <div className="future-market-diagram__img--triangle"></div>
          <p className="future-market-diagram__text">Easy to use digital service and exclusive personal service for our
                active traders</p>

          <picture>
            <source media="(min-width: 1440px)" srcSet="img/arrow--desktop.svg" width="36" height="92"/>

            <img src="img/arrow.svg" className="future-market-diagram__img--arrow" width="40" height="58" alt=""
              aria-hidden="true"/>
          </picture>

          <p className="future-market-diagram__text future-market-diagram__customers">Consumers</p>
        </div>
      </div>
    </section>
  );
}

export default FutureMarket;
