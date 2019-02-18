/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var dummyHead = new ListNode(0);
    var p = l1, q = l2, curr = dummyHead;
    var carry = 0;
    while (p != null || q != null) {
        var x = (p != null) ? p.val : 0;
        var y = (q != null) ? q.val : 0;
        var sum = carry + x + y;
        carry = sum >= 10?1:0;
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};


//构造两个单链表
var a = new ListNode(2);
var a2 = new ListNode(4);
var a3 = new ListNode(3);
a.next = a2;
a2.next = a3;
var b = new ListNode(5);
var b2 = new ListNode(6);
var b3 = new ListNode(6);
b.next = b2;
b2.next = b3;


//计算并打印结果
var c = addTwoNumbers(a,b);
var d = c;
while(d!=null){
    console.log(d.val);
    d = d.next;
}

