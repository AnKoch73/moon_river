// var $btnTop = $(".btn_top")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 400){
		$(".btn_top").fadeIn();
	}else{
		$(".btn_top").fadeOut();
	}
});
$(".btn_top").on("click", function(e){
	$("html, body").animate({scrollTop:0});
});