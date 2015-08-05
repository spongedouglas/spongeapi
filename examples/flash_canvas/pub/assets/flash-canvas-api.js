(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/image1.jpg", id:"image1"}
	]
};



// symbols:



(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,269);


(lib.image1_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.image1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,301,269);


(lib.headline1 = function() {
	this.initialize();

	// Layer 1
	this.txt = new cjs.Text("headline", "9px 'Arial'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.lineHeight = 11;
	this.txt.lineWidth = 100;

	this.addChild(this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,104,14.8);


// stage content:
(lib.flashcanvasapi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(35).call(this.frame_35).wait(1));

	// headline1
	this.headline1 = new lib.headline1();
	this.headline1.setTransform(131,79.9,1,1,0,0,0,52,7.4);

	this.timeline.addTween(cjs.Tween.get(this.headline1).wait(36));

	// image1_mc
	this.image1_mc = new lib.image1_mc();
	this.image1_mc.setTransform(149.5,130.5,1,1,0,0,0,150.5,134.5);

	this.timeline.addTween(cjs.Tween.get(this.image1_mc).to({regX:150.6,scaleX:1.45,scaleY:1.45,x:149.7},35,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,121,301,269);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;