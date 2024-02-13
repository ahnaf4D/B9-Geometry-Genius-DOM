function ellipseAreaCalculation() {
    const PI = 3.14;
    const majorRadius = getValueFromInput('ellipse-value1');
    const minorRadius = getValueFromInput('ellipse-value2');
    const calculation = PI * majorRadius * minorRadius;
    const showInDisplay = setValueToUI('ellipse-area', calculation);
}
function getValueFromInput(elementId) {
    const elementMainContent = document.getElementById(elementId);
    const elementTextValue = elementMainContent.value;
    const elementValue = parseFloat(elementTextValue);
    return elementValue;
}
function setValueToUI(element, value) {
    const elementSelect = document.getElementById(element);
    elementSelect.innerText = value;
    return elementSelect;
}