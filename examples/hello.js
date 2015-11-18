
console.log('remove all divs')
var elementList = document.querySelectorAll('div');
var index = 0;
for( index=0; index < elementList.length; index++ ) {
  elementList[index].parentNode.removeChild(elementList[index])
}

console.log('then take a screenshot')
console.log(window.userScriptEndToken)
