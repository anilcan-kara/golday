import { path } from './config.js';

const nav = () => {
  const menu = $('.kt-menu__item:has(a[href="/UnitLibrary/LibraryRequests"])');
  const link = menu.find('a');
  const title = menu.find('.kt-menu__link-text');
  const icon = menu.find('.kt-menu__link-icon i');

  link.attr('href', path);
  title.text('Altin Gunu');
  icon.removeClass('fa-book').addClass('fa-coins');

  const cargoMenu = $('.kt-menu__item:has(i.fa-file-signature)')

  if(cargoMenu.hasClass('kt-menu__item--active')){
    $('.kt-menu__item--active').removeClass('kt-menu__item--active');
    $('.kt-menu__item--submenu').removeClass('kt-menu__item--submenu');
    $('.kt-menu__item--open').removeClass('kt-menu__item--open');
    $('.kt-menu__item--here').removeClass('kt-menu__item--here');

    menu.addClass('kt-menu__item--active');
  }
};

export default nav;
