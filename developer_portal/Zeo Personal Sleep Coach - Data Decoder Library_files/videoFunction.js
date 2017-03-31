/**
 * @author jmcardle
 */

$(document).ready(replaceVideo);

function replaceVideo()
{
	if($('.swf').length > 0)
	{
		$('.swf').each(injectVideo);
	}
}

function injectVideo(i,obj)
{
	var opts	= $(obj).text().split(',');
	var src		= opts[0];
	var h		= opts[1].split('=')[1];
	var w		= opts[2].split('=')[1];
	var f_var	= '';
	
	if(opts.length > 3)
	{
		f_var = opts[3];
	}
	
	$(obj).html('');
	$(obj).flash({swf:src,height:h,width:w,flashvars:f_var});
	$(obj).show();
}

/*
     FILE ARCHIVED ON 13:25:18 Jul 19, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:08:08 Mar 31, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/