module.exports = { 
 //param A : integer
 //return a array of array of integers
    prettyPrint : function(A){
        var res = [];
        var k = 2*A -1;
        var c1=0, c2=k-1, r1=0, r2=k-1;
        
        for (var i = 0; i < k; i++) {
            var row = [];
            for (var j = 0; j < k; j++) {
                row.push(0);
            }
            
            res.push(row);
        }
        
        while (A >= 1) {
            for (var i=c1; i<=c2; i++) {
                res[i][r1] = A;
            }
            
            for (var j=r1; j<=r2; j++) {
                res[c1][j] = A;
            }
            
            for (var i=c1; i<=c2; i++) {
                res[i][r2] = A;
            }
            
            for (var j=r1; j<=r2; j++) {
                res[c2][j] = A;
            }
            
            c1++;
            r1++;
            c2--;
            r2--;
            A--;
        }
        
        return res;
    }
};