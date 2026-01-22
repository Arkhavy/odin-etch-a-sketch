const container = document.querySelector(".container");
const changeGridSizeButton = document.querySelector("#changeGridSizeButton");
let gridSize = 16; // default value = 16

function getRandomColor() {
	return (Math.floor(Math.random() * 255));
}

function getRandomRGB() {
	const r = `${getRandomColor()}`;
	const g = `${getRandomColor()}`;
	const b = `${getRandomColor()}`;
	return (`rgb(${r}, ${g}, ${b})`);
}

function generateGrid() {
	for (let i = 0; i < gridSize; i++) {
		const gridLine = document.createElement("div");
		gridLine.classList.add("gridLine");
		for (let j = 0; j < gridSize; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			square.style.opacity = 1;
			square.opacity = "revert";
			square.addEventListener("mouseleave", () => {
				square.style.backgroundColor = getRandomRGB();
				square.style.opacity -= 0.1;
			});
			gridLine.appendChild(square);
		}
		container.appendChild(gridLine);
	}
}

function purgeGrid() {
	while (container.firstChild) {
		while (container.firstChild.firstChild) {
			container.firstChild.removeChild(container.firstChild.firstChild);
		}
		container.removeChild(container.firstChild);
	}
}

function verifyPrompt(prompt) {
	if (!prompt) {
		console.error("ERROR: Empty prompt");
		return (false);
	}
	if (isNaN(parseInt(prompt))) {
		console.error("ERROR: Prompt not a number");
		return (false);
	}
	if (parseInt(prompt) > 100) {
		console.error("ERROR: Prompt above 100");
		return (false);
	}
	if (parseInt(prompt) < 1) {
		console.error("ERROR: Prompt below 1");
		return (false);
	}
	return (true);
}

changeGridSizeButton.addEventListener("click", () => {
	const prompt = window.prompt("Enter new grid size below :\n min 1 | max 100");
	if (!verifyPrompt(prompt)) {
		return;
	}
	gridSize = parseInt(prompt);
	purgeGrid();
	generateGrid(gridSize);
});

generateGrid(gridSize);