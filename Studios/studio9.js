function d_filter(pred, xs){
    if(is_null(xs)){
        return xs;
    }else{
        
        if(pred(head(xs))){
            set_tail(xs, d_filter(pred,tail(xs)));
            return xs;
        }else{
            xs = tail(xs);
            return d_filter(pred,xs);
        }
    }
}
// function d_filter_loop(pred, xs){
//     if(is_null(xs)){return null;}
//     while(!pred(head(xs))){
//         if(is_null(xs)){
//             return null;
//         }
//         xs = tail(xs);
//     }
//     let curr = xs;
//     while(!is_null(curr)){
//         if(pred(head(curr))){
//             set_tail(xs, curr);
//             xs = tail(xs);
//         }
//     }
//     return xs;
    
// }
const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);
display(d_filter(x => x % 2 === 0, L)); // returns [2, [4, [6, [8, null]]]]
L; // What is L now?
function count_pairs(x){
    let memo = [];
    function test(x){
        for(let i = 0; i < array_length(memo); i = i + 1){
            if(memo[i]===x){
                return true;
            }
        }
        return false;
    }
    function recur(xs){
        if(!is_pair(xs)||test(xs)){
            return 0;
        }
        else{
            memo[array_length(memo)] = xs;
            return 1 + recur(head(xs)) + recur(tail(xs));
        }
    }
    return recur(x);
}
let c = list(1,2,3);
let d = tail(c);
let e = tail(d);
set_head(c, d);
set_head(d, e);
draw_data(c);
display(count_pairs(c));
function array_append(arr, l){
    arr[array_length(arr)] = l;
}