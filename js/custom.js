/**
 * Child Theme extra functions file
 *
 */

jQuery(document).ready(function($) {
	$("a.email").each(function(){
		e = this.rel.replace('/','@');
		this.href = 'mailto:' + e;
		$(this).text(e);
	});

});