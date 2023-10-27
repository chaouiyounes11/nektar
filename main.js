const title = document.getElementsByClassName('title')[0];
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const body = document.getElementsByTagName('body')[0];
const projectBtn = document.getElementsByClassName('project-details');
const presentationProject = document.getElementsByClassName(
  'presentation-projects'
)[0];

const btnContent = document.getElementsByClassName('btn-content');

const btnCloseProject = document.getElementsByClassName('close-line')[0];

window.addEventListener('scroll', function () {
  if (this.scrollY > 50) {
    title.classList.add('remove-with-opacity');
    return;
  }
  title.classList.remove('remove-with-opacity');
});

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('animation-btn');
  menu.classList.toggle('open-menu');
  body.classList.toggle('menu-is-open');
});

[...btnContent].forEach((el, i) => {
  console.log(el.nextSibling.nextSibling);
  el.nextSibling.nextSibling.classList.remove('open');
  el.addEventListener('click', () => {
    el.nextSibling.nextSibling.classList.toggle('open');
  });
});
