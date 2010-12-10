/**
* @license
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
					$lbl = $($this.next(options.labelSelector)[0])
			;

			// Bind events to label element (needed for when 'label' isn't realy a label element)
			$lbl.bind('click', function(){
				$this.focus();
			});

      // Position label over field
      $lbl.css({
        top: $this.position().top,
        left: $this.position().left
      });

			// Bind various events to target field
			$this
				.bind('now focus keyup change blur', function(e){
					// Choose speed & opacity based on event type
					var speed = options.typeFadeSpeed, opacity = options.opacity;
					switch(e.type){
					    case 'keyup':
						break;

					    case 'focus':
						speed = options.focusFadeSpeed;
						break;

					    default:
						speed = options.blurFadeSpeed;
						opacity = options.startOpacity;
						break;
					}


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
