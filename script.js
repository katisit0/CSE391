
document.addEventListener("DOMContentLoaded", function() {
    var footerInfo = document.getElementById("footer-info");
    var pageLocation = window.location.href;
    var lastModified = document.lastModified;
    footerInfo.textContent = "Page location: " + pageLocation + " | Last modified: " + lastModified;
  
    var modeToggle = document.getElementById("mode-toggle");
    modeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
  