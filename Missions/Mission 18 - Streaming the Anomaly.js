// TASK 4

const FPS = 10;

// Your array_to_stream function from TASK 1 goes here.
function array_to_stream(a) {
    // your solution goes here
    function $array_to_stream(a,i){
        return i<array_length(a)
               ?pair(a[i],()=>$array_to_stream(a, i+1))
               :null;
        
    }
    return $array_to_stream(a,0);
}

// Your stream_to_filter function from TASK 2 goes here.
function stream_to_filter(s) {
    // your solution goes here
    function filter(src, dest){
        let target = head(s);
       
        for(let r = 0; r < HEIGHT; r = r + 1){
            dest[r] = target[r];
        }
        let next = stream_tail(s);
        if(next===null){
            s = pair(target,()=>s);
        }else{
            s = next;
        }
    }
    return filter;
}
// Your loop function from TASK 3 goes here.
function loop(s) {
    // your solution goes here
    function $loop(s1){
        return s1===null?$loop(s):pair(head(s1),()=>$loop(stream_tail(s1)));
    }
    return $loop(s);
}

function time_lapse(s, n) {
    // your solution goes here
    function $time_lapse(s, i){
        return i===n
               ?pair(head(s),()=>$time_lapse(stream_tail(s),1))
               :$time_lapse(stream_tail(s),i+1);
    }
    return $time_lapse(s, n);
}


install_filter(
    stream_to_filter(
        time_lapse(loop(array_to_stream(anomaly_data)),
                   3)));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();