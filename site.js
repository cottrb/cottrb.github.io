(function () {
  var year = String(new Date().getFullYear());
  var els = document.querySelectorAll("[data-current-year]");
  for (var i = 0; i < els.length; i++) {
    els[i].textContent = year;
  }
})();
