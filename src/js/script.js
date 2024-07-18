// 設定index滑下的變換 ======================================================
const two__title = document.querySelector('.two h1');

// 當瀏覽器視窗與目標開使相交便會執行indexopen funtion
const obsOptions = {
  root: null,
  thresohold: 0,
  rootMargin: '500px 0px 100px 0px',
};

const indexOpen = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    $('*').removeClass('dark1');
  } else {
    $('*').addClass('dark1');
  }
};

// 目標about(當進入到第二頁觸發的事件)
const observer = new IntersectionObserver(indexOpen, obsOptions);
observer.observe(two__title);

// 卷軸往下 飛機飛走===============================================
const airplane = document.querySelector('.airplane');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    airplane.classList.add('move');
  } else {
    airplane.classList.remove('move');
  }
});

const nav = document.querySelector('.nav');
const nav__item = document.querySelectorAll('.nav__item');

nav.addEventListener('click', function (e) {
  clicked = e.target.closest('li');

  nav__item.forEach(e => e.classList.remove('nav__item--active'));

  if (clicked) {
    clicked.classList.add('nav__item--active');
  }
});

// let xxx = $(window).scrollTop();
// console.log(xxx);

// 隨著滾輪移動到相對應的頁數
$(window).scroll(function () {
  if (
    $(window).scrollTop() >= $('.one').offset().top &&
    $(window).scrollTop() < $('.one__content').offset().top
  ) {
    $('.nav__item').removeClass('nav__item--active');
    $('.nav__item:eq(0)').addClass('nav__item--active');
  } else if (
    $(window).scrollTop() >= $('.one__content').offset().top &&
    $(window).scrollTop() < $('.two__c').offset().top
  ) {
    $('.nav__item').removeClass('nav__item--active');
    $('.nav__item:eq(1)').addClass('nav__item--active');
  } else if ($(window).scrollTop() >= $('.two__c').offset().top) {
    $('.nav__item').removeClass('nav__item--active');
    $('.nav__item:eq(2)').addClass('nav__item--active');
  }
});
