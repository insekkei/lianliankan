$(function(){
	$('#abllk').click(function(e){
		$('.code').fadeIn(300);
	});
	$('.code').click(function(e){
		$(this).fadeOut(300);
	});
	ifFirstItem();
	$('#slide-left').click(function(e){
		e.preventDefault();
		var $curItem = $('.list-item.current');
		$curItem.fadeOut(0).removeClass('current');
		$curItem.prev().fadeIn(500).addClass('current');	
		$('#slide-right').fadeIn(300);
		ifFirstItem();
	});
	ifLastItem();
	$('#slide-right').click(function(e){
		e.preventDefault();
		var $curItem = $('.list-item.current');
		$curItem.fadeOut(0).removeClass('current');
		$curItem.next().fadeIn(500).addClass('current');	
		$('#slide-left').fadeIn(300);
		ifLastItem();
	});
});
function ifFirstItem(){
	var $curItem = $('.list-item.current');
	if($curItem.hasClass('first-item')){
		$('#slide-left').fadeOut(0);
	}else{
		$('#slide-left').fadeIn(300);
	}
}

function ifLastItem(){
	var $curItem = $('.list-item.current');
	if($curItem.hasClass('last-item')){
		$('#slide-right').fadeOut(0);
	}else{
		$('#slide-right').fadeIn(300);
	}
}

