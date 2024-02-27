import { fetchUsers } from './fetch.js';

const guide = async () => {
  const departments = $('.kt-portlet[data-code]')
    .get()
    .map((e) => ({
      code: $(e).attr('data-code'),
      icon: $(e).attr('data-iconcalss'),
      name: $(e).attr('data-name'),
      mail: $(e).attr('data-eposta'),
    }));

  localStorage.setItem('departments', JSON.stringify(departments));

  const rehber = $('.kt-container.rehber');

  rehber.after('<button id="save">Save</button>');

  $('#save').on('click', fetchUsers());
};

export default guide;
