
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }


  //selecting all images
  const sliderImages = document.querySelectorAll('.slide-in');

  //a function that will run everytime a person scroll
   function checkSlide(e){
      //  console.dir(window.scrollY);
      //  console.dir(window.innerHeight);
      sliderImages.forEach( sliderImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height /  2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfshown = slideInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        console.log('slide in at', slideInAt);
        console.log('image bottom',imageBottom);
        console.log('half shown',isHalfshown);
        console.log('not scrolled past',isNotScrolledPast);

          if(isHalfshown && isNotScrolledPast){
            sliderImage.classList.add('active');
          }else {
            sliderImage.classList.remove('active');
          }
        

      })
  }

window.addEventListener('scroll', debounce(checkSlide));














































































