//Q6

// put the first n elements of xs into a list
function take(xs, n) {
    // YOUR SOLUTION HERE
    return n<=0?null:pair(head(xs),take(tail(xs),n-1));
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    // YOUR SOLUTION HERE
    return n<=0?xs:drop(tail(xs),n-1);
}

//Q7

function min(a, b) {
    return a < b ? a : b;
}

// given a non-empty list xs, returns the smallest item in xs
function smallest(xs) {
    // YOUR SOLUTION HERE
    
    function iter(ls,m){
        
        return is_null(ls)?m:iter(tail(ls),min(m,head(ls)));
    }
    return iter(xs,head(xs));
}

//Q8

// removes the first instance of x from xs
function remove(x, xs) {
    // YOUR SOLUTION HERE
    return equal(x,head(xs))?tail(xs):pair(head(x),remove(x,tail(xs)));
}

//Q9

function selection_sort(xs) {
    if (is_null(xs)) {
        return null;
    } else {
        // We pick the smallest element, where should it go?
        // What should we recurse on?
        // YOUR SOLUTION HERE
        const small = smallest(xs);
        return pair(small,selection_sort(remove(small,xs)));
        
    }
}

