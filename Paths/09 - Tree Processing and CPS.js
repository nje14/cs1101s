//Q1

// Calls display on every item in the tree xs.
function traverse(xs) {
    // Modify this function to work on trees.
    if (is_null(xs)) {
        return null;
    }else if(is_list(head(xs))){
        traverse(head(xs));
        return traverse(tail(xs));
    } 
    else {
        display(head(xs));
        return traverse(tail(xs));
    }
}

//Q2

// Given a tree xs, produces a list containing items in xs
// in the same order as traverse.

function flatten(xs) {
    // YOUR SOLUTION HERE
    function flatten(xs, c){
        return is_null(xs)
               ?c(null)
               :is_pair(head(xs))//is_pair is o(1) , is_list is o(n)
               ?flatten(tail(xs), x=>c(append(flatten(head(xs),x=>x),x)))
               :flatten(tail(xs), x=>c(append(list(head(xs)),x)));
    }
    
    return flatten(xs, x=>x);
    /*
    return is_null(xs)
           ?null
           :is_pair(head(xs))//is_pair is O(1) while is_list is O(n)
           ?append(flatten(head(xs)),flatten(tail(xs)))
           :append(list(head(xs)),flatten(tail(xs)));
     */     
}

//Q3
