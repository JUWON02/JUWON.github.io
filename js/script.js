$(".header_box>li").mouseover(function(){
$(".sub_menu,.sub_menu_background").stop().slideDown(400);
});

$(".header_box>li").mouseout(function(){
$(".sub_menu,.sub_menu_background").stop().slideUp(400);
});

 
setInterval(function(){
$(".img_slide").animate({marginLeft:-1920},function(){
$(".img_slide").css("margin-left",0)
$(".imgs:first-child").appendTo(".slide");
});
},3000);