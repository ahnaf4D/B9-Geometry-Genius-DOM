/**
 * Objective : get base and height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step 01 : get base value of the triangle
 * step 02 : added an id the base input field
 * step 03 : use getElementById() to access the input field
 * step 04 : get value from the input field(value is string now)
 * step 05 : convert the value to number using parseFloat()
 */

function calculateTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);
}