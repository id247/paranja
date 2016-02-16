;(function(){


	//vars


	var bannerWidth = '600px';
	var bannerHeight = '600px';

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

	function focus(){
		var canvas = swiffycontainer.querySelector('canvas');
		if (canvas){
			canvas.style.outline = 'none';
			canvas.setAttribute('tabindex', 1);
			canvas.focus();
		}else{
			setTimeout(focus, 100);
		}		
	}

	var keydownEvent = function(e){
	    // space and arrow keys
	    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
	        e.preventDefault();
	    }
	}

	function close(){
		parentNode.style.display = 'none';
		parentNode.innerHTML = '';
		window.removeEventListener('keydown', keydownEvent, false);
	}

	function setStyles() {
		parentNode.style.position = 'fixed';
		parentNode.style.left = '0';
		parentNode.style.right = '0';
		parentNode.style.bottom = '0';
		parentNode.style.top = '0';
		parentNode.style.width = '100%';
		parentNode.style.height = '100%';
		parentNode.style.background = 'rgba(0,0,0,.5)';
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

	function init(){
		setStyles();
		focus();		
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

	window.addEventListener('keydown', keydownEvent, false);

	//init 

	init();


})();