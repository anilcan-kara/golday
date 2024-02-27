const cargo = () => {
  const title = $('.kt-subheader__title');
  title.text('Altin Gunu');

  const btnNew = $('#CreateNewButton');
  btnNew.html('<i class="fa fa-plus-square"></i>Katilimcilari Sec');

  const th = (name) => `<th>${name}</th>`;

  const table = $('#CargoBranchesTable');
  table
    .find('thead tr')
    .html(
      [
        'Photo',
        'Name',
        'Department',
        'Position',
        'Unit',
        'Branch',
        'Status',
        'Actions',
      ]
        .map(th)
        .join('')
    );

  $(function () {
    const users = [
      { name: 'Anıl', photo: 'anil.jpg' },
      { name: 'Kemal', photo: 'kemal.jpg' },
    ];

    users.forEach((user) => {
      $('#user-list').append(`<div class="user">
              <img src="${user.photo}" alt="${user.name}">
              <p>${user.name}</p>
              <button class="select-user">Seç</button>
          </div>`);
    });

    $('.select-user').on('click', function () {
      const userDiv = $(this).parent();
      $('#selected-users').append(userDiv.clone());
    });

    $('#draw-lot').on('click', function () {
      const selectedUsers = $('#selected-users .user p')
        .map(function () {
          return $(this).text();
        })
        .get();

      const scheduleDiv = $('#schedule');

      let currentDate = new Date();
      currentDate.setDate(15);

      selectedUsers.forEach((name) => {
        scheduleDiv.append(
          `<p>${name}: ${currentDate.toLocaleDateString('tr-TR')}</p>`
        );
        currentDate.setMonth(currentDate.getMonth() + 1);
      });
    });
  });
};

export default cargo;
