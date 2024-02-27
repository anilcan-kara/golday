import { path } from './config.js';

const home = () => {
  const portlet = $('.kt-portlet[href="/UnitLibrary/LibraryRequests"]');
  portlet.attr('href', path);
  const title = portlet.find('.kt-iconbox__title');
  const desc = portlet.find('.kt-iconbox__desc .kt-iconbox__content');
  const icon = portlet.find('.kt-iconbox__icon i');

  title.text('Altin Gunu');
  desc.text('Altin Gunu Olusturun ve Kurasini Cekin');
  icon.removeClass('fa-book').addClass('fa-coins');
};

export default home;
