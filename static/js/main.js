var count = 0;
var imgNum = 0;

/* Styles */
var stkCol = '#305caa';

$(document).ready(function() {
	
	init();
	//draw();
		
	$(".work-row").hover(
		
		function() {
			imgname = this.firstChild.nextSibling.id;
			$("#backimage").css("background-image", "url('/../static/img/"+ imgname +".png')");
		},
		
		function() {
			$("#backimage").css("background-image", "");
		}
	);

	
	$(".work-row").click(function() {
		
		projectSlug = this.firstChild.nextSibling.id;
		
		$("#"+projectSlug+"-img").removeClass("show-work");
		//$("#"+projectSlug+"-img").fadeIn();
		
		pos(projectSlug);
		
		var imgtmp = $("#"+projectSlug+"-img").children();
		imgNum = imgtmp.length;
		
		//window.history.pushState("object or string", "Title", "/"+projectSlug);
	});
	
	$(".work-img").click(function() {

		if(count == imgNum-1){
			$("#"+projectSlug+"-img").addClass("show-work");
			//$("#"+projectSlug+"-img").hide;
			//$("#"+projectSlug+"-img").fadeOut();
			$("#"+projectSlug+"-img").children().removeClass("show-work");
			count = 0;
		}else{
			count ++;
			$(this).addClass("show-work");
		}
	});
	
}); //Document End




/*

	// Functions //

*/

function mapValue(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

//position images once work row is clicked
function pos(projSlug) {
	
	var z = 1;
	
	$("#"+projectSlug+"-img").children().each(function(i,e) {
		
		var visible = "true";
		var x = 0 + z*20 ;
		var y = 0 + z*10 ;
		$(this).css('position','absolute');
		$(this).css('left', x+'px');
		$(this).css('top', y+'px');
		$(this).css('z-index', z++);
	
	});		
	
	var x = Math.round(($(window).width()/2)) - ($('.page:first').outerHeight()/2);
}


/* CANVAS */

//Resize the canvas if the window is resized
$(window).resize(function() {
	//init();
})

var ctx;
var x=100;
var y=100;
//var dx=1;
var dy=1;

var myWave = [];
var myCirc = [];
var myRect = [];
var myDotbar = [];

var angle = 0;

function convertToRadians(degree) {
    return degree*(Math.PI/640);
}

function incrementAngle() {
    angle--;
    if(angle < 0) {
        angle = 640;
    }
}

var canvas = document.getElementById('main-canvas');

//It speeds up when it is resized

function init() {
  	
  	/*ctx = canvas.getContext('2d');

	ctx.canvas.width = $(window).width();
	ctx.canvas.height = $(window).height();
	
	for(var i=0; i<2; i++) {
		myWave[i] = new wave (ctx, (Math.random()*ctx.canvas.height/4), Math.random()*ctx.canvas.width/4);
	}
	
	// myWave[0] = new wave (ctx, (Math.random()*ctx.canvas.height-100), Math.random()*ctx.canvas.width);
// 	myWave[1] = new wave (ctx, (Math.random()*ctx.canvas.height-100), Math.random()*ctx.canvas.width);
	/*myDotbar[0] = new dotBar (ctx, 200, 200);
	
	//myWave[1] = new wave (ctx, (Math.random()*ctx.canvas.height), Math.random()*ctx.canvas.width);
	myCirc[0] = new circle (ctx, (Math.random()*ctx.canvas.height-100), Math.random()*ctx.canvas.width);*/
	/*myRect[0] = new rect (ctx, (Math.random()*ctx.canvas.height-100), Math.random()*ctx.canvas.width);*/
	
	/*setInterval(draw,0);*/
	//draw();
}

function draw() {
	
  	// ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
// 	
// 	ctx.save();
		
	//myWave[0].render(y);
	
	// ctx.rotate(45);
// 	
// 	myWave[1].render(y);
// 	
// 	ctx.restore();
	
	//myDotbar[0].render(y);
	//myCirc[0].render(y);
	
	//ctx.rotate(y/500);
	// myRect[0].render(y);
// 	myWave[0].render(y);
	//ctx.rotate(45);
	
    // if( y > 100 ) dy=-dy;
//     if( y < -100 ) dy=-dy;
//   	
//    	y+=dy;
// 	
// 	ctx.restore();
}

function circle(context,iny,inx) {
	var x = inx;
	var y = iny;
	var height = 0;
	var context = context;
	
	this.render = function (nheight) {
			
		height = mapValue(nheight/4,-100,100,5,50);
		
		
		//console.log("Val-A: " + nheight);
		
		//console.log("Val-B: " + height);
			
		context.beginPath();
		
		//incrementAngle();
		context.save();
	
		context.translate(x,y);
	
		context.arc(0,0,height,0,4*Math.PI);
		
  		context.lineWidth = 3;
  		context.strokeStyle = stkCol;
  		context.stroke();
		
		context.restore();
	}
}

function rect(context,iny,inx) {
	var x = inx;
	var y = iny;
	var height = 0;
	var context = context;
	
	this.render = function (nheight) {
			
		height = nheight;

		//context.moveTo(x+200, y+200);
		
		//context.rotate(0.100);
		incrementAngle();
		context.save();
		context.translate(x+40,y+25);
		
		context.rotate(convertToRadians(angle));
		
		context.rect(-15, -15, 30, 30);

  		context.lineWidth = 3;
  		context.strokeStyle = stkCol;
  		context.stroke();
		context.restore();

	}
}


function dotBar(context, iny, inx) { //looks pretty cool when wave is dotted
	var x = inx;
	var y = iny;
	var height = 0;
	var context = context;
	
	this.render = function (nheight) {
		
		height = nheight;
	
		context.save();
		context.beginPath();
		
		//context.moveTo(x,y);
		 
		context.arc(x+100,y,10,0,4*Math.PI);
		
		context.arc(x,y,10,0,4*Math.PI);
		
		//context.lineTo(x+100,y);
		context.lineWidth = 3;
		context.strokeStyle = stkCol;
		context.stroke();
		context.restore();
		
	}
}

function solidBar(context,y) {
	context.lineWidth = 3;
	context.strokeStyle = stkCol;
	context.stroke();
	context.restore();
}

function wave(context,iny,inx) {
	
	var x = inx;
	var y = iny;
	var height = 0;
	
	this.render = function (nheight) {
			
		height = nheight;
			
		context.beginPath();
	
		context.moveTo(x, y);
	//context.setLineDash([5]);
		context.quadraticCurveTo(x+20, y-height/4, x+40, y);
		context.quadraticCurveTo(x+60, y+height/4, x+80, y);
		context.quadraticCurveTo(x+100, y-height/4, x+120, y);
		context.quadraticCurveTo(x+140, y+height/4, x+160, y);
	
  		context.lineWidth = 3;
  		context.strokeStyle = stkCol;
  		context.stroke();
	}
}