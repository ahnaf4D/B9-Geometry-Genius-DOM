function pentagonAreaCalculation() {
    const pMainValue = document.getElementById('pentagon-value1');
    const pValue = pMainValue.value;
    const p = pValue;
    const bMainValue = document.getElementById('pentagon-value2');
    const bValue = bMainValue.value;
    const b = bValue;
    const area = 0.5 * p * b;
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;
}