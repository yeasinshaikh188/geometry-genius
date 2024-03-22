function calculatePentagonArea(){
    const petagonPerimiter = getInputValueById ('pentagon-apothem');
    console.log(petagonPerimiter);
}


function getInputValueById (inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    const inputValue = parseFloat(inputFieldValue);
    return inputValue;
}