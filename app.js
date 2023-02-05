"use strict";

const selectInput = document.querySelector("input");

const selectOutput = document.querySelector(".output");

const selectTypo = document.querySelector("[name='typeface']");

const selectSize = document.querySelector("[name='size']");
const selectSizeLabel = document.querySelector(".sizelabel");

const selectWeight = document.querySelector("[name='weight']");
const selectWeightLabel = document.querySelector(".weightLabel");

const selectLeading = document.querySelector("[name='leading']");
const selectLeadingLabel = document.querySelector(".leadinglabel");

const selectItalic = document.querySelector("[type='checkbox']");

const selectColor = document.querySelector(".colors");

const selectBody = document.querySelector("body")


selectInput.addEventListener("input", (e) => {
    selectOutput.textContent = e.target.value;
});

selectTypo.addEventListener("input", (e) => {
    selectOutput.style.fontFamily = e.target.value;
});

selectSize.addEventListener("input", (e) => {
    selectOutput.style.fontSize = e.target.value + "px";
    selectSizeLabel.textContent = e.target.value + "px";
});

selectWeight.addEventListener("input", (e) => {
    selectOutput.style.fontWeight = e.target.value;
    selectWeightLabel.textContent = e.target.value;
});

selectLeading.addEventListener("input", (e) => {
    selectOutput.style.lineHeight = e.target.value;
    selectLeadingLabel.textContent = e.target.value;
});

selectItalic.addEventListener("input", (e) => {
    let italic = "normal";
    if (e.target.checked === true) {
        italic = "italic";
    }
    selectOutput.style.fontStyle = italic;
});

selectColor.addEventListener("click", (e) => {
    console.log(e.target.value);
    selectOutput.style.backgroundColor = e.target.style.backgroundColor;
});

