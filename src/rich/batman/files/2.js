;(function(){


	//vars
	var bannerWidth = '600px';
	var bannerHeight = '500px';


	var parentNode = frameElement.parentNode;
	var closeElement = document.createElement('button');
	var container = document.getElementById('rich_container');
	var link = document.getElementById('rich_link');
	var link2 = document.getElementById('rich_link2');
	var link3 = document.getElementById('rich_link3');
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
	//parentNode.style.background = 'rgba(0,0,0,.5)';
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

	
	link2.style.display = 'block';
	link2.style.position = 'absolute';
	link2.style.left = '63px';
	link2.style.top = '80px';
	link2.style.width = '230px';
	link2.style.height = '63px';
	//link2.style.background = 'rgba(0,0,0,.5)';
	
	link3.style.display = 'block';
	link3.style.position = 'absolute';
	link3.style.right = '59px';
	link3.style.top = '80px';
	link3.style.width = '234px';
	link3.style.height = '63px';
	//link3.style.background = 'rgba(0,0,0,.5)';

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