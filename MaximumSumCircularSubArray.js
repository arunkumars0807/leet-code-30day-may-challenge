/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    var sumFromKadane = kadane(A), n = A.length;
    var maxWrap  =  0; 
    for (var i = 0; i < n; i++)  { 
        maxWrap += A[i];
        A[i] = -A[i];
    }

    maxWrap = maxWrap + kadane(A);

    return maxWrap === 0 && maxWrap !== sumFromKadane ? sumFromKadane : Math.max(maxWrap, sumFromKadane); 
};

var kadane = function(A) {
    var max_so_far = A[0]; 
   var curr_max = A[0]; 
  
   for (var i = 1; i < A.length; i++) 
   { 
        curr_max = Math.max(A[i], curr_max+A[i]); 
        max_so_far = Math.max(max_so_far, curr_max); 
   } 
   return max_so_far;
}
