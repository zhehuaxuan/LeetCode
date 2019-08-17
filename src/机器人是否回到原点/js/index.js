/**
 * @param {string} moves
 * @return {boolean}
 */
var move = function(o,j){
    switch(j){
        case 'R':{
            o[0]++;
            break;
        }
        case 'L':{
            o[0]--;
            break;
        }
        case 'U':{
            o[1]++;
            break;
        }
        case 'D':{
            o[1]--;
            break;
        }
    }
}

var judgeCircle = function(moves) {
    let o = [0,0];
    for(let i=0;i<moves.length;i++){
        move(o,moves.charAt(i));
    }
    if(o[0]==0&&o[1]==0){
        return true;
    }else{
        return false;
    }
};

