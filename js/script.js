$('.wrapper').addClass('loaded')

// Burger menu animation

$('.icon-menu').click(function(e){
	$(this).toggleClass('_active')
	$('.header-menu').toggleClass('_active')
	if ($(this).hasClass('_active')) {
		$('body').data('scroll',$(window).scrollTop())
	} 
	$('body').toggleClass('lock')
	if (!$(this).hasClass('_active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')))
	} 
})

//2 PARTS IMAGE + TEXT

function ibg(){
	$.each($('._ibg'), function (){
		if ($(this).find('img').length>0) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")')
		}
	})
}
ibg()

/*Spoilers==========================================================*/

$('.spoiler-common__button').on('click',function(){
	if($('.common__column').hasClass('one')){
		$('.spoiler-common__button').not($(this)).removeClass('active')
		$('.spoiler-common__answer').not($(this).parent('.spoiler-common').next()).slideUp(300)
	}
	$(this).toggleClass('active').parent('.spoiler-common').next().slideToggle(300)
})

$(window).on('load',function(){
	$.each($('.chat__message p'),function(){
		let divheight = $(this).innerHeight();
		$(this).prev().css('height',divheight)
		$(this).prev('span').find('span').css('marginTop',divheight + 6)
	})
})
