package com.leetcode;

public class InvertTree {

    public TreeNode invertTree(TreeNode root) {
        if(root==null){
            return root;
        }else{
            TreeNode left = root.left;
            TreeNode right = root.right;
            invertTree(left);
            invertTree(right);
            root.left = right;
            root.right = left;
            return root;
        }
    }
}
