JQuery Button Toggler
========================

Button toggling.  Will write more later.

* TODO: Find a better name than toggler

Features
---
* Toggle css classes, data values, and/or text on a dom element

Examples
--- 
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

Defaults
---
Calling with options set is the same as calling it with these parameters:

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
	- Insert <a> tag with initial button state
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