module.exports = { 
 //param A : array of integers
 //param B : integer
 //param C : integer
 //return an integer
    numRange : function(A, B, C){
        var cnt=0;
        
        for ( var j = 0; j < A.length; j++) {
            var currSum=0;
            for (var i = j; i < A.length; i++) {
                currSum = currSum + A[i];
                
                if ( B <= currSum && currSum <= C) {
                    cnt++;
                }
                
                if (currSum > C) {
                    break;
                }
            }            
        }
        
        return cnt;
    }
    
};