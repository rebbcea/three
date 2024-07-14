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
  console.log(entry);

  if (!entry.isIntersecting) {
    $('*').removeClass('dark1');
    // airplane.classList.add('active');
  } else {
    $('*').addClass('dark1');
    // airplane.classList.remove('active');
  }
};

// 目標about(當進入到第二頁觸發的事件)
const observer = new IntersectionObserver(indexOpen, obsOptions);
observer.observe(two__title);

// observer.observe(three__title);

// 卷軸往下 飛機飛走===============================================
const airplane = document.querySelector('.airplane');

// window.addEventListener('scroll', () => {
//   if (window.pageYOffset > 50) {
//     airplane.classList.add('move');
//   } else {
//     airplane.classList.remove('move');
//   }
// });
