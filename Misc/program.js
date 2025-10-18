//https://source-academy.github.io/modules/documentation/functions/rune.stack_frac.html
import {rcross, sail, nova, heart, pink ,blue, show,
quarter_turn_right, stack, stack_frac, beside, quarter_turn_left
    , turn_upside_down, stackn, repeat_pattern, rotate, scale
,overlay, flip_vert, flip_horiz, overlay_frac
} from "rune";
const math_pi = 3.14159;
const baseRune = flip_vert(nova);
function quad(rune){
    return beside(stack(quarter_turn_left(rune),turn_upside_down(rune))
    , stack(rune,quarter_turn_right(rune)));
}
const myrune = quad(blue(baseRune));

function tile(rune, n, m){//row by column
    return stackn(n, quarter_turn_left(stackn(m, rune)));
}

show(tile(myrune, 5 , 6));
show(tile(quad(blue(rcross)),5,5));

function rot(rune){
    return rotate(2*math_pi/8, rune);
}
show(repeat_pattern(5, rot, scale(0.25, heart)));

show(overlay_frac(0, blue(heart), turn_upside_down(blue(heart))));
function stackup(n, rune){
    return n>0?stack_frac(1/n, rune, stackup(n-1,rune)):rune;
}
show(stackup(10,nova));
function factorial(n){
    return factUtil(1,n) ;
}
function factUtil(product, counter){
    return counter>0?factUtil(product*counter,counter-1):product;
}
display(factorial(5));

