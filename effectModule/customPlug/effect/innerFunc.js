/*
* @Author: Administrator
* @Date:   2017-11-03 17:04:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-03 17:17:36
*/


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

		img.src='./src/img/play'+i+'.png';
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


/**sub functions***/

