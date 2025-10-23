//Q6

function n_of_n_stream() {
    // YOUR SOLUTION HERE
    function n_of_n_util(a,b){
        return (a<=0)
               ?n_of_n_util(b+1,b+1)
               :pair(b,()=>n_of_n_util(a-1,b))
               ;
    }
    return n_of_n_util(1,1);
    
}


//Q7

function shorten_stream(s, k) {
    // YOUR SOLUTION HERE
    return is_null(s)||k===0
           ?null
           :pair(head(s), () => shorten_stream(stream_tail(s),k-1));
}