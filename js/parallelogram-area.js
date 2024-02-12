function parallelogramCalculation() {
    const baseMainValue = document.getElementById('base-value');
    const baseValue = baseMainValue.value;
    const base = parseFloat(baseValue);
    const heightMainValue = document.getElementById('height-value');
    const heightValue = heightMainValue.value;
    const height = parseFloat(heightValue);
    // Calculate area
    const area = base * height;
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}