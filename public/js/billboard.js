/**
* Billboards
* @author mail@chrisaiv.com
* 12/25/2012
*/

////////////////////////////////////////////////////////////
//Slider
////////////////////////
$('.doubleSlider-1').iosSlider({
	scrollbar: true,
	snapToChildren: true,
	desktopClickDrag: true,
	infiniteSlider: true,
	navPrevSelector: $('.doubleSliderPrevButton'),
	navNextSelector: $('.doubleSliderNextButton'),
	scrollbarHeight: '2',
	scrollbarBorderRadius: '0',
	scrollbarOpacity: '0.5',
	onSliderLoaded: doubleSlider2Load,
	onSlideChange: doubleSlider2Load
});

$('.doubleSlider-2 .button').each(function(i) {

	$(this).bind('click', function() {

		$('.doubleSlider-1').iosSlider('goToSlide', i+1);
		
	});

});

$('.doubleSlider-2').iosSlider({
	desktopClickDrag: true,
	snapToChildren: true,
	snapSlideCenter: true,
	infiniteSlider: true
});

function doubleSlider2Load(args) {
	
	//currentSlide = args.currentSlideNumber;
	$('.doubleSlider-2').iosSlider('goToSlide', args.currentSlideNumber);
	
	/* update indicator */
	$('.doubleSlider-2 .button').removeClass('selected');
	$('.doubleSlider-2 .button:eq(' + (args.currentSlideNumber-1) + ')').addClass('selected');
	
}