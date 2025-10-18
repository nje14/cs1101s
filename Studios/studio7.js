const is_even = x => x % 2 === 0;
const square = x => x * x;

function fast_expt(b, n) {
    return n === 0
        ? 1
        : is_even(n)
        ? square(fast_expt(b, n / 2))
        : b * fast_expt(b, n - 1);
}
function fast_expr_iter(b, n){
    function helper(b, n, count){
        return n===0
            ?count
            :is_even(n)
            ?helper(b, n/2, square(count))
            :helper(b, n-1, b*count);
    }
    return helper(b, n, 1);
}
display(fast_expr_iter(2,5));
function fast_expr_cps(b, n){
    function helper(b, n, f){
        return n===0
               ?f(1)
               :is_even(n)
               ?helper(b, n/2, x=>f(x*x))
               :helper(b, n-1, x=>f(x*b));
    }
    return helper(b, n, x=>x);
}
display(fast_expr_cps(2,6));

function eval_boolean(xs){
    return is_boolean(xs)//end of tree
           ?xs
           :equal(head(xs),"&&")
           ?eval_boolean(list_ref(xs,1))&&eval_boolean(list_ref(xs,2))
           :equal(head(xs),"||")
           ?eval_boolean(list_ref(xs,1))||eval_boolean(list_ref(xs,2))
           :error("Expected string operator at head of list but encountered non string operator",-1);
}
 
const my_exp = list("&&",
list("||", true, false),
list("&&", true, false));
eval_boolean(my_exp);
 
 
          
