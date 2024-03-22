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

// reactangle card 

function reactangleCalculateArea (){
    // reactangle width
     const reactangleInputOfWidth =  document.getElementById('reactangleInputFieldOfWidth');
     const reactangleInputValue = reactangleInputOfWidth.value;
     const reactangleType = parseFloat(reactangleInputValue);
    //  console.log(typeof reactangleType);

    //  reactangel height

    const reactangelInputOfI = document.getElementById('reactangle-input-field-of-i');
    const reactangelInputOfIValue = reactangelInputOfI.value;
    const reactangelIType = parseFloat(reactangelInputOfIValue);
    // console.log(t reactangelIType);

    // calculate bse 
    const reactangelArea = reactangleType * reactangelIType;
    // console.log('calculate number', reactangelArea);
    const reactangelValue = document.getElementById('reactangle-value');
    reactangelValue.innerText = reactangelArea;

}