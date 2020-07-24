const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

/* Toggle mobile menu */
function toggleMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');

    // adds the menu (hamburger) icon
    toggle.querySelector('a').innerHTML = '<i class=’fas fa-bars’></i>';
  } else {
    menu.classList.add('active');

    // adds the close (x) icon
    toggle.querySelector('a').innerHTML = '<i class=’fas fa-times’></i>';
  }
}

/* Event Listener */
toggle.addEventListener('click', toggleMenu, false);

const items = document.querySelectorAll('.item');

/* Event Listeners */
for (let item of items) {
  if (item.querySelector('.submenu')) {
    item.addEventListener('click', toggleItem, false);
    item.addEventListener('keypress', toggleItem, false);
  }
}

// ACCORDION
var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
