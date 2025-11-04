document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputs = form.querySelectorAll("input[required], textarea[required]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valido = true;

  }