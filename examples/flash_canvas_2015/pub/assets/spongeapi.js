/*
SPONGEAPI v1.1
*/

var iframeId, iid, handleSetupResponse;
var spongeapi = spongeapi || {};
spongeapi.initComplete = false;
 
spongeapi.init = function(params,initObj,isDynamic,onReady){
	iid = window.location.search.slice(1);
	window.spongecell = window.spongecell || {};
	if(params.hasOwnProperty('type')){
		spongeapi.type = params.type;
		spongeapi.initObj = params.initObj;
		spongeapi.isDynamic = params.isDynamic;
		spongeapi.onReady = params.onReady;
	} else {
		// SUPPORT FOR v1.0 INIT METHOD
		spongeapi.type = params;
		spongeapi.initObj = initObj;
		spongeapi.isDynamic = isDynamic;
		spongeapi.onReady = onReady;
	}

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
	if(window != parent.top){
		parent.postMessage(JSON.stringify({
		  iid: iid,
		  topic: 'nav',
		  type: 'api',
		  screen: screenName
		}), '*');
	} else {console.log('openScreen('+screenName+')')}
};

spongeapi.openLanding = function(landingPage){
	if(window != parent.top){
		parent.postMessage(JSON.stringify({
		    iid: iid,
		    topic: 'nav',
		    type: 'api',
		    landingPage: spongecell.apiData.landingPages[landingPage]
		  }), '*');
	} else {console.log('openLanding('+landingPage+'): '+ spongecell.apiData.landingPages[landingPage].url)}
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
		console.log(property);
		var el = spongeapi.initObj.$(property);

		if(el){
			el.text(spongecell.apiData.properties[property].text);
		}
	}
	for (var property in spongecell.apiData.assets) {
    	var el = spongeapi.initObj.$(property);
    	if(el){
			el.css({'background-image':'url('+spongecell.apiData.assets[property].src+')'});
    	}
	}
}

spongeapi.parseDynamicCanvasImages = function()
{
	var libImg;
	for(var i=0; libImg = lib.properties.manifest[i]; i++)
	{

		if(spongecell.apiData.assets.hasOwnProperty(libImg.id)){
			libImg.crossOrigin = 'Anonymous';
			libImg.src = spongeapi.getDynamicImage(libImg.id);
		}
	}
}
spongeapi.parseDynamicCanvasText = function()
{
	for (var property in spongecell.apiData.properties) {
    	if(exportRoot[property]){
    		exportRoot[property].txt.text = spongeapi.getDynamicText(property);
    	}
    }


}

spongeapi.parseDynamicClasses = function()
{
	var el;
	for (var property in spongecell.apiData.properties) {
		el = document.getElementsByClassName(property);
    	if(el.length > 0){
    		for(var i = 0; i < el.length; i++){
	    		el[i].innerHTML = spongeapi.getDynamicText(property);
	    	}
    	} else if(el = document.getElementById(property)) {
    		el.innerHTML = spongeapi.getDynamicText(property);
    	}
    }

    for (var property in spongecell.apiData.assets) {
    	el = document.getElementsByClassName(property);
    	if(el.length > 0){
    		for(var i = 0; i < el.length; i++){
	    		el[i].src = spongeapi.getDynamicImage(property);
	    		el[i].setAttribute('source',spongeapi.getDynamicImage(property));
	    	}
    	}else if(el = document.getElementById(property)) {
    		el.src = spongeapi.getDynamicImage(property);
	    	el.setAttribute('source',spongeapi.getDynamicImage(property));
    	}
	}
}

handleSetupResponse = function(message) {
	if(!spongeapi.initComplete){
		window.spongecell.apiData = message || {};
		if(!spongecell.apiData.assets && testData){
			spongecell.apiData = testData;
		}
		switch(spongeapi.type)
		{
			case 'canvas':
			if(spongeapi.isDynamic && spongecell.apiData.assets) spongeapi.parseDynamicCanvasImages();
			spongeapi.initObj.loadManifest(lib.properties.manifest);
			break;
			case 'gwd':
			if(spongeapi.isDynamic && spongecell.apiData.properties) spongeapi.parseDynamicClasses();
			break;
			case 'edge':
			if(spongeapi.isDynamic && spongecell.apiData.properties) spongeapi.parseEdge();
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
	eval(message.callback)(message.data);
  }
});