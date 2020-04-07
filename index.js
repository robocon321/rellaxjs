var imageEle = document.getElementById("image");

function randomImageAndSpeed(number){
	var images= ["haha","hehe","heart","hehe","hihi","like","aha"];
	for(var i=0;i<number;i++){
		var ele = document.createElement("img");
		ele.setAttribute("src", "./image/"+images[Math.floor(Math.random()*images.length)]+".png");
		ele.setAttribute("data-rellax-speed",Math.floor(Math.random()*80));
		ele.setAttribute("class","rellax");
		ele.style.width="100px";
		ele.style.height="100px";
		imageEle.appendChild(ele);
	}
}

randomImageAndSpeed(70);