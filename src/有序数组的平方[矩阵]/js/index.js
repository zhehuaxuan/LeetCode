/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let n = 0;
    for(;n<A.length;n++){
        if(A[n]==0){
            break;
        }
    }
    while(n>=0){
        insertElementByIndex()
        n--;
    }
};

var insertElementByIndex = function(i,j,A){
    let n = j;
    let index = -1;
    for(;n<A.length;n++){
        if(A[i]>=A[n]){
            index = n;
            break;
        }
    }
    if(index === -1){
        index = A.length;
    }
    let tmp = A[i];
    for(let m=i+1;m<index;m++){
        A[m-1] = A[m];
    }
    A[index] = tmp;
    return A;
}