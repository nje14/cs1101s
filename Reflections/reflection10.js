// function make_optimized_search(A) {
//     const len = array_length(A);
//     const B = [];
//     for(let i = 0; i < len; i = i + 1){
//         B[i] = A[i];
//     }
//     merge_sort(B);
//     return x => binary_search(B, x);
// }
//Q2

function fibo(n){
    let arr = [];
    for(let i = 0; i <= n; i = i + 1){
        if(i<2){
            arr[i] = i;
        }else{
            arr[i] = arr[i-1]+arr[i-2];
        }
    }
    return arr[n];
}
fibo(7);
function opti_fibo(n){
    let a = 0;
    let b = 1;
    if(n<2){
        return n;
    }
    for(let i = 2; i <=n; i = i + 1){
        
        b = a + b;
        a = b - a;
    }
    return b;
}

opti_fibo(7);
function fast_fibo(n){
    const phi = .5+.5*math_sqrt(5);
    return math_round((math_pow(phi,n)-math_pow(1-phi,n))/math_sqrt(5));
}
fast_fibo(7);
//Q3
//time complexity: O(nk)
//space complexity: O(nk)
//bonus: time complexity (nonmemo): O(2^n)
//space complexity (non memo): O(n) (or O(1) if iterative)