//Task 1
const alternating_ones = pair(1, ()=>pair(-1,()=>alternating_ones)); // YOUR SOLUTION HERE

//Task2
function make_alternating_stream(s) {
    function $make_alternating_stream(s, x){
        return pair(x*head(s),()=>$make_alternating_stream(stream_tail(s), -x));
    }
    // YOUR SOLUTION HERE
    return $make_alternating_stream(s, 1);
}

//Task 3

function zip_streams(s1, s2) {

    // YOUR SOLUTION HERE
    function $make_alternating_stream(s1, s2, x){
        return x
               ?pair(head(s1),()=>$make_alternating_stream(stream_tail(s1), s2, !x))
               :pair(head(s2),()=>$make_alternating_stream(s1, stream_tail(s2), !x));
        
    }
    // YOUR SOLUTION HERE
    return $make_alternating_stream(s1, s2, true);
}

//Task 4

function every_other(s) {

    // YOUR SOLUTION HERE
    return pair(head(s), ()=>every_other(stream_tail(stream_tail(s))));
}

//Task 5

function partial_sums(s) {

    // YOUR SOLUTION HERE
    function $partial_sums(s, sum){
        return pair(head(s)+sum, ()=>$partial_sums(stream_tail(s), sum+head(s)));
    }
    return $partial_sums(s, 0);

}