$(function(){
	$(".ul-menu1 li").hover(function(){
		var index=$(this).index()+1;
		$(".box-1 .con").attr("background",'url(../imgages/menu'+'.jpg)');
	},function(){})
})