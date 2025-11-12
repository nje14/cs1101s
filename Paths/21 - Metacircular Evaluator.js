//Task 1

function eval_array_expression(expr) {
    // your solution goes here
    let elements = array_elements(expr);
    let rtn = [];
    let i = 0;
    while(elements!==null){
        rtn[i] = evaluate(head(elements));
        i= i + 1;
        elements = tail(elements);
    }
    return rtn;
}

//Task 2
function eval_array_access(array, index) {
    // your solution goes here
    return array[index];
}

//Task 3
function apply(operator, operands) {
    const first_op = head(operands);
    const second_op = head(tail(operands));
    if(is_array(first_op)&&is_array(second_op)&&operator==="+"){
        let rtn = [];
        for(let i = 0; i < array_length(first_op)+array_length(second_op); i= i + 1){
            rtn[i] = i<array_length(first_op)?first_op[i]:second_op[i-array_length(first_op)];
        }   
        return rtn;
    }
    return operator === "+"
           ? first_op + second_op
           : operator === "-"
           ? first_op - second_op 
           : operator === "*" 
           ? first_op * second_op 
           : operator === "/" 
           ? first_op / second_op
           : error(operator, "Unknown operator");
}
