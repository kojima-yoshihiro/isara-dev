$(function () {
	'use strict';

	const top = $('#page-top');
	// ページ上部ではボタン消しとく
	top.hide();

	// スクロールしたらボタン現れる
	// 上に戻ったらボタン消える
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			top.fadeIn('slow');
		} else {
			top.fadeOut('slow');
		}
	});


	// ボタン押されたら
	top.click(function () {
		$('html,body').animate({ scrollTop: 0 }, 'slow');
		return false;
	});


	// $('.startpoint').click(function () {
	// 	var contactPadding = 40;
	// 	var targetTop = $('#contactform').offset().top;
	// 	$('html,body').animate({
	// 		scrollTop: targetTop - contactPadding
	// 	}, 500);
	// 	return false;
	// });
});
