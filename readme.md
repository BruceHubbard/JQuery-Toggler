JQuery Button Toggler
========================

Turns any html element into a button that toggles between states on click.  It is a good alternative to checkboxes or any other situation where there is a finite amount of possibilities for the user to choose from.

TODO
---
* Find a better name than toggler
* Work better with input type="checkbox".
* If value is set on input then search for that state and default it to
* Maybe add a callback where you could fire off other events upon the button being clicked.
* Clean up code

Examples
--- 
Look in the Examples folder above for better examples.  These are just a couple really simple examples.

	//Using the defaults you will get a Yes/No button
	$('.example').toggler();
	
	//You can also specify your own states
	$('.example').toggler({
		states: [
			{ text: "Go", 			value: "go", 	class: "green"},
			{ text: "Slow Down", 	value: "slow", 	class: "yellow"},
			{ text: "Stop", 		value: "stop", 	class: "red"}
		]		
	});

Other examples:

	Examples/defaults.html - shows off the default functionality of the plugin
	Examples/stoplight.html - creates a button with three states green/yellow/red
	Examples/enabledisable.html - another simple example showing positiveState/negativeState customization

Options
---
This example shows every option you can set.  Please don't use this as an example, only set those options that you need.

	$('.example').toggler({
		//css class to add to the element no matter what the state is
		class: "button",	
		
		//If you only need a Yes/No type button you can customize it like this.
		//NOTE: Populating the "states" property will override this property. 
		//NOTE: All properties not set (text, value, class) will default to the default positive state's associated property (text: "Yes", value: true, class: "positive")
		positiveState: { text: "Enabled", value: true, class="enabled" },

		//If you only need a Yes/No type button you can customize it like this.
		//NOTE: Populating the "states" property will override this property. 
		//NOTE: All properties not set (text, value, class) will default to the default negative state's associated property (text: "No", value: false, class: "negative")
		negativeState: { text: "Disabled", value: false, class="disabled" },
			
		//customized states.  If this is set it will ignore TODO
		//button will default to the first state in the array
		states: [
			{ text: "State1", value: "val1", class="s1" }, 	//text - if provided the button's text will be replaced with this
			{ text: "State2", value: "val2", class="s2" }  	//value - if provided the underlying input's value will be set to this
															//class - css class to add to the button when in this state															
		]
	});

Defaults
---
Calling with no options set is the same as calling it with these parameters:

	$('.example').toggler({
		class: "button",
		states: [
			{ text: "Yes", value: true,  class: "positive"},
			{ text: "No",  value: false, class: "negative"}
		]
	});

Styling
---
This plugin doesn't use any predefined css, it's up to you to style the buttons according to the css classes you pass the plugin.  Here is an example that works nicely with the defaults of the plugin and will get you a pretty green/grey yes/no button:

	.button {
		padding: 8px;
		border-radius: 4px;
		background-color: #555555;
	}

	.positive {
		background-color: #95AD34;
	}

	.negative {
		background-color: #B8B8B8;
	}

Details
---
If applied to an input element
	- Hide input element
	- Insert &lt;a&gt; tag with initial button state
	- When button is clicked update input element's value
Otherwise
	- applied to any other element and we'll have to store the value in a data attribute

So if you have this:

	<input class="imAbutton" type="text"/>

and do this:

	$(".imAbutton").toggler();

you would end up with this:

	<input class="imAbutton" type="hidden" value="true"/>
	<a href="#" class="button positive">Yes</a>

if you clicked the button you would end up with this:

	<input class="imAbutton" type="hidden" value="false"/>
	<a href="#" class="button negative">No</a>


You could then do this with many different states:

	$(".imAbutton").toggler({
		states: [
			{ text: "Stop", value="stop", class="red"},
			{ text: "Slow Down", value="slow", class="yellow"},
			{ text: "Go", value="go", class="green"}
		]
	});

you would end up with the following states (in order of clicks, starting with the initial state):

State 1:

	<input class="imAbutton" type="hidden" value="stop"/>
	<a href="#" class="button red">Stop</a>


State 2:

	<input class="imAbutton" type="hidden" value="slow"/>
	<a href="#" class="button yellow">Slow Down</a>


State 3:

	<input class="imAbutton" type="hidden" value="go"/>
	<a href="#" class="button green">Go</a>