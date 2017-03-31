/*
 * label2value
 * jquery based script for using form labels as text field values
 * more info on https://web-beta.archive.org/web/20110207194330/http://cssglobe.com/post/1500/using-labels- 
 *
 * Copyright (c) 2008 Alen Grakalic (cssglobe.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 */
this.label2value = function(){	
	// CSS class names
	// put any class name you want
	// define this in external css (example provided)
	var inactive = "inactive";
	var active = "active";
	var focused = "focused";
	
	// function
	$("label").each(function(){		
		obj = document.getElementById($(this).attr("for"));
		if(($(obj).attr("type") == "text") || (obj.tagName.toLowerCase() == "textarea")){			
			$(obj).addClass(inactive);			
			var text = $(this).text();
			$(this).css("display","none");			
			$(obj).val(text);
			$(obj).focus(function(){	
				$(this).addClass(focused);
				$(this).removeClass(inactive);
				$(this).removeClass(active);								  
				if($(this).val() == text) $(this).val("");
			});	
			$(obj).blur(function(){ 
				$(this).removeClass(focused);													 
				if($(this).val() == "") {
					$(this).val(text);
					$(this).addClass(inactive);
				} else {
					$(this).addClass(active);		
				};				
			});				
		}; 
	});		
};
// on load
$(document).ready(function(){ 
	label2value(); 
});

/*
     FILE ARCHIVED ON 19:43:30 Feb 07, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:08:09 Mar 31, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/