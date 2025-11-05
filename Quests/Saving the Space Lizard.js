//disclaimer: this solution is not correct
// TASK 1

function max_flies_to_eat(tile_flies) {// a kinda bad recursive implementation
//apologies for subjecting ur eyes to this abomination
    // *** Your answer here. ***
    function $max_flies_to_eat(arr, r, c){
        if(r>=array_length(arr)){
            return 0;
        }
        let rtn = 0;
        for(let i = math_max(0, c-1); i < math_min(c+2, 5); i = i + 1){
            rtn = math_max(rtn, $max_flies_to_eat(arr, r+1, i));
        }
        return rtn + arr[r][c];
    }
    let n = array_length(tile_flies[0]);
    let rtn = 0;
    for(let i = 0; i < n; i = i + 1){
        rtn = math_max(rtn, $max_flies_to_eat(tile_flies, 0, i));
    }
    return rtn;
    
    
    

}

// TEST:
const tile_flies = [[3, 1, 7, 4, 2],
                    [2, 1, 3, 1, 1],
                    [1, 2, 2, 1, 8],
                    [2, 2, 1, 5, 3],
                    [2, 1, 4, 4, 4],
                    [5, 7, 2, 5, 1]];

max_flies_to_eat(tile_flies); // Expected result: 32

// TASK 2

let mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function memo_max_flies_to_eat(tile_flies) {
    //a very lazy modification to the previous question by adding like
    //one if-else statement and a memo check
    //plus one write to memo
    mem = [];

    // *** Your answer here. ***
    function $max_flies_to_eat(arr, r, c){

        if(r>=array_length(arr)){
            return 0;
        }
        let rtn = 0;
        for(let i = math_max(0, c-1); i < math_min(c+2, 5); i = i + 1){
            if(read(r+1, i)!==undefined){
                rtn = math_max(rtn, read(r+1,i));
            }else{
                rtn = math_max(rtn, $max_flies_to_eat(arr, r+1, i));
            }
            
        }
        write(r, c, rtn + arr[r][c]);
        return read(r,c);
    }
    let n = array_length(tile_flies[0]);
    let rtn = 0;
    for(let i = 0; i < n; i = i + 1){
        rtn = math_max(rtn, $max_flies_to_eat(tile_flies, 0, i));
    }
    return rtn;
    
    
    
}

function a_memo_max_flies_to_eat(tile_flies) {
    //i decided to make another fn cuz why not
    //please dont grade this one is also kinda bad
    //i kinda didnt implement the sliding window properly
    mem = [];
    const ROWS = array_length(tile_flies);
    const COLUMNS = array_length(tile_flies[0]);
    mem[0] = tile_flies[0];
    let rtn = 0;
    // *** Your answer here. ***
    for(let r = 1; r < ROWS; r = r + 1){
        mem[r] = [];
        for(let c = 0; c < COLUMNS; c = c + 1){
            let temp = 0;
            for(let i = math_max(0, c-1); i < math_min(COLUMNS,c+2);i = i + 1){
                
                temp = math_max(temp, mem[r-1][i]);
                
            }
            mem[r][c] = tile_flies[r][c] + temp;
            if(r===ROWS-1){
                rtn = math_max(rtn, mem[r][c]);
            }
        }
    }
    return rtn;
}

// TEST:
const tile_flies = [[3, 1, 7, 4, 2],
                    [2, 1, 3, 1, 1],
                    [1, 2, 2, 1, 8],
                    [2, 2, 1, 5, 3],
                    [2, 1, 4, 4, 4],
                    [5, 7, 2, 5, 1]];

memo_max_flies_to_eat(tile_flies); // Expected result: 32
