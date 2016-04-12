$(document).ready(function(){
	var b_left=$("#b_left");var b_right=$("#b_right");
	var imgid=0;
	var animated=false;
	b_left.bind("click",function(){
		if(imgid<=0&&!animated){
			return;
		}else{
		next(1000);
		imgid-=1;
	}	
	});
	b_right.bind("click",function(){
		if(imgid>=2&&!animated){
			return;
		}else{
		next(-1000);
		imgid+=1;
	}
	});
	setTimeout(function(){
		b_right.trigger("click");
	},3000)
})
function next(len){
	animated=true;
	var imgbox=$("#ul-img");
	var nowleft=parseInt(imgbox.css("margin-left"));
	var timer=setInterval(function(){
	var currleft=parseInt(imgbox.css("margin-left"));
	var newleft=nowleft+len;
	if(len<0){
		if(currleft>newleft){
		imgbox.css({"margin-left":currleft+len/10+"px"});
	}else{
		running=0;
		clearInterval(timer);
		animated=false;
	}
}else{
		if(currleft<newleft){
		imgbox.css({"margin-left":currleft+len/10+"px"});
	}else{
		clearInterval(timer);
		animated=false;
	}
}
	},30)
}
