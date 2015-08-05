# spongeapi
Used as a wrapper for Studio API calls, as well as common functions for dynamic integrations.

#### init(params:Object)
> **params.type:String**  
> *The type of animation ('canvas','edge','gwd','custom')*
> 
> **params.initObj:Object**  
> *An object to use for initialization and dynamic parsing*
> 
> **params.isDynamic:Boolean**  
> *Apply automatic dynamic parsing*
> 
> **params.onReady:Function**  
> *Callback funciton to run after API is initalized*

> **USAGE:**  
> *DYNAMIC CANVAS*:  
> `spongeapi.init({type:'canvas',initObj:loader,isDynamic:true});`
> 
> *DYNAMIC GOOGLE WEB DESIGNER*:  
> `spongeapi.init({type:'gwd',initObj:gwdAd,isDynamic:true});`

#### openLanding(landingPage)
*Open a landing page set up in studio (standard or dynamic)*  
> **USAGE:**  
> `spongeapi.openLanding('Creative Landing Page')`

#### openScreen(screenName)
*Open a screen set up in studio*  
> **USAGE:**  
> `spongeapi.openScreen('Screen Name')`

#### getDynamicText(prop)
*Retrieve dynamic text property.*  
> **USAGE:**  
> `spongeapi.getDynamicText('dynamic_text_property')`

#### getDynamicImage(prop)
*Retrieve dynamic image url.*  
> **USAGE:**  
> `spongeapi.getDynamicImage('dynamic_image_property')`

#### parseDynamicClasses()
*Update text & images with dynamic assets & properties matching class names to signal processor properties*

#### parseDynamicCanvasImages()
*Parse the flash library for dynamic images*  
> **USAGE:**  
> Rename bitmaps in the Flash library to match dynamic item text properties.

#### parseDynamicCanvasText()
*Automatically parses any movieclip instances on the main timeline whose name matches a dynamic text item property. These movieclip instances must contain a text instance named "txt".*

> **USAGE:**  
> Place `spongeapi.parseDynamicCanvasText()` in handleComplete function, before stage.update(); in Canvas HTML file

####MANUAL TARGETING
>_Problem:_
>You have a textfield named "ctaTxt" inside a movieclip named "ctaMC", and a dynamic text item property named "dynamic_cta_txt".

>_Solution:_
>Add the following line on a frame inside the ctaMC: 
>`this.ctaTxt.text = spongeapi.getDynamicText("dynamic_cta_txt");`

