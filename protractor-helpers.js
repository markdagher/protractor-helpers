"use strict";

/*Check if current url contains given string*/
exports.expectUrl = function( url ){
	if ( !url ){
		return false;
	}

	expect( browser.getCurrentUrl() ).toContain( url );
};

/*Find element by model name*/
exports.$model = function( model ){
	if ( !model ){
		return false;
	}

	return element( by.model( model ) );
};

/*Find first element by css selector*/
exports.$first = function( selector ){
	if ( !selector ){
		return false;
	}

	return element.all( by.css( selector ) ).first();
};

/*Expect element text to equal given string*/
exports.expectText = function( selector, text ){
	if ( !selector || !text ){
		return false;
	}

	//using element.all to supress "more than 1 element warning"
	expect( element.all(by.css(selector)).first().getText() ).toBe( text );
};


/*Waits for browser to see alert with the specified text then dismisses the alert*/
exports.waitForAlertText = function( expectedAlertText ){
	browser.wait(function(){
		return browser.switchTo().alert().then(
			function(){return true;},
			function(){return false;}
			);
	}, 5000);

	browser.switchTo().alert().then(function( alert ){
		expect(alert.getText(function(alertText){
			expect(alertText).toContain( expectedAlertText );
		}));
		alert.dismiss();
	});
};