$(document).ready(function(){
//gnb
	$('.gnb_sub > li:last-child > a').css({'border-bottom' : '1px solid #ccc;'});
	$('.gnb_sub').hide();
	$('.sub-menu').hide();
	$('.gnb > li ').on('mouseenter',function(){
		//$('.gnb_sub > li:first-child').addClass('active');
		//$('.gnb_sub > li:first-child').find('> .sub-menu').show();
		$('.gnb > li').removeClass('active');
		$(this).addClass('active');
		$('.gnb_sub').hide();
		$(this).find('> .gnb_sub').show();
	});
	$('.gnb > li').on('mouseleave',function(){
		$(this).removeClass('active');
		$(this).find('> .gnb_sub').hide();
	});
	//$('.gnb > li:last-child .gnb_sub').css({'left' : 'auto' , 'left' : '-73px'});

	$('.gnb > li > a').on('focus',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.gnb_sub').hide();
		$(this).next().show();
	});

	$('.gnb > li:last-child > a').focusout(function(){
		$('.gnb > li').removeClass('active');
		$('.gnb_sub').hide();
	});

	
	$('.gnb_sub > li').on('mouseenter',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.sub-menu').hide();
		$(this).find('> .sub-menu').show();
	});
	$('.gnb_sub > li').on('mouseleave',function(){
		$(this).removeClass('active');
		$('.sub-menu').hide();
		//$('.gnb_sub > li:first-child').addClass('active');
		//$('.gnb_sub > li:first-child').find('> .sub-menu').show();
		
	});

	$('.gnb_sub > li > a').on('focus',function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('.sub-menu').hide();
		$(this).parent().find('> .sub-menu').show();
	});
	$('.sub-menu li:last-child a').focusout(function(){
		$('.gnb_sub > li').removeClass('active');
		$('.sub-menu').hide();
		//$('.gnb_sub > li:first-child').addClass('active');
		//$('.gnb_sub > li:first-child').find('> .sub-menu').show();
	});

	$.each($('.gnb_sub > li').has('>.sub-menu'), function() {
		$(this).find('>a').addClass('on');
    }); //3depth 있을시 클래스 추가

//전체메뉴(모바일)
$('.m-global_site li:last-child a').css({'background' : 'none'});


//localNav
	$('.menuLink1 .menu').hide();
	$('.menuLink1 .open').on('click',function(){
		$(this).next('.menuLink1 .menu').slideToggle();
		$('.menuLink1 .menu').hide();
		$(this).next().show();
	});
	$('.menuLink1 .open').click(function(){
		$('.menuLink2 .menu').hide();
		$('.menuLink2 .open').removeClass('on').attr('title','같은 레벨 메뉴 보기');
		$(this).toggleClass('on');
		$(this).attr('title','메뉴 닫기');
		$('.menuLink1 .open').not('.on').attr('title','같은 레벨 메뉴 보기');
	});

	$('.menuLink2 .menu').hide();
	$('.menuLink2 .open').on('click',function(){
		$(this).next('.menuLink2 .menu').slideToggle();
		$('.menuLink2 .menu').hide();
		$(this).next().show();
	});
	$('.menuLink2 .open').click(function(){
		$('.menuLink1 .menu').hide();
		$('.menuLink1 .open').removeClass('on').attr('title','같은 레벨 메뉴 보기');
		$(this).toggleClass('on');
		$(this).attr('title','메뉴 닫기');
		$('.menuLink2 .open').not('.on').attr('title','같은 레벨 메뉴 보기');
	});

//그룹사사이트
	$('.family_site > dl > dd > div dl dd a:last-child').css({'background' : 'none'});
	$(".family_site a.close").hide();
	$(".linkSite a.close").hide();
	var sitelink2 = $('.family_site');
    
    sitelink2.find("a.open").click(function (){
    	$(this).hide();
		$(this).next("a.close").show();
		$('.linkSite').find('>dl>dd').hide();
		$('.linkSite').find("a.close").hide();
		$('.linkSite').find("a.open").show();
		$(this).parent().next("dd").show();
    });
    
    sitelink2.find("a.close").click(function (){
		$(this).hide();
		$(this).prev("a.open").show();
    	$(this).parent().next("dd").hide();
    });

	sitelink2.find("a.close2").click(function (){
    	$(this).parent().parent("dd").hide();
		$(this).parent().parent().parent().find('dt a.close').hide();
		$(this).parent().parent().parent().find("dt a.open").show();
		$('.linkSite').find("a.open").focus();
    });

//그룹사 SNS 사이트
	var sitelink3 = $('.linkSite');
    
    sitelink3.find("a.open").click(function (){
    	$(this).hide();
		$(this).next("a.close").show();
		$('.family_site').find('>dl>dd').hide();
		$('.family_site').find("a.close").hide();
		$('.family_site').find("a.open").show();
		$(this).parent().next("dd").show();
    });
    
    sitelink3.find("a.close").click(function (){
		$(this).hide();
		$(this).prev("a.open").show();
    	$(this).parent().next("dd").hide();
    });
	sitelink3.find("a.close2").click(function (){
    	$(this).parent().parent("dd").hide();
		$(this).parent().parent().parent().find('dt a.close').hide();
		$(this).parent().parent().parent().find("dt a.open").show();
		$('.serviceLink li:first-child').find("a").focus();
    });

	
});


//모바일 전체메뉴

$(document).ready(function(){
	//마스크
	var handler = function(e){
		e.preventDefault();
	}
	function wrapWindowByMask(){
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		
		$('#mask').css({'width':maskWidth,'height':maskHeight});  
		$('#mask').fadeTo("slow",0.6);

	}
	
	$(function() {		

		var allmenuWidth = $(window).width();
		$('.all_menu2').css({'left' : -allmenuWidth});
		$(".btn_nav2.open").click(function(e){
			

			$("body").css("overflow-y","hidden");
			$(".all_menu2").css("display","block");
			
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				//$('#wrap').css('height','100%');
				e.preventDefault();
				$('#mask').hide();
				$(".all_menu2").animate({left:-allmenuWidth},200);

			} else {
				$(this).addClass("active");
				e.preventDefault();
				wrapWindowByMask();
				$('#mask').css({'background' : 'none' , "margin-left" : "210px"});
				$(".all_menu2").animate({left:0},200);
			}

			return false;
		});
		$('.btn_nav2.close').click(function(){
			$("body").css("overflow-y","auto"); /*원래 overflow*/
			$(".all_menu2").animate({left:-allmenuWidth},200);
			$(".all_menu2").css("display","none");
			$(".btn_nav2.open").removeClass("active");
			$('#mask').css({'background' : '#000' , "margin-left" : "0px"});
			$('#mask').hide();
	
			return false;
		});
	
		$('.all_menu2').click(function(){
			$("body").css("overflow-y","auto"); /*원래 overflow*/
			$(".all_menu2").css("display","none");
			$(".btn_nav2.open").removeClass("active");
			$('#mask').hide();	
		});		

		
		$('#mask').click(function () {  
			$(this).css({'background' : '#000' , "margin-left" : "0px"});
			$(this).hide();
			$("body").css("overflow","auto");
			$(".all_menu2").animate({left:-allmenuWidth},200);
			$(".all_menu2").css("display","none");
			$(".btn_nav2.open").removeClass("active");
			$(".search_open").removeClass("active");
			$(this).parent().parent().find(".search_area").hide();
			$(window).unbind('touchmove', handler);
		});
	});

	$('.m-global_site li:last-child a').css({'background' : 'none'});

});

$(document).bind('mobileinit', function(){
	// jquery mobile ajax 끄기
	$.mobile.ajaxEnabled = false;
});

$(window).resize(function() {
	 //var allmenuWidth = $(window).width();
	 if($(document.activeElement).attr('type') === 'text') {
       
    } else {
       $("body").css("overflow","auto");
		//$(".all_menu2").animate({left:-allmenuWidth},100);
		//$(".all_menu2").css ('left',-allmenuWidth);
		$(".btn_nav2.open").removeClass("active");		
		$(".all_menu2").css("display","none");
		$('#mask').hide();
    }
});

var navCurrentParam1;
var navCurrentParam2;
var navCurrentParam3;
$(function() {
	var $topnav = $('.all_menu2 .all_menu2_con'),
		$topnavmn = $topnav.find('>li'),
		$topnavsbmn = $topnavmn.find('>ul');

	$topnavmn.children('a').click(function() {
		if ($(this).parent().is('li:has("ul")')) {
			if (!$(this).is('.on')) {
				$topnavmn.children('a').removeClass('on');
				$topnavsbmn.slideUp(250).find('>li >ul').hide();
				$(this).addClass('on');
				$(this).parent().find('>ul').slideDown(250).find('>li a').removeClass('on');
			} else {
				$(this).removeClass('on');
				$(this).parent().find('>ul').slideUp(250);
			}
			return false;
		} else {
			$topnavmn.children('a').removeClass('on');
			$topnavsbmn.slideUp(250);
			$(this).addClass('on');
		}
	});
	
	var $topnavmnDepth2 = $topnavsbmn.find('>li'),
		$topnavsbmnDepth2 = $topnavmnDepth2.find('>ul');
	$topnavmnDepth2.children('a').click(function() {
		if ($(this).parent().is('li:has("ul")')) {
			if (!$(this).is('.on')) {
				$topnavmnDepth2.children('a').removeClass('on');
				$topnavsbmnDepth2.slideUp(200);
				$(this).addClass('on');
				$(this).parent().find('>ul').slideDown(200).find('>li a').removeClass('on');
			} else {
				$(this).removeClass('on');
				$(this).parent().find('>ul').slideUp(200);
			}

			if ( $(this).parent().attr('LINK')==undefined ) {
				return false;
			}
		} else {
			$topnavmnDepth2.children('a').removeClass('on');
			$topnavsbmnDepth2.slideUp(200);
			$(this).addClass('on');
		}
	});
	
	var $topnavCurrent1 = $topnav.find('.nvparam'+navCurrentParam1);
	var $topnavCurrent2 = $topnav.find('.nvparam'+navCurrentParam1+'_'+navCurrentParam2);
	var $topnavCurrent3 = $topnav.find('.nvparam'+navCurrentParam1+'_'+navCurrentParam2+'_'+navCurrentParam3);
	
	function currentReset() {
		if (!$topnavCurrent1.children('a').is('.on')) {
			$topnavmn.children('a').removeClass('on').parent().find('>ul').hide().find('>li a').removeClass('on');
			$topnavCurrent1.children('a').addClass('on').parent().find('>ul').show();
			$topnavCurrent2.children('a').addClass('on').parent().find('>ul').show();
			$topnavCurrent3.children('a').addClass('on');
		}
	}
	currentReset();
});




$(document).ready(function() { 
	lnbToggle (); // 토글메뉴 
		
});


 		

// 토글메뉴
function lnbToggle (){
	var lnb = $("#lnb");
	lnb.li = lnb.find(">li");
	lnb.li.a = lnb.li.find(">a");
	lnb.li.a.last().addClass("last");

	if(lnb.li.find(".last").parent().is(":visible")){
		lnb.li.a.bind("click",function(){
			var cnt = $(this).parent().find("> ul > li").size();
			if(cnt > 0){	
				if($(this).parent().find("> ul").size() > 0){
					if(lnb.li.find(">a.active").size() > 0){
						lnb.li.find(">a.active").removeClass("active").parent().find("> ul").slideUp(200);
					}
					if($(this).parent().find(">ul").is(":hidden")){
						$(this).addClass("active").parent().find(">ul").slideDown(200);
					}
					return false;
				}
			}else{
				return true;
			}
		});
	}
	
	$(window).resize(function(){
		lnb.li.a.removeClass("active")
		lnb.li.find("ul").hide();
	});	
}
 
 
///////////////


function Mobile_chatroom(){
	/* dlTable */
	$(".dlTable").addClass("mMode");
	$(".mMode dl dt").each(function(){
		if($(this).height() < $(this).next().height()){
			$(this).css("height", $(this).next().height());
		}else{
			$(this).next().css("height", $(this).height());
		}
    }); 
		
}


jQuery(document).ready(function(e) {
	// dlTable resizing
	Mobile_chatroom();

	/* FAQ형 게시판 목록 */
	$('.faqList .arrow_off .title').stop().click(function(){
		if($(this).parent().parent().hasClass('arrow_on')){
			$(this).parent().parent().removeClass('arrow_on');
			$(this).parent().find('.show_cont').slideUp(300);
		}else{
			$('.faqList .arrow_off').removeClass('arrow_on');
			$(this).parent().parent().addClass('arrow_on');
			if($(this).parent().find('.show_cont')){
				$('.faqList .arrow_off .show_cont').slideUp(300);
				$(this).parent().find('.show_cont').slideDown(300);
			}
		}
	});
		

});



/* 자주 물어보는 질문(faq) */
			$(window).load(function(){
				$('.accor_list.first_open ul li:first-child').addClass('select').children('.con').slideDown();
				$('.accor_list.all_open ul li').addClass('select').children('.con').slideDown();
				$(".accor_list .tit").click(function(){
					$(this).parent().toggleClass('select');
					$(this).parent().siblings().removeClass('select');
					$(this).next('.con').slideToggle();
					$(this).parent().siblings().children('.con').slideUp();		
					//$(this).next().slideDown();
					return false;	
				});	
			});



function tab_menu(num){	
		var f = jQuery('.boxTab').find('li');
		for ( var i = 0; i < f.length; i++ ) {			
			if ( i == num) {			
				f.eq(i).addClass('Tabon');	
				jQuery('.tab-con0' + i ).addClass('show').removeClass('hide');			
			} else {
				f.eq(i).removeClass('Tabon');					
				jQuery('.tab-con0' + i ).addClass('hide').removeClass('show');
			}
		}
	};


function tab_menu2(num){	
		var f = jQuery('.box').find('li');
		for ( var i = 0; i < f.length; i++ ) {			
			if ( i == num) {			
				f.eq(i).addClass('active');	
				jQuery('.tab-con1' + i ).addClass('show').removeClass('hide');			
			} else {
				f.eq(i).removeClass('active');					
				jQuery('.tab-con1' + i ).addClass('hide').removeClass('show');
			}
		}
	};




function FaqToggleDetail (id){
	var latestToggleObj = null;
	var oObj = document.getElementById( id );	

	if( this.latestToggleObj != null ){
		this.latestToggleObj.className = (this.latestToggleObj.className + "none");
	}
	if( this.latestToggleObj == oObj ){
		this.latestToggleObj = null;
		return;
	}
	this.latestToggleObj = null;

	if( oObj.className.indexOf( "none" ) != -1 ){
		oObj.className = oObj.className.replace( "none", "" );			
	}else{
		oObj.className = (oObj.className + "none");
	}
	this.latestToggleObj = oObj;
}





/* 탭메뉴 */
function tab_menu(num){	
		var f = jQuery('.boxTab').find('li');
		for ( var i = 0; i < f.length; i++ ) {			
			if ( i == num) {			
				f.eq(i).addClass('Tabon');	
				jQuery('.tab-con0' + i ).addClass('show').removeClass('hide');			
			} else {
				f.eq(i).removeClass('Tabon');					
				jQuery('.tab-con0' + i ).addClass('hide').removeClass('show');
			}
		}
	};


function tab_menu2(num){	
		var f = jQuery('.box').find('li');
		for ( var i = 0; i < f.length; i++ ) {			
			if ( i == num) {			
				f.eq(i).addClass('active');	
				jQuery('.tab-con1' + i ).addClass('show').removeClass('hide');			
			} else {
				f.eq(i).removeClass('active');					
				jQuery('.tab-con1' + i ).addClass('hide').removeClass('show');
			}
		}
	};






