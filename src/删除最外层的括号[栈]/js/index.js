/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    var stack = [];
    var res = "";
    var item = "";
    for (let i = 0; i < S.length; i++) {
        item += S[i];
        if (S[i] === "(") {
            stack.push(S[i]);
        } else {
            stack.pop();
            if (stack.length === 0) {
                var tmp = "";
                if (item.length >= 2) {
                    tmp = item.substring(1, item.length - 1);
                } else {
                    tmp = item;
                }
                res += tmp;
                item = "";
            }
        }
    }
    return res;
}

console.log(removeOuterParentheses("()()"));