function ellipseAreaCalculation() {
    const PI = 3.14;
    const ellipseMainValue1 = document.getElementById('ellipse-value1');
    const ellipseValue1 = ellipseMainValue1.value;
    const a = parseFloat(ellipseValue1);
    const ellipseMainValue2 = document.getElementById('ellipse-value2');
    const ellipseValue2 = ellipseMainValue2.value;
    const b = parseFloat(ellipseValue2);
    const area = PI * a * b;
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;
}