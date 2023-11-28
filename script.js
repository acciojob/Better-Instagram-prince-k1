//your code here
const pic = document.querySelectorAll('.image');

let obj = {
	dragElement: null,
	dropElement: null
}
pic.forEach(elem => {
	elem.addEventListener('dragstart', onDragstart);
	elem.addEventListener('dragover', onDragOver);
	elem.addEventListener('drop', onDrop);
})

function onDragstart(event){
	obj.dragElement = event.target;
}
function onDragOver(event){
	event.preventDefault();
}
function onDrop(event){
	let elem = event.target;
	obj.dropElement = event.target;
	let img1 = window.getComputedStyle(elem).getPropertyValue('background-image');
	let img2 = window.getComputedStyle(obj.dragElement).getPropertyValue('background-image');
	elem.style.backgroundImage = img2;
	obj.dragElement.style.backgroundImage = img1;
}