const wideGrid = 960;

//Busco el div container y creo el div grid dentro del mismo
let container = document.getElementById("container");

function createGridIn(element, c) {
	let cells = (c || 16);
	let cellCount = cells**2;
	let grid = document.createElement("div");

	//grid.classList.add("grid");
	grid.setAttribute("id","grid");
	grid.style.gridTemplateColumns = `repeat(${cells}, 1fr)`;
	grid.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
	
	for (i=0; i<cellCount; i++){
		let cell = document.createElement("div");
		cell.classList.add("cell");
		cell.addEventListener("mouseover",paintCell);
		grid.appendChild(cell);
	}
	element.appendChild(grid);
}

function paintCell(e){
	e.target.classList.add("painted");
}

function clearCells(){
	let cells = document.querySelectorAll(".cell");

	cells.forEach(c => c.classList.remove("painted"));
}

function reset(){
	//clearCells();
	let size = prompt("choose the panel size:", "16");
	let grid = document.getElementById("grid");

	console.log(size);
	console.log(grid);
	//grid.parentNode.removeChild(grid);
	
	if (!isNaN(size) && (size>0) && (size<101)){
		grid.remove();
		createGridIn(container, size);
	}else{
		alert("debe ingresar un numero entre 1 y 100.");
	}
}

function clear(){
	clearCells();
}

function changeColor(e){
	let choosed = e.target;
	console.log(choosed.id);

	if (choosed.id === "randomColor"){
		document.getElementById("grayScale").checked = false;
		randomColor();
	} else {
		document.getElementById("randomColor").checked = false;
		grayScale();
	};
}

function randomColor(){
	let cells = document.querySelectorAll(".cell");

	cells.forEach(c => c.classList.remove("painted"));
};

function grayScale(){

};

createGridIn(container);

//busco todas las celdas y asigo eventlistener para pintarlas en mouseover
//let cells = document.querySelectorAll(".cell");
//cells.forEach(c => c.addEventListener("mouseover",paintCell));

//agrego boton reset
let btnReset = document.createElement("button");
btnReset.textContent = "Reset";

container.insertBefore(btnReset, container.childNodes[0]);

//agrego boton clear
let btnClear = document.createElement("button");
btnClear.textContent = "Clear";

container.insertBefore(btnClear, container.childNodes[0]);

//agrego random color
let checkboxes = document.createElement("div");
let chkRandom = document.createElement("input");
let chkGray = document.createElement("input");
let txtRandom = document.createTextNode("Random Color:");
let txtGray = document.createTextNode("Gray Scale:");

chkRandom.setAttribute("type", "checkbox");
chkRandom.setAttribute("id", "randomColor");
chkGray.setAttribute("type", "checkbox");
chkGray.setAttribute("id", "grayScale");
checkboxes.appendChild(txtRandom);
checkboxes.appendChild(chkRandom);
checkboxes.appendChild(txtGray);
checkboxes.appendChild(chkGray);
checkboxes.setAttribute("id","chkColor");
container.insertBefore(checkboxes, container.childNodes[2]);

//agrego Evento click a botones
btnReset.addEventListener("click", reset);
btnClear.addEventListener("click", clear);

//agrego Evento a click en checkbox
chkRandom.addEventListener("click",changeColor);
chkGray.addEventListener("click",changeColor);
	