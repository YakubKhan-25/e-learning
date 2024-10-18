
let d = document.querySelectorAll(".rightnav span");

function passfunc(idx) {
  d.forEach((item) => {
    item.classList.remove("active", "blur");
  });

  d[idx].classList.add("active");

  d.forEach((item, i) => {
    if (i !== idx) {
      item.classList.add("blur");
    }
  });
}

d.forEach((items, idx) => {
  items.addEventListener("mouseenter", () => {
    passfunc(idx);
  });
  items.addEventListener("mouseleave", () => {
    d.forEach((item) => {
      item.classList.remove("active", "blur");
    });
  });
});
