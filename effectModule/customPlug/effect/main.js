/*
* @Author: Administrator
* @Date:   2017-10-16 20:25:07
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-03 17:12:02
* description : the main js file 
*/
/***public defination****/

var canv=document.getElementById("canv");
var wrapInner=document.getElementById("wrapInner");
var ctx=canv.getContext("2d");
var wrapInnerWd=window.getComputedStyle(wrapInner,null).width;
var wrapInnerHt=window.getComputedStyle(wrapInner,null).height;
var canvWidth, canvHeight;
var timeNow;
var delTime;
var iconNum=6;
var icon={};
var dis=10000; //init distance between the random icon coordinate and current icon, if dis less than a parameter, generate another random coordinate x, y

window.onload=main;

function main(){
	setCanv();
	init();
	gameloop();
};

function init(){
	icon={
		icon0: {
				cordX: 100, // init coordinate x, y
				cordY: 100,
				current: {  // store current coordinate x, y
					cordX: 100,
					cordY: 100
				},
				random: {   //generate random coordinate x, y
					cordX: 0,
					cordY: 0
				},
				changeDr: true,  // change direction  
				moveDs: 100, //* move distance for each icon
				lineIcons: ['icon2','icon3','icon1'] //store the icons to connect with
		},
		icon1: {
				cordX: 350,
				cordY: 200,
				current: {
					cordX: 350,
					cordY: 200
				},
				random: {
					cordX: 450,
					cordY: 300
				},
				changeDr: true,
				moveDs: 150,
				lineIcons: ['icon3','icon2','icon4','icon5']
		},
		icon2: {
			cordX: 650,
			cordY: 30,
			current: {
					cordX: 650,
					cordY: 30
				},
			random: {
					cordX: 700,
					cordY: 40
			},
			changeDr: true,
			moveDs: 50
		},
		icon3: {
			cordX: 100,
			cordY: 400,
			current: {
				cordX: 100,
				cordY: 400
			},
			random: {
				cordX: 200,
				cordY: 300
			},
			changeDr: true,
			moveDs: 130
		},
		icon4: {
			cordX: 500,
			cordY: 400,
			current: {
				cordX: 500,
				cordY: 400
			},
			random: {
				cordX: 550,
				cordY: 450
			},
			changeDr: true,
			moveDs: 100,
			lineIcons: ['icon5','icon2']
		},
		icon5: {
			cordX: 330,
			cordY: 600,
			current: {
				cordX: 330,
				cordY: 600
			},
			random: {
				cordX: 400,
				cordY: 550
			},
			changeDr: true,
			moveDs: 50,
			lineIcons:['icon3']
		}
	
	};
	ctx.strokeStyle="#fff";  
	timeNow=Date.now();
	console.log(canvWidth+"  "+canvHeight);
};

function gameloop(){
	window.requestAnimFrame(gameloop);
	delTime=Date.now()-timeNow;
	timeNow=Date.now();
	ctx.clearRect(0,0,canvWidth,canvHeight);
	drawIcon();
};


