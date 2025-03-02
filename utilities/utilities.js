function getInnerTextById(id) {
    const elementInnerText = document.getElementById(id).innerText
    const convertedValue = parseInt(elementInnerText)
    return convertedValue
}


function setInnerTextById(id, value) {
    document.getElementById(id).innerText = value;
}


// console.log( dateTimeSection.appendChild(dateAndTime))
// function setInsideHtmlByidAndValue(id) {

//     const containt =document.getElementById('history-container')
//     const div = document.createElement('div')
//     document.getElementById(id).innerHTML = `
//     <div class=" bg-slate-100 m-2 rounded-lg">
//                         <p>You have complete the task <br>
//                         at <time datetime=""></time></p>
//                     </div>
    
//     `
//     containt.appendChild(div)
// }