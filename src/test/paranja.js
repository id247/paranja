(function(){

	//disable for mobiles
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	){
		return;
	}

	//templates
	var template = 	'<div style="position: absolute; top: 0; left: 0; bottom: 0; right: 0; margin: auto; width: 800px; height: 530px;">' +
					'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="800" height="530">' +
					'<param name="movie" value="https://ad.csdnevnik.ru/special/prodaction/devchat/devchat_2.swf">' +
					'<param name="AllowScriptAccess" value="all">' +
					'<!--[if !IE]>-->' +
					'<object type="application/x-shockwave-flash" data="https://ad.csdnevnik.ru/special/prodaction/devchat/devchat_2.swf" "="" width="800" height="530">' +
					'<param name="allowNetworking" value="all">' +  
					'<param name="movie" value="https://ad.csdnevnik.ru/special/prodaction/devchat/devchat_2.swf">' +
					'<param name="AllowScriptAccess" value="always">' +
                    '<!--<![endif]-->' +
					'<a href="http://www.adobe.com/go/getflash">' +
					'    <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="Get Adobe Flash player">' +
					'</a>' +
					'<!--[if !IE]>-->' +
					'</object>' +
					'<!--<![endif]-->' +
					'</object>' +
					'';



	// Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';
	// At least Safari 3+: "[object HTMLElementConstructor]"
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;
	// Chrome 1+
	var isChrome = !!window.chrome && !!window.chrome.webstore;
	// Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS;


	var parentDoc = window.parent.document;
	
	//banner link		
	var link = document.getElementById('swiffycontainer') || document.querySelector('.js-paranja-link');
	//console.log(link);
	if (!link) return;

	//paranja
	var paranja = document.createElement('div');
	paranja.style.opacity = 0;
	paranja.style.zIndex = '1000';
	paranja.style.position = 'fixed';
	paranja.style.top = 0;
	paranja.style.left = 0;
	paranja.style.right = 0;
	paranja.style.bottom = 0;
	paranja.style.background = 'rgba(0,0,0,.8)';
	paranja.style.transition = 'opacity .8s';
	paranja.innerHTML = template;


	//events
	link.addEventListener('click', function(e){
		e.preventDefault();
		//console.log('click');
		parentDoc.body.appendChild(paranja);
		
		setTimeout( function(){
			paranja.style.opacity = 1;
		}, 500);
	});
	paranja.addEventListener('click', function(e){
		if (e.target.tagName.toLowerCase() !== 'a'){
			e.preventDefault();
			paranja.style.opacity = 0;
			setTimeout( function(){
				parentDoc.body.removeChild(paranja);
			}, 800);
		}
	});


})();