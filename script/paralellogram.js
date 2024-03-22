function paralellogramBase (){
    // step of base
    const paralellogramInputBase = document.getElementById('base-input-field');
    const paralellogramInputValue = paralellogramInputBase.value;
    const paralellogramtype = parseFloat(paralellogramInputValue);
    console.log(typeof paralellogramtype);
    // sptep of height
    const paralellogramInputHeight = document.getElementById('height-input-field');
    const paralellogramINputHeigtValeu = paralellogramInputHeight.value;
    const paralellogramHeightType = parseFloat(paralellogramINputHeigtValeu);
    console.log(paralellogramHeightType)

    // calculate area
    const calculateParalellogramArea = paralellogramtype * paralellogramHeightType;

    const valueOfParalellogram = document.getElementById('valueOfParalellogram');
    valueOfParalellogram.innerText = calculateParalellogramArea;
}