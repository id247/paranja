;(function(){


	//vars


	var bannerWidth = '300px';
	var bannerHeight = '300px';


	var parentNode = frameElement.parentNode;
    var closeElement = document.getElementById('flrd_close');
    var container = document.getElementById('flrd_container');

  	
  	// stage

	var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
          swiffyobject, 
          {});      
    stage.setFlashVars(flashvars);
    stage.start();
    

    //functions


	function close(){
		parentNode.style.display = 'none';
	}

	function init(parentNode, bannerHeight){
		parentNode.style.position = 'fixed';
		parentNode.style.left = '0';
		parentNode.style.right = '0';
		parentNode.style.bottom = '0';
		parentNode.style.top = '0';
		parentNode.style.background = 'rgba(0,0,0,.5)';
		parentNode.style.zIndex = '1000';


		frameElement.style.position = 'absolute';
		frameElement.style.left = '0';
		frameElement.style.right = '0';
		frameElement.style.bottom = '0';
		frameElement.style.top = '0';
		frameElement.style.margin = 'auto';

		frameElement.style.width = bannerWidth;
		frameElement.style.height = bannerHeight;
	}



    //events

	closeElement.addEventListener('click', function(e){
		e.preventDefault();
		close();
	});

	parentNode.addEventListener('click', function(e){
		e.preventDefault();
		close();
	});

	//init 

	init(parentNode, bannerHeight);


})();