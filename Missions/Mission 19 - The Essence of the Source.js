//I do not guarantee that the solutions are "correct"
//Task 1

let rtn = 0;
function eval_block(component, env) {
    //modification here
    rtn = rtn + 1;
    const body = block_body(component);
    const locals = scan_out_declarations(body);
    const unassigneds = list_of_unassigned(locals);
    return evaluate(body, extend_environment(locals,
                                             unassigneds, 
                                             env));
}
// your testing

function count_frames_created(program_string) {
    // Your solution here
    rtn = 0;
    let temp = parse_and_evaluate(program_string);
    return rtn;
}

// use your frame counter in the Programmable REPL

set_evaluator(count_frames_created);

//Task 2
let rtn = 0;
function make_function(parameters, body, env) {
    //modification here
    rtn = rtn + 1;
    return list("compound_function",
                parameters, body, env);
}
// your testing

function count_function_objects_created(program_string) {
    // Your solution here
    rtn = 0;
    let temp = parse_and_evaluate(program_string);
    return rtn;
}

// use your function object counter in the Programmable REPL

set_evaluator(count_function_objects_created);


//Task 3

const primitive_functions = list(
       list("head",    head             ),
       list("tail",    tail             ),
       list("pair",    pair             ),
       list("list",    list             ),
       list("is_null", is_null          ),
       list("display", display          ),
       list("error",   error            ),
       list("math_abs",math_abs         ),
              //modification here
              //ok so this metacircular evaluator cant handle binary operator
              //combinations for some reason but i got it to work in playground so yea
       list("+",       (x, y) => is_number(x)&&is_number(y)?x + y:is_list(x)&&is_list(y)?append(x,y):x+y  ),
       list("-",       (x, y) => x - y  ),
       list("-unary",   x     =>   - x  ),
       list("*",       (x, y) => x * y  ),
       list("/",       (x, y) => x / y  ),
       list("%",       (x, y) => x % y  ),
       list("===",     (x, y) => x === y),
       list("!==",     (x, y) => x !== y),
       list("<",       (x, y) => x <   y),
       list("<=",      (x, y) => x <=  y),
       list(">",       (x, y) => x >   y),
       list(">=",      (x, y) => x >=  y),
       list("!",        x     =>   !   x)
       );

//Task 4
//Notice: task has errors
//there is no is_function defined, use the defined is_function type functions
//eg iscompoundfunction(x), not exhaustive
const primitive_functions = list(
       list("head",    head             ),
       list("tail",    tail             ),
       list("pair",    pair             ),
       list("list",    list             ),
       list("is_null", is_null          ),
       list("display", display          ),
       list("error",   error            ),
       list("math_abs",math_abs         ),
       list("+",       (x, y) => x + y  ),
       list("-",       (x, y) => x - y  ),
       list("-unary",   x     =>   - x  ),
       list("*",       (x, y) => x * y  ),
       list("/",       (x, y) => x / y  ),
       list("%",       (x, y) => x % y  ),
       list("===",     (x, y) => x === y),
       list("!==",     (x, y) => x !== y),
       list("<",       (x, y) => x <   y),
       list("<=",      (x, y) => x <=  y),
       //modification here
       //again the metacircular evaluator doesnt support
       //binary operators but i tested it in playground it should work
       list(">",       (x, y) => is_number(x)&&is_number(y)?x >   y:is_function(x)&&is_list(y)?map(x,y):x>y),
       list(">=",      (x, y) => x >=  y),
       list("!",        x     =>   !   x)
       );
