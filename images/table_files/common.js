//For greeting user after login/register
/*!
* jQuery Cookie Plugin
*/
	(function($) {
		$.cookie = function(key, value, options) {

			// key and at least value given, set cookie...
			if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
				options = $.extend({}, options);

				if (value === null || value === undefined) {
					options.expires = -1;
				}

				if (typeof options.expires === 'number') {
					var days = options.expires, t = options.expires = new Date();
					t.setDate(t.getDate() + days);
				}

				value = String(value);

				return (document.cookie = [
					encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
					options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					options.path ? '; path=' + options.path : '',
					options.domain ? '; domain=' + options.domain : '',
					options.secure ? '; secure' : ''
				].join(''));
			}

			// key and possibly options given, get cookie...
			options = value || {};
			var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

			var pairs = document.cookie.split('; ');
			for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
				if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
			}
			return null;
		};
	})(jQuery);

function welcomeUser(){
		if($.cookie('fn')!=null && $.cookie('ln')!=null){
			var firstName = decodeURIComponent($.cookie('fn'));
			var lastName =  decodeURIComponent($.cookie('ln'));
			firstName = firstName.replace("+"," ");
			lastName = lastName.replace("+"," ");

			if ($('#itbe-login-register').css('display') == "block"){
				$('#itbe-logout').show();
				$('#itbe-login-register').hide();
				$("<span class='greeting' style='color: #797979; font-family: Arial, sans-serif; font-size: 13px;'>Hi, <a href='/accountManagement?formType=userProfile' alt='User Profle' title='User Profile'>"+firstName+' '+lastName+"</a>&nbsp;&nbsp;</span>").insertBefore("#itbe-logout .logout-link");
			}
			else{
				$('#itbe-logout').hide();
				$('#itbe-login-register').show();
			}
	
		}
}

var userId = '';
if($.cookie('USERID_COOKIE')!=null){
				userId =  decodeURIComponent($.cookie('USERID_COOKIE'));
}
else if($.cookie('STAGE_USERID_COOKIE')!=null && userId==''){
				userId =  decodeURIComponent($.cookie('STAGE_USERID_COOKIE'));                  
}
else if($.cookie('TEST_USERID_COOKIE')!=null && userId==''){
				userId =  decodeURIComponent($.cookie('TEST_USERID_COOKIE'));                      
}
else if($.cookie('DEV_USERID_COOKIE')!=null && userId==''){
				userId =  decodeURIComponent($.cookie('DEV_USERID_COOKIE'));                       
}
else
				userId = 'undefined';

if(userId!='undefined'){
				var meta = document.createElement('meta');
				meta.name = 'DCS.dcsaut';                          
				meta.content = userId;
				document.getElementsByTagName('head')[0].appendChild(meta);        
}
		
function updateIFrame( leadformData) { //only used for ACL screens not for lead forms pages
	//console.log('leadformData height'+leadformData['height']);
	var iframe = document.getElementById( 'myframe' );   
	var containerDiv = document.getElementById('ACL_Form_Container');
	if(typeof( leadformData['height'] )!=undefined && leadformData['height'] !=0)			 
		iframe.setAttribute( 'height', leadformData['height']);
	
	welcomeUser();						 
}