function main(ls,op){
    if(is_null(op)){
        return ls;
    }
    else if(is_null(ls)){
        return -1;
    }
    else{
        return main(head(op)(ls),tail(op));
    }
}
const ls1 = list(7, list(6, 5, 4), 3, list(2, 1));
const ls2 = list(list(7), list(6, 5, 4), list(3, 2), 1);
const ls3 = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
const ls4 = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

//main(ls1, list(tail,tail,tail,head,tail,head));
//main(ls2, list(tail,tail,tail,head));
//main(ls3, list(tail,tail,tail,head,tail,head,tail,head,head));
main(ls4, list(tail,tail,head,head,head));
