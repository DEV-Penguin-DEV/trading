// Sandwich menu
const mainNavSandwich = document.querySelector('.header-nav__mobile-menu-button');
const mainNav = document.querySelector('.header-nav');
const topContent = document.querySelector('.main-content');

const getMobileMenu = () => {
  mainNavSandwich.classList.add('header-nav__mobile-menu-button--closed');
  mainNav.classList.add('header-nav--closed');

  mainNavSandwich.addEventListener('click', () => {
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
  });
};


export {
  getMobileMenu
};
