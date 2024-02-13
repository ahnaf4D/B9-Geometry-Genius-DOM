function calculateTriangleArea() {
    // get the width value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);
    // Get the height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);
    // Total area
    const area = 0.5 * base * height;
    // display triangle area
    const triangleAreaSpan = document.getElementById('triangle_area');
    triangleAreaSpan.innerText = area;
}