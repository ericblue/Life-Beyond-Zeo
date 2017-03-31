function tabbar(action,hl) {
document.form.jsaction.value = action;
document.form.newhl.value = hl;
document.form.submit();
}

function formchanged ()
	{
	document.form.form_changed.value = 'yes';
	}


// Set Focus on the first field that contains an error
function errfocus (fieldname)
		{
		document.forms[0].elements[fieldname].focus();
		}

// R�ckfrage (Ja,Nein) ausl�sen, Aktion zwischenspeichern


// Aktion �ber URL-Variable verschicken.
	function ActionSubmit(action) {
		document.forms[0].jsaction.value = action;
		document.forms[0].submit();
	}

function formsubmit(action,message) {
	if (message != '')
		{if (confirm (message) == true)
			{
			document.forms[0].action = document.forms[0].action + "?action=" + action;
			document.forms[0].submit();
			}
		}
	else
		{
		document.forms[0].action = document.forms[0].action + "?action=" + action;
		document.forms[0].submit();
		}
}

	<!-- begin to hide script contents from old browsers
	function checksearch()
	  {
		var searchlen = document.forms[0].searchterm.value;
		if(searchlen == "")
			{
			alert("Please type in keyword(s) to search!");
			}
		else {
				ActionSubmit('act_content_search');
			 }
	  }
	// end hiding script from old browsers -->



	function popitup(destination,win_name,win_dim) 
	{
			window.open (destination ,win_name,win_dim + ',' + 'resizable=no,scrollbars=no,toolbar=no,Left=250,Top=250,status=no,directories=no,menubar=no,location=tabelle');
 	}

	function newwindow(destination,win_name,win_dim) 
	{
			window.open (destination ,win_name,win_dim + ',' + 'resizable=yes,scrollbars=yes,toolbar=no,Left=250,Top=250,status=no,directories=no,menubar=no,location=tabelle');
 	}

	if (document.layers) document.captureEvents(Event.KEYPRESS); 
	// needed if you wish to cancel the key

	document.onkeypress = keyhandler;
	
	function omniemailsignup() {
		var s=s_gi(s_account);
    	s.linkTrackVars="eVar1,events";
    	s.linkTrackEvents="event2";
    	s.events="event2";
    	s.eVar1 = 'e-mail sign up'
    	s.tl(true,'o', 'e-mail sign up');	
	}
	function keyhandler(e) {
		var ename = null;
	    if (document.layers){
	        Key = e.which;
			ename = e.target.name;}
	    else{
		    	if(navigator.appName == "Microsoft Internet Explorer")
		    	{
			        Key = window.event.keyCode;
					ename = window.event.srcElement.name;
		    	}
			}

//        alert("Key pressed! ASCII-value: " + Key + " - " + event.srcElement.name);

		if(ename != null)
		{
		   if (Key == 13 && (ename == "searchterm" || ename == "searchterm")){
				var searchlen = document.forms[0].searchterm.value;
				if(searchlen == "")
					{
					alert("Please type in keyword(s) to search!");
				    if (document.layers)
						return false;
			    	else
						window.event.returnValue = false;
					}
				else {
						for(var iii=0; iii < document.forms[0].elements.length; iii++){
							if(document.forms[0].elements[iii].type == "submit"){
								document.forms[0].elements[iii].name = "act_content_search";
								}
							}
						ActionSubmit('act_content_search_lc');
					 }
				}
		}
	}

function noSpamMailLink(user,domain,tld,param) {
	locationstring = "mailto:" + user + "@" + domain + "." + tld + param;
	window.location = locationstring;
}


// using this function to load the object externally
// this will make the object active on load
// other wise IE requires user to click on the object to make it active

function CreateControl(DivID,content)
{
  var d = document.getElementById(DivID);
  d.innerHTML = content;
}

function MM_swapImgRestore() { //web-beta.archive.org/web/20110819000122/http://v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //web-beta.archive.org/web/20110819000122/http://v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //web-beta.archive.org/web/20110819000122/http://v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
    
}

function MM_swapImage() { //web-beta.archive.org/web/20110819000122/http://v3.0
  var i,j=0,x,a=MM_swapImage.arguments; 
  document.MM_sr=new Array; 
  for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) { //web-beta.archive.org/web/20110819000122/http://v2.0
  window.open(theURL,winName,features);
}

function MM_goToURL() { //web-beta.archive.org/web/20110819000122/http://v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}



/*
     FILE ARCHIVED ON 00:01:22 Aug 19, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:51:35 Mar 31, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/