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
var plant; // get all plants' parameters. 
var imgWidth=10;
var imgHeight=10;
var iconNum=5;

window.onload=main;

function main(){
	setCanv();
	init();
	gameloop();
};

function init(){
	timeNow=Date.now();
	console.log(canvWidth+"  "+canvHeight);
};

function gameloop(){
	ctx.clearRect(0,0,canvWidth,canvHeight);
	window.requestAnimFrame(gameloop);
	delTime=Date.now()-timeNow;
	timeNow=Date.now();
	drawIcon();
};


