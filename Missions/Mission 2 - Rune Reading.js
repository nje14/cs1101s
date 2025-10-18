//Task 1 

function fractal(pic, n) {
    // your answer here
    return n>1?beside(pic,stackn(2,fractal(pic,n-1))):pic;
}

// Test
show(fractal(make_cross(rcross), 3));
show(fractal(make_cross(rcross), 5));
show(fractal(make_cross(rcross), 7));

//Task 2 

function hook(frac) {
    // your answer here
    return stack(square, quarter_turn_right(stack_frac(frac, square, blank)));
}

// Test
show(hook(1));
show(hook(0));
show(hook(1/2));
show(hook(1/5));

//Task 3

// copy your hook function from Question 2 here if required
function hook(frac) {
    // your answer here
    return stack(square, quarter_turn_right(stack_frac(frac, square, blank)));
}

function spiral(thickness, depth) {
    // your answer here
    return spiralIter(blank,thickness,depth);
}
//an attempt at an iterative version of this fn
function spiralIter(rune,thickness,depth){
    const newRune = stack_frac(thickness,hook(thickness/2),quarter_turn_right(rune));
    return depth>0?
    spiralIter(newRune,thickness,depth-1):
    rune;
}
// Test
show(spiral(1,1));
show(spiral(1 / 2, 1));
show(spiral(1 / 5, 1));
show(spiral(1 / 5, 2));
show(spiral(1 / 5, 3));
show(spiral(1 / 5, 20));
show(spiral(0, 20));
show(spiral(1 / 5, 0));
show(spiral(.1,85));