/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    var res = 0;
    function depthIterator(node,counter){
        if(node!=null){
            depthIterator(node.left,counter+1);
            depthIterator(node.right,counter+1);
        }else{
            if(res<counter){
                res = counter;
            }
        }
    } 
    depthIterator(root,0);
    return res;
};

   
// depthIterator(root);

let root = new TreeNode(3);
root.left = new TreeNode(9);
let node = new TreeNode(20);
root.right = node;
node.left = new TreeNode(15);
node.right = new TreeNode(7);

console.log(maxDepth(root));