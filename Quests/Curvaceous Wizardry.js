//Task 1 

const test_curve =
    t => make_point(t, 0.5 + (math_sin(4 * (math_PI * t)) / 2));

function stack(c1, c2) {
    // your answer here
    return t => t < 0.5 ?
                translate(0,0.5,0)(scale(1,.5,0)(c1))(2*t):
                scale(1,.5,0)(c2)(2*t-1);
}

// Test
draw_points(10000)(stack(test_curve, test_curve));
//draw_points(10000)(stack(stack(test_curve,test_curve), test_curve));
    

//Task 2

const test_curve =
    t => make_point(t, 0.5 + (math_sin(4 * (math_PI * t)) / 2));

function stack_frac(frac, c1, c2) {
    // your answer here
    const invFrac = 1-frac;
    return t => t < 0.5 ?
                translate(0,invFrac,0)(scale(1,frac,0)(c1))(2*t):
                scale(1,invFrac,0)(c2)(2*t-1);
}

// Test
draw_points(10000)
    (stack_frac(1 / 5,
                test_curve,
                stack_frac(1 / 2, test_curve, test_curve)));