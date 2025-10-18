//Q1
list(20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0);

//Q2
function f(x,n){
    return x===n?0:x+f(x+1,n);
}
function stash_numbers(n){
    return f(0,n);
}
stash_numbers(20);

//Q3
const x =  1;
{
    const x = 2;
    {
        const x = 3;
        {
            const x = 4;
            {
                const x = 5;
            }
        }
    }
}
//Q3 modified
(x=>x=>x=>x=>x=>x)(1)(2)(3)(4)(5);


//Q4
function a(x){
    if(x>=0){
        return a(x-1)?true:true;
    }else{
        return false;
    }
}
a(3);
//Q5
function head_(x){
    display("h");
    return head(x);
}
function tail_(x){
    display("t");
    return tail(x);
}
function cps(xs, ys, cont) {
    if(is_null(xs)){
        return cont(ys);
    }else{
        let c = head_(xs);
        return cps(tail_(xs),ys,zs=>cont(pair(c,zs)));
    }
    
    
    // return is_null(xs)
    // ? cont(ys)
    // : cps(tail(xs), ys, zs => cont(pair(head(xs), zs)));
}
function append_cps(xs, ys) {
    return cps(xs, ys, xs => xs);
}
append_cps(list(1,2),list(2,3));