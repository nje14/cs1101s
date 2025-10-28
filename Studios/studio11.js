function bubblesort_array(A) {
 const len = array_length(A);
 for (let i = len - 1; i >= 1; i = i - 1) {
 for (let j = 0; j < i; j = j + 1) {
 if (A[j] > A[j + 1]) {
 const temp = A[j];
 A[j] = A[j + 1];
 A[j + 1] = temp;
 }
 }
 }
}


function lsBubbleSort(ls){
    let currPointer = ls;
    while(currPointer!==null){
        for(let i = ls; tail(i)!==null; i = tail(i)){
            if(head(i)>head(tail(i))){
                const temp = head(i);
                set_head(i, head(tail(i)));
                set_head(tail(i),temp);     
                
            }
            
        }
        currPointer = tail(currPointer);
    }
}
const ls = list(1,6,2,6,32,345,-1,79,33,143,12,0);
lsBubbleSort(ls);
ls;


function cc(amount, kinds_of_coins) {
    return amount === 0
    ? 1
    : amount < 0 || kinds_of_coins === 0
    ? 0
    : cc(amount, kinds_of_coins - 1)
    +
    cc(amount - first_denomination(kinds_of_coins),
    kinds_of_coins);
}
function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ? 5 :
    kinds_of_coins === 2 ? 10 :
    kinds_of_coins === 3 ? 20 :
    kinds_of_coins === 4 ? 50 :
    kinds_of_coins === 5 ? 100 : 0;
}

// let M = [[ 1, 2, 3, 4],
// [ 5, 6, 7, 8],
// [ 9, 10, 11, 12],
// [13, 14, 15, 16]];
let M = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18],[19,20,21,22,23,24],[25,26,27,28,29,30],[31,32,33,34,35,36]];


function rotateMatrix(m){
    const n = array_length(m);
    for(let layer = 0; layer < n/2; layer = layer + 1){
        
        for(let i = layer; i < n-layer-1; i = i + 1){
            display(layer);
            display(i);
            
            let temp = m[layer][i];
            m[layer][i] = m[n-i-1][layer];
            m[n-i-1][layer] = m[n-layer-1][n-i-1];
            m[n-layer-1][n-i-1] = m[i][n-layer-1];
            m[i][n-layer-1] = temp;
            display(m);
        }
    }
}
rotateMatrix(M);
M;
