$(document).ready(function() {

var width;
var gnb = $(".gnb").children("li");
var gnbmore = $(".gnb").children("li").children(".more");
var lnbmore = $(".lnb").children("li").children(".more");
var submore = $(".sub").children("li").children(".more");
var nav = $("header").find("nav");


//데스크탑 메뉴
$(window).resize(function() {
  width = $("#page").width();
  if (width > 700) {
    $(".open").removeClass("open");
  }
  return width;
}).resize();

gnb.on("mouseenter", function() {
  if (width > 700) {
    $(this).addClass("open");
    $(this).find(".wrap").css("display","block");
  }
});

gnb.on("mouseleave", function() {
  if (width > 700) {
    $(this).removeClass("open");
    $(this).find(".wrap").css("display","none");
  }
});


//햄버거 메뉴
$(".open_gnb").on("click", function() {
  $(this).toggleClass("active");
  nav.slideToggle();
});

function more(target) {
  target.on("click", function() {
    if($(this).parent().hasClass("open")) {
      $(this).parent().removeClass("open");
      $(this).next().slideUp();
    } else {
      $(this).parent().addClass("open");
      $(this).next().slideDown();
      $(this).parent().siblings().removeClass("open");
      $(this).parent().siblings().find(".more").next().slideUp();
    }
    return false;
  })
};

more(gnbmore);
more(lnbmore);
more(submore);


//검색
var search = $(".search");

$(".magnifier").on("click", function() {
  if(search.css("display") === "none") {
    search.css("display", "block");
  } else {
    search.css("display", "none");
  }
});

search.find("a").on("click", function() {
  search.css("display", "none");
});

});
