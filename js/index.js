$(function(){
	//show about
	$('#abllk').click(function(e){
		$('.code').fadeIn(300);
	});
	$('.code').click(function(e){
		$(this).fadeOut(300);
	});
	ifFirstItem();
	//slide left
	$('#slide-left').click(function(e){
		e.preventDefault();
		var $curItem = $('.list-item.current');
		$curItem.fadeOut(0).removeClass('current');
		$curItem.prev().fadeIn(500).addClass('current');	
		$('#slide-right').fadeIn(300);
		ifFirstItem();
	});
	ifLastItem();
	//slide right
	$('#slide-right').click(function(e){
		e.preventDefault();
		var $curItem = $('.list-item.current');
		$curItem.fadeOut(0).removeClass('current');
		$curItem.next().fadeIn(500).addClass('current');	
		$('#slide-left').fadeIn(300);
		ifLastItem();
	});
	//contents
	$(document).ajaxStart(function () {
		$(this).html("正在努力地为您加载目录...");
	});

	$('a.thumbnail').click(function(e){
		e.preventDefault();
		var data = $(this).attr('data');
		$('.cover-container').load('html/'+data);
		//location.href = location.href+'shanhaiching';
	});
});
//if current is first item
function ifFirstItem(){
	var $curItem = $('.list-item.current');
	if($curItem.hasClass('first-item')){
		$('#slide-left').fadeOut(0);
	}else{
		$('#slide-left').fadeIn(300);
	}
}
//if current is last item
function ifLastItem(){
	var $curItem = $('.list-item.current');
	if($curItem.hasClass('last-item')){
		$('#slide-right').fadeOut(0);
	}else{
		$('#slide-right').fadeIn(300);
	}
}

