# spongeapi
A wrapper for Studio API calls, as well as common functions for dynamic integrations. 

### init(params:Object)
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
> *Callback funciton to run after API is initalized.*

####USAGE:
***
**FLASH CANVAS (NON-DYNAMIC)**:  
*Always move the js matching your html file name into the 'assets' folder and adjust the script path to match.*  

Include the following scripts:

~~~
<script type="text/javascript" src="test_data.js"></script>
<script src="assets/spongeapi.js"></script>  
~~~
 
Replace this line: 

~~~
loader.loadManifest(lib.properties.manifest);
~~~

with this line:  

~~~
spongeapi.init({type:'canvas',initObj:loader});
~~~

***
**FLASH CANVAS (DYNAMIC)**:  
Same as Non-Dynamic setup, with the addition of the 'isDynamic' parameter, set to true.

~~~
spongeapi.init({type:'canvas',initObj:loader,isDynamic:true});
~~~

***
**EDGE ANIMATE (Dynamic)**:  
Add a new action to the stage for the 'compositionReady' event. (From the Code window, click the + next to the Stage), and add the following code:

~~~
spongeapi.init({type:'edge',initObj:sym,isDynamic:true});
~~~

***
**GOOGLE WEB DESIGNER (Dynamic)**:  
Add a custom action to the first frame of the timeline. (Action > Custom > Add custom action), and add the following code:

~~~
var onReady = function() {    
	spongeapi.initObj.classList.remove('gwd-pause-animation');  
}  
this.classList.add('gwd-pause-animation');  
spongeapi.init({type: 'gwd',initObj: this,isDynamic: true,onReady: onReady });
~~~

### openLanding(landingPage)
*Open a landing page set up in Studio (standard or dynamic)*  
> **USAGE:**  
> `spongeapi.openLanding('Creative Landing Page')`

### openScreen(screenName)
*Open a screen set up in Studio*  
> **USAGE:**  
> `spongeapi.openScreen('Screen Name')`

### getDynamicText(prop)
*Retrieve dynamic text property.*  
> **USAGE:**  
> `spongeapi.getDynamicText('dynamic_text_property')`

### getDynamicImage(prop)
*Retrieve dynamic image url.*  
> **USAGE:**  
> `spongeapi.getDynamicImage('dynamic_image_property')`

### parseDynamicClasses()
*Update text & images with dynamic assets & properties matching class names to signal processor properties*

### parseEdge()
*Parse the flash library for dynamic images*  
> **USAGE:**  
> Auto-parses any element instance names that match dynamic properties.

### parseDynamicCanvasImages()
*Parse the flash library for dynamic images*  
> **USAGE:**  
> Rename bitmaps in the Flash library to match dynamic item text properties.

### parseDynamicCanvasText()
*Automatically parses any movieclip instances on the main timeline whose name matches a dynamic text item property. These movieclip instances must contain a text instance named "txt".*

#### USAGE:  
##### AUTO TARGETING
> Place `spongeapi.parseDynamicCanvasText()` in handleComplete function, before stage.update(); in Canvas HTML file

###### MANUAL TARGETING IN FLASH CANVAS
>_**Problem:**_
>You have a textfield named "ctaTxt" inside a movieclip named "ctaMC", and a dynamic text item property named "dynamic\_cta\_txt".

>_**Solution:**_
>Add the following line on a frame inside the ctaMC: 
>`this.ctaTxt.text = spongeapi.getDynamicText("dynamic_cta_txt");`

