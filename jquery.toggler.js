(function ($) {

	$.fn.toggler = function (opts) {

		// Extend default options
		var options = $.extend({}, $.fn.toggler.defaults, opts);

		return this.each(function () {
			var elem = $(this);
			var toggle = elem;
			var input = null;
			var currentState = 0;

			if(elem[0].localName == "input")
			{
				elem.hide();
				toggle = $('<a href="#"></a>');
				elem.after(toggle);
				input = elem;
			}
			
			if(opts && !opts.states && opts.positiveState) {
				$.extend(options.states[0], opts.positiveState);
			}

			if(opts && !opts.states && opts.negativeState) {
				$.extend(options.states[1], opts.negativeState);
			}
			
			toggle.addClass(options.class);
			
			//pick the first state and apply it
			toggleState(toggle, input, options.states[0], null);
			
			//apply events
			toggle.click(function(e) {
				e.preventDefault();
				var newState = (currentState + 1) % options.states.length;
				toggleState(toggle, input, options.states[newState], options.states[currentState]);
				currentState = newState;				
			});
		});
	};
	
	function toggleState(elem, input, newState, oldState) {

		if(newState.text != null)
		{
			elem.text(newState.text);
		}
		
		elem.data('toggle-state', newState.value);
		
		if(input != null) {
			input.val(newState.value);
		}
		
		if(oldState != null && oldState.class != null) {
			elem.removeClass(oldState.class);
		}
		
		if(newState.class != null) {
			elem.addClass(newState.class);
		}
		
	}

	// # default options
	// 
	//
	$.fn.toggler.defaults = {
		class: "button",
		states: [
			{ text: "Yes", value: true,  class: "positive"},
			{ text: "No",  value: false, class: "negative"}
		]
	};
})(jQuery);