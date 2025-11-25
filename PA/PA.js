//Task 1

function separate(p, xs) {

    // WRITE YOUR SOLUTION HERE.
    let rtn1  = null;
    let rtn2 = null;
    while(xs!==null){
        if(p(head(xs))){
            rtn1 = pair(head(xs),rtn1);
        }else{
            rtn2 = pair(head(xs),rtn2);
        }
        xs = tail(xs);
    }
    return pair(reverse(rtn1),reverse(rtn2));

}

//Task 2
function orbit(f, x0, n) {

    // WRITE YOUR SOLUTION HERE.
    let rtn = pair(x0, null);
    let prev = x0;
    for(let i = 0; i <n; i = i + 1){
        prev = f(prev);
        rtn = pair(prev, rtn);
    }
    return display(reverse(rtn));

}

//Task 3
function cycle_detector(f, x0, n) {

    // WRITE YOUR SOLUTION HERE.
    
    let memo = [x0];
    let curr = x0;
    for(let i = 0 ;i < n ; i = i + 1){
        curr = f(curr);
        for(let j = 0; memo[j]!==undefined; j = j + 1){
            if(curr===memo[j]){
                return i-j+1;
            }
        }
        memo[array_length(memo)] = curr;
    }
    return false;
    

}

//Task 4

const ascii_grayscale = [
    " ",  // 0 - darkest (empty space)
    ".",  // 1
    ":",  // 2
    "-",  // 3
    "=",  // 4
    "+",  // 5
    "*",  // 6
    "#",  // 7
    "%",  // 8
    "@"   // 9 - lightest (most dense)
];

// Part A
function normalize_pixel_values(r, g, b) {

    // WRITE YOUR SOLUTION HERE.;
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;

}

// Part B
function grayscale_to_ascii(value) {

    // WRITE YOUR SOLUTION HERE.
    return value>=1?ascii_grayscale[9]:ascii_grayscale[math_floor(10*value)];

}

// Part C
function pixel_to_ascii(p) {

    // WRITE YOUR SOLUTION HERE.
    return grayscale_to_ascii(normalize_pixel_values(p[0],p[1],p[2]));

}

// Part D
function image_to_ascii(image) {

    // WRITE YOUR SOLUTION HERE.
    let rtn = "";
    for(let r = 0; image[r]!==undefined; r = r + 1){
        for(let c = 0; image[r][c]!==undefined; c = c + 1){
            rtn  = rtn + pixel_to_ascii(image[r][c]);
        }
        rtn = rtn + "\n";
    }
    return rtn;

}

//Task 5
//Notice: program does not pass all test cases
//Use recursion w memo
//if there is a one pass solution, i am not big brain enough for it

function is_interleaving(A, B, C) {

    // WRITE YOUR SOLUTION HERE.
    let stack = null;
    while(!is_null(C)){
        let curr = head(C);
        if(is_null(A)){
            while(!is_null(C)){
                if((B===null&&C!==null)||(B!==null&&C===null)||head(B)!==head(C)){
                    return false;
                }
                B = tail(B);
                C = tail(C);
            }
            return true;
        }
        if(is_null(B)){
            while(!is_null(C)){
                if((A===null&&C!==null)||(A!==null&&C===null)||head(A)!==head(C)){
                    return false;
                }
                A = tail(A);
                C = tail(C);
            }
            return true;
        }
        
        if(stack!==null){
            if(curr===head(A)&&curr===head(B)){
                stack = pair(curr, stack);
                A = tail(A);
                B = tail(B);
            }else if(curr===head(A)){
                while(!is_null(stack)){
                    B = pair(head(stack), B);
                    stack  = tail(stack);
                }
                A = tail(A);
            }else if(curr===head(B)){
                while(!is_null(stack)){
                    A = pair(head(stack),A);
                    stack  = tail(stack);
                }
            }else{
                return false;
            }
            
        }else{
            if(curr===head(A)&&curr===head(B)){
                stack = pair(curr,stack);
                A = tail(A);
                B = tail(B);
            }else if(curr===head(A)){
                A = tail(A);
            }else if(curr===head(B)){
                B = tail(B);
            }else{
                return false;   
            }
        }
        C = tail(C);
    }
    return true;

}

//Task 6
function kolakoski() {

    // WRITE YOUR SOLUTION HERE.
    let queue = null;
    function $kolakoski(term, number, consumed){
        
        if(number>0){
            if(consumed){
                
            }
            else if(queue===null){
                queue = pair(term, queue);
            }
            else{
                let temp = queue;
                while(tail(temp)!==null){
                    temp = tail(temp);
                }
                set_tail(temp, pair(term, null));
            }
            return pair(term, ()=>$kolakoski(term, number-1,false));
        }else{
            if(queue===null){
                return term===1?$kolakoski(2, 2, true):$kolakoski(1,1, true);
            }
            let rtn = $kolakoski(term===2?1:2,head(queue), false);
            queue = tail(queue);
            return rtn;
        }
        
    }
    return pair(1, ()=>$kolakoski(2,2,true));
}

//Task 7

// Calculator language 

function evaluate(expr) { 
    return is_literal(expr)
           ? literal_value(expr)
           : is_operator_combination(expr)
           ? apply(operator_combination_operator_symbol(expr),
               list_of_values( 
                 list(operator_combination_first_operand(expr),
                      operator_combination_second_operand(expr))))
           : error(expr, "Unknown expression: ");
}
function list_of_values(exprs) {
    return map(evaluate, exprs); 
}

function apply(operator, operands) {
    const first_op = head(operands);
    const second_op = head(tail(operands));
    return operator === "+"
           ? first_op + second_op
           : operator === "-"
           ? first_op - second_op 
           : operator === "*" 
           ? first_op * second_op 
           : operator === "/" 
           ? first_op / second_op
           : operator === "%" 
           ? first_op % second_op
           : error(operator, "Unknown operator");
}

//
// syntax functions
//

// literals

function is_literal(component) {
    return is_tagged_list(component, "literal");
}
function literal_value(component) {    
    return head(tail(component));
}

function is_tagged_list(component, the_tag) {
    return is_pair(component) && head(component) === the_tag;
}

// operator combinations

function is_operator_combination(component) {	    
    return is_tagged_list(component, "binary_operator_combination");
}
function operator_combination_operator_symbol(component) {
    return list_ref(component, 1);
}
function operator_combination_first_operand(component) {
    return list_ref(component, 2);
}
function operator_combination_second_operand(component) {
    return list_ref(component, 3);
}

function parse_and_evaluate(p) {
    return evaluate(parse(p));
}

function tokenize(program) {

    // WRITE YOUR SOLUTION HERE.
    function is_op(char){
        return char==="+"||char==="-"||char==="*"||char==="/"||char==="%";
    }
    let rtn = null;
    let stack = "";
    for(let i = 0; char_at(program, i)!==undefined; i = i + 1){
        let curr = char_at(program, i);
        if(curr === " "){
            continue;
        }
        else if(is_op(curr)){
            if(stack!==""){
                rtn = pair(curr, pair(stack, rtn));
                stack = "";
            }else{
                rtn = pair(curr, rtn);
            }
        }else if(curr===")"||curr===";"){
            if(stack!==""){
                rtn = pair(curr, pair(stack, rtn));
                stack = "";
            }else{
                rtn = pair(curr, rtn);
            }
        }else if(curr==="("){
            rtn = pair(curr, rtn);
        }
        else{
            stack = stack + curr;
        }
        
    }
    return reverse(rtn);
    
  
}

// given, for testing
function tokens_to_program_string(ts) {
    return accumulate( 
                (ts, t) => ts + " " + t, 
                "", 
                ts);
}

// given, for testing
function test(p) {
    return parse_and_evaluate(p)
           === 
           parse_and_evaluate(tokens_to_program_string(
                                 tokenize(p)));
}

// test("1 + 2 * 3");
