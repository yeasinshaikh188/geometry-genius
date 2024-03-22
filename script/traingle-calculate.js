//   traingle card
function calculateTraingleArea (){
    // step of base
    const traingleBaseInputField = document.getElementById('triangle-base');
    const traingleBaseText = traingleBaseInputField.value;
    const traingleValueType = parseFloat(traingleBaseText);
    console.log(traingleValueType);
    // console.log(typeof traingleValueType);
    //  step of height
    const traingleBaseinput = document.getElementById('triangle-height');
    const traingleBaseInputTextOfHeight = traingleBaseinput.value;
    const heightBaseType = parseFloat(traingleBaseInputTextOfHeight);
    console.log( heightBaseType);

    //  calculate base 
    const area = 0.5 * traingleValueType * heightBaseType;
    console.log('area calculate of base', area);

    const traingleAreaSpan = document.getElementById('triangle-cal');
    traingleAreaSpan.innerText = area;
}