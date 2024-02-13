function pentagonAreaCalculation() {
    const perimeter = getInputValueById('pentagon-value1');
    console.log(perimeter);
    const apothem = getInputValueById('pentagon-value2');
    console.log(apothem);
    const area = 0.5 * perimeter * apothem;
    const pentagonArea = setInnerTextByID('pentagon-area', area);
    return pentagonArea;
}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerTextByID(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
    return element;
}