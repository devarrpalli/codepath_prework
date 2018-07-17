module.exports = { 
 //param A : array of integers
 //return a array of integers
    nextGreater : function(A){
        var res = [];
        
        for (var i = 0; i < A.length; i++) {
            res[i] = -1;
            for (var j = i+1; j < A.length; j++) {
                if (A[j] > A[i]) {
                    res[i] = A[j];
                    break;
                }
            }
        }
        
        return res;
    }
};