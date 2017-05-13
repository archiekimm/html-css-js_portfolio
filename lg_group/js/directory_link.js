var companylist = document.getElementsByClassName("companylist");

for (var i = 0; i < companylist.length; i++) {
  for(var j = 0; j <  companylist[i].children.length; j++) {
    companylist[i].children[j].onmouseover = function() {
      var target = this.getElementsByTagName("ul");
      target[0].style.display = "block";
      for (var a = 0; a < target.length; a++) {
        for (var b = 0; b <target[a].children.length; b++) {
          target[a].children[b].onmouseover = function() {
          this.getElementsByTagName("p")[0].style.display = "block";
          }
          target[a].children[b].onmouseout = function() {
          this.getElementsByTagName("p")[0].style.display = "none";
          }
        }
      }
    };
    companylist[i].children[j].onmouseout = function() {
      var target = this.getElementsByTagName("ul");
      target[0].style.display = "none";
    };
  }
}
