/*
SPONGEAPI v1.1 CUSTOM ELEMENT ONLY
*/
var spongeapi = spongeapi || {};
spongeapi.initComplete = false;
postMessage(JSON.stringify({
          type: 'api',
          topic: 'setup',
          iid: spongecell.studioAd.iid,
          callback: 'handleSetupResponse'
        }), '*');

spongeapi.openScreen = function(screenName,options){
    if(window != parent.top){
        if(options && options.engagement) {
            postMessage(JSON.stringify({
              iid: spongecell.studioAd.iid,
              topic: 'nav',
              type: 'api',
              engage: true,
              screen: screenName
            }), '*');
        } else {
            postMessage(JSON.stringify({
              iid: spongecell.studioAd.iid,
              topic: 'nav',
              type: 'api',
              engage: false,
              screen: screenName
            }), '*');
        } 
    } else {console.log('openScreen('+screenName+','+options+')')}
};

spongeapi.openLanding = function(landingPage){
    if(window != parent.top){
        //window.open(spongecell.apiData.landingPages[landingPage].url, '_blank'); UNCOMMENT ON NEXT RELEASE
        postMessage(JSON.stringify({
            iid: spongecell.studioAd.iid,
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

handleSetupResponse = function(message) {
    if(!spongeapi.initComplete){
        window.spongecell.apiData = message || {};
        if(!spongecell.apiData.assets && testData){
            spongecell.apiData = testData;
        }
    }
    spongeapi.initComplete = true;
}
