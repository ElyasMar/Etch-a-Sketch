// assigning variable to the art-container div, (this div is going to be the parent of the color palettes and the painting grid divs)
const artContainer = document.querySelector("#art-container");

// creating the first h1 element
const title = document.createElement("h1");
// giving the h1 some text to display
title.textContent = "Draw A Sketch (Kickstart Your Imagination)";

// creating the children of the art-container div
const RHColorPalette1 = document.createElement("div");
const RHColorPalette2 = document.createElement("div");
const paintArea = document.createElement("div");
const LHColorPalette1 = document.createElement("div");
const LHColorPalette2 = document.createElement("div");

// creating the button element new-sketch to select the grid size and start off painting
const newSketchButton = document.createElement("button");
// addint text to the button
newSketchButton.textContent = "New Sketch";

// div layout
// create a header and append the title
const header = document.createElement("header");
header.appendChild(title);

// appending elements to the body in order
document.body.appendChild(header);
document.body.appendChild(artContainer);
document.body.appendChild(newSketchButton);

// appending children to artContainer
artContainer.appendChild(LHColorPalette1);
artContainer.appendChild(LHColorPalette2);
artContainer.appendChild(paintArea);
artContainer.appendChild(RHColorPalette1);
artContainer.appendChild(RHColorPalette2);

// giving the new elements some ids
RHColorPalette1.id = "right-palette-1";
RHColorPalette2.id = "right-palette-2";
paintArea.id = "paint-area";
LHColorPalette1.id = "left-palette-1";
LHColorPalette2.id = "left-palette-2";
newSketchButton.id = "btn";

// creating 8 palette colors for each palette side
// Right hand side
const colorwhite = document.createElement("button");
const colorRed = document.createElement("button");
const colorBlue = document.createElement("button");
const colorGreen = document.createElement("button");
const colorYellow = document.createElement("button");
const colorCyan = document.createElement("button");
const colorBlack = document.createElement("button");
const colorBrown = document.createElement("button");
// Left hand side
const colorPink = document.createElement("button");
const colorPurple = document.createElement("button");
const colorOrange = document.createElement("button");
const colorGray = document.createElement("button");
const colorLightYellow = document.createElement("button");
const colorGold = document.createElement("button");
const colorMaroon = document.createElement("button");
const colorNeon = document.createElement("button");

// gining the buttons classes and ids
colorwhite.className = "color-btn";
colorRed.className = "color-btn";
colorBlue.className = "color-btn";
colorGreen.className = "color-btn";
colorYellow.className = "color-btn";
colorCyan.className = "color-btn";
colorBlack.className = "color-btn";
colorBrown.className = "color-btn";
colorPink.className = "color-btn";
colorPurple.className = "color-btn";
colorOrange.className = "color-btn";
colorGray.className = "color-btn";
colorLightYellow.className = "color-btn";
colorGold.className = "color-btn";
colorMaroon.className = "color-btn";
colorNeon.className = "color-btn";

// lets assign our button colors their colors
colorwhite.style.backgroundColor = "white";
colorRed.style.backgroundColor = "red";
colorBlue.style.backgroundColor = "blue";
colorGreen.style.backgroundColor = "green";
colorYellow.style.backgroundColor = "yellow";
colorCyan.style.backgroundColor = "cyan";
colorBlack.style.backgroundColor = "black";
colorBrown.style.backgroundColor = "brown";
colorPink.style.backgroundColor = "pink";
colorPurple.style.backgroundColor = "purple";
colorOrange.style.backgroundColor = "orange";
colorGray.style.backgroundColor = "gray";
colorLightYellow.style.cssText = "background-color: #FFFFC5;";
colorGold.style.backgroundColor = "gold";
colorMaroon.style.cssText = "background-color: #550000;";
colorNeon.style.cssText = "background-color: #2CFF05;";

// diplay the color palette buttons
RHColorPalette1.appendChild(colorwhite)
RHColorPalette1.appendChild(colorRed)
RHColorPalette1.appendChild(colorBlue)
RHColorPalette1.appendChild(colorGreen)
RHColorPalette2.appendChild(colorYellow)
RHColorPalette2.appendChild(colorCyan)
RHColorPalette2.appendChild(colorBlack)
RHColorPalette2.appendChild(colorBrown)
LHColorPalette1.appendChild(colorPink)
LHColorPalette1.appendChild(colorPurple)
LHColorPalette1.appendChild(colorOrange)
LHColorPalette1.appendChild(colorGray)
LHColorPalette2.appendChild(colorLightYellow)
LHColorPalette2.appendChild(colorGold)
LHColorPalette2.appendChild(colorMaroon)
LHColorPalette2.appendChild(colorNeon)

// combining the color buttons
const buttons = document.querySelectorAll(".color-btn");

let selectedColor = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        selectedColor = window.getComputedStyle(button).getPropertyValue("background-color");
        console.log(selectedColor);
    })
})


// creating the grid dynamically
function dynamicGrid(gridSize) {

    // clear the grid container
    paintArea.textContent = "";

    paintArea.setAttribute('data-grid-size', gridSize)

   for (let i = 0; i < (gridSize * gridSize); i++){
    let cell = document.createElement("div");
    cell.className = "grid-item";
    paintArea.appendChild(cell);
   } 
   enableDrawing();
}

dynamicGrid(16);


// new sketch button
newSketchButton.addEventListener("click", () =>{

    // creating the blur class for the effect
    artContainer.classList.add("blur");

    // creating the div that would sit on the page
    const overlay = document.createElement("div");
    overlay.id = "grid-overlay";

    const overlayBox = document.createElement("div");
    overlayBox.className = "overlay-box";
    overlay.appendChild(overlayBox);

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
            overlay.remove();
            artContainer.classList.remove("blur");
        }
    });

    //creating the choice grid size buttons
    const sizes = [16, 32, 64];
    sizes.forEach((size) => {
        const btn = document.createElement("button");
        btn.textContent = `${size} x ${size}`;
        btn.addEventListener("click", () => {
            // removing the overlay and the blured background
            overlay.remove();
            artContainer.classList.remove("blur");

            // create the new grid
            dynamicGrid(size);
        })
        overlayBox.appendChild(btn);
    })
    document.body.appendChild(overlay);
});


// a function that enables drawing on the grid
function enableDrawing() {
    let isDrawing = false;
    paintArea.addEventListener("mousedown", () => isDrawing = true);
    paintArea.addEventListener("mouseup", () => isDrawing = false);

    const cells = document.querySelectorAll(".grid-item");

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if (isDrawing) {
                cell.style.backgroundColor = selectedColor;
            }
        })
        cell.addEventListener("mousedown", () =>{
            cell.style.backgroundColor = selectedColor;
        }) 
    })
}
