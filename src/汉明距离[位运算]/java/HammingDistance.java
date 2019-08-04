package com.leetcode;

public class HammingDistance {

    public int hammingDistance(int x, int y) {
        int a = x^y;
        return numberOf(a);
    }

    public int numberOf(int n) {
        int count = 0;
        while(n!=0){
            count++;
            n = n &(n-1);
        }
        return count;
    }

}




