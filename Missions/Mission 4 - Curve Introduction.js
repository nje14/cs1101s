//Task 1

DISCLAIMER: ans to Part 1 and Part 3 is not correct

// Part 1
// your answer here (keep your answer commented)
//the type of unit_line_at is unit_line_at: (Number) -> Function


// Part 2
function vertical_line(pt, length) {
    return t => make_point(x_of(pt),y_of(pt)+length*t);
}



// Part 3
// your answer here (keep your answer commented)
//vertical_line is type: vertical_line: (Point, Number) -> Function

// Part 4
// your answer here
draw_connected_2d(10)(vertical_line(make_point(0.5,0.25),0.5));

//Task 2

function three_quarters(pt) {
    // your answer here
    return t => make_point(math_cos(3*math_PI/2*t)+x_of(pt),math_sin(3*math_PI/2*t)+y_of(pt));
}

// Test
draw_connected_2d(200)(three_quarters(make_point(0.5, 0.25)));

//Task 3


function s_generator(pt) {
    // your answer here
    return t => t<1/2
                ?make_point(math_cos(3*math_PI*t)+x_of(pt),math_sin(3*math_PI*t)+y_of(pt)+1)
                :make_point(math_cos(-3*math_PI*t)+x_of(pt),math_sin(-3*math_PI*t)+y_of(pt)-1);
}

// Test
draw_connected_2d(200)(s_generator(make_point(0.5, 0.25)));