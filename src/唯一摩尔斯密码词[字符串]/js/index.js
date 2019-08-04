/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
    "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const res = [];
    for(let i=0;i<words.length;i++){
        let item = "";
        for(let j=0;j<words[i].length;j++){
            item += dict[words[i][j].charCodeAt()-'a'.charCodeAt()]
        }
        res.push(item);
    }
    return [...new Set(res)].length;

};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));