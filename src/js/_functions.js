// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
import { Dynamic } from './functions/DynamicSelect';
new DynamicSelect('#country', {
  width: '10px',
  placeholder: 'Select a country',
  name: 'my-custom-select',
  onChange: function(value, text, option) {
    console.log(value, text, option);
  }
});
// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// Реализация табов
import GraphTabs from 'graph-tabs';
const tabs = new GraphTabs('spec');
const selectElement = document.querySelector('#specialization'); // ID вашего select элемента

selectElement.addEventListener('change', function () {
  const selectedValue = this.value;
  const index = Array.from(this.options).findIndex(option => option.value === selectedValue);

  if (index > -1) {
    const selectedTab = document.querySelector(`#spec${index + 1}`);
    const currentTab = document.querySelector('.tabs__nav-btn--active');

    if (selectedTab !== currentTab) {
      tabs.switchTabs(selectedTab, currentTab);
    }
  }
});

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs, Scrollbar } from 'swiper/modules';

let swiperSlider = new Swiper(".slider__start", {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__button_next',
    prevEl: '.slider__button_prev',
  },
  centeredSlides: false,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1230: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1231: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});

let swiperClients = new Swiper(".slider__clients", {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider__button_clients-next',
    prevEl: '.slider__button_clients-prev',
  },
  centeredSlides: false,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1230: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1231: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
jQuery(document).ready(function ($) {


  //cookie
  if (getCookie('popupCookie') != 'closed') {
    $('#cookieHeader').css("display", "block").hide().fadeIn();
  }

  $('.cookie-popup__close').click(function () {
    $('#cookieHeader').fadeOut();
    setCookie('popupCookie', 'closed', 360);
  });

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


});


$(document).ready(function () {
  $('.faq__item').click(function () {

    $(this).toggleClass('faq__item_active');
    $(this).find('.faq__text').toggleClass('faq__text_active');
  });

  $(document).ready(function () {
    $('input[type="radio"]').change(function () {
      if (!$('input[type="radio"]').is(':checked')) {
        $('.calc__result').slideUp();
      } else {
        $('.calc__result').slideDown(500, function() {
          $(this).css('display', 'flex');
        });
      }
    });
  });
});

