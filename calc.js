let display = document.getElementById('display');

function clearDisplay() {
	display.value = '';
}

function deleteChar() {
	display.value = display.value.slice(0, -1);
}

function addNumber(num) {
	display.value += num;
}

function addOperator(op) {
	display.value += op;
}

function calculate() {
	try {
		let result = eval(display.value);
		display.value = result;
	} catch (error) {
		display.value = 'Error';
	}
}

