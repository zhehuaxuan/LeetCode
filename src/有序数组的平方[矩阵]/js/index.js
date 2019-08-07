/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let n = 0;
    for(;n<A.length;n++){
        if(A[n]>=0){
            break;
        }
        if(A[n]<0){
            A[n] = -A[n];
        }
    }
    let j=n;
    if(j == A.length){
        A.reverse();
    }else{
        while(n>0){
            j = insertElementByIndex(n-1,j,A)
            n--;
        }
    }
    

    for(let i=0;i<A.length;i++){
        A[i] = A[i]*A[i];
    }
    return A;
};

var insertElementByIndex = function(i,j,A){
    let index = -1,n = j;
    for(;n<A.length;n++){
        if(A[i]<=A[n]){
            index = n-1;
            break;
        }
    }
    if(index === -1){
        index = A.length-1;
    }
    let tmp = A[i];
    for(var m=i;m<index;m++){
        A[m] = A[m+1];
    }
    A[m] = tmp;
    return index;
}

console.log(sortedSquares([-1]));