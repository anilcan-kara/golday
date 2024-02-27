import { xsrf } from './config.js';

export const getDepartments = () =>
  JSON.parse(localStorage.getItem('departments') || '[]');

export const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');

String.prototype.clear = function () {
  return this.replace(/\\n+/g, '').replace(/\s+/g, ' ').trim();
};

String.prototype.seoize = function () {
  return this.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

export const fetchDepartmenUsers = async (department) => {
  const guide = await fetch('/ApplicationArea/Guide/UserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Xsrf-Token': xsrf,
    },
    body: `unitId=${department}`,
  }).then((res) => res.text());

  const guideModal = $(guide);
  return guideModal.find('.kt-portlet');
};

export const searchUsers = async (filter = '.') => {
  const guide = await fetch('/ApplicationArea/Guide/UserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Xsrf-Token': xsrf,
    },
    body: `filter=${filter}`,
  }).then((res) => res.text());

  const guideModal = $(guide);
  return guideModal.find('.kt-portlet');
};

export const fetchUsers = async () => {
  const html = await searchUsers();

  const users = html
    .get()
    .map((e) => ({
      name: $(e).find('.kt-widget__username').text().clear(),
      title: $(e).find('.kt-widget__desc').text().clear(),
      photo: $(e).find('.kt-widget__media img').attr('src'),
      ...Object.fromEntries(
        $(e.querySelectorAll('.kt-widget__contact'))
          .get()
          .map((info) => [
            $(info).find('.kt-widget__label').text().seoize().replace('-', ''),
            $(info).find('.kt-widget__data').text(),
          ])
      ),
    }))
    .filter(
      (user) =>
        !user.yer.includes('MAKAM') &&
        !user.title.includes('GENEL MÜDÜR') &&
        !user.title.includes('BAŞKAN') &&
        !user.title.includes('HÂKİM')
    );

  localStorage.setItem('users', JSON.stringify(users));

  return users;
};
