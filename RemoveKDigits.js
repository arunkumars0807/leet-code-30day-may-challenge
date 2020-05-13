/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    if (num.length === k) {
        return '0';
    }
    
    var stack = [], i = 0;
    
    // Greedy Algorithms
    
    // Base check, if stack size and k are equal, then simply return '0'
    
    // Have a Stack
    // Keep pushing in the stack the characters one after another in a loop
        // If the top element in the stack [peek] is greater than (>) the current char in loop
            // The replace the top element in stack with the current char
        // Keep repeating
    // Finally Trim all the leading 0s
    // Return the string
    
    
    while (i < num.length) {
        var char = num[i];
        
        while (k > 0 && stack.length && stack[stack.length - 1] > char) {
            stack.pop();
            -- k;
        }
        
        stack.push(char);
        ++ i;
    }
    
    while (k > 0) {
        stack.pop();
        -- k;
    }
    
    i = 0;
    while (i < stack.length - 1) {
        if (stack[i] === '0') {
            ++ i;
        } else {
            break;
        }
    }
    
    return stack.splice(i).join('');
};
