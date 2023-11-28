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
	obj.dropElement = event.target;
	let drop = event.target.id;
	event.target.id = obj.dragElement.id;
	obj.dragElement.id = drop;
}