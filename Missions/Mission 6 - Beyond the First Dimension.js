//Task 1

// feel free to add helper functions!
function fractalUtil(level, transformation, curve, curveBuilder){
    if(level<=0){
        return curveBuilder;
    }else{
        const newCurve = transformation(curveBuilder);
        return fractalUtil(level-1, transformation, curve, newCurve);
    }
}

function fractal(level, transformation, curve) {
    // your answer here
    return fractalUtil(level, transformation, curve, curve);
}

function levycize(curve) {
    const f = math_sqrt(2) / 2;
    const scaled_curve = (scale(f, f, 1))(curve);
    return connect_rigidly(
        (rotate_around_origin(0, 0, math_PI / 4))(scaled_curve),
        (translate(0.5, 0.5, 0))
            ((rotate_around_origin(0, 0, -math_PI / 4))(scaled_curve)));
}

// Test
draw_connected_2d(10000)
    (fractal(11, levycize, unit_line));

//Task 2 

// copy your fractal function here
function fractalUtil(level, transformation, curve, curveBuilder){
    if(level<=0){
        return curveBuilder;
    }else{
        const newCurve = transformation(curveBuilder);
        return fractalUtil(level-1, transformation, curve, newCurve);
    }
}

function fractal(level, transformation, curve) {
    // your answer here
    return fractalUtil(level, transformation, curve, curve);
}
function dragonize(curve) {
    // your answer here
    return put_in_standard_position(
                connect_ends(
                    invert(
                        rotate_around_origin(0,
                                            0,
                                            -math_PI/2)(curve)),
                                            curve));
}

// Test
draw_connected_2d(10000)
    (fractal(11, dragonize, unit_line));

//Task 3

function kochize(curve) {
    const up_60 = rotate_around_origin(0, 0, math_PI / 3);
    const down_60 = rotate_around_origin(0, 0, - math_PI / 3);
    return put_in_standard_position(
               connect_ends(curve,
                            connect_ends(up_60(curve),
                                         connect_ends(down_60(curve),
                                                      curve))));
}

// copy your fractal function here
function fractalUtil(level, transformation, curve, curveBuilder){
    if(level<=0){
        return curveBuilder;
    }else{
        const newCurve = transformation(curveBuilder);
        return fractalUtil(level-1, transformation, curve, newCurve);
    }
}

function fractal(level, transformation, curve) {
    // your answer here
    return fractalUtil(level, transformation, curve, curve);
}

function snowflake(n) {
    // your answer here
    const side = fractal(n, kochize, unit_line);
    //one side of the fractal snowflake
    const rotate = n => rotate_around_origin(0,0,math_PI*n/180);
    //helper rotate function (to make it look less messy)
    return connect_ends(rotate(-240)(side), connect_ends(side, rotate(240)(side)));
}

// Test
draw_connected_2d(10000)(snowflake(5));
