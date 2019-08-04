/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var NumberOf = function(n) {        
    let count = 0;
    while(n!=0){
        count++;
        n = n &(n-1);
    }
    return count;  
}

var hammingDistance = function(x, y) {
    var a = x^y;
    return NumberOf(a)    
};



