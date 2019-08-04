package com.leetcode;

public class InvertImage {

    public int[][] flipAndInvertImage(int[][] A) {
        for (int i = 0; i < A.length; i++) {
            int j = 0;
            while (j <= (A[i].length - 1) / 2) {
                if (A[i][j] == A[i][A[i].length - 1 - j]) {
                    if (A[i][j] == 1) {
                        A[i][j] = 0;
                        A[i][A[i].length - 1 - j] = 0;
                    }else if (A[i][j] == 0) {
                        A[i][j] = 1;
                        A[i][A[i].length - 1 - j] = 1;
                    }
                }
                j++;
            }
        }
        return A;
    }
}