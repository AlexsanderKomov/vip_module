const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger__line');
const headerWrapper = document.querySelector('.header__wrapper ');

burger.addEventListener('click', () => {
  for (const line of burgerLine) {
    line.classList.toggle('burger__line-active');
  }

  burger.classList.add('burger-active');
  setTimeout(() => {
    burger.classList.remove('burger-active');
  }, 200);

  headerWrapper.classList.toggle('header__wrapper-active');
  document.body.classList.toggle('stop-scroll');
});
