$(document).ready(function(){
	$(".green").on("mouseenter click",function(){
		$("span").stop().slideDown();		
	});
	$("nav li").mouseleave(function(){
		$(this).find("span").slideUp();
	});
});