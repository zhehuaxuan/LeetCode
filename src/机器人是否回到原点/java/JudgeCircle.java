package com.leetcode;

public class JudgeCircle {

    /**
     * @param {string} moves
     * @return {boolean}
     */
    public void move(int o[],char j){
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

    public boolean judgeCircle(String moves) {
        int o[] = new int[]{0,0};
        for(int i=0;i<moves.length();i++){
            move(o,moves.charAt(i));
        }
        if(o[0]==0&&o[1]==0){
            return true;
        }else{
            return false;
        }
    }


}
