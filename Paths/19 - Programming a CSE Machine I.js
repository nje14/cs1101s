//Task 1
function pretty_print_expression(expr) {
    // your solution goes here
    if(is_literal(expr)){
        return stringify(literal_value(expr));
    }else{
        return pretty_print_operator_combination(expr);
    }
}  

//Task 2
function parse_and_evaluate(input) {
    // your solution goes here
    let expr = parse(input);
    function $parse_and_evaluate(expr){
        if(is_literal(expr)){
            return literal_value(expr);
        }else{
            return apply_binary(operator_symbol(expr), $parse_and_evaluate(first_operand(expr)), $parse_and_evaluate(second_operand(expr)));
        }
    }
    return $parse_and_evaluate(expr);
    
}

//Task 3
	if(true){
		//dummy for formatting purposes
	}else if (is_array_instruction(command)) {
            
  	    // your solution goes here
  	        let len = array_instruction_size(command);
            let rtn = [];
  	        while(len>0){
  	            len = len - 1;
  	            rtn[len] = head(S);
  	            S = tail(S);
  	        }
  	        S = pair(rtn, S);
	
        }