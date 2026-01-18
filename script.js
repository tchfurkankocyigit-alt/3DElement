let rotX = -20, rotY = -30;
let isDragging = false;
let lastX , lastY;

const cube = document.getElementById('cube');

cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

cube.addEventListener('mousedown',function(e){

	isDragging = true;
	lastX=e.clientX;
	lastY=e.clientY;
});

cube.addEventListener('mousemove',function(e){

	if(!isDragging) return;

	const dx =e.clientX -lastX;
	const dy =e.clientY -lastY;
	rotY += dx * 0.7;
	rotX -= dy * 0.7;

	
	cube.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;
	lastX = e.clientX;
	lastY = e.clientY;
	
});

cube.addEventListener('mouseup',function(){

	isDragging = false;
	
});



