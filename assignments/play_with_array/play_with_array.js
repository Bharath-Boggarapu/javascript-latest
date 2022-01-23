function getEven(arr) {
    var even = arr.filter(ele=>(ele%2)===0);
    return even
}

function multiplyByN(arr, n) {
   var i = 0;
   function mult(elem){
       arr[i] = elem * n
       i += 1
   }
   arr.forEach(mult);
   return arr
}

function removeNthElement(arr, n) {
    arr.splice(n,1)
    return arr
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}