//Task 1 

function binary_search_tree_to_string(bst) {
    return !is_null(bst)?binary_search_tree_to_string(left_branch(bst))
    +entry(bst)
    +"; "
    +binary_search_tree_to_string(right_branch(bst))
    :"";
}

const h = make_tree("h", make_empty_tree(), make_empty_tree());
const a = make_tree("a", make_empty_tree(), make_empty_tree());
const n = make_tree("n", h, make_empty_tree());
const c = make_tree("c", a, make_empty_tree());
const test_bst = make_tree("e", c, n);

// Test
binary_search_tree_to_string(test_bst);
binary_search_tree_to_string(cadet_names);

//Task 2

function find(bst, name) {
    // your answer here
    if(is_null(bst)){
        return false;
    }else{
        const curr = entry(bst);
        return curr===name
           ?true
           :curr<name
           ?find(right_branch(bst),name)
           :curr>name
           ?find(left_branch(bst),name)
           :-1;
           
    }
    
}

// Test
find(cadet_names, "[DATA REDACTED]");

//Task 3 

function insert(bst, item) {
    // your answer here
    if(is_null(bst)){
        return make_tree(item,make_empty_tree(),make_empty_tree());
    }
    else{
        //create a var curr to minimize function calls
        const curr = entry(bst);
        return item<curr
               ?make_tree(curr,insert(left_branch(bst),item),right_branch(bst))
               :item>=curr
               ?make_tree(curr,left_branch(bst),insert(right_branch(bst),item))
               :-1;//error code
    }
    
}


// Copy your binary_search_tree_to_string function here from Task 1.
function binary_search_tree_to_string(bst) {
    return !is_null(bst)?binary_search_tree_to_string(left_branch(bst))
    +entry(bst)
    +"; "
    +binary_search_tree_to_string(right_branch(bst))
    :"";
}

// Test

binary_search_tree_to_string(insert(make_empty_tree(), "x"));
// Should produce "x; "

const bst = accumulate((item, bst) => insert(bst, item),
                       make_empty_tree(),
                       list("g", "a", "r", "x", "p"));
binary_search_tree_to_string(bst);
// Should produce "a; g; p; r; x; "
//"Aaaaron Aaaang"
const cadet_names_with_aaaaron =  insert(cadet_names, "Sans Undertale");
binary_search_tree_to_string(cadet_names_with_aaaaron);
// Should produce "Aaaaron Aaaang; ..."
