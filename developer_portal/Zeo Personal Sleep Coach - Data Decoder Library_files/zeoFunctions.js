/**
 * @author jmcardle
 */

//web-beta.archive.org/web/20110806082338/http://Init Document
$(document).ready(initListeners);

//web-beta.archive.org/web/20110806082338/http://Site Catalyst Settings / Omniture from settings.js
var s_account="zeoMyZeoProduction"
var s_linkInternalFilters = "javascript:,myzeo.com"
var s_visitorNamespace="zeo"
var s_trackingServer="paperclip.myzeo.com"
var s_trackingServerSecure="securepaperclip.myzeo.com"
//web-beta.archive.org/web/20110806082338/http://End settings.js

var data = null;

//web-beta.archive.org/web/20110806082338/http://Document Listeners
function initListeners()
{
	//web-beta.archive.org/web/20110806082338/http://store data values
	$('body').prepend('<div id="data"></div>');
	data = $('#dataDiv');
	
	//web-beta.archive.org/web/20110806082338/http://add wait layer
	if($('.ccTable').length > 0)
	{
		$('<img>').attr('src','../interface/closeup_bottom.png');
		$('<img>').attr('src','../interface/closeup_top.png');
		$('body').prepend('<div id="waitLayer">');
		$('#waitLayer').append('<div id="waitLayerBtm">');
		$('#waitLayerBtm').append('<div id="waitInner"><div id="waitContent"></div></div>');
		$('#waitContent').html('<br />Please wait...<img src="/interface/ajax-loader.gif" width="220" height="19" />');
		//web-beta.archive.org/web/20110806082338/http://position layer
		$('#waitLayer').css('left',$('.ccTable').position().left + 400);
		$('#waitLayer').css('top',$('.ccTable').position().top + 65);
		
		//web-beta.archive.org/web/20110806082338/http://CC submit listener
		$.data(data,'ccSubmitted',false);
		$('#submitBtn').click(clickListener);	
	}

	
	//web-beta.archive.org/web/20110806082338/http://external Video Play
	if($('input[name=extVideoLink]').length != 0)
	{
		flashPlayVideo($('input[name=extVideoLink]').val());
	}
	
	/*
	//web-beta.archive.org/web/20110806082338/http://disables prod detail radio buttons onLoad
	if ($("#coachCheck").length >= 1)
		$('#yearly').attr('disabled', 'disabled');
		$('#monthly').attr('disabled', 'disabled');	
	}
	*/
	
	//web-beta.archive.org/web/20110806082338/http://video player setup
	$.each($('.videoLink'),setClass);
	$.each($('.playButtonLg'),setClass);
	
	//web-beta.archive.org/web/20110806082338/http://Add video Listener
	$('.video').live('click',playVideo);
	
	//web-beta.archive.org/web/20110806082338/http://Video Link Content
	$('a.videoWin').click(function(){flashPlayVideo(this.href);return false;});
	
	//web-beta.archive.org/web/20110806082338/http://Check Coaching
	$("#coachCheck").click(enableSelection);
	
	
	//web-beta.archive.org/web/20110806082338/http://Footer Tool tip Listener
	$('.iconBar li').hover(iconbarRH,iconbarRH);
	
	
	//web-beta.archive.org/web/20110806082338/http://Init forms
	initForms();
}

//web-beta.archive.org/web/20110806082338/http://Append Video Classf or player links
function setClass(i,obj)
{
	if(!$(obj).hasClass('video'))
	{
		$(obj).addClass('video');
	}
}


//web-beta.archive.org/web/20110806082338/http://Form Wait Listener
function clickListener(evt)
{
	if($.data(data,'ccSubmitted') == false)
	{
		$.data(data,'ccSubmitted',true);
		$('input[name=jsaction]').val('act_orders_upd_sec'); 
		$('#submitBtn').css('cursor','default');
		$('#waitLayer').show();
		$('form').submit();
	}
}

//web-beta.archive.org/web/20110806082338/http://Play Clicked Video
function playVideo(evt) 
{
	var obj	= $(this);
	var fv	= 'file=' + obj.children().text() + '&autostart=true' + '&skin=/flvplayer/modieus.swf';
	var p 	= {play:true,allownetworking:true,allowscriptaccess:true,allowfullscreen:true};
	var m 	= $.flash.create({swf:'/flvplayer/player.swf',height:392,width:640,flashvars:fv,params:p});
		
	//web-beta.archive.org/web/20110806082338/http://show modal
	$('#tutorial').html('<div style="width: 640px; height:392px;">'+m+'</div>');
	$('#videoModalContent').modal();
	
	//web-beta.archive.org/web/20110806082338/http://tracking code
	var s=s_gi(s_account);
	s.linkTrackVars="prop31,eVar31,events";
	s.linkTrackEvents="event11";
	s.events="event11";
	s.prop31 = this.textContent;
	s.eVar31 = this.textContent;
	s.tl(true,'o',this.textContent);
}
  

//web-beta.archive.org/web/20110806082338/http://Play External Video
function flashPlayVideo(url)
 {
	var obj	= $(this);
	var fv	= 'file=' + url + '&autostart=true' + '&skin=/flvplayer/modieus.swf';
	var p 	= {play:true,allownetworking:true,allowscriptaccess:true,allowfullscreen:true};
	var m 	= $.flash.create({swf:'/flvplayer/player.swf',height:392,width:640,flashvars:fv,params:p});
		
	//web-beta.archive.org/web/20110806082338/http://show modal
	$('#tutorial').html('<div style="width: 640px; height:392px;">'+m+'</div>');
	$('#videoModalContent').modal();
	
	//web-beta.archive.org/web/20110806082338/http://tracking code
	var s=s_gi(s_account);
	s.linkTrackVars="prop31,eVar31,events";
	s.linkTrackEvents="event11";
	s.events="event11";
	s.prop31 = this.textContent;
	s.eVar31 = this.textContent;
	s.tl(true,'o',this.textContent);
	
 }

// Enables radio buttons based on checkbox selection (prod details) - JS
function enableSelection(evt)
{
	if ($("#coachCheck").attr("checked") == true)
	{
		 $('#yearly').removeAttr('disabled');
   		 $('#monthly').removeAttr('disabled');
	}
	else
	{
		$('#yearly').attr('disabled','disabled');
   		$('#monthly').attr('disabled','disabled');
	}
}


//web-beta.archive.org/web/20110806082338/http://Footer Icon Listener
function iconbarRH(evt)
{
	var tips = $('.iconBar li .tip');
	var i = $('.iconBar li').index(this);
	
	(evt.type == "mouseleave") ? tips.hide() : $(tips[i]).show();
}


function initForms()
{
	$("#emailSignUpBodyForm").validate({showErrors:displayFormError,onsubmit:true,
									 submitHandler:submitForm,messages:{body_email:{required:"email required",body_email:"invalid email address"}}});
									 
	$("#emailSignUpFooterForm").validate({showErrors:displayFormError,onsubmit:true,
									 submitHandler:submitForm,messages:{footer_email:{required:"email required",footer_email:"invalid email address"}}});
	
	$('input[name=body_email]').focus(function(){$(this).val('')});
	$('input[name=body_name]').focus(function(){$(this).val('')});

	
	$('#emailSignUpBodySubmit').click(function () {$("#emailSignUpBodyForm").submit();});
	$('#emailSignUpFooterSubmit').click(function (){$("#emailSignUpFooterForm").submit();});
	
	
	$.data(data, 'emailSignUpBody',false);
	$.data(data, 'emailSignUpFooter',false);
	
	
	var $searchForm = $('#emailSignUpFooterForm');
	var $searchInput = $searchForm.find('input');
	var $searchLabel = $searchForm.find('label');
	
	if ($searchInput.val()){$searchLabel.hide();}
	
	$searchInput.focus(function(){$searchLabel.hide();}).blur(function(){if(this.value == ''){$searchLabel.show();}});
	
	$searchLabel.click(function(){$searchInput.trigger('focus');});
}


function submitForm()
{
	var	id = this.currentForm.id;
		id = id.substring(0,id.length - 4);
		
	if($.data(data,id))
	{
		switch(id)
		{
			case 'emailSignUpFooter':
				var email =  $('input[name=footer_email]').val();
				$.post('../shared/emailSignUp.cfm', {'email': email,'id':id},emailConfirmation);
			break;
			
			case 'emailSignUpBody':
				var email	= $('input[name=body_email]').val();
				var name	= $('input[name=body_name]').val();
				$.post('../shared/emailSignUp.cfm', {'name':name,'email': email,'id':id},emailConfirmation);
			break;
		}
	}
} 
 
function displayFormError(errorMap,errorList)
{
	var	id = this.errorContext[0].id;
		id = id.substring(0,id.length - 4);
	
	if(errorList.length > 0)
	{
		$('#' + id + 'Error').html(errorList[0].message);
		$.data(data,id,false);
	}
	else
	{
		$.data(data,id,true);
		$('#' + id + 'Error').html('');
	}
}
  
 function emailConfirmation(data)
{
	$('#scSubmission').html('<div style="float: left; padding-top: 18px; font-family:Arial, Helvetica, sans-serif; color:#999;">Thank you for your interest in Zeo!<br>Your information has been submitted.</div>');
	$('#subConf').html('<div align="center" style="float: left; padding-top: 18px; margin:0 0 0 100px; font-family:Arial, Helvetica, sans-serif; color:#999;">Thank you for your interest in Zeo!<br>Your information has been submitted.</div>');
	
	$('input[name=semail]').removeClass('email');
	$('input[name=semail]').removeClass('required');
	
	var s=s_gi(s_account);
    s.linkTrackVars="eVar1,events";
    s.linkTrackEvents="event2";
    s.events="event2";
    s.eVar1 = 'e-mail sign up'
    s.tl(true,'o', 'e-mail sign up');
}


/*
     FILE ARCHIVED ON 08:23:38 Aug 06, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:08:16 Mar 31, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/