const gallery = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// відкриття модального вікна

function openModal(index) {
  modal.classList.add("active");
  modalImg.src = gallery[index].src;
  currentIndex = index;
}

// Клік мишею по зображенню в галереї
function onGalleryImageClick(event) {
  let index = Array.prototype.indexOf.call(gallery, event.target);
  openModal(index);
}

for (let i = 0; i < gallery.length; i++) {
  gallery[i].addEventListener("click", onGalleryImageClick);
}

// Закриття модального вікна
function closeModal() {
  modal.classList.remove("active");
}

closeBtn.addEventListener("click", closeModal);

// Оброюник події кліку по вікну
function onWindowClick(event) {
  if (event.target === modal) {
    closeModal();
  }
}
window.addEventListener("click", onWindowClick);

// Показати наступне зображення
function showNext() {
  currentIndex = (currentIndex + 1) % gallery.length;
  // 5 % 9 = 5 // 9 % 9 = 0
  modalImg.src = gallery[currentIndex].src;
}

nextBtn.addEventListener("click", showNext);

// Показати попереднє зображення
function showPrew() {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  // (-1 + 9) % 9 = 8
  modalImg.src = gallery[currentIndex].src;
}

prevBtn.addEventListener("click", showPrew);

// Закриття та прогортування за допомогою клавіатури
// function keyControl(event) {
//   if (event.keyControl === "Escape") {
//     closeModal();
//   } else if (event.key === "ArrowRight") {
//     showNext();
//   } else if (event.key === "ArrowLeft") {
//     showPrew();
//   }
// }

// document.addEventListener("keydown", keyControl);
// НЕ ПРАЦЮЄ на MAC!!!

function keyControl(event) {
  const key = event.key || event.code || event.keyCode;

  if (key === "Escape" || key === "Esc" || key === 27) {
    closeModal();
  } else if (key === "ArrowRight" || key === "Right" || key === 39) {
    showNext();
  } else if (key === "ArrowLeft" || key === "Left" || key === 37) {
    showPrew();
  }
}

document.addEventListener("keydown", keyControl);

// Ці цифри — це код клавіші (keyCode) у старому стандарті JavaScript.
// Кожна клавіша на клавіатурі має унікальний числовий код:

// Клавіша	  keyCode
// Escape	      27
// ArrowLeft	  37
// ArrowRight	  39
// Enter	      13
// Space	      32
