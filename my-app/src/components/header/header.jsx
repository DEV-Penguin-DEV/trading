import React from 'react';
import { Link } from 'react-router-dom';

const onClickNavButton = (evt) => {
  const mainNavSandwich = evt.target;
  const mainNav = document.querySelector('.header-nav');
  const topContent = document.querySelector('.main-content');

  if (mainNav.classList.contains('header-nav--closed')) {
    mainNavSandwich.classList.remove('header-nav__mobile-menu-button--closed');
    mainNavSandwich.classList.add('header-nav__mobile-menu-button--opened');

    mainNav.classList.remove('header-nav--closed');
    mainNav.classList.add('header-nav--opened');
    topContent.style.marginTop = '270px';
  } else {
    mainNavSandwich.classList.remove('header-nav__mobile-menu-button--opened');
    mainNavSandwich.classList.add('header-nav__mobile-menu-button--closed');

    mainNav.classList.remove('header-nav--opened');
    mainNav.classList.add('header-nav--closed');

    topContent.style.marginTop = '120px';
  }
};

function Header() {
  return (
    <header className="main-header container">
      <div className="main-header__top-menu-container">
        <p className="header-nav__logo">C</p>

        <button className="header-nav__mobile-menu-button header-nav__mobile-menu-button--closed" onClick={(evt) => { onClickNavButton(evt); }}><span className="visually-hidden">Menu</span></button>
      </div>

      <nav className="main-header__header-nav header-nav header-nav--closed">
        <ul className="header-nav__list">
          <li className="header-nav__item"><Link to={'/trading/my-app/build/activities'} className="header-nav__link">Activities</Link></li>
          <li className="header-nav__item"><Link to={'/trading/my-app/build/technology'} className="header-nav__link">Technology</Link></li>
          <li className="header-nav__item"><Link to={'/trading/my-app/build/r&d'} className="header-nav__link">R&D</Link></li>
          <li className="header-nav__item"><Link to={'/trading/my-app/build/community'} className="header-nav__link">Community</Link></li>
          <li className="header-nav__item"><Link to={'/trading/my-app/build/career'} className="header-nav__link header-nav__link--career">Career</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
