package com.leetcode;

import java.util.HashSet;

public class OnlyMRSCode {
    public int uniqueMorseRepresentations(String[] words) {
        String dict[] = new String[]{".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
                "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        HashSet<String> res = new HashSet<>();
        for(int i=0;i<words.length;i++){
            String item = "";
            for(int j=0;j<words[i].length();j++){
                item += dict[words[i].charAt(j)-'a'];
            }
            res.add(item);
        }
        return res.size();
    }
}
