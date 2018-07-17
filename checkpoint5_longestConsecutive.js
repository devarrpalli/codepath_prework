module.exports = { 
 //param A : array of integers
 //return an integer
    longestConsecutive : function(A){
        var maxLen=1;
        var currLen=1;
        
        A = A.sort(function(a,b) {
            return a-b;
        });
        
        for (var i = 0; i < A.length-1; i++) {
            if (A[i] === A[i+1]) {
                continue;
            }
            
            if ((A[i] + 1) === A[i+1]) {
                currLen++;
            } else {
                currLen=1;
            }
            
            maxLen = Math.max(maxLen, currLen);
        }
        
        
        return maxLen;
    }
};