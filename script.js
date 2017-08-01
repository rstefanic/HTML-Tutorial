class InputOutputPair {
    constructor(inputElement, outputElement) {
	this.inputElement = inputElement;
	this.outputElement = outputElement;
	this.addKeyUpTextListener();
    }

    addKeyUpTextListener() {
	this.inputElement.onkeyup = () => {
	    updateText(this.inputElement,
		       this.outputElement);
	};
    }
}

function updateText(inputText, outputText) {
    outputText.innerHTML = inputText.value;
}

function generatePairs(amountOfPairs) {
    for(let i = 0; i < amountOfPairs; i++) {
	new InputOutputPair(document.getElementById("ei" + i),
	                    document.getElementById("eo" + i));
    }
}

generatePairs(6);
