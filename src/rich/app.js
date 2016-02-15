;(function(){


	//vars


	var bannerWidth = '300px';
	var bannerHeight = '300px';


	var parentNode = frameElement.parentNode;
    var closeElement = document.createElement('button');
    var container = document.getElementById('flrd_container');
    var swiffycontainer = document.getElementById('swiffycontainer');

    container.appendChild(closeElement);

  	
  	// stage

	var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
          swiffyobject, 
          {});      
    stage.setFlashVars(flashvars);
    stage.start();
    

    //functions

	function close(){
		parentNode.style.display = 'none';
		parentNode.innerHTML = '';
	}

	function init(parentNode, bannerHeight){
		parentNode.style.position = 'fixed';
		parentNode.style.left = '0';
		parentNode.style.right = '0';
		parentNode.style.bottom = '0';
		parentNode.style.top = '0';
		parentNode.style.width = '100%';
		parentNode.style.height = '100%';
		parentNode.style.background = 'rgba(0,0,0,.5)';
		parentNode.style.zIndex = '1000';
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


		closeElement.style.position = 'absolute';
		closeElement.style.display = 'block';
		closeElement.style.top = '0px';
		closeElement.style.right = '0px';
		closeElement.style.width = '30px';
		closeElement.style.height = '30px';
		closeElement.style.cursor = 'pointer';
		closeElement.style.zIndex = '10';
		closeElement.style.border = '0';
		closeElement.style.background = 'url("https://ad.csdnevnik.ru/special/staging/adfox/rich/files/pixel.gif")';

	}



    //events

	closeElement.addEventListener('click', function(e){
		e.preventDefault();
		console.log('close');
		close();
	});

	parentNode.addEventListener('click', function(e){
		e.preventDefault();
		console.log('close');
		close();
	});

	//init 

	init(parentNode, bannerHeight);


})();