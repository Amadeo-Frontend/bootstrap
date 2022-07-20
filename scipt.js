
const myCarouselElement = document.querySelector('#carouselFade')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2500,
})
window.onscroll = function () {
    scroll();
  };
  function scroll() {
    let btn = document.getElementById("btnTop");
    if (document.documentElement.scrollTop > 90) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  }
  function backToTop() {
    document.documentElement.scrollTop = 0;
  }