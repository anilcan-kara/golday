import { getUsers } from './fetch.js';

const cargo = () => {
  document.title = 'Altin Gunu';

  const title = $('.kt-subheader__title');
  title.after('<h1>Altın Günü Kurasi</h1>').hide();

  const btnNew = $('#CreateNewButton');
  btnNew.hide();
  btnNew.html('<i class="fa fa-plus-square"></i>Katilimcilari Sec');

  const search = $('#arama');

  const store = {
    isUserListVisible: false,
    users: getUsers(),
    selectedUsers: [],
    winners: [],
  };

  window.store = store;

  search.on('input', function () {
    const value = $(this).val().toLowerCase();

    $('#user-list .user').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  const userJsx = (user) => `<div class="user" sicil="${user.sicil}">
            <img class="photo" src="${user.photo}" alt="${user.name}">
            <p class="title">${user.name}</p>
        </div>`;

  $('#user-list').html(store.users.map(userJsx));

  $('#close').on('click', function () {
    store.isUserListVisible = !store.isUserListVisible;

    if (store.isUserListVisible) {
      $(this).text('Listeyi Goster');
    } else {
      $(this).text('Listeyi Kapat');
    }

    $('#user-list').toggle();
  });

  $('#user-list .user').on('click', function () {
    const sicil = $(this).attr('sicil');
    const user = store.users.find((user) => user.sicil === sicil);

    if (!store.selectedUsers.find((e) => e.sicil === user.sicil)) {
      store.selectedUsers.push(user);
      $('#selected-users').html(store.selectedUsers.map(userJsx));
      $('.selected-users').show();
    }
  });

  $('#selected-users').on('click', '.user', function () {
    const sicil = $(this).attr('sicil');
    const user = store.users.find((user) => user.sicil === sicil);

    store.selectedUsers = store.selectedUsers.filter(
      (u) => u.sicil !== user.sicil
    );

    $('#selected-users').html(store.selectedUsers.map(userJsx));
  });

  let confetti = new Confetti('draw-lot');

  confetti.setCount(75);
  confetti.setSize(1);
  confetti.setPower(25);
  confetti.setFade(false);
  confetti.destroyTarget(false);

  function draw() {
    if (store.selectedUsers.length === 0) {
      return alert('Katilimci seciniz');
    }

    const winner =
      store.selectedUsers[
        Math.floor(Math.random() * store.selectedUsers.length)
      ];

    if (store.winners.find((e) => e.sicil === winner.sicil)) {
      return draw();
    }

    $('.search-line').hide();
    $('#user-list').hide();

    store.winners.push(winner);

    store.selectedUsers = store.selectedUsers.filter(
      (u) => u.sicil !== winner.sicil
    );

    if (store.selectedUsers.length === 0) {
      $('.selected-users').hide();
    } else {
      $('#selected-users').html(store.selectedUsers.map(userJsx));
    }

    $('#winner').html(`<div class="winner">
      <div>
      <img src="${winner.photo}" />
      </div>
      <div class="details"}]}>
      <h1>${winner.name}</h1>
      <p>Unvani: ${winner.title}</p>
      <p>Birim: ${winner.birim}</p>
      <p>Dahili No: ${winner.dahilino}</p>
      <p>Eposta: ${winner.eposta}</p>
      <p>Sicil: ${winner.sicil}</p>
      <p>Yer: ${winner.yer}</p>
      </div>
      </div>`);

    $('#winners').html(store.winners.map(userJsx));

    $('.winners').show();
  }

  $('#draw-lot').on('click', draw);
};

export default cargo;
