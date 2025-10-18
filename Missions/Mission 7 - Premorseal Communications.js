// Task 1

function noise_sound(duration) {
    const wave = t => math_random() * 2 - 1;
    return make_sound(wave, duration);
}

function cut_sound(sound, duration) {
    /* your answer here */
    return make_sound(get_wave(sound),duration);
}

// Play test sound.
play(cut_sound(noise_sound(2), 1));

// Task 2

function sine_sound(freq, duration) {
    /* your answer here */
    return  make_sound(t=>math_sin(2*math_PI*freq*t),duration);
}

// Play test sound.
play(sine_sound(500, 1));

// Task 3

// Copy your own sine_sound function from the previous question here.
function sine_sound(freq, duration) {
    /* your answer here */
    return  make_sound(t=>math_sin(2*math_PI*freq*t),duration);
}

function two_consecutively(s1, s2) {
    /* your answer here */
    const dur1 = get_duration(s1);
    const dur2 = get_duration(s2);
    const newWave = t => t<=dur1?get_wave(s1)(t):get_wave(s2)(t-dur1);
    return make_sound(newWave, dur1+dur2);
}

const my_sine_1 = sine_sound(500, 1);
const my_sine_2 = sine_sound(750, 2);

// Play test sound.
play(two_consecutively(my_sine_1, my_sine_2));

// Task 4

// Copy your own sine_sound function from the previous question here.
function sine_sound(freq, duration) {
    /* your answer here */
    return  make_sound(t=>math_sin(2*math_PI*freq*t),duration);
}
// Copy your own two_consecutively function from the previous question here.
function two_consecutively(s1, s2) {
    /* your answer here */
    const dur1 = get_duration(s1);
    const dur2 = get_duration(s2);
    const firstFactor = dur1/(dur1+dur2);
    const secondFactor = dur2/(dur1+dur2);
    const newWave = t => t<=dur1?get_wave(s1)(t):get_wave(s2)(t-dur1);
    return make_sound(newWave, dur1+dur2);
}
function consecutivelyHelper(waveBuilder, durationBuilder, ls){
    if(is_null(ls)){
        return waveBuilder;
    }else{
        const nextSound = head(ls);
        const nextDuration = get_duration(nextSound);
        return consecutivelyHelper(two_consecutively(waveBuilder,nextSound),
                                   durationBuilder+nextDuration,
                                   tail(ls));
    }
}
function consecutively(list_of_sounds) {
    /* your answer here */
    return consecutivelyHelper(make_sound(t=>t,0), 0, list_of_sounds);
}

const my_sine_1 = sine_sound(500, 0.5);
const my_sine_2 = sine_sound(750, 1);
const my_sine_3 = sine_sound(625, 0.5);

// Play test sound.
//play(consecutively(list(my_sine_1, my_sine_2, my_sine_3)));
play(consecutively(list( sine_sound(913,.276),sine_sound(1370.6,.276),sine_sound(1776.7,.380))));

// Task 5

// Copy your own sine_sound function from the previous question here.
function sine_sound(freq, duration) {
    /* your answer here */
    return  make_sound(t=>math_sin(2*math_PI*freq*t),duration);
}

// Copy your own two_consecutively function from the previous question here.
function two_consecutively(s1, s2) {
    /* your answer here */
    const dur1 = get_duration(s1);
    const dur2 = get_duration(s2);
    const firstFactor = dur1/(dur1+dur2);
    const secondFactor = dur2/(dur1+dur2);
    const newWave = t => t<=dur1?get_wave(s1)(t):get_wave(s2)(t-dur1);
    return make_sound(newWave, dur1+dur2);
}
// Copy your own consecutively function from the previous question here.
function consecutivelyHelper(waveBuilder, durationBuilder, ls){
    if(is_null(ls)){
        return waveBuilder;
    }else{
        const nextSound = head(ls);
        const nextDuration = get_duration(nextSound);
        return consecutivelyHelper(two_consecutively(waveBuilder,nextSound),durationBuilder+nextDuration,tail(ls));
    }
}
function consecutively(list_of_sounds) {
    /* your answer here */
    return consecutivelyHelper(make_sound(t=>t,0), 0, list_of_sounds);
}


const dot_duration = 0.125;
const dash_duration = 3 * dot_duration;
const freq = 800;

// Create dot, dash and pause sounds first.
const dot_sound = sine_sound(freq,dot_duration);
const dash_sound = sine_sound(freq,dash_duration);
const dot_pause = silence_sound(dot_duration);
const dash_pause = silence_sound(dash_duration);

// Create sounds for each letter.
const S_sound = consecutively(list(dot_sound,dot_pause,dot_sound,dot_pause,dot_sound));
const O_sound = consecutively(list(dash_sound,dot_pause,dash_sound,dot_pause,dash_sound));

// Build the signal out of letter sounds and pauses.
const distress_signal = consecutively(list(S_sound,dash_pause,O_sound,dash_pause,S_sound));

// Play distress signal.
play(distress_signal);