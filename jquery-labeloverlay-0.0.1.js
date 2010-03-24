/*!
* jQuery Label Overlay
*
* Copyright (c) 2010 Boomworks <http://boomworks.com.au/>
* Author: Lindsay Evans
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
(function($) {

	$.fn.labelOverlay = function(opts){

		// Merge user supplied options with defaults
		var options = $.extend({}, $.fn.labelOverlay.defaults, opts);

		this.each(function(){

			var $this = $(this),
					$lbl = $this.siblings(options.labelSelector)
			;

			// Bind various events to target field
			// TODO: will live() work here? do we need it?
			$this
				.bind('now focus keyup change blur', function(e){
					// Choose speed & opacity based on event type
					var speed = e.type === 'focus' ? options.focusFadeSpeed : e.type === 'keyup' ? options.typeFadeSpeed : options.blurFadeSpeed,
							opacity = e.type === 'focus' || e.type === 'keyup' ? options.opacity : options.startOpacity;
					// Do the fade
					fade($lbl, $this.val(), speed, opacity);
				})
				// Trigger now event to fade pre-filled/focused fields
				.trigger('now')
			;

		});

		return this;
	};

	// either fade to desired opacity or hide, depending on field value
	fade = function($obj, val, speed, opacity){
		$.trim(val) === '' ? $obj.show().fadeTo(speed, opacity) : $obj.fadeTo(0, 0).hide();
	};

	// Default settings
	$.fn.labelOverlay.defaults = {
		opacity: 0.5,
		startOpacity: 1,
		focusFadeSpeed: 'fast',
		typeFadeSpeed: 'fast',
		blurFadeSpeed: 'slow',
		labelSelector: 'label'
	};

})(jQuery);
