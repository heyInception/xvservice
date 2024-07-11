// import { disableScroll } from '../functions/disable-scroll';
// import { enableScroll } from '../functions/enable-scroll';

(function(){
  // Function to toggle the menu
  const toggleMenu = (burger, menu) => {
    burger.classList.toggle('burger__active');
    menu.classList.toggle('header__wrap_active');
    jQuery(menu).slideToggle(500).css("display", "block");
    jQuery(".header").toggleClass('header_active');
    jQuery(".header-bg-active").toggleClass('banner--bg');

    if (menu.classList.contains('menu--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Закрыть меню');
      //disableScroll();
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Открыть меню');
      //enableScroll();
    }
  };

  // Get all burger buttons and their corresponding menus
  const burgers = document.querySelectorAll('[data-burger]');
  burgers.forEach(burger => {
    const menuId = burger.getAttribute('data-burger');
    const menu = document.querySelector(`[data-menu="${menuId}"]`);
    const closeMenuButtons = menu.querySelectorAll('[data-close]');
    const menuItems = menu.querySelectorAll('[data-menu-item]');
    const overlay = menu.querySelector('[data-menu-overlay]');

    // Toggle menu when burger button is clicked
    burger.addEventListener('click', (e) => {
      toggleMenu(burger, menu);
    });

    // Close menu when any close menu button is clicked
    closeMenuButtons.forEach(button => {
      button.addEventListener('click', () => {
        toggleMenu(burger, menu);
      });
    });

    // Close menu when overlay is clicked

    // Close menu when a menu item is clicked
    menuItems.forEach(el => {
      el.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger__active');
        menu.classList.remove('header__wrap_active');
        jQuery(menu).slideUp(500);
        //enableScroll();
      });
    });
  });
})();




