$(document).ready(function() {

$(window).resize(function() {
  width = $("#page").width();
  if (width > 440) {
    $(".tab_year").removeClass("closed").removeClass("open");
  } else {
    $(".tab_year").addClass("closed");
  }
  return width;
}).resize();

var list = $(".reports_main_list").find("div");

$(".tab_year").children("li").find("a").on("click", function() {
  $(".tab_year").find(".active").removeClass("active");
  $(this).parent().addClass("active");
  if (width <= 440) {
    if ($(this).closest(".tab_year").hasClass("closed")) {
      $(this).closest(".tab_year").removeClass("closed").addClass("open");
    } else if ($(this).closest(".tab_year").hasClass("open")) {
      $(this).closest(".tab_year").removeClass("open").addClass("closed");
    }
  }
  var nth = $(".tab_year").find(".active").index();
  $(".reports_main_list").find(".active").css("display","none");
  $(".reports_main_list").find(".active").removeClass("active");
  list[nth].style.display = "block";
  list[nth].className = "active";
});

});
