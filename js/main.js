// var $btnTop = $(".btn_top")
$(window).on("scroll", function () {
	if ($(window).scrollTop() >= 400) {
		$(".btn_top").fadeIn();
	} else {
		$(".btn_top").fadeOut();
	}
});
$(".btn_top").click(function (e) {
	$("html, body").animate({ scrollTop: 0});
});
$("#main").on("click", function (e) {
	$(this).toggleClass("animate__animated animate__zoomIn");
});
//-----------маска ввода---------------
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$(document).ready(function () {
	$("#tel").click(function(){
		$(this).setCursorPosition(4);
	}).mask("+7 (999) 999-99-99");
});
//-----------/маска ввода/---------------
$(".sect_1_item:nth-child(2)").mouseover(function () { 
	$(".sect_1_item:nth-child(4)").slideDown(500);
});
$(".sect_1_item:nth-child(2)").mouseout(function () { 
	$(".sect_1_item:nth-child(4)").slideUp(500);
});