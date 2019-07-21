/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var res = 0;
    for(var i=0;i<S.length;i++){
        var c = S[i];
        if(J.includes(c)){
            res++;
        }
    }
    return res;
};