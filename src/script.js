(function () {
  function loadStyle(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }

  loadStyle("styles.css");
})();
