// assigning variable to the art-container div, (this div is going to be the parent of the color palettes and the painting grid divs)
const artContainer = document.querySelector("#art-container");

// creating the first h1 element
const title = document.createElement("h1");
// giving the h1 some text to display
title.textContent = "Draw A Sketch (Kickstart Your Imagination)";

// creating the children of the art-container div
const RHColorPalette = document.createElement("div");
const paintArea = document.createElement("div");
const LHColorPalette = document.createElement("div");

// creating the button element new-sketch to select the grid size and start off painting
const newSketchButton = document.createElement("button");
// addint text to the button
newSketchButton.textContent = "New Sketch";

// div layout
artContainer.appendChild(title);
artContainer.appendChild(RHColorPalette);
artContainer.appendChild(paintArea);
artContainer.appendChild(LHColorPalette);
// appending the button to the body
document.body.appendChild(newSketchButton);



