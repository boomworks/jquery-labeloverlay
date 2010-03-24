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
					$lbl = $this.siblings(options.labelSelector)
			;

			$this
				.bind('now focus keyup change blur', function(e){
					var speed = e.type === 'focus' ? options.focusFadeSpeed : e.type === 'keyup' ? options.typeFadeSpeed : options.blurFadeSpeed,
							opacity = e.type === 'focus' || e.type === 'keyup' ? options.opacity : options.startOpacity;
					fade($lbl, $this.val(), speed, opacity);
				})
				.trigger('now')
			;

		});

		return this;
	};

	fade = function($obj, val, speed, opacity){
		$.trim(val) === '' ? $obj.show().fadeTo(speed, opacity) : $obj.fadeTo(0, 0).hide();
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
