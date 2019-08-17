/**
 * Definition for a binary tree node.
 */
 function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 }
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root==null){
        return root;
    }else{
        let left = root.left;
        let right = root.right;
        invertTree(left);
        invertTree(right);
        root.left = right;
        root.right = left;
        return root;
    }
};


let tree = new TreeNode(4);
let left = new TreeNode(2);
left.left = new TreeNode(1);
left.right = new TreeNode(3);
tree.left = left;
let right = new TreeNode(7);
right.left = new TreeNode(6);
right.right = new TreeNode(9);
tree.right = right;
console.log(invertTree(tree));