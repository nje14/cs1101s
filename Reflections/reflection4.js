function main1(){
    return list(1,2,3);
}
function main2(){
    return pair(1,pair(2,3));
}

function main3(){
    function helper(x,y){
        return list(x,y);
    }    
    return list(helper(1,2),helper(3,4),helper(5,6));
}
function main4(){
    const lst = list(7, 6, 5, 4, 3, 2, 1);
    const indexOf = (ls,n)=>n===0?head(ls):indexOf(tail(ls),n-1);
    return indexOf(lst,3);
}
function main5(){
    
    const lst = list(list(7), list(6, 5, 4), list(3, 2), 1);
    return head(tail(tail(head(tail(lst)))));
}
function main6(){
    const lst = list(7, list(list(list(6, 5, list(list(4)), 3), 2)), 1);
    return head(head(head(tail(tail(head(head(head(tail(lst)))))))));
}
function main(ls, op){
    if(is_null(tail(op))){
        return head(op)(ls);
    }else{
        return main(head(op)(ls),tail(op));
    }
}
const lst = list(7, list(list(list(6, 5, list(list(4)), 3), 2)), 1);
const op = list(tail,head,head,head,tail,tail,head,head,head);
main(lst,op);