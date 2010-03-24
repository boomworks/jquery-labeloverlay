# jQuery Label Overlay

Takes care of hiding/showing labels that have been floated over the top of form fields.

## Requirements
[jQuery](http://jquery.com/) (tested with 1.4.2)

## Usage
See `examples.html`

## Available options (default value)
- opacity (0.5)
- startOpacity (1)
- focusFadeSpeed (fast)
- typeFadeSpeed (fast)
- blurFadeSpeed (slow)
- labelSelector (label)

## Usage notes
- You'll have to position the label over the field yourself
- Opacity options are in the range 0.0 to 1.0 (same as the CSS opacity property)
- Speed options can be specified in the same way as [jQuery durations](http://api.jquery.com/animate/#duration)
- The `labelSelector` option allows you to tweak the CSS selector used to get the label for a particular field, is passed to $field.siblings()
