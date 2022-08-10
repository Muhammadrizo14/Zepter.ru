var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
  }
});



let f = document.querySelector('.bar-link1')
  s = document.querySelector('.bar-link2')
  t = document.querySelector('.bar-link3')
  details = document.querySelector('.infb-detail')
  pdf = document.querySelector('.pdf_ins')
  hard = document.querySelector('.tex-db')


f.addEventListener('click', ()=> {
  f.classList.add('active')
  s.classList.remove('active')
  t.classList.remove('active')

  details.style.display = 'block'
  pdf.style.display = 'none'
  hard.style.display = 'none'

})

s.addEventListener('click', ()=> {
  s.classList.add('active')
  f.classList.remove('active')
  t.classList.remove('active')


  hard.style.display = 'block'
  pdf.style.display = 'none'
  details.style.display = 'none'
})

t.addEventListener('click', ()=> {
  t.classList.add('active')
  s.classList.remove('active')
  f.classList.remove('active')



  hard.style.display = 'none'
  pdf.style.display = 'block'
  details.style.display = 'none'
})