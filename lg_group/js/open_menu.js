//gnb
var lnb;
var gnbTab = document.getElementsByClassName("gnb")[0].children; //배열
var header = document.getElementsByClassName("header")[0];

for (var i = 0; i < gnbTab.length; i++) {
  gnbTab[i].onmouseover = function() {
    if (this.getElementsByClassName("lnb")[0]) {
      lnb = this.getElementsByClassName("lnb")[0];
      header.className = "header on";
      lnb.style.display = "block";
    };
  };
  gnbTab[i].onmouseout = function() {
    if (this.getElementsByClassName("lnb")[0]) {
      lnb = this.getElementsByClassName("lnb")[0];
      header.className = "header";
      lnb.style.display = "none";
    };
  };
};

//footer > hidden_menu
var hiddenMenu = document.getElementsByClassName("hidden_menu")[0];
var hiddenMenuBtn = document.getElementsByClassName("btn")[0];

hiddenMenuBtn.onclick = function() {
  var textNode;
  if (hiddenMenu.style.display === "block") {
    hiddenMenu.style.display = "none";
    hiddenMenuBtn.className = "btn closed blind";
    hiddenMenuBtn.removeChild(hiddenMenuBtn.childNodes[0]);
    textNode = document.createTextNode("전체메뉴열기");
    hiddenMenuBtn.appendChild(textNode);
    return false;
  } else if (hiddenMenu.style.display === "none") {
    hiddenMenu.style.display = "block";
    hiddenMenuBtn.className = "btn blind";
    hiddenMenuBtn.removeChild(hiddenMenuBtn.childNodes[0]);
    textNode = document.createTextNode("전체메뉴닫기");
    hiddenMenuBtn.appendChild(textNode);
    return false;
  }
}
