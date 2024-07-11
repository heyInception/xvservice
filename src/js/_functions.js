// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// import { DynamicSelect } from './functions/DynamicSelect';







// var dragItem = document.querySelector(".header__switch-item");
// var container = document.querySelector(".header__switch-container");

// var active = false;
// var currentX;
// var currentY;
// var initialX;
// var initialY;
// var itemClick;
// var xOffset = 0;
// var yOffset = 0;


// if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
//   container.addEventListener("mouseup", dragEnd, false);
//   container.addEventListener("click", toggleSwitch, false);
// } else {
//   container.addEventListener("touchstart", dragStart, false);
//   container.addEventListener("touchend", dragEnd, false);
//   container.addEventListener("touchmove", drag, false);

//   container.addEventListener("mousedown", dragStart, false);
//   dragItem.addEventListener("mousedown", itemDragStart, false);

//   container.addEventListener("mousemove", drag, false);

//   container.addEventListener("mouseup", dragEnd, false);
//   container.addEventListener("click", toggleSwitch, false);
// }

// function dragStart(e) {
//   var elm = $(this);
//   var xPos = e.pageX - elm.offset().left;

//   if (e.type === "touchstart") {
//     var xPosMobile = e.touches[0].pageX - elm.offset().left;
//     initialX = xPosMobile;
//   } else {
//     initialX = xPos;
//   }

//   dragItem.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";

//   if (e.target === dragItem) {
//     active = true;
//   }
// }

// function itemDragStart(e) {
//   var elm = $(this);
//   var xPos = e.pageX - elm.offset().left;

//   itemClick = xPos;
// }

// function toggleSwitch(e) {
//   if (initialX > 100) {
//     currentX = 0;
//   } else {
//     currentX = 130;
//   }
// }

// function dragEnd(e) {
//   initialX = currentX;

//   active = false;

//   if (initialX > 100) {
//     currentX = 130;
//     dragItem.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
//     container.classList.add('select-right');
//     container.classList.remove('select-left');
//   } else {
//     currentX = 0;
//     dragItem.style.transition = "all .2s cubic-bezier(0.04, 0.46, 0.36, 0.99)";
//     container.classList.remove('select-right');
//     container.classList.add('select-left');
//   }

//   setTranslate(currentX, dragItem);
// }

// function drag(e) {
//   var elm = $(this);
//   var xPos = e.pageX - elm.offset().left;
//   if (!(xPos > 400 || xPos < 0)) {
//     if (active) {
//       e.preventDefault();

//       if (e.type === "touchmove") {
//         var xPosMobile = e.touches[0].pageX - elm.offset().left;
//         currentX = xPosMobile - initialX;
//         if (initialX > 200) {
//           currentX = xPosMobile - itemClick;
//         }
//         if (currentX > 200) {
//           currentX = 130;
//           active = false;
//           container.classList.add('select-right');
//           container.classList.remove('select-left');
//         } else if (currentX < 0) {
//           currentX = 0;
//           active = false;
//           container.classList.remove('select-right');
//           container.classList.add('select-left');
//         }
//       } else {
//         currentX = xPos - initialX;
//         if (initialX > 200) {
//           currentX = xPos - itemClick;
//         }
//         if (currentX > 200) {
//           currentX = 130;
//           active = false;
//           container.classList.add('select-right');
//           container.classList.remove('select-left');
//         } else if (currentX < 0) {
//           currentX = 0;
//           active = false;
//           container.classList.remove('select-right');
//           container.classList.add('select-left');
//         }
//       }

//       dragItem.style.transition = "all .05s cubic-bezier(0.04, 0.46, 0.36, 0.99)";

//       xOffset = currentX;

//       setTranslate(currentX, dragItem);
//     }
//   } else {
//     active = false;

//     if (initialX > 200) {
//       dragItem.style.transform = "translate3d(130px, 0px, 0)";
//     } else {
//       dragItem.style.transform = "translate3d(0, 0px, 0)";
//     }
//   }
// }

// function setTranslate(xPos, el) {
//   el.style.transform = "translate3d(" + xPos + "px, 0px, 0)";
// }

// tabs animated

$(document).ready(function () {
  // Общая функция для обновления подчеркивания
  function updateUnderline($container, $active) {
    let $underline = $container.find('.nav-underline');
    let left = $active.position().left;
    let width = $active.outerWidth();
    $underline.css({ left: left, width: width });
  }

  // Инициализация подчеркивания для каждого блока


  // Обработчики событий
  $(document).on('mouseenter', '.header__tabs:has(.nav-underline) > li > div', function () {
    updateUnderline($(this).closest('.header__tabs'), $(this));
  });

  $(document).on('mouseleave', '.header__tabs:has(.nav-underline) > li > div', function () {
    var $active = $(this).closest('.header__tabs').find('div.active').first();
    updateUnderline($(this).closest('.header__tabs'), $active);
  });
});
// new DynamicSelect('#country', {
//     width: '10px',
//     placeholder: 'Select a country',
//     name: 'my-custom-select',
//     onChange: function(value, text, option) {
//         console.log(value, text, option);
//     }
// });
// new DynamicSelect('#bank', {
//     width: '10px',
//     placeholder: 'Select a country',
//     name: 'my-custom-select',
//     onChange: function(value, text, option) {
//         console.log(value, text, option);
//     }
// });
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
const tabs = new GraphTabs('reviews');


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

let swiperSlider = new Swiper(".news__slider", {
  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.news__next',
    prevEl: '.news__prev',
  },
  watchSlidesProgress: true,
  centeredSlides: false,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: '1.5',
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: '2.5',
      spaceBetween: 30
    },
    // when window width is >= 640px
    1231: {
      slidesPerView: '3.5',
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
    $(this).find('.faq__content').toggleClass('faq__content_active');
  });

  const mediaQuery = window.matchMedia('(max-width: 1419px)')
  // Check if the media query is true
  if (mediaQuery.matches) {
    $(document).ready(function () {
      var $seoContent = $(".seo__content");
      var $seoInner = $(".seo__inner");
      var maxHeight = $seoInner.height() + 'px';
      $seoContent.css('height', '200px')
      $('#show_more').click(function () {
        if ($seoContent.height() !== 200) {
          $seoContent.animate({ height: '200px' }, 500).removeClass('seo__content_active');
          $('#show_more').text('Читать полностью    ');
        } else {
          $seoContent.addClass('seo__content_active').animate({ height: maxHeight }, 500);

          $('#show_more').text('Свернуть');
        }
      });
    });
  }

});
