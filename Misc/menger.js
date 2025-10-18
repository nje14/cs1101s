import {
black,
blue,
crimson,
cyan,
gray,
green,
lime,
navy,
orange,
pink,
purple,
rose,
silver,
teal,
white,
yellow,
bounding_box,
cone,
cube,
cylinder,
download_shape_stl,
empty_shape,
geodesic_sphere,
group,
intersect,
is_group,
is_shape,
prism,
pyramid,
render,
render_axes,
render_grid,
render_grid_axes,
rgb,
rotate,
rounded_cube,
rounded_cylinder,
scale,
sphere,
star,
subtract,
torus,
translate,
ungroup,
union
} from 'csg';

import { repeat_pattern } from 'rune';

const unit_cylinder = cylinder('#edc8d4');
const unit_sphere = sphere('#c8d4ed');
const unit_cube = cube('#edc8c4');
const unit_pyramid = pyramid('#c8edd4');

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
    const baseShape = scale(o,scaleFactor, scaleFactor, scaleFactor);
    //create the top shape by applying translation
    const topShape = translate(baseShape,
                               topTranslateFactor,
                               topTranslateFactor,
                               topTranslateFactor*2);
    //create the bottom shape by applying specific translations
    const bottomShape = union(union(baseShape,
                                    translate(baseShape, botTranslateFactor, 0, 0)),
                              union(translate(baseShape, 0, botTranslateFactor, 0),
                                    translate(baseShape, botTranslateFactor, botTranslateFactor,0)));
    //return the combined shapes
    return union(topShape, bottomShape);
}

function hypofractional(n, s) {
    // use repeat_pattern here
    return repeat_pattern(n, sierpiński, s);
}
function corner(s){
    const fac = 1/3;
    const intermediateShape = union(s, translate(s, fac*2, 0 ,0 ));
    const intShape2 = union(translate(s, fac*2, fac*2, 0), translate(s, 0, fac*2, 0));
    return union(intermediateShape, intShape2);
}
function edge(s){
    const fac = 1/3;
    const intermediateShape = union(translate(s, fac, 0, 0),translate(s, 0, fac, 0));
    const intShape2 = union(translate(s, fac*2, fac, 0), translate(s, fac, fac*2, 0));
    return union(intermediateShape, intShape2);
}


function menger(s){//for some reason i cant get it to run
//for cases n>3 as it causes a TLE. 
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
    //second layer is just corners but translated by 1/3 (x axis)
    const middleLayer = translate(corners,0 , 0, translateFactor);
    //third layer is just first layer but translated by 2/3 (x axis)
    const finalLayer = translate(firstLayer, 0, 0, translateFactor*2);
    //bring it all tgt
    return union(firstLayer,union(middleLayer, finalLayer));
}
function sierpiński_menger(s){
    const scaleFactor = 1/3;
    const translateFactor = 1/3;
    const baseShape = scale(s, scaleFactor, scaleFactor, scaleFactor);
    const corners = corner(baseShape);
    const center = translate(baseShape, translateFactor, translateFactor, translateFactor);
    return union(corners, union(center, translate(corners,0 , 0, translateFactor*2)) );
}
// Testing

//render(sierpiński(unit_pyramid));
//render(sierpiński(unit_cylinder));
//render(hypofractional(3, unit_cube));
//render(hypofractional(5, unit_pyramid));
//render(menger(unit_cube));
render(repeat_pattern(4, menger, unit_cube));//please dont go above 3 ;-;
//render(repeat_pattern(5, sierpiński_menger, unit_cube));