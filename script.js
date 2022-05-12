var coll = document.getElementsByClassName("dropdown-header");
var backgroundImage = document.getElementsByClassName("background");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      backgroundImage.style.height = "120%";
    } else {
      content.style.display = "block";
      backgroundImage.style.height = "140%";
    }
  });
}

