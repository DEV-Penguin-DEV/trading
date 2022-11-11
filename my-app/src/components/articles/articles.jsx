import React from 'react';

function Articles() {
  return (
    <section className="articles">
      <h2 className="visually-hidden">articles</h2>

      <ul className="articles__list">
        <li className="articles__item article article--math span-row-2 gradient seperator">
          <div className="article--math-desktop-container">
            <h3 className="article__title title">SPOT & MARGIN</h3>

            <p className="article__text">Trade <span className="article__text-decor--200">200+</span>
                  pairs with up<br/>
                  to 10x leverage</p>

            <a href="#" className="article__link link-hover--underline">Learn more</a>
          </div>
        </li>

        <li className="articles__item article">
          <h3 className="article__title title">DERIVATIVES</h3>

          <p className="article__text"><span className="article__text-decor--40">40+</span>
                quarterly futures and contracts</p>

          <a href="#" className="article__link link-hover--underline">Learn more</a>
        </li>
        <li className="articles__item article">
          <h3 className="article__title title">Treading arena</h3>

          <p className="article__text">Prize pools worth up to <span className="article__text-decor--million">USD
                  1,000,000</span>
          </p>

          <a href="#" className="article__link link-hover--underline">Learn more</a>
        </li>
        <li className="articles__item article article--techniq span-col-2">
          <h3 className="article__title title">Mobile app</h3>

          <p className="article__text">Trade anytime, <span className="article__text-decor--anywhere">anywhere</span></p>

          <a href="#" className="article__link link-hover--underline">Learn more</a>
        </li>
      </ul>
    </section>
  );
}

export default Articles;
