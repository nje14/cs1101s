function my_sum(n){
    return my_sum_util(n, 0);
}
function my_sum_util(n, sum){
    if(n>0){
        
        return my_sum_util(n-1, sum + n*(n+1));
    }else{
        return sum;
    }
}
function sum(term, a, next, b){
    return a>b?0
              :term(a)+sum(term, next(a),next, b);
}
function sum_iter(term, a, next, b, curr){
    if(a>b){
        return curr;
    }else{
        
        return sum_iter(term, next(a), next, b, curr+term(a));
    }
}
function my_sum2(n){
    return sum_iter((a)=>a*(a+1),1, (a)=>a+1,n,0);
}
//my_sum(4);
my_sum2(4);
