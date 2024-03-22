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