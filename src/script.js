(function () {
  function loadStyle(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }

  loadStyle("styles.css");
})();

document.addEventListener("DOMContentLoaded", function () {
  var facades = document.querySelectorAll(".youtube-facade");
  facades.forEach(function (facade) {
    facade.addEventListener(
      "click",
      function () {
        var iframe = document.createElement("iframe");
        iframe.setAttribute(
          "src",
          "https://www.youtube.com/embed/" + this.dataset.embed + "?autoplay=1"
        );
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "autoplay; encrypted-media");
        iframe.setAttribute("allowfullscreen", "");
        this.innerHTML = "";
        this.appendChild(iframe);
      },
      { passive: true }
    );
  });
});
