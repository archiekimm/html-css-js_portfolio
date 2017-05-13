var thumbnailWrap = document.getElementsByClassName("sub")[0].children;
var bigImageWrap = document.getElementsByClassName("big_image")[0].children;
var controller = document.getElementsByClassName("controller")[0];
var prevBtn = document.getElementsByClassName("page")[0].getElementsByTagName("a")[0];
var nextBtn = document.getElementsByClassName("page")[0].getElementsByTagName("a")[1];
var nowThumbOn;
var nowOn;
var navleft;
var navright;
var navOn;
var thumbleft;
var thumbright;
var bigleft;
var bigright;

function findNow() {
  nowThumbOn = document.getElementsByClassName("sub")[0].getElementsByClassName("on")[0];
  nowOn = document.getElementsByClassName("show_big")[0];
  navleft = document.getElementsByClassName("nav")[0].getElementsByClassName("left")[0];
  navright = document.getElementsByClassName("nav")[0].getElementsByClassName("right")[0];
  navOn = document.getElementsByClassName("nav")[0].getElementsByClassName("on")[0];
  thumbleft = document.getElementsByClassName("sub")[0].getElementsByClassName("left")[0];
  thumbright = document.getElementsByClassName("sub")[0].getElementsByClassName("right")[0];
  bigleft = document.getElementsByClassName("big_image")[0].getElementsByClassName("left")[0];
  bigright = document.getElementsByClassName("big_image")[0].getElementsByClassName("right")[0];
}

function clickMenu(j) {
  return function() {
    bigImageWrap[j].className = "";
    document.getElementsByClassName("show_big")[0].className ="";
    bigImageWrap[j].getElementsByTagName("li")[0].className = "show_big";
    document.getElementsByClassName("nav")[0].getElementsByClassName("on")[0].className = "";
    document.getElementsByClassName("nav")[0].getElementsByTagName("a")[j].className = "on";
    document.getElementsByClassName("sub")[0].getElementsByClassName("on")[0].className = "";
    document.getElementsByClassName("sub")[0].children[j].className = "";
    document.getElementsByClassName("sub")[0].children[j].style.display = "block";
    document.getElementsByClassName("sub")[0].getElementsByTagName("ul")[j].getElementsByTagName("li")[0].className = "on";
    if (j-1 < 0) {
      document.getElementsByClassName("nav")[0].getElementsByTagName("a")[j+2].className = "left";
      document.getElementsByClassName("nav")[0].getElementsByTagName("a")[j+1].className = "right";
      document.getElementsByClassName("sub")[0].children[j+2].className = "left";
      document.getElementsByClassName("sub")[0].children[j+1].className = "right";
      bigImageWrap[j+2].className = "left";
      bigImageWrap[j+1].className = "right";
    } else if (j+1 > 2) {
      document.getElementsByClassName("nav")[0].getElementsByTagName("a")[j-1].className = "left";
      document.getElementsByClassName("nav")[0].getElementsByTagName("a")[j-2].className = "right";
      document.getElementsByClassName("sub")[0].children[j-1].className = "left";
      document.getElementsByClassName("sub")[0].children[j-2].className = "right";
      bigImageWrap[j-1].className = "left";
      bigImageWrap[j-2].className = "right";
    } else {
      document.getElementsByClassName("nav")[0].getElementsByTagName("a")[j-1].className = "left";
      document.getElementsByClassName("nav")[0].getElementsByTagName("a")[j+1].className = "right";
      document.getElementsByClassName("sub")[0].children[j-1].className = "left";
      document.getElementsByClassName("sub")[0].children[j+1].className = "right";
      bigImageWrap[j-1].className = "left";
      bigImageWrap[j+1].className = "right";
    }
    document.getElementsByClassName("sub")[0].getElementsByClassName("left")[0].style.display = "none";
    document.getElementsByClassName("sub")[0].getElementsByClassName("right")[0].style.display = "none";
  }
};

controller.onclick = function() {
  if (controller.className === "controller") {
    controller.className = "controller play";
    controller.getElementsByTagName("img")[0].setAttribute("alt","이미지 연속보기 시작");
  } else if (controller.className === "controller play") {
    controller.className = "controller";
    controller.getElementsByTagName("img")[0].setAttribute("alt","이미지 연속보기 정지");
  }
  return false;
}

nextBtn.onclick = function() {
  findNow();
  nowOn.className = "";
  nowThumbOn.className = "";
  if (nowOn.nextElementSibling === null) {
    bigright.firstElementChild.className = "show_big";
    nowOn.parentNode.className = "left";
    bigright.className = "";
    bigleft.className = "right";
    navright.className = "on";
    navOn.className = "left";
    navleft.className = "right";
    nowThumbOn.parentNode.parentNode.style.display = "none";
    thumbleft.style.display = "none";
    thumbright.style.display = "block";
    nowThumbOn.parentNode.parentNode.className = "left";
    thumbright.className = "";
    thumbleft.className = "right";
    thumbright.getElementsByTagName("li")[0].className = "on";
  } else {
    nowOn.nextElementSibling.className ="show_big";
    nowThumbOn.nextElementSibling.className ="on";
    }
}

prevBtn.onclick = function() {
  findNow();
  nowOn.className = "";
  nowThumbOn.className = "";
  if (nowOn.previousElementSibling === null) {
    bigleft.lastElementChild.className = "show_big";
    nowOn.parentNode.className = "right";
    bigright.className = "left";
    bigleft.className = "";
    navleft.className = "on";
    navOn.className = "right";
    navright.className = "left";
    nowThumbOn.parentNode.parentNode.style.display = "none";
    thumbright.style.display = "none";
    thumbleft.style.display = "block";
    nowThumbOn.parentNode.parentNode.className = "right";
    thumbright.className = "left";
    thumbleft.className = "";
    thumbleft.getElementsByTagName("ul")[0].lastElementChild.className = "on";
  } else {
    nowOn.previousElementSibling.className = "show_big";
    nowThumbOn.previousElementSibling.className ="on";
  }
}

for (var i = 0; i < thumbnailWrap.length; i++) {
  for (var j = 0; j < thumbnailWrap[i].getElementsByTagName("a").length; j++) {
    thumbnailWrap[i].getElementsByTagName("a")[j].onclick = (function(p,q) {
      return function() {
         for (var a = 0; a < thumbnailWrap[p].getElementsByTagName("a").length; a++){
           thumbnailWrap[p].getElementsByTagName("li")[a].className = "";
           bigImageWrap[p].getElementsByTagName("li")[a].className = "";
         }
        thumbnailWrap[p].getElementsByTagName("li")[q].className = "on";
        bigImageWrap[p].getElementsByTagName("li")[q].className = "show_big";
      }
    })(i,j);
  }
}

for (i = 0; i < bigImageWrap.length; i++) {
  bigImageWrap[i].onclick = clickMenu(i);
  document.getElementsByClassName("nav")[0].getElementsByTagName("a")[i].onclick = clickMenu(i);
}
