import {entry, is_empty_tree, is_tree, 
    left_branch, make_empty_tree, make_tree, right_branch
} from "binary_tree";

function insert_cmp(x, xs, cmp) {
    return is_null(xs)
        ? list(x)
        : cmp(x, head(xs))
        ? pair(x, xs)
        : pair(head(xs), insert_cmp(x, tail(xs), cmp));
}
function insertion_sort_cmp(xs, cmp) {
    return is_null(xs)
        ? xs
        : insert_cmp(head(xs),
        insertion_sort_cmp(tail(xs), cmp),
        cmp);
}
const ls = list(6, 3, 8, 5, 1, 9, 6, 4, 2, 7);
display_list(insertion_sort_cmp(ls,(a,b)=>a<b));
display_list(insertion_sort_cmp(ls,(a,b)=>a>b));
display_list(insertion_sort_cmp(ls,(a,b)=>false));
display_list(insertion_sort_cmp(ls,(a,b)=>a%2===0?(b%2===0?a<b:true):(b%2===0?false:a>b)));

//merge - best case: O(n) worse case O(n^2)
//mergesort - best case O(nlogn)