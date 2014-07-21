/*
 *js
 */
$(function(){
	
	//$('#layout-cover').fadeOut();
	//show about
	$('#abllk').click(function(e){
		e.preventDefault();
		$('.code').fadeIn(300);
	});
	$('.code').click(function(e){
		$(this).fadeOut(300);
	});
	//show juanshouyu
	$('#abccj').click(function(e){
		e.preventDefault();
		$('.helloworld').fadeIn(300);
	});
	$('.helloworld').click(function(e){
		$(this).fadeOut(300);
	});

	//slides
	$('#carousel').carousel()
	//contents
	$(document).ajaxSend(function (e) {
		$('#layout-cover').fadeIn(0);
	});
	$(document).ajaxComplete(function (e) {
		$('#layout-cover').fadeOut(0);
	});
	$(document).ajaxError(function(){
		//alert('找不到对应页面');
	});

	//from thumbnails of index to contents
	$('a.thumbnail').click(function(e){
		e.preventDefault();
		var data = $(this).attr('data');
		$('.cover-container').load('html/'+data,getDetails);
	});

	//back to contents
	var getContents = function(){
		$('.back2con,#prev,#next').click(function(e){
			e.preventDefault();
			var data = $(this).attr('data');
			$('.cover-container').load('html/'+data,getDetails);
		});
		//Enable popovers 
		$('.author,#prev').popover({
			trigger: 'hover',
			html:'html'
		}); 
		//Enable draggable
		displayList();
		$('.growlist li').draggable();
	}
	//go to details page
	var getDetails = function(){
		$('.main ul li a,#prev,#next').click(function(e){
			e.preventDefault();
			var data = $(this).attr('data');
			$('.cover-container').load('html/'+data,getContents);
		
		});

		//Enable the popovers
		$('.author').popover({
			trigger: 'hover',
			html:'html'
		}); 
	}
});
function displayList(){
	$('.growlist li:first-child').fadeIn(5000).css('display','inline-block');
	$('.growlist li:nth-child(2)').fadeIn(2000).css('display','inline-block');
	$('.growlist li:nth-child(3n)').fadeIn(3000).css('display','inline-block');
	$('.growlist li:nth-child(4n)').fadeIn(4000).css('display','inline-block');
	$('.growlist li:nth-child(5n)').fadeIn(500).css('display','inline-block');
	$('.growlist li:nth-child(7n)').fadeIn(4500).css('display','inline-block');
}

