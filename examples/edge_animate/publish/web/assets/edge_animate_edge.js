
(function(compId){var _=null,y=true,n=false,x13='break-word',x3='5.0.0',x5='rgba(0,0,0,0)',x21='Rectangle',g='image',x23='87px',x32='5px',x='text',x34='RectangleCopy',x17='8',x22='0px',i='none',x26='rgba(192,192,192,1)',x24='28px',x4='6.0.0.400',p='px',o='opacity',lf='left',x33='0.01',x31='27px',x2='6.0.0',e20='${headline}',x12='Arial, Helvetica, sans-serif',x28='nowrap',l='normal',x27='400',x25='auto',w='width',x29='Text',tp='top',x18='rgba(255,255,255,1)',x11='24',x15='16',m='rect',xc='rgba(0,0,0,1)',h='height',e19='${frame1}';var g7='spongecell.png',g6='background.jpg',g1='test_data.js';var s8="image1",s16="<p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 8px;\">legal</span></p>",s10="headline1",s30="<p style=\"margin: 0px;\">​CTA</p>",s14="<p style=\"margin: 0px; text-align: left;\">Body copy</p>",s9="<p style=\"margin: 0px; text-align: center;\">This is Animate</p>";var im='assets/',aud='assets/',vid='assets/',js='assets/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1,"https://live-ssl.cdn.spongecell.com/studio/api/v1/spongeapi.min.js"],symbols={"stage":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{id:'background',t:g,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x5,im+g6,'0px','0px']},{id:'frame1',t:g,r:['103px','74px','127px','107px','auto','auto'],cu:'pointer',o:'0',f:[x5,im+g7,'0px','0px'],userClass:s8},{id:'headline',t:x,r:['8px','26px','285px','28px','auto','auto'],o:'0',text:s9,align:"center",userClass:s10,n:[x12,[x11,],"rgba(255,250,215,1.00)",l,i,"",x13,""]},{id:'copy',t:x,r:['8px','71px','285px','28px','auto','auto'],o:'1',text:s14,align:"left",userClass:s10,n:[x12,[x15,p],"rgba(255,250,215,1.00)",l,i,"",x13,""]},{id:'legal',t:x,r:['8px','222px','285px','28px','auto','auto'],o:'1',text:s16,align:"left",userClass:s10,n:[x12,[x17,p],"rgba(255,250,215,1.00)",l,i,"",x13,""]},{id:'CTA',symbolName:'CTA',t:m,r:['16','142','87','28','auto','auto'],cu:'pointer'}],style:{'${Stage}':{isStage:true,r:['null','null','300px','250px','auto','auto'],overflow:'hidden',f:[x18]}}},tt:{d:4500,a:y,data:[["eid26",h,443,1406,"linear",e19,'107px','167px'],["eid22",o,443,1406,"linear",e19,'0','1'],["eid28",w,443,1406,"linear",e19,'127px','198px'],["eid17",o,0,2997,"linear",e20,'0','1'],["eid10",lf,4500,0,"linear",e20,'8px','8px'],["eid29",lf,1849,0,"linear",e19,'103px','103px'],["eid27",tp,443,1406,"linear",e19,'141px','74px']]}},"CTA":{v:x2,mv:x3,b:x4,stf:i,cg:i,rI:n,cn:{dom:[{t:m,id:x21,s:[0,xc,i],r:[x22,x22,x23,x24,x25,x25],f:[x26]},{n:[x12,[16,p],xc,x27,i,l,x13,x28],t:x,align:lf,id:x29,ts:['','','','',i],text:s30,r:[x31,x32,x25,x25,x25,x25]},{r:[x22,x22,x23,x24,x25,x25],o:x33,id:x34,s:[0,xc,i],t:m,f:[x26]}],style:{'${symbolSelector}':{r:[_,_,x23,x24]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-45551221");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){spongeapi.init({type:'edge',initObj:sym,isDynamic:true});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${CTA}","click",function(sym,e){spongeapi.openLanding('ctaLink');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${background}","click",function(sym,e){spongeapi.openLanding('backgroundLink');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${frame1}","click",function(sym,e){spongeapi.openScreen('Sub Screen');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'CTA'
(function(symbolName){})("CTA");
//Edge symbol end:'CTA'
})})(AdobeEdge.$,AdobeEdge,"EDGE-45551221");