const LoN = list(1,2,3,4,5,6,7,8,9,10);
display_list(map((n)=>2*n,LoN));
display_list(map((n)=>n%2===1?n:n-1,LoN));
display(accumulate((a,b)=>a%2===0?a+b:b,0,LoN));

function flatten_listUtil(listBuilder,ls){
    if(is_null(ls)){
        return listBuilder;
    }else if(is_number(head(ls))){
        return flatten_listUtil(append(listBuilder,list(head(ls))),tail(ls));
    }
    else{
        return flatten_listUtil(append(listBuilder,head(ls)),tail(ls));
    }
}
function flatten_list(ls){
    return flatten_listUtil(list(),ls);
}
const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));
display_list(flatten_list(LoL));
// Returns list(1, 2, 3, 4, 5, 6, 7, 8, 9)
function hofList(ls){
    return accumulate((a,b)=>is_number(a)?append(list(a),b):append(a,b),list(),ls );
}
display_list(hofList(LoL));
