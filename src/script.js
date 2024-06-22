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
  var placeholders = document.querySelectorAll(".youtube-placeholder");
  placeholders.forEach(function (placeholder) {
    placeholder.addEventListener("click", function () {
      var embedCode = placeholder.getAttribute("data-embed");
      var iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" + embedCode + "?autoplay=1"
      );
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      );
      iframe.setAttribute("allowfullscreen", "true");
      placeholder.innerHTML = "";
      placeholder.appendChild(iframe);
    });
  });
});
