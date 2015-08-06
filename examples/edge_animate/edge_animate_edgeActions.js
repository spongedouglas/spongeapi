/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         spongeapi.init({type:'edge',initObj:sym,isDynamic:true});
         

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${CTA}", "click", function(sym, e) {
         spongeapi.openLanding('ctaLink');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${background}", "click", function(sym, e) {
         spongeapi.openLanding('backgroundLink');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${frame1}", "click", function(sym, e) {
         spongeapi.openScreen('Sub Screen');
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'CTA'
   (function(symbolName) {   
   
   })("CTA");
   //Edge symbol end:'CTA'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-45551221");