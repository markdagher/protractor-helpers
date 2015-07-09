# protractor-helpers
protractor-helpers is a layer on top of protractor which abstracts commonly used test code into cleaner methods.

# Installation
`npm install protractorhelpers --save-dev`

# Setup
In your `protractor.config.js` `onPrepare()` function, require the module

	onPrepare: function(){
		var helpers = require( 'protractorhelpers' );

		//Append to GLOBAL object
		GLOBAL.$model = helpers.$model;
		GLOBAL.$first = helpers.$first;
		GLOBAL.expectText = helpers.expectText;
		GLOBAL.expectUrl = helpers.expectUrl;
		GLOBAL.waitForAlertText = helpers.waitForAlertText;
	}

# Methods

`$model( model )` returns the model  
`$first( selector )` returns first element that matches selector  
`expectText( selector, text )` asserts if text inside element is equal to the given string    
`expectUrl( url )` asserts current url contains string  
`waitForAlertText( expectedAlertText )` Waits for browser alert which contains the specified text then dismisses the alert

# Usage
	it('should wait for alert that contains "Success!"', function(){
		waitForAlertText('Success!');
	});

	it('should contain text "Welcome!"', function(){
		expectText( '.Header-name', 'Welcome!');
	});