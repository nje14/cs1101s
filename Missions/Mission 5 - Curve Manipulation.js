//Task 1 

// s_generator from Mission "Curve Introduction" is predeclared
const s_curve = s_generator(make_point(0, 0));

function reflect_through_y_axis(curve) {
    // your solution goes here
    return x => make_point(-x_of(curve(x)),y_of(curve(x)));
}

const reflected_s_curve = reflect_through_y_axis(s_curve);
draw_connected_2d(200)(reflected_s_curve);

//Task 2 

// your solution from Question 1
function reflect_through_y_axis(curve) {
    return x => make_point(-x_of(curve(x)),y_of(curve(x)));
}

const s_curve = s_generator(make_point(0,0));
const reflected_s_curve = reflect_through_y_axis(s_curve);

function close(curve) {
    // your answer here
    //return t => make_point(x_of(curve(1-t)),y_of(curve(1-t)));
    return t=>t<=.5?curve(2*t):curve(2-2*t);
    
}

draw_connected_2d(200)
   (connect_ends(close(s_curve), reflected_s_curve));