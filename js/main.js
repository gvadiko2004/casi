// .content__acc

const contentAcc = document.querySelector(".content__acc");

contentAcc.addEventListener("click", function () {
  this.classList.toggle("active");
});

// header__bottom

const headerBottom = document.querySelector(".header__bottom");
const headerBottomBtnOpen = document.querySelector(".user__action-menu");
const headerBottomBtnClose = document.querySelector(".header__bottom-close");

headerBottomBtnOpen.addEventListener("click", function () {
  headerBottom.classList.add("active");
});

headerBottomBtnClose.addEventListener("click", function () {
  headerBottom.classList.remove("active");
});
