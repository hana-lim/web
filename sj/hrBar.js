$(document).ready(function(){
 

//localNav
	$('.menuLink1 .menu').hide();
	$('.menuLink1 .sopen').on('click',function(){
		$(this).next('.menuLink1 .menu').slideToggle();
		$('.menuLink1 .menu').hide();
		$(this).next().show();
	});
	$('.menuLink1 .sopen').click(function(){
		$('.menuLink2 .menu').hide();
		//$('.menuLink2 .open').removeClass('on').attr('title','같은 레벨 메뉴 보기');
		$(this).toggleClass('on');
		//$(this).attr('title','메뉴 닫기');
		//$('.menuLink1 .open').not('.on').attr('title','같은 레벨 메뉴 보기');
	});

	$('.menuLink2 .menu').hide();
	$('.menuLink2 .sopen').on('click',function(){
		$(this).next('.menuLink2 .menu').slideToggle();
		$('.menuLink2 .menu').hide();
		$(this).next().show();
	});
	$('.menuLink2 .sopen').click(function(){
		$('.menuLink1 .menu').hide();
		//$('.menuLink1 .open').removeClass('on').attr('title','같은 레벨 메뉴 보기');
		$(this).toggleClass('on');
		//$(this).attr('title','메뉴 닫기');
		//$('.menuLink2 .open').not('.on').attr('title','같은 레벨 메뉴 보기');
	});


 
	
});

	
 
 



