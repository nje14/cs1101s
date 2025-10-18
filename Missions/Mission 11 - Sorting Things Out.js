// Task 1

function apartition(xs, p) {
    // your answer here
    return pair(accumulate((a,b)=>a<=p?pair(a,b):b,null,xs),
                accumulate((a,b)=>a>p?pair(a,b):b,null,xs));
}
//actual partition answer. lack of hof is intentional for optimisation reasons
//function runs in O(n) rather than O(2n)
function partition(xs,p){
    function partitionUtil(a,b,xs,p){
        if(is_null(xs)){
            return pair(a,b);
        }else{
            
        }
        const curr = head(xs);
        
        return curr<=p
               ?partitionUtil(pair(curr,a),b,tail(xs),p)
               :partitionUtil(a,pair(curr,b),tail(xs),p);
    }
    return partitionUtil(list(),list(),xs,p);
}

// Test
const my_list = list(1, 2, 3, 4, 5, 6);
partition(my_list, 4);

// Task 2

function partition(xs,p){
    function partitionUtil(a,b,xs,p){
        if(is_null(xs)){
            return pair(a,b);
        }else{
            
        }
        const curr = head(xs);
        
        return curr<=p
               ?partitionUtil(pair(curr,a),b,tail(xs),p)
               :partitionUtil(a,pair(curr,b),tail(xs),p);
    }
    return partitionUtil(list(),list(),xs,p);
}

function quicksort(xs) {
    // your answer here
    if(is_null(xs)){
        return null;
    }else if(is_null(tail(xs))){
        //if length(xs) === 1
        return list(head(xs));
    }else{
        
    }
    const pivot = head(xs);
    const part = partition(tail(xs),pivot);
    return append(quicksort(head(part)),pair(pivot,quicksort(tail(part))));
           
}

// Test
//const my_list = list(23, 12, 56, 92, -2, 0);
//quicksort(my_list);

//Task 3 
//theta(n)

//Task 4
//theta(n^2)

//Task 5
//theta(n*log(n))