// Booleans

function is_truthy(x) {
    return is_boolean(x) 
           ? x
           :is_number(x)
           ? x===0
           :is_string(x)
           ?x===""
           :x===undefined||x===null||x===NaN
           ?false
           : error(x, "boolean expected, received");
}



