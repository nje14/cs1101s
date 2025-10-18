import { repeat_pattern } from 'rune';

// your helper functions, if needed, go here
const pi = math_PI;
const halfPi = math_PI/2;

function sierpiński(o) {
    // your solution goes here
    //declare some constant transformation factors
    //also im not declaring them as global variables
    //because no
    const scaleFactor = 0.5;
    const topTranslateFactor = 0.25;
    const botTranslateFactor = 0.5;
    //create the basic shape from which all 5 subshapes is created
    const baseShape = scale(o, scaleFactor, scaleFactor, scaleFactor);
    //create the top half by applying translation
    //increase z axis by 1/2 units and x and y by 1/4 units
    const topShape = translate(baseShape,
                               topTranslateFactor,
                               topTranslateFactor,
                               topTranslateFactor*2);
    //create the bottom half by applying specific translations
    //places 4 shapes in each corner
    const bottomShape = union(union(baseShape,
                                    translate(baseShape, botTranslateFactor, 0, 0)),
                              union(translate(baseShape, 0, botTranslateFactor, 0),
                                    translate(baseShape, botTranslateFactor, botTranslateFactor,0)));
    //return the combined halves
    return union(topShape, bottomShape);
}

function hypofractional(n, s) {
    // use repeat_pattern here
    return repeat_pattern(n, sierpiński, s);
}
function corner(s){//returns a "2d" shape containing 4 corner squares
    // XOX
    // OOO
    // XOX
    const fac = 1/3;
    const intermediateShape = union(s, translate(s, fac*2, 0 ,0 ));
    const intShape2 = union(translate(s, fac*2, fac*2, 0), translate(s, 0, fac*2, 0));
    return union(intermediateShape, intShape2);
}
function edge(s){//return a "2d" shape containing 4 edge squares
    // OXO
    // XOX
    // OXO
    const fac = 1/3;
    const intermediateShape = union(translate(s, fac, 0, 0),translate(s, 0, fac, 0));
    const intShape2 = union(translate(s, fac*2, fac, 0), translate(s, fac, fac*2, 0));
    return union(intermediateShape, intShape2);
}


function menger(s){//i cant get it to run
//for cases n>3 as it causes a TLE
//it takes about 20 irl seconds to run the n=4 case in the playground
//i would appreciate feedback on how to optimise the code i am currently running
//(also is runtime on the online source editor based on device performance or server performance or both?)
    const scaleFactor = 1/3;
    const translateFactor = 1/3;
    //create the unit cube - 1/3
    const baseShape = scale(s, scaleFactor, scaleFactor, scaleFactor);
    //create a 2d plane with 4 blocks at corners
    //i.e.
    //XOX
    //OOO
    //XOX
    //where x is a block and O is a blank space
    const corners = corner(baseShape);
    //create a 2d plane with 4 blocks at the edges
    //i.e.
    //OXO
    //XOX
    //OXO
    //where x is a block
    const sides = edge(baseShape);
    //create the first layer 
    //XXX
    //XOX
    //XXX
    const firstLayer = union(corners,sides);
    //second layer is just corners but translated by 1/3 
    const middleLayer = translate(corners,0 , 0, translateFactor);
    //third layer is just first layer but translated by 2/3 
    const finalLayer = translate(firstLayer, 0, 0, translateFactor*2);
    //bring it all tgt
    return union(firstLayer,union(middleLayer, finalLayer));
}
function sierpiński_menger(s){
    const scaleFactor = 1/3;
    const translateFactor = 1/3;
    //unit square 
    const baseShape = scale(s, scaleFactor, scaleFactor, scaleFactor);
    //get a "2d" shape with unit squares in corners
    const corners = corner(baseShape);
    //get a "3d" shape with one unit square in the center
    const center = translate(baseShape, translateFactor, translateFactor, translateFactor);
    //bring it all together
    return union(corners, union(center, translate(corners,0 , 0, translateFactor*2)) );
}
// Testing

//render(sierpiński(unit_pyramid));
//render(sierpiński(unit_cylinder));
//render(hypofractional(3, unit_cube));
render(hypofractional(5, unit_pyramid));
//render(menger(unit_cube));
//render(repeat_pattern(3, menger, unit_cube));//please dont go above 3 ;-;
//render(repeat_pattern(3, sierpiński_menger, unit_cube));