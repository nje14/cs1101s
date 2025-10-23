//Q2

function diagonal(t) {
    // your answer here
    return make_point(t,t);
}

// Test
draw_points(50)(diagonal);

//Q3

function unit_square(t) {
    // your answer here
    return t<1/4
           ?make_point(4*t,0)
           :t<1/2
           ?make_point(1,4*t-1)
           :t<3/4
           ?make_point(3-4*t,1)
           :make_point(0,4-4*t);
}

// Test
draw_points_full_view_proportional(80)(unit_square);

