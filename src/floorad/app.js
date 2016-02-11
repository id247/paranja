;(function(){


	//vars

	var bannerHeight = '90px';
	var bannerHeightOpen = '270px';
	
	var parentNode = frameElement.parentNode;
    var closeElement = document.getElementById('flrd_close');

  	
  	// stage

	var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
          swiffyobject, 
          {});      
    stage.setFlashVars(flashvars);
    stage.start();
    

    //functions

	function show(bannerHeightOpen){		
		parentNode.style.height = bannerHeightOpen;
		frameElement.style.height = bannerHeightOpen;
		console.log('show');
	}
	
	function hide(bannerHeight){
		parentNode.style.height = bannerHeight;
		frameElement.style.height = bannerHeight;
		console.log('hide');
	}
	
	function close(){
		console.log('close')
		parentNode.style.display = 'none';
	}

	function init(parentNode, bannerHeight){
		parentNode.style.position = 'fixed';
		parentNode.style.left = '0';
		parentNode.style.right = '0';
		parentNode.style.bottom = '0';
		parentNode.style.zIndex = '1000';
		parentNode.style.margin = 'auto';
		parentNode.style.height = bannerHeight;
	}



    //events
	
	frameElement.addEventListener('mouseover', function(e){
		show(bannerHeightOpen)
	});

	frameElement.addEventListener('mouseout', function(e){
		hide(bannerHeight);
	});

	closeElement.addEventListener('mouseover', function(e){
		hide(bannerHeight);
	});

	closeElement.addEventListener('click', function(e){
		e.preventDefault();
		close();
	});

	//init 

	init(parentNode, bannerHeight);


})();