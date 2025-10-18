/*
Q1
two pair.1 from integers_from, 1 from scale_stream(stream_map)
two + two 
two + 10*2 (2 from original, one pair from original stream, one pair from modified stream, all * 10
//for a 0 indexed "simple" stream wo stream processing, stream_ref creates n+1 pairs
for every stream processing function used, creates n+1 more pairs
*/


/*
Q2
two pairs
eight pairs
two at start + three when stream_tail called + three when stream_tail called
+
*/

/*
Q3
returns powers of 2
*/
/*
returns factorial
*/
function integers_from(n) {
return pair(n, () => integers_from(n + 1));
}
const integers = integers_from(1);
function mul_streams(a, b) {
return pair(head(a) * head(b),
() => mul_streams(stream_tail(a), stream_tail(b)));
}
const D = pair(1, () => mul_streams(D, integers));
stream_ref(D,6);
