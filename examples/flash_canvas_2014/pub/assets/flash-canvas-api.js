(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 18,
	color: "#FFFFFF",
	manifest: [
		{src:"assets/background.jpg", id:"background"},
		{src:"assets/frame1.png", id:"frame1"}
	]
};



// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.frame1 = function() {
	this.initialize(img.frame1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.image1_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.frame1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.hitArea = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#393939").ss(1,1,1).p("A4A0TMAwBAAAMAAAAonMgwBAAAg");
	this.shape.setTransform(153.7,130.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,0,0,0.42)").s().p("A4AUUMAAAgonMAwBAAAMAAAAong");
	this.shape_1.setTransform(153.7,130.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,309.5,262.2);


(lib.headline = function() {
	this.initialize();

	// Layer 1
	this.txt = new cjs.Text("headline", "22px 'Arial'");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 24;
	this.txt.lineWidth = 218;
	this.txt.setTransform(109,0);

	this.addChild(this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,222,28.6);


(lib.cta = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("Ai0BHQgQgLgIgTQgJgUAAgVQAAgYAKgTQAJgSARgJQASgKAVAAQAXAAAQAMQAQAMAHAWIgVAFQgFgRgLgIQgKgIgQAAQgSAAgMAJQgMAIgFAPQgFAPAAAPQAAASAGAPQAFAPANAIQAMAHAPAAQARAAAMgKQAMgKAFgUIAUAFQgGAagRAOQgRANgZAAQgZAAgQgKgAC+BOIgSgvIhCAAIgRAvIgXAAIA9ibIAWAAIBBCbgAClAOIgQgqQgIgUgDgNQgDAPgGAPIgRAtIA1AAgAgIBOIAAiJIg0AAIAAgSIB7AAIAAASIg0AAIAACJg");
	this.shape.setTransform(42.6,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#393939").ss(1,1,1).p("AmZiGIMzAAIAAENIszAAg");
	this.shape_1.setTransform(41,13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmZCGIAAkMIMyAAIAAEMg");
	this.shape_2.setTransform(41,13.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,84,29);


(lib.bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hitArea();
	this.instance.setTransform(165,137.5,1.138,1.203,0,0,0,153.7,130);

	this.instance_1 = new lib.background();
	this.instance_1.setTransform(0,0,1.1,1.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.5,-19.5,351.1,314.2);


// stage content:
(lib.flashcanvasapi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.image_mc_hit.cursor = 'pointer';
		 
		this.image_mc_hit.on('click', function() {
		    spongeapi.openScreen('Sub Screen');
		});
		
		this.cta_mc.cursor = 'pointer';
		 
		this.cta_mc.on('click', function() {
		    spongeapi.openLanding('ctaLink');
		});
		
		this.bg_mc.cursor = 'pointer';
		 
		this.bg_mc.on('click', function() {
		    spongeapi.openLanding('backgroundLink');
		});
		
		this.legalTxt.text = spongeapi.getDynamicText('legal');
		this.copyTxt.text = spongeapi.getDynamicText('copy');
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35).call(this.frame_35).wait(1));

	// cta_mc
	this.cta_mc = new lib.cta();
	this.cta_mc.setTransform(45,173,1,1,0,0,0,41,13.5);

	this.timeline.addTween(cjs.Tween.get(this.cta_mc).wait(36));

	// copyTxt
	this.copyTxt = new cjs.Text("copy", "14px 'Arial'", "#FFFFFF");
	this.copyTxt.name = "copyTxt";
	this.copyTxt.textAlign = "center";
	this.copyTxt.lineHeight = 16;
	this.copyTxt.lineWidth = 218;
	this.copyTxt.setTransform(140,186.5);
	this.copyTxt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,9);

	this.timeline.addTween(cjs.Tween.get(this.copyTxt).wait(36));

	// legalTxt
	this.legalTxt = new cjs.Text("legal", "9px 'Arial'", "#FFFFFF");
	this.legalTxt.name = "legalTxt";
	this.legalTxt.textAlign = "center";
	this.legalTxt.lineHeight = 11;
	this.legalTxt.lineWidth = 218;
	this.legalTxt.setTransform(140,227.5);
	this.legalTxt.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,9);

	this.timeline.addTween(cjs.Tween.get(this.legalTxt).wait(36));

	// headline1
	this.headline = new lib.headline();
	this.headline.setTransform(83,24.9,1,1,0,0,0,52,7.4);

	this.timeline.addTween(cjs.Tween.get(this.headline).wait(36));

	// Layer 9
	this.image_mc_hit = new lib.hitArea();
	this.image_mc_hit.setTransform(194.7,129.9,0.658,0.652,0,0,0,153.7,130.1);
	new cjs.ButtonHelper(this.image_mc_hit, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.image_mc_hit).wait(36));

	// image1_mc
	this.image1_mc = new lib.image1_mc();
	this.image1_mc.setTransform(149.5,180.5,0.592,0.592,0,0,0,150.5,134.4);
	this.image1_mc.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.image1_mc).to({regX:150.6,regY:134.6,scaleX:0.69,scaleY:0.69,x:196.4,y:134.6,alpha:1},35,cjs.Ease.get(-1)).wait(1));

	// bg_mc
	this.bg_mc = new lib.bg();
	this.bg_mc.setTransform(146.5,136,1,1,0,0,0,165,137.5);

	this.timeline.addTween(cjs.Tween.get(this.bg_mc).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(121,104,351.1,314.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;