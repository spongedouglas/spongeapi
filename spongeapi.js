/*
SPONGEAPI v1.2
Added hover intent
*/

var iframeId, iid, handleSetupResponse,testData;
var spongeapi = spongeapi || {};
var spongecell = spongecell || {};

iid = window.location.search.slice(1);
spongeapi.initComplete = false;

spongeapi.onHover = function(selector, callback, flashStage) {
  
  var topOnHoverCallback = null;
  var repeatInterval;

  if (!selector) {
    topOnHoverCallback = callback;
    selector = document;
  }

  var interval = 350;
  var sensitivity = 8;

  var cX = null;
  var cY = null;

  var track = function(event) {
    cX = event.pageX;
    cY = event.pageY;
  }

  var timer = null;
  var pX = null;
  var pY = null;

  var compare = function() {
  	
    if ((typeof cX !== "undefined" && cX !== null) && (typeof cY !== "undefined" && cY !== null) && (typeof pX !== "undefined" && pX !== null) && (typeof pY !== "undefined" && pY !== null) && Math.abs(cX - pX) + Math.abs(cY - pY) < sensitivity) {

      if (topOnHoverCallback) {
        topOnHoverCallback();
        topOnHoverCallback = null;
      }

      selector.removeEventListener('mousemove', track);

      if (callback !== topOnHoverCallback) {
        callback();
      }

      if (repeatInterval) {
        timer = setTimeout(compare, repeatInterval);
      }

    } else {
      pX = cX; pY = cY;
      timer = setTimeout(compare, interval);
    }
  }

  var trackCanvas = function(evt){
	var localPos = this.globalToLocal(stage.mouseX,stage.mouseY);
	var targWidth = this.getBounds().width;
	var targHeight = this.getBounds().height;
	cX = (localPos.x > 0 && localPos.x <  targWidth) ? localPos.x : null;
	cY = (localPos.y > 0 && localPos.y <  targHeight) ? localPos.y: null;
  }

  if(selector.hasOwnProperty('instance')){
	canvas.addEventListener('mouseover', function(event) {
		var localPos = this.globalToLocal(stage.mouseX,stage.mouseY);
		pX = localPos.x;
		pY = localPos.y;
		canvas.addEventListener('mousemove', trackCanvas.bind(this), false);
		timer = setTimeout(compare, interval);
	}.bind(selector), false);

	canvas.addEventListener('mouseout', function(event) {
	    canvas.removeEventListener('mousemove', track);
	    cX = cY = null;

	    clearTimeout(timer);
	  });

  } else {
	  selector.addEventListener('mouseenter', function(event) {
	    pX = event.pageX;
	    pY = event.pageY;
	    selector.addEventListener('mousemove', track);

	    timer = setTimeout(compare, interval);
	  });

	  selector.addEventListener('mouseleave', function(event) {
	    selector.removeEventListener('mousemove', track);
	    cX = cY = null;

	    clearTimeout(timer);
	  });
  }

}

var engageCallback = function() {
  parent.postMessage(JSON.stringify({
    iid: iid,
    topic: 'nav',
    type: 'api',
    engagement: true
  }), '*');
}
//spongeapi.onHover(document, engageCallback);

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
		spongcell = {};
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

spongeapi.openScreen = function(screenName,options){
	if(window != parent.top){
		if(options && options.engagement) {
			parent.postMessage(JSON.stringify({
			  iid: iid,
			  topic: 'nav',
			  type: 'api',
			  engage: true,
			  screen: screenName
			}), '*');
		} else {
			parent.postMessage(JSON.stringify({
			  iid: iid,
			  topic: 'nav',
			  type: 'api',
			  engage: false,
			  screen: screenName
			}), '*');
		} 
	} else {console.log('openScreen('+screenName+','+options+')')}
};

spongeapi.openLanding = function(landingPage,params){
	params = params || '';
	if(window != parent.top){
        window.open(spongecell.apiData.landingPages[landingPage].url+params, '_blank');
		parent.postMessage(JSON.stringify({
		    iid: iid,
		    topic: 'nav',
		    type: 'api',
		    landingPage: spongecell.apiData.landingPages[landingPage]
		  }), '*');
	} else {console.log('openLanding('+landingPage+'): '+ spongecell.apiData.landingPages[landingPage].url)}
};

spongeapi.getDynamicText = function(prop){
	return (spongecell.hasOwnProperty('apiData')) ? spongecell.apiData.properties[prop].text : prop;
};

spongeapi.getDynamicImage = function(prop){
	return (spongecell.hasOwnProperty('apiData')) ? spongecell.apiData.assets[prop].src : prop;
};

spongeapi.parseEdge = function()
{
	for (var property in spongecell.apiData.properties) {
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
			/** PATCH FF TEXT BUG **/
			var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
			if(is_firefox && createjs){
				createjs.DisplayObject.prototype.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
					this.x = x || 0;
					this.y = y || 0;
					this.scaleX = scaleX == null ? 1 : scaleX;
					this.scaleY = scaleY == null ? 1 : scaleY;
					this.rotation = rotation || 0;
					this.skewX = skewX || 0;
					this.skewY = skewY || 0;
					this.regX = regX || 0;
					this.regY = regY || 0;
					if(this.text && this.getMeasuredLineHeight){
						var yOffset = this.getMeasuredLineHeight();
						this.textBaseline = "top";
						if(yOffset > 12 && yOffset < 50){
							yOffset = this.getMeasuredLineHeight()*.3;
						} else if(yOffset > 49){
							yOffset = this.getMeasuredLineHeight()*.2;
						} 
						else {
							yOffset = this.getMeasuredLineHeight()*.2;
						}
						this.y = Math.ceil(this.y+yOffset);
					}
					
					return this;
				};
			}
			break;
			case 'gwd':
			spongeapi.initObj.initAd();
			if(spongeapi.isDynamic && spongecell.apiData.properties) {
				spongeapi.parseDynamicClasses();
			}
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