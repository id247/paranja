;(function(){


	//vars
	var bannerWidth = '600px';
	var bannerHeight = '500px';


	var parentNode = frameElement.parentNode;
	var closeElement = document.createElement('button');
	var container = document.getElementById('rich_container');
	var link = document.getElementById('rich_link');
	var swiffycontainer = document.getElementById('swiffycontainer');
  

	//functions
	function close(){
		parentNode.style.display = 'none';
		parentNode.innerHTML = '';
	}

	
	// stage
	var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
		  swiffyobject, 
		  {});      
	stage.start();  


	//magic
	container.appendChild(closeElement);

	parentNode.style.position = 'fixed';
	//parentNode.style.left = '0';
	parentNode.style.right = '0';
	parentNode.style.bottom = '0';
	parentNode.style.top = '0';
	parentNode.style.width = bannerWidth;
	parentNode.style.height = bannerHeight;
	parentNode.style.zIndex = '10000';
	parentNode.style.margin = 'auto';

	frameElement.style.position = 'absolute';
	frameElement.style.left = '0';
	frameElement.style.right = '0';
	frameElement.style.bottom = '0';
	frameElement.style.top = '0';
	frameElement.style.margin = 'auto';

	frameElement.style.width = bannerWidth;
	frameElement.style.height = bannerHeight;

	swiffycontainer.style.width = bannerWidth;
	swiffycontainer.style.height = bannerHeight;
	swiffycontainer.style.margin = 'auto';
	swiffycontainer.style.position = 'relative';
	
	link.style.display = 'block';
	link.style.position = 'absolute';
	link.style.left = '0';
	link.style.right = '0';
	link.style.bottom = '0';
	link.style.top = '0';


	closeElement.style.position = 'absolute';
	closeElement.style.display = 'block';
	closeElement.style.top = '5px';
	closeElement.style.right = '5px';
	closeElement.style.cursor = 'pointer';
	closeElement.style.border = '0';
	closeElement.style.lineHeight = '1';
	closeElement.style.textAlign = 'center';
	closeElement.style.background = 'transparent';
	closeElement.style.fontSize = '13px';
	closeElement.style.color = '#ccc';
	closeElement.style.fontFamily = 'Arial';
	closeElement.style.opacity = '0.5';
	closeElement.innerHTML = 'Закрыть [&times;]';

	//events

	closeElement.addEventListener('click', function(e){
		e.preventDefault();
		close();
	});

})();