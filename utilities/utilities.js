function getInnerTextById(id){
    const elementInnerText = document.getElementById(id).innerText
    const convertedValue = parseInt(elementInnerText)
    return convertedValue
}


function setInnerTextById(id, value){
    document.getElementById(id).innerText = value;
}

