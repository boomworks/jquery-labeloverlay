/*!
* jQuery Label Overlay
*
* Copyright © 2010 Boomworks <http://boomworks.com.au/>
* Author: Lindsay Evans
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function($) {

	$.fn.labelOverlay = function(opts){

		var options = $.extend({}, $.fn.labelOverlay.defaults, opts);

		this.each(function(){

			var $this = $(this),
					$lbl = $(this).siblings(options.labelSelector)
			;

			// Can this be refactored some more?
			$this.focus(function(){
				fade($lbl, $this.val(), options.focusFadeSpeed, options.opacity);
			})
			.keyup(function(){
				fade($lbl, $this.val(), options.typeFadeSpeed, options.opacity);
			})
			.change(function(){
				fade($lbl, $this.val(), options.blurFadeSpeed, options.startOpacity);
			})
			.blur(function(){
				fade($lbl, $this.val(), options.blurFadeSpeed, options.startOpacity);
			});

			// Check field values on load
			fade($lbl, $this.val(), options.blurFadeSpeed, options.startOpacity);

		});

		return this;
	};

	fade = function($obj, val, speed, opacity){
		$.trim(val) == '' ? $obj.show().fadeTo(speed, opacity) : $obj.fadeTo(0, 0).hide();
	};

	$.fn.labelOverlay.defaults = {
		opacity: 0.5,
		startOpacity: 1,
		focusFadeSpeed: 'fast',
		typeFadeSpeed: 'fast',
		blurFadeSpeed: 'slow',
		labelSelector: 'label'
	};

})(jQuery);
