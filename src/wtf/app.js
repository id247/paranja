;(function(){

	var stage = new swiffy.Stage(document.getElementById('wtf_swiffycontainer'),
          swiffyobject, 
          {});      
    
    stage.start();
	
	var container = document.getElementById('wtf_container');

	//container.parentNode.removeChild(container);

	//var opener = document.createElement('div');
	// opener.style.position = 'absolute';
	// opener.style.top = '0';
	// opener.style.right = '0';
	// opener.style.left = '0';
	// opener.style.left = '0';
	// opener.style.bottom = '0';
	// opener.style.zIndex = '10';

	//container.appendChild(opener);

	var opened = false;

	container.addEventListener('click', function(e){
		//e.preventDefault();
		//expandStart();
		if (!opened){
			frameElement.style.width = '640px';
			opened = true;
		}else{
			frameElement.style.width = '';
			opened = false;
		}
		console.log('open');
	});

	var parentDoc = window.parent.document;
	var parentNode = frameElement.parentNode;

	parentNode.style.position = 'fixed';
	parentNode.style.top = '0';
	parentNode.style.right = '0';
	parentNode.style.bottom = '0';
	parentNode.style.zIndex = '1000';

	// parentDoc.body.appendChild(container);

})();