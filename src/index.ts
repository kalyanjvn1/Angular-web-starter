
import './styles.css';
import { formatName } from './formatters';
import { addNumbers } from './calculations';
const firstName = document.getElementById('firstName') as HTMLInputElement;
const lastName = document.getElementById('lastName') as HTMLInputElement;
const button = document.getElementById('formatIt') as HTMLButtonElement;
const formatted = document.getElementById('formatted') as HTMLHeadingElement;
const firstNumber = document.getElementById('firstNum') as HTMLInputElement;
const secondNumber = document.getElementById('secondNum') as HTMLInputElement;
const addButton = document.getElementById('add') as HTMLButtonElement;
const resultNumber = document.getElementById('added') as HTMLHeadingElement;

button.addEventListener('click', getNames)

function getNames() {
    const fName = firstName.value;
    const lName = lastName.value;
    console.log({ fName, lName });
    const fullName = formatName(lName, fName);
    formatted.innerHTML = fullName;
}

//addButton.addEventListener('click', getNumbers)
addButton.addEventListener('click', () => {
    const output = addNumbers(firstNumber.valueAsNumber, secondNumber.valueAsNumber);
    resultNumber.innerHTML = output.toString();
});

function getNumbers() {
    const firstnum = firstNumber.valueAsNumber;
    const secondNum = secondNumber.valueAsNumber;
    const results = addNumbers(firstNumber.valueAsNumber, secondNum);
    resultNumber.innerHTML = 'Result is ' + results;
}
