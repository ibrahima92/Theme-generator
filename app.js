const pink = document.getElementById('pink');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const colorContainer = document.querySelector('.color-container');

orange.addEventListener('click', () => {
  changeTheme(orange);
});

pink.addEventListener('click', () => {
  changeTheme(pink);
});

yellow.addEventListener('click', () => {
  changeTheme(yellow);
});

blue.addEventListener('click', () => {
  changeTheme(blue);
});

function changeTheme(element) {
  document.documentElement.classList.add('transition');
  handleActiveClass();
  element.classList.add(`${element.id}-active`);
  setTimeout(() => {
    document.documentElement.classList.remove('transition');
  }, 1000);
  document.documentElement.setAttribute('data-theme', element.id);
}

function handleActiveClass() {
  Array.from(colorContainer.children).map(active => {
    if (active.classList.contains('pink-active')) {
      active.classList.remove('pink-active');
    } else if (active.classList.contains('blue-active')) {
      active.classList.remove('blue-active');
    } else if (active.classList.contains('yellow-active')) {
      active.classList.remove('yellow-active');
    } else if (active.classList.contains('orange-active')) {
      active.classList.remove('orange-active');
    }
  });
}
