// Import stylesheets
import "./style.css";

const items = document.querySelectorAll("article");
let dragged;

items.forEach(item => {
  item.addEventListener("drag", () => {});
  item.addEventListener("dragstart", function drag() {
    dragged = this;
  });
  document.addEventListener("dragend", () => {});
  document.addEventListener("dragover", e => e.preventDefault());
  document.addEventListener("dragenter", () => {});
  document.addEventListener("dragleave", () => {});
  document.addEventListener("drop", e => {
    e.preventDefault();
    if (e.target.tagName === "MAIN") {
      e.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      e.target.append(dragged);
      if (e.pageY <= 250) {
        e.target.prepend(dragged);
      }
    }
  });
});
