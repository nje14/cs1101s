// TASK 1

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function my_first_filter(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let y = 0; y < height; y = y + 1) {
        for (let x = 0; x < width; x = x + 1) {
            dest[y][x][0] = y/height*255;
            dest[y][x][1] = x/width*255;
            dest[y][x][2] = (height-y)/height*127.5+(width-x)/width*127.5;
            dest[y][x][3] = 255;                // always 255
        }
    }
}

//heya so my integrated camera isnt working so im using
//a random file on my c:\ to test

use_local_file();
install_filter(my_first_filter);
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 2

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function copy(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
           dest[i][j][0] = src[i][j][0];
           dest[i][j][1] = src[i][j][1];
           dest[i][j][2] = src[i][j][2];
           dest[i][j][3] = src[i][j][3];
        }
    }
}

function crosshair(src, dest) {
    // your program goes here
    const width = image_width();
    const height = image_height();
    const middle_width = math_floor(width/2);
    const middle_height = math_floor(height/2);
    
    for(let r = 0; r < height; r = r + 1){
        for(let c = 0; c < width; c = c + 1){
            
            if(r === middle_height || c === middle_width){
                dest[r][c] = src[r][c];
                dest[r][c][0] = 255;
            }
            else if(math_floor(math_sqrt(math_pow(r-middle_height,2)+math_pow(c-middle_width,2))/25)%2===1){
                dest[r][c] = src[r][c];
                dest[r][c][2] = 255;
            }
            else{
                dest[r][c] = src[r][c];
            }
        }
    }
    
}
use_local_file();
install_filter(copy);
install_filter(crosshair);  // use this filter when crosshair function is ready.
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 3

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function zoom(factor) {
    // your solution here
    return (src, dest)=>{
        const width = image_width();
        const height = image_height();
        const mid_width = math_round(width/2);
        const mid_height = math_round(height/2);
    
        for(let r = 0; r < height; r = r + 1){
            for(let c = 0; c < width; c = c + 1){
                dest[r][c] = src[mid_height+math_round((r-mid_height)/factor)][mid_width+math_round((c-mid_width)/factor)];
            }
        }
    };
}
use_local_file();
install_filter(zoom(9));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 4

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function flip_vertically(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            for (let k = 0; k < 4; k = k + 1) {
                dest[i][j][k] = src[height - 1 - i][j][k];
            }
        }
    }
}

function color_invert(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1){
        for (let j = 0; j < width; j = j + 1){
            for (let c = 0; c < 4; c = c + 1) {
                dest[i][j][c] = c < 3 ? 255 - src[i][j][c] : src[i][j][c];
            }
        }
    }
}


// Copy your solution for Task 3 (zoom) here.
function zoom(factor) {
    // your solution here
    return (src, dest)=>{
        const width = image_width();
        const height = image_height();
        const mid_width = math_round(width/2);
        const mid_height = math_round(height/2);
    
        for(let r = 0; r < height; r = r + 1){
            for(let c = 0; c < width; c = c + 1){
                dest[r][c] = src[mid_height+math_round((r-mid_height)/factor)][mid_width+math_round((c-mid_width)/factor)];
            }
        }
    };
}

function make_image(width, height) {
    const img = [];
    for (let i = 0; i < height; i = i + 1) {
        const row = [];
        img[i] = row;
        for (let j = 0; j < width; j = j + 1) {
            const pixel = [];
            row[j] = pixel;
            for (let z = 0; z < 4; z = z + 1) {
                pixel[z] = 255;
            }
        }
    }
    return img;
}

function stack(filter1, filter2) {
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);

    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        const half_height = math_floor(height / 2);

        filter1(src, temp1);
        filter2(src, temp2);

        for (let i = 0; i < half_height; i = i + 1) {
            dest[i] = temp1[i * 2];
            dest[i + half_height] = temp2[i * 2];
        }

        // take last row from temp2, if height is odd
        for (let i = half_height * 2; i < height; i = i + 1) {
            dest[i] = temp2[i];
        }
    };
}

function beside(filter1, filter2) {
    // your program goes here
    const temp1 = make_image(WIDTH, HEIGHT);
    const temp2 = make_image(WIDTH, HEIGHT);

    return (src, dest) => {
        const width = image_width();
        const height = image_height();
        
        const half_width = math_floor(width/2);
        filter1(src, temp1);
        filter2(src, temp2);
        for(let r = 0; r < height; r = r + 1){
            for(let c = 0; c < half_width; c = c + 1){
                dest[r][c] = temp1[r][2*c];
                dest[r][c + half_width] = temp2[r][2*c];
            }
        }


        // take last col from temp2, if width is odd
        if(width%2===1){
            for(let r = 0; r < height; r = r + 1){
                for(let c = 0; c < width; c = c + 1){
                    dest[r][c] = temp2[r][c];
                }
            }
        }

    };
}

use_local_file();
install_filter(stack(beside(flip_vertically, color_invert),
                     beside(copy_image, zoom(2))));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

// TASK 5

const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

function flip_vertically(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1) {
        for (let j = 0; j < width; j = j + 1) {
            for (let k = 0; k < 4; k = k + 1) {
                dest[i][j][k] = src[height - 1 - i][j][k];
            }
        }
    }
}

function color_invert(src, dest) {
    const width = image_width();
    const height = image_height();

    for (let i = 0; i < height; i = i + 1){
        for (let j = 0; j < width; j = j + 1){
            for (let c = 0; c < 4; c = c + 1) {
                dest[i][j][c] = c < 3 ? 255 - src[i][j][c] : src[i][j][c];
            }
        }
    }
}

function make_image(width, height) {
    const img = [];
    for (let i = 0; i < height; i = i + 1) {
        const row = [];
        img[i] = row;
        for (let j = 0; j < width; j = j + 1) {
            const pixel = [];
            row[j] = pixel;
            for (let z = 0; z < 4; z = z + 1) {
                pixel[z] = 255;
            }
        }
    }
    return img;
}

function compose(filter1, filter2) {
    // your program goes here
    return (src, dest)=>{
        const temp = make_image(WIDTH, HEIGHT);
        filter1(src, temp);
        filter2(temp, dest);
    };
}

use_local_file();
install_filter(compose( flip_vertically, color_invert));

set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();

