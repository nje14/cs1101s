//Task 1

// Produces a list of integers from a to b,
// assuming a, b are integers.
function enumUtil(listBuilder, a, b){
    if(a>b){
        return listBuilder;
    }else{
        return enumUtil(append(listBuilder,list(a)),a+1,b);
    }
}


function my_enum_list(a, b) {
    // YOUR SOLUTION HERE
    return enumUtil(null,a,b);
}

//Task 2

// my_build_list is predeclared; do not include it here.

// Produces a list of integers from a to b,
// assuming a, b are integers.

function my_enum_list(a, b) {
    // YOUR SOLUTION HERE
    return my_build_list((n)=>n+a,b-a+1);
}

//Task 3

// The function my_filter is predeclared. Do not include it here.

// Given a list of integers xs, returns a list that
//   contains only the odd integers in xs.
function odd_only(xs) {
    // YOUR SOLUTION HERE
    return my_filter((n)=>n%2===1,xs);
}

// Given a list of positive integers xs, returns a list that
//   contains only the prime numbers in xs.
// Hint: write a helper function.
function prime_only(xs) {
    // YOUR SOLUTION HERE
    function isPrime(n){
        if(n===1){
            return false;
        }else{
            
        }
        function find_divisor(n, test_divisor) {
            return test_divisor*test_divisor > n
            ? n
            : n % test_divisor===0
            ? test_divisor
            : find_divisor(n, test_divisor + 1);
        }
        return n === find_divisor(n,2);
    }
    return my_filter((n)=>isPrime(n),xs);
    
}


//Task 4

// Calls display on every item in the list xs.
function traverse(xs) {
    // YOUR SOLUTION HERE
    if(is_null(xs)){
        return -1;
    }else{
        display(head(xs));
        return traverse(tail(xs));
    }
}


//Task 5

// The function my_map is predeclared. Do not include it here.

// Calls display on every item in the list xs.
function traverse(xs) {
    // YOUR SOLUTION HERE
    return my_map(display,xs);
}
