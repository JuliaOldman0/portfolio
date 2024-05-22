document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".showcase-item");

  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 500);
  });
});
