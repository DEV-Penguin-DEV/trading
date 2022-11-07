// Sandwich menu
const mainNavSandwich = document.querySelector('.header-nav__mobile-menu-button');
const mainNavMenuContainer = document.querySelector('.header-nav__container');
const mainNav = document.querySelector('.main-nav');

const getMobileMenu = () => {
  mainNavMenuContainer.classList.remove('header-nav__container-nojs');
  mainNavMenuContainer.classList.add('main-header__toggle--closed');

  mainNav.classList.add('main-nav--closed');

  if (mainNavSandwich) {
    mainNavSandwich.addEventListener('click', () => {
      if (mainNav.classList.contains('main-nav--closed')) {
        mainNavSandwich.classList.remove('main-header__toggle--closed');
        mainNavSandwich.classList.add('main-header__toggle--opened');

        mainNav.classList.remove('main-nav--closed');
        mainNav.classList.add('main-nav--opened');
      } else {
        mainNavSandwich.classList.remove('main-header__toggle--opened');
        mainNavSandwich.classList.add('main-header__toggle--closed');

        mainNav.classList.remove('main-nav--opened');
        mainNav.classList.add('main-nav--closed');
      }
    });
  }
};


export {
  getMobileMenu
};
