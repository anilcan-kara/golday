import { xsrf } from './config.js';

export const fetchUsers = async (departments) => {
  if (!departments) {
    departments = JSON.parse(localStorage.getItem('departments') || '[]');
  }

  console.log(`departments`, departments);

  const guide = await fetch('/ApplicationArea/Guide/UserList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Xsrf-Token': xsrf,
    },
    body: 'unitId=1034778',
  }).then((res) => res.text());

  const guideModal = $(guide);
  return guideModal.find('.kt-portlet');
};
