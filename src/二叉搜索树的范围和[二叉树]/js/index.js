/**
 * Definition for a binary tree node.
 **/
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    if(root==null){
        return 0;
    }
    if(root.val<L){
        return rangeSumBST(root.right,L,R);
    }if(root.val>=L&root.val<=R){
        return root.val+rangeSumBST(root.left,L,R)+rangeSumBST(root.right,L,R);
    }else{
        return rangeSumBST(root.left,L,R);
    }
};


let root = new TreeNode(10);
let left = new TreeNode(5);
let a = new TreeNode(3);
a.left = new TreeNode(1);
left.left = a;
let b = new TreeNode(7);
b.left = new TreeNode(6);
left.right = b;
root.left = left;
let right = new TreeNode(15);
right.left = new TreeNode(13);
right.right = new TreeNode(18);
root.right = right;
console.log(rangeSumBST(root,6,10));