/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    var queue = [{ parent: null, level: 0, node: root}], count = 1, level = 0, map = {};
    while (queue.length) {
        count = queue.length;
        while (count) {
            var node = queue.splice(0, 1)[0].node;
            if (node.left) {
                queue.push({level: level, parent: node, node: node.left});
            }
            if(node.right) {
                queue.push({ level: level, parent: node, node: node.right});
            }
            -- count;
        }
        ++ level;
        
        for (var i = 0; i < queue.length; ++ i) {
            if (queue[i].node.val === x) {
                map[x] = { val: queue[i].parent.val, level: queue[i].level };
            }
            if (queue[i].node.val === y) {
                map[y] = { val: queue[i].parent.val, level: queue[i].level };
            }
        }
        
        if (map[x] !== undefined && map[y] !== undefined) {
            return (map[x].val !== map[y].val) && (map[x].level === map[y].level)
        }
        
    }
    
    return false;
};
