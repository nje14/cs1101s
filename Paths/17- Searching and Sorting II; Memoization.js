//Q8

function search_cond(A, cond) {
    // YOUR SOLUTION HERE
    for(let i = 0; i < array_length(A); i = i + 1){
        if(cond(A[i])){
            return i;
        }
    }
    return -1;

}

//Q9

function insert(A, pos, x) {

    // YOUR SOLUTION HERE
    for(let i = array_length(A); i > pos; i = i - 1){
        A[i] = A[i-1];
    }
    A[pos] = x;
}

//Q10

function insertion_sort(A) {
    // YOUR SOLUTION HERE
    let rtn = [];
    for(let i = 0; i < array_length(A); i = i + 1){
        let pos = search_cond(rtn, x=>x>A[i]);
        if(pos!==-1){
            insert(rtn, pos, A[i]);    
        }else{
            rtn[array_length(rtn)]=A[i];
        }
        
    }
    return rtn;
}