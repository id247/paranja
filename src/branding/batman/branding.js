;(function(){
	

	var parentDoc = window.parent.document;
	var adfoxBanner = frameElement.parentNode;


	//clickable

	var clickable = document.createElement('div');
	var padding = document.createElement('div');

	clickable.style.position = 'absolute';
	clickable.style.left = '50%';
	//clickable.style.right = '0';
	//clickable.style.bottom = '0';
	clickable.style.top = '86px';
	clickable.style.margin = '0 0 0 231px';
	clickable.style.width = '250px';
	clickable.style.height = '40px';
	clickable.style.cursor = 'pointer';
	clickable.style.background = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQIW2NkAAIAAAoAAggA9GkAAAAASUVORK5CYII=)';
	//clickable.style.background = '#000';

	document.body.appendChild(clickable);


	padding.style.height = '200px';

	parentDoc.body.insertBefore(padding, parentDoc.body.firstChild);
	//parentDoc.body.appendChild(padding);


	//overlay
	var overlay = parentDoc.createElement('div');
	var video = parentDoc.createElement('div');
	var closeElement = parentDoc.createElement('div');
	var pixel = parentDoc.createElement('img');

	overlay.style.position = 'fixed';
	overlay.style.left = '0';
	overlay.style.right = '0';
	overlay.style.bottom = '0';
	overlay.style.top = '0';
	overlay.style.width = '100%';
	overlay.style.height = '100%';
	overlay.style.zIndex = '10000';
	overlay.style.background = 'rgba(0,0,0,.5)';


	video.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/HyeRTSZw7ug?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allowfullscreen></iframe>'
	video.style.position = 'fixed';
	video.style.left = '0';
	video.style.right = '0';
	video.style.bottom = '0';
	video.style.top = '0';
	video.style.background = '#fff';
	video.style.width = '640px';
	video.style.height = '360px';
	video.style.padding = '30px';
	video.style.margin = 'auto';
	video.style.zIndex = '10001';

	closeElement.style.position = 'absolute';
	closeElement.style.display = 'block';
	closeElement.style.top = '-15px';
	closeElement.style.right = '-15px';
	closeElement.style.width = '30px';
	closeElement.style.height = '30px';
	closeElement.style.borderRadius = '50%';
	closeElement.style.cursor = 'pointer';
	closeElement.style.border = '0';
	closeElement.style.lineHeight = '30px';
	closeElement.style.textAlign = 'center';
	closeElement.style.background = '#fff';
	closeElement.style.fontSize = '30px';
	closeElement.innerHTML = '<span>&times;</span>';

	pixel.style.position = 'absolute';
	pixel.style.width = '1px';
	pixel.style.height = '1px';
	pixel.style.left = '-9999px';
		
	video.appendChild(pixel);
	video.appendChild(closeElement);

	frameElement.style.width = '2500px';
	frameElement.style.height = '1200px';
	frameElement.style.position = 'absolute';
	frameElement.style.top = '0';
	frameElement.style.left = '50%';
	frameElement.style.marginLeft = '-1250px';

	adfoxBanner.style.width = 'auto';
	adfoxBanner.style.height = '1200px';
	adfoxBanner.style.position = 'absolute';
	adfoxBanner.style.top = '0px';
	adfoxBanner.style.left = '0px';
	adfoxBanner.style.right = '0px';
	adfoxBanner.style.overflow = 'hidden';
	//adfoxBanner.style.zIndex = '-1';

	function close(e){
		e.preventDefault();
		pixel.src = '';
		parentDoc.body.removeChild(overlay);
		parentDoc.body.removeChild(video);
	}

	function show(e){
		//pixel.src = 'http://ads.adfox.ru/222314/getCode?p1=bmiys&p2=v&ptrc=b&pfc=bfitc&pfb=dmfen&puid1=&puid2=&puid3=&puid4=&puid5=&puid6=&puid7=&puid8=&puid9=&puid10=&puid11=&puid12=&puid13=&puid14=&puid15=&puid16=&puid17=&puid18=&pr=espzzef';
		parentDoc.body.appendChild(overlay);
		parentDoc.body.appendChild(video);
	}

	//events
	clickable.addEventListener('click', show);

	overlay.addEventListener('click', close);
	closeElement.addEventListener('click', close);

})();