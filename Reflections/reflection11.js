//Problem 1
//0 1 1 2
//

function add_streams(s1, s2) {
return is_null(s1)
? s2
: is_null(s2)
? s1
: pair(head(s1) + head(s2),
() => add_streams(stream_tail(s1),
stream_tail(s2)));
}

function zip_list_of_streams(ls){
    let n = length(ls);
    let rtn = pair(head(head(ls)),()=>zip_list_of_streams(append(tail(ls),list(stream_tail(head(ls))))));
    let curr = stream_tail(head(ls));
    return rtn;
}
const s1 = pair(1,()=>s1);
const s2 = pair(2,()=>s2);
const s3 = pair(3,()=>s3);
const ls = list(s1,s2,s3);
stream_ref(zip_list_of_streams(ls),6);
function partial_sums(s){
    return pair(head(s),()=>add_streams(stream_tail(s), partial_sums(s)));
}
//stream_ref(partial_sums(integers_from(1)),2);
