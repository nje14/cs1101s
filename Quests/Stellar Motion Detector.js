// TASK 1
//DISCLAIMER: i couldnt get the moving part to work
//ive read the documentation and source code and dont really
//get how to store the previous frame as an array
//ive tried using copy_image and adding a pointer to the old array
//but since the filter function is called only once i cant get it to work
const WIDTH = 400;
const HEIGHT = 300;
const FPS = 15;

// Any helper functions and constants go here.
const INF = 1e10;

function isRed(pixel){
    return pixel[0]>80&&pixel[0]>1.2*math_max(pixel[1],pixel[2]);
}

function testMovement(prev, curr){//deprecated
    const height = array_length(prev);
    const width = array_length(curr);
    for(let r = 0; r < height; r = r + 1){
        for(let c = 0; c < width; c = c + 1){
            if(prev[r][c]!==curr[r][c]){
                return true;
            }
        }
    }
    return false;
}

function stellar_motion_detector(src, dest) {
    // your program
    
    const height = image_height();
    const width = image_width();
    let min_row = INF;
    let max_row = -1;
    let min_col = INF;
    let max_col = -1;
    //const movement = !is_null(TEMP)&&testMovement(TEMP, src);
    
    for(let r = 0; r < height; r = r + 1){
        for(let c = 0; c < width; c = c + 1){
            dest[r][c] = src[r][c];
            //TEMP[r][c] = src[r][c];
            if(isRed(src[r][c])){
                //dest[r][c][1] = 255;//debug
                if(r<min_row){
                    min_row = r;
                }else if(r>max_row){
                    max_row = r;
                }
                if(c<min_col){
                    min_col = c;
                }else if(c>max_col){
                    max_col = c;
                }
            }
        }
    }
    
    
    if(min_row!==INF&&max_row!==-1&&max_col!==-1&&min_col!==INF){
        for(let r = min_row; r <= max_row; r = r + 1){
            for(let c = min_col; c <= max_col; c = c + 1){
                dest[r][c][2] = 255;
            }
        }
    }

}


install_filter(stellar_motion_detector);
use_local_file();
set_dimensions(WIDTH, HEIGHT);
keep_aspect_ratio(true);
set_fps(FPS);
start();