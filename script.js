$(function(){
	/*
	 * For use with a tag like this:
	 *
	 * <div data-include="poo"></div>
	 *
	 * Allows simple client side includes.
	 **/
	var ATTRIBUTE = 'data-include';
	$( '[' + ATTRIBUTE + ']' ).map( function() {
		var tag = this,
				deferred = $.Deferred();
		$.ajax({
			url: this.attributes[ATTRIBUTE].value,
		  success: function( result ) {
				$( tag ).html( result );
				deferred.resolve( tag );
			}
		});
		return deferred.promise();
	});
});
