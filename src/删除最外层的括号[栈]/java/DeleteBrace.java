package com.leetcode;

import java.util.Stack;

/**
 *
 */
public class DeleteBrace {
    public String removeOuterParentheses(String S) {
        Stack<Character> stack = new Stack<>();
        String res = "";
        String item = "";
        for (int i = 0; i < S.length(); i++) {
            item += S.charAt(i);
            if (S.charAt(i) == '(') {
                stack.push(S.charAt(i));
            } else {
                stack.pop();
                if (stack.isEmpty()) {
                    String tmp = "";
                    if (item.length() >= 2) {
                        tmp = item.substring(1, item.length() - 1);
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
}
