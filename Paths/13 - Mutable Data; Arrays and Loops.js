//18

function dot_product(A, B) {
    // YOUR SOLUTION HERE
    let rtn = 0;
    for(let x = 0; x< array_length(A);x = x + 1){
        rtn = rtn + A[x] * B[x];
    }
    return rtn;
}

//19


function transpose(M) {
    // YOUR SOLUTION HERE
    const r = array_length(M);
    const c = array_length(M[0]);
    let rtn = [];
    for(let x = 0; x < c; x = x+1){
        let temp = [];
        for(let y = 0; y < r; y = y + 1){
            temp[y] = M[y][x];
        }
        rtn[x] = temp;
    }
    return rtn;
}