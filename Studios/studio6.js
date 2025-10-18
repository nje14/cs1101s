function my_map(f, ls){
    return accumulate((a,b)=>pair(f(a),b),null,ls);
}
function remove_duplicates(ls){
    if(is_null(ls)){
        return null;
    }else{
        
    }
    const curr = head(ls);
    const newls = filter(n=>!equal(n,curr),ls);
    return pair(curr,remove_duplicates(newls));
}
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        // Combinations that do not use the head coin
        // for the remaining amount.
        const combi_B = makeup_amount(x-head(coins), tail(coins));
        // Combinations that use the head coin.
        const combi_C = map(x => pair(head(coins),x),combi_B);
        return append(combi_A, combi_C);
    }
}
display_list(makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));

function remove_duplicate(ls){
    return accumulate((a,b)=>is_null(member(a,b))?pair(a,b):b,null,ls);
}
remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));

function subsets(ls){
    
    function perm(ls){
        if(is_null(ls)){
            return list(null);
        }else{
            const excludeCurr = subsets(tail(ls));
            const includeCurr = map(x=>pair(head(ls),x),subsets(tail(ls)));
            return append(excludeCurr,includeCurr);
        }
    }
    return map(a=>pair(a,perm(remove(a,ls))),ls);
}
display_list(subsets(list(1,2,3)));
function permutations(ls){
    return is_null(ls)?list(null):accumulate(append,null,map(x=>map(p=>pair(x,p),permutations(remove(x,ls))),ls));
}

display_list(permutations(list(1,2,3)));
