require('./index.css');
var htmlTemple=require('./index.string');
var _mm=require('util/mm.js');
var _effect={
	data: {

	},
	init: function(){
		//alert("right");
		var render=_mm.renderHtml(htmlTemple,this.data);
		var target=$("#insertEffect");
		target.html(render);
		this.main();
	},
	main: function(){
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


		//inner function part
		function drawIcon(){
			ctx.save();
			ctx.scale(0.5,0.5);
				var centerIcon='icon1';
			for(var i=0;i<iconNum;i++){
				var index='icon'+[i];
				var img=new Image();

		        /*generate random postion*/
		        if(icon[index].changeDr){
				    ranDomCr(i,icon[index].moveDs);
		        };

				img.src='../../../../src/resource/img/play'+i+'.png';
				/*check whether the icon reached to target random coordinate. if reached, generate another random coordinate*/
				icon[index].current.cordX=lerpDistance(icon[index].random.cordX, icon[index].current.cordX, 0.95);
				icon[index].current.cordY=lerpDistance(icon[index].random.cordY, icon[index].current.cordY, 0.95);
				dis=distance(icon[index].random.cordX,icon[index].random.cordY,icon[index].current.cordX,icon[index].current.cordY,1);
				if(dis){
					icon[index].changeDr=true;
				};

				/* draw line between two icons*/
			/*		ctx.moveTo(icon[centerIcon].current.cordX+((img.width)/2),icon[centerIcon].current.cordY+((img.width)/2));
					ctx.lineTo(icon[index].current.cordX+((img.width)/2),icon[index].current.cordY+((img.width)/2)); */
					if(icon[index].lineIcons){
						var targetIcon;
						for(var n=0;n<icon[index].lineIcons.length;n++){
							ctx.beginPath();
							ctx.moveTo(icon[index].current.cordX+((img.width)/2),icon[index].current.cordY+((img.width)/2));
					//ctx.lineTo(icon[index].lineIcons[n].current.cordX+((img.width)/2),icon[index].current.lineIcons[n].current.cordY+((img.width)/2)); 
							targetIcon=icon[index].lineIcons[n];
							ctx.lineTo(icon[targetIcon].current.cordX+((img.width)/2),icon[targetIcon].current.cordY+((img.width)/2));
							//console.log(targetIcon);

							ctx.closePath();
							ctx.stroke(); 
						}
					};

				ctx.drawImage(img,icon[index].current.cordX,icon[index].current.cordY);
				//ctx.drawImage(img,icon[index].random.cordX,icon[index].random.cordY);
			};

			ctx.restore();

		};

		function setCanv(){
			canv.setAttribute('width',wrapInnerWd);
			canv.setAttribute('height',wrapInnerHt);
			canvWidth=canv.width;
			canvHeight=canv.height;
		};


		/*  index=icon index **/
		function ranDomCr(index,moveDs){
		   var randomX=Math.floor((Math.random()*moveDs*2)-moveDs);
		    var randomY=Math.floor((Math.random()*moveDs*2)-moveDs);
		   icon['icon'+index].random.cordX=icon['icon'+index].cordX+randomX;
		   icon['icon'+index].random.cordY=icon['icon'+index].cordY+randomY;
		   icon['icon'+index].changeDr=false;
		};

		//subfunction
		/*用于趋近某个值，只需将x,y坐标赋值就可以趋近该值*/

		function lerpDistance(aim, cur, ratio) {
			var delta = cur - aim;
			return aim + delta * ratio;
		}
		/*判断两坐标点的距离是否是小于某个值*/
		function distance(x1, y1, x2, y2, l) {
			var x = Math.abs(x1 - x2);
			var y = Math.abs(y1 - y2);
			if (x < l && y < l) {
				return true;
			}
			return false;
		}
		/**game loop */
		window.requestAnimFrame = (function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
				function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
					return window.setTimeout(callback, 1000 / 60);
				};
		})();


	}
};

$(function(){
	_effect.init();
});