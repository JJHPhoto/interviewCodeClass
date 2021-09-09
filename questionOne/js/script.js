let highlight = document.querySelectorAll(".tooltip");

highlight.forEach(function (item) {
  item.addEventListener(
    "click",
    function () {
      if (item.dataset.highlightClick === "on") {
        item.style.backgroundColor = "red";
      }
    },
    false
  );
}, this);
