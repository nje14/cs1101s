function make_withdraw(initial_balance,pass) {
    let balance = initial_balance;
    let password = pass;
    let attempts = 3;
    function withdraw(amount, pass) {
        if(attempts<=0){
            return "Acc locked";
        }
        if(pass !== password){
            attempts = attempts - 1;
            return "Invalid Password";
        }
        if (balance >= amount) {
            attempts = 3;
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds";
        }
    }
    return withdraw;
}
const acc = make_withdraw(100,"asdf");
display(acc(30,"asdf"));
display(acc(30,"asdf"));
display(acc(30,"e"));
display(acc(30,"e"));
display(acc(30,"e"));
display(acc(30,"e"));
//Q2
//214
//Q3
function accumulate_array(op, init, arr){
    for(let x = 0; x < array_length(arr); x = x + 1){
        init = op(init, arr[x]);
    }
    return init;
}
display(accumulate_array( (x, y) => x - y, 100, [1,2,3,4,5]));
//Q4
function filter_array(pred, arr){
    let rtn = [];

    for(let x = 0; x < array_length(arr); x = x + 1){
        if(pred(arr[x])){
            rtn[array_length(rtn)] = arr[x];
        }
    }
    return rtn;
    
}
display(filter_array(x => x % 2 === 0, [1,2,3,4,5]));