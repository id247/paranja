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
	var templateStart = 	'<img src="https://ad.csdnevnik.ru/special/staging/adfox/close.png" alt="" style="position: absolute; right: 15px; top: 15px; cursor: pointer;"/>';
	var templateEnd = 		'';
	
	var templateChrome = 	'<div style="position: absolute; left: 130px; bottom: 80px; width: 700px; font-family: arial,helvetica,sans-serif">' +
							'	<div style="color: #f7c833; font-size: 26px; line-height: 1.5; margin: 0 0 15px; font-family: tahoma, arial, sans-serif;">' +
							'		Для того, чтобы установить Яндекс.Браузер, <br />' +
							'		нажмите на значок установочного файла <br />' +
							' 		&laquo;Yandex.exe&raquo; в панели загрузок' +
							'	</div>' +
							'	<div style="color: #fff; font-size: 18px; line-height: 1.5;">' +
							'		В&nbsp;появившемся диалоговом окне нажмите &laquo;Запустить&raquo;, а&nbsp;затем &laquo;Начать&nbsp;пользоваться&raquo;,' +
							'		и Яндекс.Браузер появится в нижней панели. <br />' +
							'		Откройте его и он расскажет о своих преимуществах. <br />' +
							'		<a href="https://yandex.ru/support/yabrowser/install/install-chrome.xml" style="font-size: 14px; color: #f7c833; text-decoration: underline;" target="_blank">Помощь в установке</a>' +
							'	</div>' +
							'	<img src="https://ad.csdnevnik.ru/special/staging/adfox/arrow-down.png" alt="" style="position: absolute; left: -100px; bottom: -40px;" />' +
							'</div>' +
							'';
									

	var templateOpera = 	'<div style="position: absolute; top: 140px; right: 150px; width: 700px; max-height: 200px; font-family: arial,helvetica,sans-serif">' +
							'	<div style="color: #f7c833; font-size: 26px; line-height: 1.5; margin: 0 0 15px; font-family: tahoma, arial, sans-serif;">' +
							'		Для того, чтобы установить Яндекс.Браузер,<br />' +
							'		Нажмите кнопку' +
							'		<img src="https://ad.csdnevnik.ru/special/staging/adfox/opera-download.png" alt="" style="vertical-align: middle;" />' +
							'		справа от адресной строки,' + 
							' 		а&nbsp;затем дважды нажмите значок установочного файла &laquo;Yandex.exe&raquo;' +
							'	</div>' +
							'	<div style="color: #fff; font-size: 18px; line-height: 1.5;">' +
							'		В&nbsp;появившемся диалоговом окне нажмите &laquo;Запустить&raquo;, а&nbsp;затем &laquo;Начать&nbsp;пользоваться&raquo;,' +
							'		и Яндекс.Браузер появится в нижней панели. <br />' +
							'		Откройте его и он расскажет о своих преимуществах. <br />' +
							'		<a href="https://yandex.ru/support/yabrowser/install/install-opera.xml" style="font-size: 14px; color: #f7c833; text-decoration: underline;" target="_blank">Помощь в установке</a>' +
							'	</div>' +
							'	<img src="https://ad.csdnevnik.ru/special/staging/adfox/arrow-up.png" alt="" style="position: absolute; right: -80px; top: -10px;" />' +
							'</div>' +
							'';		

	var templateFirefox = 	'<div style="position: absolute; top: 0px; right: 180px; bottom: 0; margin: auto; width: 700px; max-height: 200px; font-family: arial,helvetica,sans-serif">' +
							'	<div style="color: #f7c833; font-size: 26px; line-height: 1.5; margin: 0 0 15px; font-family: tahoma, arial, sans-serif;">' +
							'		Для того, чтобы установить Яндекс.Браузер,<br />' +
							'		нажмите кнопку' +
							'		<img src="https://ad.csdnevnik.ru/special/staging/adfox/ff-download.png" alt="" style="vertical-align: middle;" />' +
							'		справа от адресной строки, ' +
							'		а затем нажмите значок установочного файла &laquo;Yandex.exe&raquo;' +
							'	</div>' +
							'	<div style="color: #fff; font-size: 18px; line-height: 1.5;">' +
							'		В&nbsp;появившемся диалоговом окне нажмите &laquo;Запустить&raquo;, а&nbsp;затем &laquo;Начать&nbsp;пользоваться&raquo;,' +
							'		и Яндекс.Браузер появится в нижней панели. <br />' +
							'		Откройте его и он расскажет о своих преимуществах. <br />' +
							'		<a href="https://yandex.ru/support/yabrowser/install/install-firefox.xml" style="font-size: 14px; color: #f7c833; text-decoration: underline;" target="_blank">Помощь в установке</a>' +
							'	</div>' +
							'	<img src="https://ad.csdnevnik.ru/special/staging/adfox/arrow-up.png" alt="" style="position: absolute; right: -80px; top: -10px;" />' +
							'</div>' +
							'';	

	var templateIe = 		'<div style="position: absolute; left: 0px; top: 0; right: 0; bottom: 0; margin: auto; width: 700px; max-height: 200px; font-family: arial,helvetica,sans-serif">' +
							'	<div style="color: #f7c833; font-size: 26px; line-height: 1.5; margin: 0 0 15px; font-family: tahoma, arial, sans-serif;">' +
							'		Для того, чтобы установить Яндекс.Браузер,<br />' +
							'		нажмите на кнопку &laquo;Выполнить&raquo; на панели уведомлений в нижней части окна браузера' +
							'	</div>' +
							'	<div style="color: #fff; font-size: 18px; line-height: 1.5;">' +
							'		В&nbsp;появившемся диалоговом окне нажмите &laquo;Запустить&raquo;, а&nbsp;затем &laquo;Начать&nbsp;пользоваться&raquo;,' +
							'		и Яндекс.Браузер появится в нижней панели. <br />' +
							'		Откройте его и он расскажет о своих преимуществах. <br />' +
							'		<a href="https://yandex.ru/support/yabrowser/install/install-ie.xml" style="font-size: 14px; color: #f7c833; text-decoration: underline;" target="_blank">Помощь в установке</a>' +
							'	</div>' +
							'	<img src="https://ad.csdnevnik.ru/special/staging/adfox/arrow-down-2.png" alt="" style="position: absolute; right: -80px; bottom: -10px;" />' +
							'</div>' +
							'';


	var templateEdge = 		'<div style="position: absolute; left: 0px; top: 0; right: 0; bottom: 0; margin: auto; width: 700px; max-height: 200px; font-family: arial,helvetica,sans-serif">' +
							'	<div style="color: #f7c833; font-size: 26px; line-height: 1.5; margin: 0 0 15px; font-family: tahoma, arial, sans-serif;">' +
							'		Для того, чтобы установить Яндекс.Браузер,<br />' +
							'		нажмите на кнопку &laquo;Выполнить&raquo; на панели уведомлений в нижней части окна браузера' +
							'	</div>' +
							'	<div style="color: #fff; font-size: 18px; line-height: 1.5;">' +
							'		В&nbsp;появившемся диалоговом окне нажмите &laquo;Запустить&raquo;, а&nbsp;затем &laquo;Начать&nbsp;пользоваться&raquo;,' +
							'		и Яндекс.Браузер появится в нижней панели. <br />' +
							'		Откройте его и он расскажет о своих преимуществах. <br />' +
							'		<a href="https://yandex.ru/support/yabrowser/install/install-edge.xml" style="font-size: 14px; color: #f7c833; text-decoration: underline;" target="_blank">Помощь в установке</a>' +
							'	</div>' +
							'	<img src="https://ad.csdnevnik.ru/special/staging/adfox/arrow-down-2.png" alt="" style="position: absolute; right: -80px; bottom: -10px;" />' +
							'</div>' +
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

	var template = false;

	if (isOpera) template = templateStart + templateOpera + templateEnd;;
	if (isFirefox) template = templateStart + templateFirefox + templateEnd;;
	if (isIE) template = templateStart + templateIe + templateEnd;
	if (isChrome) template = templateStart + templateChrome + templateEnd;
	if (isEdge) template = templateStart + templateEdge + templateEnd;
	//if (isBlink) template = document.getElementById('template-blink');
	//if (isSafari) template = document.getElementById('template-safari');
	if (!template) return;

	var parentDoc = window.parent.document;
	
	//banner link		
	var link = document.getElementById('swiffycontainer') || document.getElementById('link');
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
		//e.preventDefault();
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