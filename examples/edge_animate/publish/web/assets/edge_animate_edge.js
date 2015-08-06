
(function(compId){var _=null,y=true,n=false,x14='break-word',x4='5.0.0',x6='rgba(0,0,0,0)',x26='Rectangle',g='image',x23='87px',x36='true',x29='5px',x='text',x34='RectangleCopy',x18='8',x22='0px',i='none',x27='rgba(192,192,192,1)',x24='28px',x5='6.0.0.400',p='px',o='opacity',lf='left',x35='0.01',x3='6.0.0',x31='nowrap',x30='400',e21='${headline}',x13='Arial, Helvetica, sans-serif',x28='27px',l='normal',w='width',x25='auto',tp='top',x32='Text',h='height',x19='rgba(255,255,255,1)',x12='24',x16='16',xc='rgba(0,0,0,1)',m='rect',e20='${frame1}';var g8='spongecell.png',g7='background.jpg',g1='test_data.js',g2='spongeapi.js';var s9="image1",s17="<p style=\"margin: 0px; text-align: left;\"><span style=\"font-size: 8px;\">legal</span></p>",s11="headline1",s33="<p style=\"margin: 0px;\">​CTA</p>",s15="<p style=\"margin: 0px; text-align: left;\">Body copy</p>",s10="<p style=\"margin: 0px; text-align: center;\">This is Animate</p>";var im='assets/',aud='assets/',vid='assets/',js='assets/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[js+g1,js+g2],symbols={"stage":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{id:'background',t:g,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x6,im+g7,'0px','0px']},{id:'frame1',t:g,r:['103px','74px','127px','107px','auto','auto'],cu:'pointer',o:'0',f:[x6,im+g8,'0px','0px'],userClass:s9},{id:'headline',t:x,r:['8px','26px','285px','28px','auto','auto'],o:'0',text:s10,align:"center",userClass:s11,n:[x13,[x12,],"rgba(255,250,215,1.00)",l,i,"",x14,""]},{id:'copy',t:x,r:['8px','71px','285px','28px','auto','auto'],o:'1',text:s15,align:"left",userClass:s11,n:[x13,[x16,p],"rgba(255,250,215,1.00)",l,i,"",x14,""]},{id:'legal',t:x,r:['8px','222px','285px','28px','auto','auto'],o:'1',text:s17,align:"left",userClass:s11,n:[x13,[x18,p],"rgba(255,250,215,1.00)",l,i,"",x14,""]},{id:'CTA',symbolName:'CTA',t:m,r:['16','142','87','28','auto','auto'],cu:'pointer'}],style:{'${Stage}':{isStage:true,r:['null','null','300px','250px','auto','auto'],overflow:'hidden',f:[x19]}}},tt:{d:4500,a:y,data:[["eid26",h,443,1406,"linear",e20,'107px','167px'],["eid28",w,443,1406,"linear",e20,'127px','198px'],["eid22",o,443,1406,"linear",e20,'0','1'],["eid10",lf,4500,0,"linear",e21,'8px','8px'],["eid17",o,0,2997,"linear",e21,'0','1'],["eid29",lf,1849,0,"linear",e20,'103px','103px'],["eid27",tp,443,1406,"linear",e20,'141px','74px']]}},"CTA":{v:x3,mv:x4,b:x5,stf:i,cg:i,rI:n,cn:{dom:[{r:[x22,x22,x23,x24,x25,x25],id:x26,s:[0,xc,i],t:m,f:[x27]},{r:[x28,x29,x25,x25,x25,x25],ts:['','','','',i],n:[x13,[16,p],xc,x30,i,l,x14,x31],id:x32,text:s33,align:lf,t:x},{r:[x22,x22,x23,x24,x25,x25],s:[0,xc,i],id:x34,o:x35,t:m,f:[x27]}],style:{'${symbolSelector}':{isStage:x36,r:[undefined,undefined,x23,x24]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-45551221");
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