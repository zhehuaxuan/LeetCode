package com.leetcode;

import java.util.Arrays;

public class SortedSquare {

    public int[] sortedSquares(int[] A) {
        int n = 0;
        for(;n<A.length;n++){
            if(A[n]>=0){
                break;
            }
            if(A[n]<0){
                A[n] = -A[n];
            }
        }
        int j=n;
        if(j == A.length){
            Arrays.sort(A);
        }else{
            while(n>0){
                j = insertElementByIndex(n-1,j,A);
                n--;
            }
        }

        for(int i=0;i<A.length;i++){
            A[i] = A[i]*A[i];
        }
        return A;
    }


    private int insertElementByIndex(int i, int j, int A[]){
        int index = -1,n = j;
        for(;n<A.length;n++){
            if(A[i]<=A[n]){
                index = n-1;
                break;
            }
        }
        if(index == -1){
            index = A.length-1;
        }
        int tmp = A[i];
        int m = i;
        for(;m<index;m++){
            A[m] = A[m+1];
        }
        A[m] = tmp;
        return index;
    }
}

