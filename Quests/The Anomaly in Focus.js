// TASK 1

function red_rectangle_stream(s) {
    // your solution goes here
    const INF = 1e10;
    function isRed(pixel){
        return pixel[0]>0&&pixel[1]===0&&pixel[2]===0;
    }
    function testRed(arr){
        let min = [INF,INF];
        let max = [-1,-1];
        
        for(let r = 0; r < HEIGHT; r = r + 1){
            for(let c = 0; c < WIDTH; c = c + 1){
                if(isRed(arr[r][c])){
                    min[0] = math_min(min[0],r);
                    min[1] = math_min(min[1],c);
                    max[0] = math_max(max[0],r);
                    max[1] = math_max(max[1],c);
                }
            }
        }
        return [min, max];
    }
    return stream_map(testRed, s);
}

head(red_rectangle_stream(anomaly_stream));
// should evaluate to: [[141, 191], [159, 209]]

// TASK 2
//import {install_filter, set_dimensions, keep_aspect_ratio, set_fps, start} from 'pix_n_flix';
// Copy your function red_rectangle_stream from TASK 1 here.
function red_rectangle_stream(s) {
    // your solution goes here
    const INF = 1e10;
    function isRed(pixel){
        return pixel[0]>0&&pixel[1]===0&&pixel[2]===0;
    }
    function testRed(arr){
        let min = [INF,INF];
        let max = [-1,-1];
        
        for(let r = 0; r < HEIGHT; r = r + 1){
            for(let c = 0; c < WIDTH; c = c + 1){
                if(isRed(arr[r][c])){
                    min[0] = math_min(min[0],r);
                    min[1] = math_min(min[1],c);
                    max[0] = math_max(max[0],r);
                    max[1] = math_max(max[1],c);
                }
            }
        }
        return [min, max];
    }
    return stream_map(testRed, s);
}

function stream_combine(f, s1, s2) {
    // your solution goes here
    return pair(f(head(s1),head(s2)),()=>stream_combine(f, stream_tail(s1),stream_tail(s2)));
}


// Trim the given image using the given rectangle.
// Returns an image that includes all purely red
// pixels of the given image.

function trim(image, rectangle) {
    const trimmed = [];
    const i_min = head(head(rectangle));
    const j_min = tail(head(rectangle));
    const i_max = head(tail(rectangle));
    const j_max = tail(tail(rectangle));

    for (let i = i_min; i <= i_max; i = i + 1) {
        const new_i = i - i_min;
        trimmed[new_i] = [];
        for (let j = j_min; j <= j_max; j = j + 1) {
            const new_j = j - j_min;
            trimmed[new_i][new_j] = image[i][j];
        }
    }
    return trimmed;
}

// Example:

const focused_stream = stream_combine(
                           trim,
                           anomaly_stream,
                           red_rectangle_stream(anomaly_stream));
head(focused_stream);

// Should return a close-up of the anomaly, a 19x19 image of black,
// red and white pixels.
/*------------------------------------------------------------------------------*/
/*
function stream_to_filter(s) {
    // your solution goes here
    function filter(src, dest){
        
        let target = head(s);
       
        for(let r = 0; r < array_length(target); r = r + 1){
            dest[r] = target[r];
        }
        let next = stream_tail(s);
        if(next===null){
            s = pair(target,()=>s);
        }else{
            s = next;
        }
    }
    return filter;
}
install_filter(stream_to_filter(focused_stream));

set_dimensions(19, 19);
keep_aspect_ratio(true);
set_fps(10);
start();
*/


//disclaimer: this solution is incorrect but obtained ECF 

/*
Q1: What color it might absorb?
ANS: (write your answer here)
Based on analysis from the telescope, the center part of the anomaly reflects 
all wavelengths of light within the spectrum of visible light
And the outer part of the anomaly reflects red light and absorbs
green light and blue light

Q2: What color of laser beam would you use?
ANS: (write your answer here)
Since the anomaly absorbs blue and green light, it may be vulnerable to an 
energy overload if it absorbs blue and green light. Thus, one might use a cyan
coloured laser [R, G, B] = [0, 255, 255]
To maximise the amount of energy damage inflicted on the target

Q3: Which part of the shield would you target?
ANS: (write your answer here)

One might target the edge of the shield. It appears that the center of the shield
Reflects all light in the visible spectrum (since it appears white) thus 
Firing a laser at the center might not be effective due to 
the center reflecting red green and blue light
Firing a laser at the border, which only reflects red light and absorbs blue and green light
will maximise the damage dealt to the anomaly by ensuring the energy from the beam is fully absorbed 
by the anomaly


Q4: How did you find the answer?
ANS: (answer in at most three sentences how
      you found the color and the target)
From task 2, I obtained the close up data of the anomaly by identifying the anomaly and zooming in into it.
Based on the analysis provided, the anomaly consists of a circular white shield in the center (RGB = 255,255,255) with a circular red border (RGB = 255,0,0).
Thus the outer portion absorbs green and blue light and can be target as such
*/

