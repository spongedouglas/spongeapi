/*
SPONGEAPI v1.1
*/

var iframeId, iid, handleSetupResponse;
var spongeapi = spongeapi || {};
spongeapi.initComplete = false;

spongeapi.init = function(params){

	iid = window.location.search.slice(1);
	window.spongecell = window.spongecell || {};

	spongeapi.type = params.type;
	spongeapi.initObj = params.initObj;
	spongeapi.isDynamic = params.isDynamic;
	spongeapi.onReady = params.onReady;
	spongeapi.testData = params.testData;

	if(window == parent.top){
		handleSetupResponse();
	} else {
		parent.postMessage(JSON.stringify({
		  type: 'api',
		  topic: 'setup',
		  iid: iid,
		  callback: 'handleSetupResponse'
		}), '*');
	}

};


spongeapi.openScreen = function(screenName){
	parent.postMessage(JSON.stringify({
	  iid: iid,
	  topic: 'nav',
	  type: 'api',
	  screen: screenName
	}), '*');
};

spongeapi.openLanding = function(landingPage){
	parent.postMessage(JSON.stringify({
	    iid: iid,
	    topic: 'nav',
	    type: 'api',
	    landingPage: spongecell.apiData.landingPages[landingPage]
	  }), '*');
};

spongeapi.getDynamicText = function(prop){
	return (spongecell.apiData.properties) ? spongecell.apiData.properties[prop].text : prop;
};

spongeapi.getDynamicImage = function(prop){
	return (spongecell.apiData.assets) ? spongecell.apiData.assets[prop].src : prop;
};

spongeapi.parseEdge = function()
{
	for (var property in spongecell.apiData.properties) {
		var el = sym.$(property);

		if(el){
			el.text(spongecell.apiData.properties[property].text);
		}
	}

	// MATCH DYNAMIC IMAGES
	for (var property in spongecell.apiData.assets) {
    	var el = sym.$(property);
    	if(el){
			el.css({'background-image':'url('+spongecell.apiData.assets[property].src+')'});
    	}
	}
}

spongeapi.parseDynamicCanvasImages = function()
{
	console.log('API::parseDynamicCanvas()');
	// PARSE THE FLASH LIBRARY FOR DYNAMIC IMAGES

	/* INSTRUCTIONS:
	Simply rename bitmaps in the Flash library 
	to match dynamic item text properties.

	Apply by passing "true" to the "isDynamic"
	parameter in spongeapi.init
	*/
	//console.log(lib.properties.manifest);
	var libImg;
	for(var i=0; libImg = lib.properties.manifest[i]; i++)
	{

		if(spongecell.apiData.assets.hasOwnProperty(libImg.id)){
			libImg.src = spongeapi.getDynamicImage(libImg.id);
		}
	}
}
spongeapi.parseDynamicCanvasText = function()
{
	//console.log('API::parseDynamicCanvasText()');
	// PARSE THE FLASH LIBRARY FOR DYNAMIC TEXT

	/* INSTRUCTIONS:

	Place spongeapi.parseDynamicCanvasText() in 
	handleComplete function, before stage.update();
	
	/*** MANUAL TARGETING
	Problem: 
	You have a textfield named "ctaTxt" inside 
	a movieclip named "ctaMC", and a dynamic text
	item property named "dynamic_cta_txt".
	
	Solution:
	Add the following line in handleComplete 
	function, before stage.update():

	exportRoot.ctaMC.ctaTxt.text = spongeapi.getDynamicText("dynamic_cta_txt");

	/*** AUTO PARSING 
	The loop below will automatically parse any 
	movieclip instances on the main timeline 
	whose name matches a dynamic text item property.

	These movieclip instances must contain a 
	text instance named "txt".

	*/

	for (var property in spongecell.apiData.properties) {
    	if(exportRoot[property]){
    		exportRoot[property].txt.text = spongeapi.getDynamicText(property);
    	}
    }


}

spongeapi.parseDynamicClasses = function()
{
	console.log('API::parseDynamicClasses()');
	/*

	UPDATE TEXT & IMAGES WITH DYNAMIC ASSETS & PROPERTIES
	MATCHING CLASS NAMES TO SIGNAL PROCESSOR PROPERTIES

	*/
	var el;
	

	for (var property in spongecell.apiData.properties) {
		el = document.getElementsByClassName(property);
    	if(el.length > 0){
    		for(var i = 0; i < el.length; i++){
	    		el[i].innerHTML = spongeapi.getDynamicText(property);
	    	}
    	}
    }

    for (var property in spongecell.apiData.assets) {
    	el = document.getElementsByClassName(property);
    	if(el.length > 0){
    		for(var i = 0; i < el.length; i++){
	    		el[i].src = spongeapi.getDynamicImage(property);
	    		el[i].setAttribute('source',spongeapi.getDynamicImage(property));
	    	}
    	}
	}
}

var ie = (function(){

    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');

    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
        all[0]
    );

    return v > 4 ? v : undef;

}());
handleSetupResponse = function(message) {
	if(!spongeapi.initComplete){
		window.spongecell.apiData = message || {};

		console.log('API::handleSetupResponse');
		if(!spongecell.apiData.assets){

			//spongecell.apiData = JSON.parse('');
		}
		console.log(spongecell.apiData.landingPages);
		console.log(spongecell.apiData.assets);
		console.log(spongecell.apiData.properties);

		switch(spongeapi.type)
		{
			case 'canvas':
			if(spongeapi.isDynamic && spongecell.apiData.assets) spongeapi.parseDynamicCanvasImages();
			spongeapi.initObj.loadManifest(lib.properties.manifest);
			break;
			case 'gwd':
			spongeapi.initObj.initAd();
			if(spongeapi.isDynamic && spongecell.apiData.properties) spongeapi.parseDynamicClasses();
			break;
			case 'edge':
			console.log('edge');
			spongeapi.parseEdge();
			break;
			case 'custom':
			if(spongeapi.isDynamic && spongecell.apiData.properties) spongeapi.parseDynamicClasses();
			break;
		}
		if(spongeapi.onReady) spongeapi.onReady();
	}
	spongeapi.initComplete = true;
}
window.addEventListener('message', function(event) {
  var message = event.data;
  if (message) {
  	
  	if(!ie || ie > 9){
    	console.log('NOT IE9');
    } else {
    	console.log('IS IE9');
    }
	eval(message.callback)(message.data);

  }
});