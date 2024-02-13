function parallelogramCalculation() {
    const base = getInputValueById('base-value');
    const height = getInputValueById('height-value');
    const area = base * height;
    setInnerTextByID('parallelogram-area', area);
}
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextByID(elementID, area) {
    elementID = document.getElementById(elementID);
    elementID.innerText = area;
}