;(function(){
  	
	var stage = new swiffy.Stage(document.getElementById('swiffycontainer'),
          swiffyobject, 
          {});      
    
    stage.start();

    var close = document.getElementById('flrd_close');
	
	console.log(close);

	//frameElement.style.height = '270px';
	
	frameElement.addEventListener('mouseover', function(e){
		frameElement.style.height = '270px';
		console.log('show');
	});

	frameElement.addEventListener('mouseout', function(e){
		frameElement.style.height = '';
		console.log('hide');
	});

	close.addEventListener('click', function(e){
		e.preventDefault();
		console.log('close')
		frameElement.style.display = 'none';
	});

	var parentDoc = window.parent.document;
	var parentNode = frameElement.parentNode;

	frameElement.style.position = 'fixed';
	frameElement.style.bottom = '0';
	frameElement.style.right = '0';
	frameElement.style.bottom = '0';
	frameElement.style.zIndex = '1000';
	frameElement.style.margin = 'auto';


})();