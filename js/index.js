/*
 *js
 */
$(function(){
	
	//show about
	$('#abllk').click(function(e){
		e.preventDefault();
		$('.code').fadeIn(300);
	});
	$('.code').click(function(e){
		$(this).fadeOut(300);
	});
	//notice
	$('#notice-cover .close').click(function(e){
		e.preventDefault();
		$('#notice-cover').fadeOut();
	});
	//判断是否新会话
	if (sessionStorage.pagecount){
                  sessionStorage.pagecount=Number(sessionStorage.pagecount) +1;
        }else{
                  sessionStorage.pagecount=1;
        }
	if( Number(sessionStorage.pagecount) ==1){
		$('#notice-cover').fadeIn();
	}
	//Enable the popovers
	$('.author').popover({
		trigger: 'hover',
		html:'html'
	}); 
	$('.word').tooltip({
		trigger: 'hover'
	});
	displayList();
	//contents
	$(document).ajaxSend(function (e) {
		$('#layout-cover').fadeIn(0);
	});
	$(document).ajaxComplete(function (e) {
		$('#layout-cover').fadeOut(0);
		$('#prev').html('上一页');
		$('#next').html('下一页');
	});
	$(document).ajaxError(function(){
		//alert('找不到对应页面');
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
	//from thumbnails of index to contents
	$('a.thumbnail').click(function(e){
		var data = $(this).attr('data');
		 if(typeof(data)!='undefined'){ 
			e.preventDefault();
			$('.cover-container').load('html/'+data,getDetails);
		}
	});

	//back to contents
	var getContents = function(){
		$('.main ul li a,.back2con,#prev,#next').click(function(e){
			var data = $(this).attr('data');
			if(typeof(data)!='undefined'){ 
				e.preventDefault();
				$('.cover-container').load('html/'+data,getDetails);
			}
		});
		//Enable popovers 
		$('.author,#prev,#next').popover({
			trigger: 'hover',
			html:'html'
		}); 
		//Enable draggable
		$('.growlist li').draggable();
		displayList();
	}
	//go to details page
	var getDetails = function(){
		$('.main ul li a,.back2con,#prev,#next').click(function(e){
			var data = $(this).attr('data');
			if(typeof(data)!='undefined'){ 
				e.preventDefault();
				$('.cover-container').load('html/'+data,getContents);
			}
		
		});

		//Enable the popovers
		$('.author').popover({
			trigger: 'hover',
			html:'html'
		}); 
		displayList();
	}


	//scroll to top
	$('#sTop').click(function(e){
		e.preventDefault();
		$('html,body').animate({scrollTop: 0}, 500, 'easeInOutExpo',function(){
        	});
	});
	var winHeight = $(window).height();
	$(window).scroll(function () {
		if ($(window).scrollTop() > winHeight) {
			$('#sTop').fadeIn('slow');
		}
		else {
			$('#sTop').fadeOut('slow');
		}
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

function displayList(){
	$('.growlist li:first-child').fadeIn(5000).css('display','inline-block');
	$('.growlist li:nth-child(2)').fadeIn(2000).css('display','inline-block');
	$('.growlist li:nth-child(3n)').fadeIn(3000).css('display','inline-block');
	$('.growlist li:nth-child(4n)').fadeIn(4000).css('display','inline-block');
	$('.growlist li:nth-child(5n)').fadeIn(500).css('display','inline-block');
	$('.growlist li:nth-child(7n)').fadeIn(4500).css('display','inline-block');
}

