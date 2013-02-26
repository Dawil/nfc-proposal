$(function(){
	/*
	 * For use with a tag like this:
	 *
	 * <div data-include="poo"></div>
	 *
	 * Allows simple client side includes.
	 **/
	var INCLUDE_TAG = 'data-include';
	$( ['[',INCLUDE_TAG,']'].join('') )
		.each( function() {
			var tag = this;
			$.ajax( this.attributes[INCLUDE_TAG].value)
				.done( function( html ) {
					$( tag ).html( html )
				});
		});
});
