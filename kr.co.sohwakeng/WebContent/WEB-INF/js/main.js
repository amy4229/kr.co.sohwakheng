/**
 * main.js
 */

$(function(){
	$(".menu").mouseover(function(){
		var target = $(this).find(".submenus");
		$(target).css("display","block");
		$(target).stop().animate({
			opacity:1
		},500);
		
	})
	$(".menu").mouseout(function(){
		//$(this).find(".submenus").addClass("hidden");
		var target = $(this).find(".submenus");
		$(target).stop().animate({
			opacity:0
		},500,function(){$(target).css("display","none")});
	});
})