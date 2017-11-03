/*
* @Author: Administrator
* @Date:   2017-11-03 17:04:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-03 17:17:36
*/


function drawIcon(){
	ctx.save();
	ctx.scale(1,1);
	var icon={
		icon0: {
				cordX: 10,
				cordY: 10
		},
		icon1: {
				cordX: 50,
				cordY: 30
		}
	
	};
	for(var i=0;i<iconNum;i++){
		var img=new Image();
		img.src='./src/img/play'+i+'.png';
		ctx.drawImage(img,0,0);
		ctx.restore();
	};

};

function setCanv(){
	canv.setAttribute('width',wrapInnerWd);
	canv.setAttribute('height',wrapInnerHt);
	canvWidth=canv.width;
	canvHeight=canv.height;
}