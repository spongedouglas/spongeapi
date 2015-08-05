
(function(compId){var _=null,y=true,n=false,x2='6.0.0',x4='6.0.0.400',x3='5.0.0',x5='rgba(0,0,0,0)',lf='left',x11='Arial, Helvetica, sans-serif',l='normal',o='opacity',e15='${headline1}',x='text',x14='rgba(255,255,255,1)',x13='nowrap',x10='24',x12='break-word',xc='rgba(0,0,0,1)',g='image',i='none';var g1='spongeapi.js',g6='spongecell.png';var s7="image1",s9="headline1",s8="<p style=\"margin: 0px;\">headline1</p>";var im='assets/',aud='assets/',vid='assets/',js='assets/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'image1',t:g,r:['0px','0px','300px','250px','auto','auto'],f:[x5,im+g6,'0px','0px'],userClass:s7},{id:'headline1',t:x,r:['21px','159px','auto','auto','auto','auto'],o:'0',text:s8,userClass:s9,n:[x11,[x10,],xc,l,i,"",x12,x13]}],style:{'${Stage}':{isStage:true,r:['null','null','300px','250px','auto','auto'],overflow:'hidden',f:[x14]}}},tt:{d:4500,a:y,data:[["eid10",lf,4500,0,"linear",e15,'21px','21px'],["eid17",o,0,2997,"linear",e15,'0','1']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-45551221");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){spongeapi.init('edge',sym,true);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${image1}","click",function(sym,e){spongeapi.openLanding('dynamicLink');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${headline1}","click",function(sym,e){spongeapi.openScreen('Screen1');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})})(AdobeEdge.$,AdobeEdge,"EDGE-45551221");