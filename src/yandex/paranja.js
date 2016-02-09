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

	var parentDoc = window.parent.document;
	var paranja = document.createElement('div');

	var css = '' +
	'.prnj { font-family: arial, sans-serif; opacity: 0; z-index: 1000; position: fixed; top: 0; left: 0; right:0; bottom: 0; background: url("https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/bg.png"); background: rgba(0,0,0,.8); color: #fff; transition: opacity .8s; }' +
	'.prnj__close { position: absolute; right: 25px; top: 25px; cursor: pointer; }' +
	'.prnj__content { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }' +
	'.prnj__text-placeholder { text-align: center; position: absolute; left: 250px; right: 250px; bottom: 0px; top: 0; margin: auto; width: 745px; height: 350px; }' +
	'.prnj__logo { margin: 0 0 15px; }' +
	'.prnj__title { color: #fff; font-size: 34px; line-height: 1.5; margin: 0 0 15px; }' +
	'.prnj__text { color: #fff; font-size: 20px; line-height: 1.5; }' +
	'.prnj__arrow { position: absolute; }' +

	'.prnj__content--chrome .prnj__arrow { left: 30px; bottom: 30px; }' +

	'.prnj__content--opera .prnj__close { top: auto; bottom: 25px; }' +
	'.prnj__content--opera .prnj__arrow { right: 35px; top: 30px; }' +

	'.prnj__content--ff .prnj__close { top: auto; bottom: 25px; }' +
	'.prnj__content--ff .prnj__arrow { right: 145px; top: 30px; }' +

	'.prnj__content--ie .prnj__arrow { right: 50%; bottom: 80px; margin: 0 -390px 0 0; }' +
	
	'.prnj__content--ie8 .prnj__text-placeholder { top: auto; bottom: 50px; width: 930px; text-align: left; height: auto; }' +
	'.prnj__content--ie8 .prnj__logo { float: left; }' +
	'.prnj__content--ie8 .prnj__title { margin-left: 170px; }' +
	'.prnj__content--ie8 .prnj__text { margin-left: 170px; }' +
	'.prnj__content--ie8 .prnj__arrow { left: 50%; top: 50%; margin: 20px 0 0 -390px; }' +

	'.prnj__content--edge .prnj__arrow { right: 50%; bottom: 80px; margin: 0 -390px 0 0; }' +
	'' +
	'';

	//templates
	var templateStart = 	'';
	var templateEnd = 		'';
	
	var templateChrome = 	'<div class="prnj__content prnj__content--chrome">' +
							'	<img class="prnj__close" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/close.png" alt="" />' +
							'	<img class="prnj__arrow"  src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/arrow-chrome.png" alt="" />' +
							'	<div class="prnj__text-placeholder">' +
							'		<img class="prnj__logo" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/logo.png" alt=""  />' +
							'		<div class="prnj__title">' +
							'			Спасибо, что скачали Яндекс.Браузер' +
							'		</div>' +
							'		<div class="prnj__text">' +
							'			Чтобы установить его, нажмите кнопку, на которую указывает стрелка, <br />' +
							'			а затем запустите установщик и следуйте инструкциям' +
							'		</div>' +
							'	</div>' +
							'</div>' +
							'';
									

	var templateOpera = 	'<div class="prnj__content prnj__content--opera">' +
							'	<img class="prnj__close" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/close.png" alt="" />' +
							'	<img class="prnj__arrow" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/arrow-opera.png" alt="" />' +
							'	<div class="prnj__text-placeholder">' +
							'		<img class="prnj__logo" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/logo.png" alt="" />' +
							'		<div class="prnj__title">' +
							'			Спасибо, что скачали Яндекс.Браузер' +
							'		</div>' +
							'		<div class="prnj__text">' +
							'			Чтобы установить его, нажмите кнопку, на которую указывает стрелка, <br />' +
							'			а затем запустите установщик и следуйте инструкциям' +
							'		</div>' +
							'	</div>' +
							'</div>' +
							'';	

	var templateFirefox = 	'<div class="prnj__content prnj__content--ff">' +
							'	<img class="prnj__close" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/close.png" alt="" />' +
							'	<img class="prnj__arrow" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/arrow-ff.png" alt="" />' +
							'	<div class="prnj__text-placeholder">' +
							'		<img class="prnj__logo" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/logo.png" alt="" />' +
							'		<div class="prnj__title">' +
							'			Спасибо, что скачали Яндекс.Браузер' +
							'		</div>' +
							'		<div class="prnj__text">' +
							'			Чтобы установить его, нажмите кнопку, на которую указывает стрелка, <br />' +
							'			а затем запустите установщик и следуйте инструкциям' +
							'		</div>' +
							'	</div>' +
							'</div>' +
							'';	

	var templateIe = 		'<div class="prnj__content prnj__content--ie">' +
							'	<img class="prnj__close" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/close.png" alt="" />' +
							'	<img class="prnj__arrow" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/arrow-ie.png" alt="" />' +
							'	<div class="prnj__text-placeholder">' +
							'		<img class="prnj__logo" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/logo.png" alt="" />' +
							'		<div class="prnj__title">' +
							'			Спасибо, что скачали Яндекс.Браузер' +
							'		</div>' +
							'		<div class="prnj__text">' +
							'			Чтобы установить его, нажмите кнопку, на которую указывает стрелка, <br />' +
							'			а затем запустите установщик и следуйте инструкциям' +
							'		</div>' +
							'	</div>' +
							'</div>' +
							'';	


	var templateIe8 = 		'<div class="prnj__content prnj__content--ie8">' +
							'	<img class="prnj__close" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/close.png" alt="" />' +
							'	<img class="prnj__arrow" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/arrow-ie8.png" alt="" />' +
							'	<div class="prnj__text-placeholder">' +
							'		<img class="prnj__logo" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/logo.png" alt="" />' +
							'		<div class="prnj__title">' +
							'			Спасибо, что скачали Яндекс.Браузер' +
							'		</div>' +
							'		<div class="prnj__text">' +
							'			Чтобы установить его, нажмите кнопку, на которую указывает стрелка, <br />' +
							'			а затем запустите установщик и следуйте инструкциям' +
							'		</div>' +
							'	</div>' +
							'</div>' +
							'';	


	var templateEdge = 		'<div class="prnj__content prnj__content--edge">' +
							'	<img class="prnj__close" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/close.png" alt="" />' +
							'	<img class="prnj__arrow" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/arrow-ie.png" alt="" />' +
							'	<div class="prnj__text-placeholder">' +
							'		<img class="prnj__logo" src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/logo.png" alt="" />' +
							'		<div class="prnj__title">' +
							'			Спасибо, что скачали Яндекс.Браузер' +
							'		</div>' +
							'		<div class="prnj__text">' +
							'			Чтобы установить его, нажмите кнопку, на которую указывает стрелка, <br />' +
							'			а затем запустите установщик и следуйте инструкциям' +
							'		</div>' +
							'	</div>' +
							'</div>' +
							'';	



	var templateSafari = 	'<div style="position: absolute; top: 0px; right: 180px; bottom: 0; margin: auto; width: 700px; max-height: 400px; font-family: arial,helvetica,sans-serif">' +
							'	<div style="color: #f7c833; font-size: 26px; line-height: 1.5; margin: 0 0 15px; font-family: tahoma, arial, sans-serif;">' +
							'		Для того, чтобы установить Яндекс.Браузер,<br />' +
							'		дважды нажмите значок &laquo;Yandex.dmg&raquo; <br />' +
							'		в появившемся окне &laquo;Загрузки&raquo; <br />' +
							'	</div>' +
							'	<div style="color: #fff; font-size: 18px; line-height: 1.5;">' +
							'		<img src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/safari-download.png?1" alt="" style="vertical-align: middle;" />' +
							'		<br /> В открывшемся окне перетащите значок браузера в папку &laquo;Программы&raquo;.' +
							'	</div>' +
							'	<img src="https://ad.csdnevnik.ru/special/staging/adfox/yandex/files/arrow-up-right.png" alt="" style="position: absolute; right: -80px; top: -10px;" />' +
							'</div>' +
							'';	


	function isIETest () {
	  var myNav = navigator.userAgent.toLowerCase();
	  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
	}

	function appendCss(css){
		var head = parentDoc.head || parentDoc.getElementsByTagName('head')[0];
		var style = parentDoc.createElement('style');

		style.type = 'text/css';
		if (style.styleSheet){
		  style.styleSheet.cssText = css;
		} else {
		  style.appendChild(parentDoc.createTextNode(css));
		}
		head.appendChild(style);		
	}

	// Opera 8.0+
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== 'undefined';
	// At least Safari 3+: "[object HTMLElementConstructor]"
	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/false || !!document.documentMode;	
	// Internet Explorer 8
	var isIE8 = isIE && (isIETest() == 8);
	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia;
	// Chrome 1+
	var isChrome = !!window.chrome && !!window.chrome.webstore;
	// Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS;

	var template = false;

	if (isOpera) template = templateStart + templateOpera + templateEnd;;
	if (isFirefox) template = templateStart + templateFirefox + templateEnd;;
	if (isIE) template = templateStart + templateIe + templateEnd;
	if (isIE8) template = templateStart + templateIe8 + templateEnd;
	if (isChrome) template = templateStart + templateChrome + templateEnd;
	if (isEdge) template = templateStart + templateEdge + templateEnd;
	//if (isBlink) template = document.getElementById('template-blink');
	if (isSafari) template = templateStart + templateSafari + templateEnd;
	if (!template) return;

	//template = templateStart + templateIe8 + templateEnd;
	
	

	//banner link		
	var link = document.getElementById('swiffycontainer') || document.querySelectorAll('.js-paranja-link')[0];
	//console.log(link);
	if (!link) return;


	//css
	appendCss(css);


	//paranja
	paranja.className = 'prnj';
	paranja.innerHTML = template;

	//events
	link.addEventListener('click', function(e){
		e.preventDefault();
		console.log('click');
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