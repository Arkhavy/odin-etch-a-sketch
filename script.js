const container = document.querySelector(".container");

function generateGrid() {
	const gridSize = 16;
	for (let i = 0; i < gridSize; i++) {
		const gridLine = document.createElement("div");
		gridLine.classList.add("gridLine");
		for (let j = 0; j < gridSize; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			gridLine.appendChild(square);
		}
		container.appendChild(gridLine);
	}
}

generateGrid();