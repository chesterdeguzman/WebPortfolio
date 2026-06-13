function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleReadMore() {
  const content = document.getElementById("more-about");
  const button = document.querySelector(".read-more-btn");

  content.classList.toggle("show");

  if (content.classList.contains("show")) {
    button.innerText = "Show Less ♡";
  } else {
    button.innerText = "Read More ♡";
  }
}
