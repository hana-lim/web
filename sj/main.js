/********************************큰 팝업존 ********************************************/
// 메인_popupzone
(function($){

	$.fn.PopupZone = function(options) {
		var pop_length = $(".pop_list li").length;
		if (pop_length > 1)
		{
			var settings = {
				prevBtn : '',
				nextBtn : '',
				playBtn : '',
				waitingTime : ''
			};

			$.extend(settings, options);
			settings.areaDiv = this;
			settings.prevBtn = $(settings.prevBtn);
			settings.nextBtn = $(settings.nextBtn);
			settings.playBtn = $(settings.playBtn);

			settings.cnt = settings.areaDiv.find('li').length;
			settings.waitingTime = parseInt(settings.waitingTime);
			settings.nowNum = 0;
			settings.moveFlag = true;
			settings.moveType;
			settings.setTimeOut;
			var status=true;

			function emptySetting() {
				settings.areaDiv.find('.count').html(settings.nowNum+1);
				settings.areaDiv.find('.all').html(settings.cnt);
				settings.areaDiv.find('li').hide();
			}
			function setRolling(aniFlag) {
				if(!settings.moveFlag){
					if(settings.moveType=="next" || settings.moveType == null){
						settings.nowNum++;
						if(settings.nowNum == settings.cnt){
							settings.nowNum = 0;
							$("#popc").html("1");
						}else{
							$("#popc").html(settings.nowNum+1);
						}
						
					} else if(settings.moveType=="prev") {
						settings.nowNum--;
						if(settings.nowNum < 0){
							settings.nowNum = (settings.cnt-1);
							$("#popc").html(settings.cnt);
						}else{
							$("#popc").html(settings.nowNum+1);
						}
					}
				}
				emptySetting();

				if(aniFlag) settings.areaDiv.find('li').eq(settings.nowNum).show();
				else settings.areaDiv.find('li').eq(settings.nowNum).fadeIn('normal');
				 // 기본 : aniFlag 설정 없으면 fade 효과 - 조정

				aniFlag = false;
				settings.moveFlag = false;
				if(status){
					if(settings.cnt >1){
						settings.setTimeOut= setTimeout(setRolling , settings.waitingTime);
					}
				}
			}
			function playRolling(){
				//정지 재생버튼 배경으로 제어.
				if(status){
					clearTimeout(settings.setTimeOut);
					settings.playBtn.attr('class',"pop_play").html("팝업 롤링 재생");
					status = false;
				}else{
					settings.playBtn.attr('class',"pop_stop").html("팝업 롤링 정지");
					status = true;
					setRolling();
				}
				return false;
			}
			function prevRolling(){
				clearTimeout(settings.setTimeOut);
				settings.moveType = "prev";
				setRolling();
				return false;
			}
			function nextRolling() {
				clearTimeout(settings.setTimeOut);
				settings.moveType = "next";
				setRolling();
				return false;
			}
			setRolling();
			settings.prevBtn.click(prevRolling);
			settings.nextBtn.click(nextRolling);
			settings.playBtn.click(playRolling);
		}
	};
})(jQuery);
$(document).ready(function(){
		$('.popup').PopupZone({
			prevBtn : '.pop_prev',
			nextBtn : '.pop_next',
			playBtn : '.pop_stop',
			waitingTime : '5000'
		});
});


$(document).ready(function(){
	$("#poptot").html($(".pop_list > li").length);
});