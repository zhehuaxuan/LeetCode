/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    diMatch(res,0,S.length,0,S);
    return res;
};

function diMatch(res,start,end,index,S){
    if(index == S.length){
        res.push(start);
        return;
    }
    if(S.charAt(index)=='I'){
        res.push(start++);
        return diMatch(res,start,end,++index,S);
    }
    if(S.charAt(index)=='D'){
        res.push(end--);
        return diMatch(res,start,end,++index,S);
    }
}

console.log(diStringMatch('DDI'));