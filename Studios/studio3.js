import {circle, square, ribbon, blank, stack, stack_frac, beside, beside_frac, show} from "rune";
function moony_1(bottom_right){
    return stack(
                beside(circle, blank),
                beside(square, bottom_right)
            );
}


show(moony_1(ribbon));


function moony_2(n){
    return n===1? circle: moony_1(moony_2(n-1));
}

show(moony_2(1));
show(moony_2(2));
show(moony_2(3));

function moony(n){
    return moony_helper(n,1,circle);
}

function moony_helper(n, count, rune){
    return count === n?
    rune:
    moony_helper(n, count+1,
            stack_frac(1/(count+1),
                beside_frac(1/(count+1), circle, blank),
                beside_frac(1/(count+1), square, rune)
            )
    );
}
show(moony(2));
show(moony(3));
show(moony(4));
show(moony(5));