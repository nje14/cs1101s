//Task 1 

// helper functions can go here
  
function steps(s1, s2, s3, s4){
    // your implementation goes here
    //[s4 s1]
    //[s3 s2]
    const top_shape = beside(scale_vertical(1/4, s4),
                            s1);
    const bottom_shape = beside(scale_vertical(1/2, s3),
                                scale_vertical(3/4, s2));
    return stack(top_shape,bottom_shape);
}

// Test
render(steps(unit_cube, unit_sphere,
             unit_pyramid, unit_cylinder));

//Task 2 

// helper functions can go here
function coneUtil(i, n, shapeBuilder, shape){
//i = current layer, n = total layers, shape = base shape
//i and shapeBuilder are to be updated with each function call
//while n and shape are to remain constant
    if(i===n){//break case
        return shapeBuilder;
    }
    else{
        const overlayScaleFactor = 1/(i+1);//1/2, 1/3, 1/4, etc
        const horizScaleFactor = (n-i)/n;//1, 3/4, 1/2, 1, etc
        const newShape = overlay_frac(overlayScaleFactor,
                                      scale_horizontal(horizScaleFactor, shape), 
                                      shapeBuilder);
        //tfw the source editor takes up half the screen space
        //instead of all of it
        return coneUtil(i+1, n, newShape, shape);
    }
    
}
function cone(n, shape){
    // your implementation goes here
    return coneUtil(1, n, shape, shape);
}

// Tests
render(cone(4, unit_cylinder));
render(cone(1, unit_cylinder));
render(cone(3, unit_cube));
render(cone(16, unit_cylinder));//tower of hanoi
render(cone(8, unit_sphere));
render(cone(4, unit_cylinder));