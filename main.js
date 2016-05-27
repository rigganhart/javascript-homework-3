// code goes here :)
function sum(arr) {
    var sumOfNum = 0;
    for( i = 0; i<arr.length; i++) {
      sumOfNum = sumOfNum + arr[i]
    }
    return sumOfNum;
  }


// an array for price of all items
var price = items.map(function(element, idx, arr) {
  return element.price
});

// avg price
sum(price) / items.length

// GBP item
var gBP = items.map(function(element,idx,arr){
  if (element.currency_code === 'GBP') {
    return  element.title + " Price: " +element.price
  }
})
var filterGBP = gBP.filter(function(element, idx, arr) {
  return element
})
//variable for avg price
var avgItemPrice = sum(price) / items.length

items.filter(function(element, idx, arr){
  element.price >= 14 && element.price <= 18
})

//question 2
//variable for all elements between 14 and 18$
var elementsToFilter = items.map(function(element, idx, arr) {
  if (element.price >= 14 && element.price <= 18) {
    return element.title
  }
})
elementsToFilter.filter(function(element,idx,arr) {
  if (element) {
  return element.title
}
})
//answer to 2
var filteredPrices = elementsToFilter.filter(function(element,idx,arr) {
   return element
})
document.getElementById('answer2').innerHTML = filteredPrices




// answer to 1 in the html!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
document.getElementById('answer1').innerHTML = avgItemPrice



// answer to 3 in html
document.getElementById('answer3').innerHTML = filterGBP


// question 4 find items contianing wood:
var woodMaterials = items.filter(function(element, idx, arr){
   return element.materials.indexOf('wood') !== -1
 }).map(function(element, idx, arr){
    return element.title;
  })

document.getElementById('answer4').innerHTML = woodMaterials

//question 5 find items with 8 or more materials
var ans5 = items.filter(function(element, idx, arr){
  return element.materials.length >= 8
}).map(function(element, idx, arr){
  return element.title + " No. of Materials: " +element.materials.length
})
//question 5 answer
document.getElementById('answer5').innerHTML = ans5


//question 6 find items made by themselves
var madeByMe = items.map(function(element,idx,arr){
  if (element.who_made === 'i_did') {
    return element.title
  }
}).filter(function(element, idx, arr) {
  return element
})

var numberByMe = madeByMe.length
//answer to question 6
document.getElementById('answer6').innerHTML = numberByMe
