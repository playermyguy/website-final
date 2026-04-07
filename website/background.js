document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      const headerContainer = document.getElementById("header");
      if (headerContainer) {
        headerContainer.innerHTML = data;
      }
    });
});
