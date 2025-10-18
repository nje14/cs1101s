//Task 1 

function backward(sound) {
    /* replace dummy below with your solution */
    const wave = get_wave(sound);
    const duration = get_duration(sound);
    return make_sound(t=>wave(duration-t),duration);
}
//i cant get it to record ;-;
                                       // step 0: press "Run"

//init_record();                        // step 1 in REPL

//const my_voice = record_for(2, 0.2);  // step 2 in REPL

//play(backward(my_voice()));           // step 3 in REPL

//play(backward(backward(my_voice()))); // step 3 in REPL

const test = consecutively(list(sine_sound(913.8,.276),sine_sound(1370.6,.276),sine_sound(1776.7,.38)));
//play(test);
//play(backward(test));
play(backward(backward(test)));

//Task 2

function repeat(n, sound) {
    /* replace dummy below with your solution */
    if(n===0){
        return silence_sound(0);
    }else{
        return consecutively(build_list((n)=>sound,n));    
    }
    
}

// Test
const my_sound = consecutively(
    list(sine_sound(400, 1), sine_sound(800, 1)));
const my_repeated = repeat(3, my_sound);
play(my_repeated);

//Task 3

function fast_forward(n, sound) {
    /* replace dummy below with your solution */
    const wave = get_wave(sound);
    const dur = get_duration(sound);
    return make_sound(t=>wave(n*t),dur/n);
}

                                      // step 0: press "Run"

//init_record();                       // step 1 in REPL

//const my_voice = record_for(2, 0.2); // step 2 in REPL

// play(fast_forward(2, my_voice()));   // step 3 in REPL


const test = consecutively(list(sine_sound(913.8,.276),sine_sound(1370.6,.276),sine_sound(1776.7,.38)));
play(fast_forward(2,test));

//Task 4

function echoHelper(n, d, wave, dur, soundBuilder){
    if(n<=0){
        return consecutively(pair(make_sound(wave,dur),soundBuilder));
    }else{
        const newWave = consecutively(list(silence_sound(d),
                                           make_sound(t=>math_pow(2,-n)*wave(t),dur)));
        return echoHelper(n-1,d,wave, dur ,pair(newWave, soundBuilder));
    }
}

function echo(n, d, sound) {
    /* replace dummy below with your solution */
    return echoHelper(n, d, get_wave(sound), get_duration(sound), null);
}

// Test 1
const test_sound = sine_sound(800, 0.2);
play(echo(2, 0.4, test_sound));

// Test 2
//                                      // step 0: press "Run"

// init_record();                       // step 1 in REPL

// const my_voice = record_for(2, 0.2); // step 2 in REPL

// play(echo(2, 0.4, my_voice()));      // step 3 in REPL

//Task 5

// Copy your functions backward, repeat,
// fast_forward and echo here.
function backward(sound) {
    /* replace dummy below with your solution */
    const wave = get_wave(sound);
    const duration = get_duration(sound);
    return make_sound(t=>wave(duration-t),duration);
}
function repeat(n, sound) {
    /* replace dummy below with your solution */
    return consecutively(build_list((n)=>sound,n));
}
function fast_forward(n, sound) {
    /* replace dummy below with your solution */
    const wave = get_wave(sound);
    const dur = get_duration(sound);
    return make_sound(t=>wave(n*t),dur/n);
}
function echoHelper(n, d, wave, dur, soundBuilder){
    if(n<=0){
        return consecutively(pair(make_sound(wave,dur),soundBuilder));
    }else{
        const newWave = consecutively(list(silence_sound(d),make_sound(t=>math_pow(2,-n)*wave(t),dur)));
        return echoHelper(n-1,d,wave, dur ,pair(newWave, soundBuilder));
    }
}

function echo(n, d, sound) {
    /* replace dummy below with your solution */
    return echoHelper(n, d, get_wave(sound), get_duration(sound), null);
}

function make_alien_jukebox(sound) {
    // your answer here
    function rtn(n){
        const toPlay = n===0?
                       sound:
                       n===1?
                       backward(sound):
                       n===2?
                       fast_forward(.5,sound):
                       n===3?
                       repeat(3, fast_forward(2,sound)):
                       n===4?
                       echo(4, .3, backward(sound)):
                       silence_sound(0);//base case
        return play(toPlay);
    }
    return rtn;
}

// Press "Run"

// Then test in REPL:

//init_record();

// const erksh_voice = record_for(1, 0.2);

// const j = make_alien_jukebox(erksh_voice());
const test = consecutively(list(sine_sound(913.8,.276),sine_sound(1370.6,.276),sine_sound(1776.7,.38)));

//please dont mind this its just a test case (i cant get the recording to work)
const crotchet = 60/165;
const quaver = crotchet/2;
const minim = 2*crotchet;
const ls = list(sine_sound(261,quaver),sine_sound(329,quaver),sine_sound(392,quaver),sine_sound(415,crotchet+3*quaver),sine_sound(261,quaver),sine_sound(329,quaver),sine_sound(392,quaver),sine_sound(415,crotchet),sine_sound(554,quaver),sine_sound(415,crotchet),sine_sound(554,quaver),sine_sound(415,quaver),sine_sound(329,quaver),simultaneously(list(sine_sound(311,minim),sine_sound(392,minim))));
//
const j = make_alien_jukebox(consecutively(ls));
//j(0);  // plays original recording

//j(1);  // plays it backward

//j(2);  // plays it at half speed

//j(3);  // plays it at double speed, three times in a row

//j(4);  // plays it backward with 4-times echo,
//        //     with 0.3 seconds echo delay