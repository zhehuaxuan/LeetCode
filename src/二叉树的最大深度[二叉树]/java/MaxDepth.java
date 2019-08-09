package com.leetcode;


/**
 * Definition for a binary tree node.
 **
 */
class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode(int x) { val = x; }
}


public class MaxDepth {

    private int res = 0;

    public int maxDepth(TreeNode root) {
        depthIterator(root,0);
        return res;
    }

    public void depthIterator(TreeNode node,int counter){
        if(node!=null){
            depthIterator(node.left,counter+1);
            depthIterator(node.right,counter+1);
        }else{
            if(res<counter){
                res = counter;
            }
        }
    }


    public static void main(String[] args) {
        TreeNode root = new TreeNode(3);
        root.left = new TreeNode(9);
        TreeNode node = new TreeNode(20);
        root.right = node;
        node.left = new TreeNode(15);
        node.right = new TreeNode(7);
        MaxDepth depth = new MaxDepth();
        int res = depth.maxDepth(root);
        System.out.println(res);

    }

}
