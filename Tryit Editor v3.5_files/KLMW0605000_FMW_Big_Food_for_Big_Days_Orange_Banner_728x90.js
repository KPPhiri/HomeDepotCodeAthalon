(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.box = function() {
	this.initialize(img.box);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,82);


(lib.Spoon = function() {
	this.initialize(img.Spoon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,87);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.spoon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Spoon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spoon, new cjs.Rectangle(0,-0.4,218.3,107.4), null);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnsKPIAA0dIPZAAIAAUdg");
	this.shape.setTransform(49.3,65.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0,0,98.6,131.1), null);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtJNKQldldAAntQAAnsFdldQFdldHsAAQHtAAFdFdQFdFdAAHsQAAHtldFdQldFdntAAQnsAAldldg");
	this.shape.setTransform(119.1,119.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.glow, new cjs.Rectangle(0,0,238.1,238.1), null);


(lib.for1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZCLIgihgIgXAAIAABgIhQAAIAAkVIB5AAQAYAAATAGQARAHAMALQANAMAGAQQAFAQAAATQAAAOgDAMQgCAMgGAKQgJAUgWALIAyBvgAgggNIAgAAQAMAAAHgHQAHgJABgPQAAgOgIgKQgGgIgNAAIggAAg");
	this.shape.setTransform(63,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpCKQgVgEgPgMQgIgGgHgHIgKgSQgJgTAAgbIAAhZQAAgMACgLQACgLAFgKQAJgSAPgMQAPgNAVgFQAUgHAWAAQAVAAAUAGQAVAFAPALQAIAGAHAIIALASQAJASAAAbIAABZQAAAbgKATQgJASgQAMQgQALgUAGQgUAGgVAAQgWAAgTgGgAgeguIAABbQAAARAIAIQAIAJAOAAQAOAAAIgJQAJgIAAgQIAAhcQAAgQgKgIQgJgIgMAAQgeABAAAfg");
	this.shape_1.setTransform(36.9,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhfCLIAAkVIC/AAIAABAIhvAAIAAAuIBYAAIAAA/IhYAAIAABog");
	this.shape_2.setTransform(13.6,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.for1, new cjs.Rectangle(0,0,77.3,50.8), null);


(lib.food1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AidDLIAAmVICjAAQAgAAAbAHQAcAIAVAPQAVAQALAYQAMAYABAhIAACQQgBAkgMAZQgLAagVAQQgWAQgbAIQgcAHgeAAgAgoBuIAlAAQAKAAAJgEQAIgEAFgGIAIgPIADgQIAAiBQAAgUgNgMQgMgMgVAAIgiAAg");
	this.shape.setTransform(129.8,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9DLQgegIgWgRQgLgIgKgMIgPgZQgOgbAAgoIAAiCQABgSADgQQADgQAHgOQAMgbAXgSQAXgSAdgJQAdgJAhAAQAeAAAfAIQAdAIAXARQAMAIAJAMIAQAZQAOAbAAAoIAACBQAAAogOAbQgOAbgXASQgXARgdAIQgeAIgfAAQggAAgdgHgAgshEIAACGQAAAYAMAMQALANAVAAQAVAAAMgNQAMgMAAgWIAAiIQAAgXgNgLQgOgMgSAAQgsAAAAAug");
	this.shape_1.setTransform(91.7,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9DLQgegIgXgRQgKgIgKgMIgPgZQgNgbAAgoIAAiCQAAgSADgQQADgQAGgOQANgbAXgSQAWgSAegJQAegJAgAAQAfAAAeAIQAeAIAXARQALAIAJAMIAQAZQANAbAAAoIAACBQABAogOAbQgOAbgXASQgXARgdAIQgeAIgfAAQggAAgdgHgAgshEIAACGQAAAYALAMQAMANAVAAQAVAAAMgNQAMgMAAgWIAAiIQAAgXgNgLQgPgMgRAAQgsAAAAAug");
	this.shape_2.setTransform(53.6,35.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiMDLIAAmVIEZAAIAABdIijAAIAABDICBAAIAABdIiBAAIAACYg");
	this.shape_3.setTransform(18.9,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.food1, new cjs.Rectangle(0,0,150.8,72.4), null);


(lib.days1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfCNQgPgCgOgFQgPgFgMgHQgMgIgKgKIApgyIANAKIARAJIASAHQAJADAJAAQAKAAAIgFQAIgFAAgJQAAgJgHgFIgRgIIgkgOQgPgGgLgIQgLgIgIgJQgPgTAAgeQAAgSAHgRQAIgRANgMQANgMAUgHQATgIAWAAIAaACIAbAFQANAEAMAGQALAGAKAJIgmAzIgNgJIgPgIIgQgFIgPgCQgMAAgHAFQgHAFAAAJQAAAFADAEIAJAGIALAFIANAFIAeAOQAgANAPATQAHAKAEAMQAEALAAANQAAANgCAKQgDAKgFAJQgKARgPALQgQALgUAFQgUAGgUAAQgPAAgPgDg");
	this.shape.setTransform(85.8,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnCLIAAhrIhRiqIBVAAIApBlIAohlIBLAAIhRCqIAABrg");
	this.shape_1.setTransform(63,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAvCLIgMgvIhPAAIgLAvIhKAAIBQkVIBlAAIBOEVgAAUAgIgXhcIgBAAIgXBcIAvAAg");
	this.shape_2.setTransform(40,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrCLIAAkVIBvAAQAVAAAUAFQASAFAPALQAOAKAIARQAIARAAAWIAABiQAAAYgIASQgIASgOAKQgPAMgSAFQgUAFgVAAgAgbBLIAZAAQAHAAAFgDQAGgCAEgFIAGgKIABgLIAAhYQAAgOgIgHQgIgIgPAAIgXAAg");
	this.shape_3.setTransform(14.8,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.days1, new cjs.Rectangle(0,0,100.4,50.8), null);


(lib.big4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmCKQgUgFgPgMQgQgLgJgSQgJgSAAgaIAAhhQAAgMACgKQADgLAEgIQAJgSAQgLQAPgMAUgGQAUgGAVAAQATAAASAEQAUAFAOAJQAPAJAJAQQAKAPAAAXIAAAUIhKAAIAAgIQAAgOgJgHQgIgHgLAAQgOAAgJAIQgJAHAAAQIAABeQAAAPAIAKQAIAJAOAAQAOAAAHgHQAHgHAAgNIAAgPIgkAAIAAg2IBwAAIAABMQAAALgCAJQgDAKgEAIQgKAQgOAKQgPAKgTAEQgTAFgTAAQgVAAgUgGg");
	this.shape.setTransform(51.6,25.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnCLIAAkVIBPAAIAAEVg");
	this.shape_1.setTransform(33.3,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhtCLIAAkVICJAAQATAAAPAFQAOAFALAKQAKAIAFANQAFAOABAPQAAAYgNASQgMASgUAGIAAACQAKABAJAHQAIAFAGAJQAHAJADAJQAEALAAAMQAAAPgGAOQgFAPgKAKQgKALgPAFQgPAGgTAAgAgdBOIAhAAQALgBAHgHQAGgIAAgKQAAgMgHgFQgHgHgLAAIggAAgAgdgcIAgAAQAMAAAHgIQAFgIABgLQgBgKgFgGQgHgGgLgBIghAAg");
	this.shape_2.setTransform(15,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.big4, new cjs.Rectangle(0,0,66.3,50.8), null);


(lib.big3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4DKQgdgHgXgRQgWgRgNgaQgOgbAAgmIAAiOQAAgSAEgPQADgPAHgNQANgZAWgRQAXgRAdgJQAdgIAfAAQAbAAAcAGQAcAGAVAOQAWAOAOAXQAOAWAAAiIAAAdIhtAAIAAgMQAAgVgMgKQgNgKgQAAQgUAAgNALQgNALAAAWIAACLQAAAWALAOQAMANAVAAQAVAAAKgKQAKgKAAgUIAAgUIg2AAIAAhQIClAAIAABvQAAAQgEAOQgDAOgHAMQgNAXgWAOQgWAPgbAHQgbAGgdAAQgfAAgdgIg");
	this.shape.setTransform(74.6,35.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6DLIAAmVIB1AAIAAGVg");
	this.shape_1.setTransform(47.8,35.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AigDLIAAmVIDJAAQAcAAAWAHQAVAIAPANQAPAOAIATQAHATAAAWQAAAjgSAaQgSAageAKIAAACQAQADAMAJQANAJAJAMQAKAMAFAPQAFAPAAARQAAAYgIAVQgIAUgPAPQgPAPgWAJQgWAIgbAAgAgrBxIAxAAQAQAAAKgLQAJgLAAgPQAAgQgKgKQgKgJgRAAIgvAAgAgrgqIAvAAQASAAAJgLQAJgLAAgRQAAgPgJgIQgJgJgRAAIgwAAg");
	this.shape_2.setTransform(20.9,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.big3, new cjs.Rectangle(0,0,105.3,72.4), null);


(lib.box_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.box();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 4
	this.instance_1 = new lib.glow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(41.1,33.5,0.861,0.861,0,0,0,119,119);
	this.instance_1.alpha = 0.051;
	this.instance_1.filters = [new cjs.BlurFilter(50, 50, 3)];
	this.instance_1.cache(-2,-2,242,242);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 3
	this.instance_2 = new lib.shadow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(40.8,46.8,0.746,0.714,0,0,0,49.2,65.5);
	this.instance_2.alpha = 0.59;
	this.instance_2.filters = [new cjs.BlurFilter(6, 6, 3)];
	this.instance_2.cache(-2,-2,103,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.box_1, new cjs.Rectangle(-129.4,-137,344,345), null);


// stage content:
(lib.KLMW0605000_FMW_Big_Food_for_Big_Days_Orange_Banner_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_164 = function() {
		if(!this.alreadyExecuted){
		
		 
		
		                this.alreadyExecuted=true;
		
		 
		
		                this.loopNum=1;
		
		 
		
		} else {
		
		 
		
		                this.loopNum++;
		
		 
		
		                if(this.loopNum==2){
		
		 
		
		                                this.stop();
		
		 
		
		                }
		
		 
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(164).call(this.frame_164).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Eg43AHCIAAuDMBxvAAAIAAODgEg4tAG4MBxbAAAIAAtvMhxbAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(165));

	// days1
	this.instance = new lib.days1();
	this.instance.parent = this;
	this.instance.setTransform(249.2,68.4,1,1,0,0,0,50.1,25.4);
	this.instance.alpha = 0.051;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(146));

	// big4
	this.instance_1 = new lib.big4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.2,68.4,1,1,0,0,0,33.1,25.4);
	this.instance_1.alpha = 0.051;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(146));

	// for1
	this.instance_2 = new lib.for1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(88.7,68.4,1,1,0,0,0,38.6,25.4);
	this.instance_2.alpha = 0.051;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({alpha:1},6,cjs.Ease.get(1)).wait(146));

	// food1
	this.instance_3 = new lib.food1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(226.4,30.2,1,1,0,0,0,75.4,36.2);
	this.instance_3.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},6,cjs.Ease.get(1)).wait(159));

	// big3
	this.instance_4 = new lib.big3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(101.6,30.2,1,1,0,0,0,52.6,36.2);
	this.instance_4.alpha = 0.051;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},6,cjs.Ease.get(1)).wait(159));

	// spoon
	this.instance_5 = new lib.spoon();
	this.instance_5.parent = this;
	this.instance_5.setTransform(459,53.5,1,1,0,0,0,109,53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(165));

	// box
	this.instance_6 = new lib.box_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(657.5,213.5,1,1,0,0,0,50.5,65.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({scaleY:1.12,y:72},5).to({regX:50.6,scaleX:1.08,scaleY:0.89,x:657.6,y:74.6},3).to({regX:50.5,scaleX:1,scaleY:1,x:657.5,y:73.5},3).wait(135));

	// BG
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F68121").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_1.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,39,728,96);
// library properties:
lib.properties = {
	id: '898FB44A09DA44C09B902B31C5769A9B',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/box.png?1523395379068", id:"box"},
		{src:"images/Spoon.png?1523395379068", id:"Spoon"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['898FB44A09DA44C09B902B31C5769A9B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;