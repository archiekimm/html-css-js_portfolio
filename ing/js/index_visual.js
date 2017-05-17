$(document).ready(function() {

  var active;
  var control;
  var ctrlBtn = $(".control").find("a");

  function getactive() {
    active = $(".pannel").find(".active");
    control = $(".control").find(".active");
    active.css("display","none").removeClass("active");
    control.removeClass("active");
  };

  $(".pannel").find(".next").on("click", function() {
    getactive();
    if(active.next().length > 0) {
      active.next().css("display","block").addClass("active");
      control.next().addClass("active");
    } else {
      $(".pannel").find("li").first().css("display","block").addClass("active");
      ctrlBtn.first().addClass("active");
    }
    return false;
  });

  $(".pannel").find(".prev").on("click", function() {
    getactive();
    if(active.prev().length > 0) {
      active.prev().css("display","block").addClass("active");
      control.prev().addClass("active");
    } else {
      $(".pannel").find("li").last().css("display","block").addClass("active");
      ctrlBtn.last().addClass("active");
    }
    return false;
  });
  
});
