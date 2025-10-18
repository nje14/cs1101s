//Task 1
//Editor's note: merge sort runs in O(n*log(n)), not O(n^2) as the answer states


/*

Describe your solution here, including
its order of growth.

You will get full XP only for
a solution that has an order of growth
O(n²) and that does not have an order
of growth Θ(n²).

this strategy is adapted from the merge sort algorithm provided
in lecture 6A, as well as involving CPS (not child protective services)
from lecture 5B

step 1: as with merge sort, repeatedly divide the lists in half until no longer possible
step 2: when merging the lists back, if the head element of the first list
is greater than that of the head element of the second, 
every single element after the head element is also incorrectly sorted 
(since said lists is already sorted by wishful thinking)
step 3: if this is the case,
add the number of elements of the first list into a running sum
(to indicate the score of the algorithm)
step 4: keep track of the score as the lists are merged back into the original lists
do so by adding together the (accumulated) scores of each half 
followed by the score of merging these two halves
step 5: return the final score as answer
addendum: in order to do this, a iterative approach is needed as recursive approaches
cannot properly "store" information without any simple approach i can think of
(without the let keyword or using variables)
furthermore traditional iterative approaches cannot be used
due to requiring to use append, which has a theta(n) time complexity
and will absolutely nuke the runtime
as a result i have elected to use a CPS approach to this problem for my own sanity

(worst case) time complexity:
same as merge sort;
O(n^2)
theta(n*log(n))


*/


//Task 2

function graderVer1(arr) {
    // your solution here
    return tail(graderMergeSort(arr));
}
//i am just saying
//this problem would be much, much, much easier if the let keyword was allowed
//or if immutability was not enforced
//just saying

//graderMergeSort is a modified mergeSort function that takes in a list
//and returns a pair containing a mergeSorted list and the score of the algorithm thus far
function graderMergeSort(xs){
    
    if(is_null(xs)||is_null(tail(xs))){
        return pair(xs,0);
    }else{
        const mid = middle(length(xs));//get position of middle element
        const h = graderMergeSort(take(xs,mid));//divide list into half (if possible)
        const t = graderMergeSort(drop(xs,mid));//ditto
        const rtn = graderMerge(head(h), mid, head(t), x=>x, 0);//obtain the score of comparing these two sorted lists
        //display(rtn);//debug
        //sum up the following: total score from the first half list,
        //total score of the second half list
        //and the score from merging the two
        //return a pair containing the merged list and the total score
        return pair(head(rtn),tail(rtn)+tail(h)+tail(t));
    }
}


//gradeMerger is a modified merge function that
//accumulates and returns a pair containing the mergeSorted list 
//using CPS style programming and the score of the two unsorted input lists
//note that the length of xs is passed in as an argument
//this is to prevent needing to call length(xs)
//which contributes nontrivially to the runtime
function graderMerge(xs, lenxs, ys, f, count){
    if(is_null(ys)){//break case, return accumulated list and count
        return pair(f(xs), count);
    }else if(is_null(xs)){//ditto
        return pair(f(ys), count);
    }else{//compare the head of each list
        const x = head(xs);
        const y = head(ys);
        
        if(x<=y){//<= is important here. 1,1 is a sorted pair
            return graderMerge(tail(xs),lenxs-1, ys, a => f(pair(x, a)), count);
        }else{//if x>y, add the number of elements of xs to the score
            return graderMerge(xs, lenxs, tail(ys), a => f(pair(y,a)), count+lenxs);
        }
    }
    
}
//remaining functions copy and pasted from lecture 6A slides

// put the first n elements of xs into a list
function take(xs, n) {
    // YOUR SOLUTION HERE
    return n<=0?null:pair(head(xs),take(tail(xs),n-1));
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    // YOUR SOLUTION HERE
    return n<=0?xs:drop(tail(xs),n-1);
}
function middle(n) {
    return math_floor(n / 2);
}

//test cases
display(graderVer1(list(6,1,2,3,4,5)));
display(graderVer1(list(1,2,3,4,5,6)));
display(graderVer1(list(1,1,1,1,1,1)));
display(graderVer1(list(1,3,5,1,3,5)));
display(graderVer1(list(1,1,1,2,1,1)));
display(graderVer1(list()));
display(graderVer1(list(5)));

//Task 3

/* Describe your solution here

for the sake of my own sanity
i am going to do a brute force method
because i frankly do not have the time do think of a fancy solution
my midterms are coming up and i want to spend time studying
instead of doing a sidequest

step1: iterate through every single element in list
step2: for each such element x, count how many pairs (y,z)
in the tail of the list such that y,z is strictly decreasing
step3: do so by taking every element y<x in the tail of the list
and counting how many elements after are less than y
time complexity:
theta(n^3)
im sorry to do anything better i need access to hashmaps 
and/or std::bitset 
and mutability


*/

//Task 4

function graderVer2(arr) {
  // your solution here
    //helper1 goes through every element in arr and
    //accumulates the number of strictly decreasing triples
    function helper1(arr, score){
        if(is_null(arr)){
            return score;
        }else{
            const currScore = helper2(head(arr), tail(arr),0);
            return helper1(tail(arr), score + currScore);
        }
    }
    //helper2 takes in an element x and a list containing 
    //all remaining elements in the list and
    //tests which are lesser than x
    //and calling helper3 if the element is lesser than x
    function helper2(x, arr, score){
        if(is_null(arr)){
            return score;
        }else if(x>head(arr)){
            const currScore = helper3(head(arr), tail(arr), 0);
            return helper2(x, tail(arr), score + currScore);
        }else{
            return helper2(x, tail(arr), score);
        }
    }
    //takes in the second element and the remaining elements in list
    //and adds one to the score if the element is lesser than the second element
    //note that by helper2 the second element is lesser than the first already
    
    function helper3(y, arr, score){
        if(is_null(arr)){
            return score;
        }else if(y>head(arr)){
            return helper3(y, tail(arr), score + 1);
        }else{
            return helper3(y, tail(arr), score);
        } 
    }
    return helper1(arr,0);
}

// test your program!
display(graderVer2(list(5, 2, 3, 1, 4))); // should return 2
display(graderVer2(list()));
display(graderVer2(list(1,2,3,4,5,6)));
display(graderVer2(list(1,1,1,1,1,1)));
display(graderVer2(list(5,1,2,4,6,4)));
display(graderVer2(list(3)));
display(graderVer2(list(5, 3, 1, 2, 1, 3)));
//i spent way, way, wayyy too long on this quest


//Addendum
//A O(n^2) solution would be as such:
//For each element in array
//Iterate to the left and right of it
//See how many elements on the left is strictly greater and how many elements on the right is strictly smaller
//multiply the two and add to the score
