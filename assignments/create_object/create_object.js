function CreateObject(arr) {
    // Write your code here
    var objAssign = {};
    var i = 0;
    function cb(e){
        
        if (i%2 !== 0){
            objAssign[arr[i-1]] = e;
        }            
        i = i + 1;
    }
    arr.forEach(cb);
    return objAssign
}

module.exports = CreateObject;