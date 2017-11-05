/*
* @Author: Administrator
* @Date:   2017-11-03 17:04:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-03 17:17:36
*/


function drawIcon(){
	ctx.save();
	ctx.scale(1,1);
		var centerIcon='icon1';
	for(var i=0;i<iconNum;i++){
		var index='icon'+[i];
		var img=new Image();
        var randomX=Math.floor((Math.random()*4)-2);
        var randomY=Math.floor((Math.random()*6)-3);
       // console.log(randomX);
		if(icon[index].mvSp<0){
			icon[index].mvSp=icon[index].mvDs;
			icon[index].mvSp-=1;
			icon[index].cgDr=!icon[index].cgDr;
		}else{
			icon[index].mvSp-=1;
		};

	/*	if(icon[index].cgDr){
			icon[index].cordX-=icon[index].move+randomX;
			icon[index].cordY-=icon[index].move+randomY;
		}else{
			icon[index].cordX+=icon[index].move+randomX;
			icon[index].cordY+=icon[index].move+randomY;
		};  */
		icon[index].cordX+=randomX;
		icon[index].cordY+=randomY;

		img.src='./src/img/play'+i+'.png';
		/* draw line between two icons*/
			ctx.beginPath();
			ctx.moveTo(icon[centerIcon].cordX,icon[centerIcon].cordY);
			ctx.lineTo(icon[index].cordX,icon[index].cordY);
			ctx.strokeStyle="#fff";
			ctx.closePath();
			ctx.stroke(); 
		ctx.drawImage(img,icon[index].cordX,icon[index].cordY);
	};

	ctx.restore();

};

function setCanv(){
	canv.setAttribute('width',wrapInnerWd);
	canv.setAttribute('height',wrapInnerHt);
	canvWidth=canv.width;
	canvHeight=canv.height;
}



/**sub functions***/

