function rhombusAreaCalculation() {
    const dimension1MainValue = document.getElementById('rhombus-value');
    const dimensionOneValue = dimension1MainValue.value;
    const dimensionOne = parseFloat(dimensionOneValue);
    const dimension2MainValue = document.getElementById('rhombus-value2');
    const dimensionTwoValue = dimension2MainValue.value;
    const dimensionTwo = dimensionTwoValue;
    //    Calculation Below
    const area = 0.5 * dimensionOne * dimensionTwo;
    const rhombusArea = document.getElementById('rhombus-area');
    rhombusArea.innerText = area;
}
