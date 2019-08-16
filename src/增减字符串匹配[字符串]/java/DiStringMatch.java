package com.leetcode;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DiStringMatch {

    public int[] diStringMatch(String S) {
        List<Integer> res = new ArrayList<>();
        diMatch(res,0,S.length(),0,S);
        return res.stream().mapToInt(Integer::valueOf).toArray();
    };

    public void diMatch(List<Integer> res, int start, int end, int index, String S){
        if(index == S.length()){
            res.add(start);
            return;
        }
        if(S.charAt(index)=='I'){
            res.add(start++);
            diMatch(res,start,end,++index,S);
            return;
        }
        if(S.charAt(index)=='D'){
            res.add(end--);
            diMatch(res,start,end,++index,S);
            return;
        }
    }
}
