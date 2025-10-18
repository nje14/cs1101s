// TASK 1

function d_split_list(xs) {
    // *** Your answer here. ***
    const l = math_floor((length(xs)-1)/2);
    let pointer = xs;
    for(let i = 0; i < l; i = i + 1){
        pointer = tail(pointer);
    }
    let c = tail(pointer);
    set_tail(pointer, null);
    return pair(xs, c);
}

// TEST:
const my_list1 = list(1, 2, 3, 4, 5, 6);
const my_list2 = list(5, 4, 3, 2, 1);
d_split_list(my_list1);
d_split_list(my_list2);

// TASK 2

function d_merge(xs, ys) {
    // *** Your answer here. ***
    if(head(xs)>head(ys)){
        return d_merge(ys, xs);
    }
    let rtn = xs;
    let x_pointer = tail(xs);
    let y_pointer = ys;
    
    while(!is_null(x_pointer)&&!is_null(y_pointer)){
        if(head(x_pointer)<=head(y_pointer)){
            set_tail(rtn, x_pointer);
            x_pointer = tail(x_pointer);
        }else{
            set_tail(rtn, y_pointer);
            y_pointer = tail(y_pointer);
        }
        rtn = tail(rtn);
    }
    if(is_null(x_pointer)){
        set_tail(rtn, y_pointer);
    }else if(is_null(y_pointer)){
        set_tail(rtn, x_pointer);
    }
    return xs;
}

// TEST:
// const my_list1 = list(2, 4, 5, 9);
// const my_list2 = list(3, 5, 8);
// d_merge(my_list1, my_list2);

// TASK 3

// Copy-and-paste your d_split_list function for Task 1 here.
function d_split_list(xs) {
    // *** Your answer here. ***
    const l = math_floor((length(xs)-1)/2);
    let pointer = xs;
    for(let i = 0; i < l; i = i + 1){
        pointer = tail(pointer);
    }
    let c = tail(pointer);
    set_tail(pointer, null);
    return pair(xs, c);
}

// Copy-and-paste your d_merge function for Task 2 here.
function d_merge(xs, ys) {
    // *** Your answer here. ***
    if(head(xs)>head(ys)){
        return d_merge(ys, xs);
    }
    let rtn = xs;
    let x_pointer = tail(xs);
    let y_pointer = ys;
    
    while(!is_null(x_pointer)&&!is_null(y_pointer)){
        if(head(x_pointer)<=head(y_pointer)){
            set_tail(rtn, x_pointer);
            x_pointer = tail(x_pointer);
        }else{
            set_tail(rtn, y_pointer);
            y_pointer = tail(y_pointer);
        }
        rtn = tail(rtn);
    }
    if(is_null(x_pointer)){
        set_tail(rtn, y_pointer);
    }else if(is_null(y_pointer)){
        set_tail(rtn, x_pointer);
    }
    return xs;
}

function d_merge_sort(xs) {
    // *** Your answer here. ***
    if(is_null(xs)||is_null(tail(xs))){
        return xs;
    }else{
        let p = d_split_list(xs);
        return d_merge(d_merge_sort(head(p)),d_merge_sort(tail(p)));
    }

}

// TEST:
// const my_list = list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6);
// d_merge_sort(my_list);