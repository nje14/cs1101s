// Task 1

// Function type: Number -> pair_of_numbers
// where input is between 0 - 15 inclusive.
// where 0 - 9 represent the digits
// 10 represents *, 11 represents #,
// and 12 - 15 represent the letters A-D.

function get_dtmf_frequencies(number) {
    // your answer here
    const table = list(list(pair(941,1336),pair(697,1209),pair(697,1336),pair(697,1477)),
                       list(pair(770,1209),pair(770,1336),pair(770,1477),pair(852,1209)),
                       list(pair(852,1336),pair(852,1477),pair(941,1209),pair(941,1477)),
                       list(pair(697,1633),pair(770,1633),pair(852,1633),pair(941,1633)));
    return list_ref(list_ref(table, math_floor(number/4)),number%4);
}

// Task 2

// Copy your function get_dtmf_frequencies here.
function get_dtmf_frequencies(number) {
    // your answer here
    const table = list(list(pair(941,1336),pair(697,1209),pair(697,1336),pair(697,1477)),
                       list(pair(770,1209),pair(770,1336),pair(770,1477),pair(852,1209)),
                       list(pair(852,1336),pair(852,1477),pair(941,1209),pair(941,1477)),
                       list(pair(697,1633),pair(770,1633),pair(852,1633),pair(941,1633)));
    return list_ref(list_ref(table, math_floor(number/4)),number%4);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair),.5),
                               sine_sound(tail(frequency_pair),.5)));
}
play(make_dtmf_tone(get_dtmf_frequencies(7)));

// Task 3

// Copy your functions get_dtmf_frequencies and make_dtmf_tone here.
function get_dtmf_frequencies(number) {
    // your answer here
    const table = list(list(pair(941,1336),pair(697,1209),pair(697,1336),pair(697,1477)),
                       list(pair(770,1209),pair(770,1336),pair(770,1477),pair(852,1209)),
                       list(pair(852,1336),pair(852,1477),pair(941,1209),pair(941,1477)),
                       list(pair(697,1633),pair(770,1633),pair(852,1633),pair(941,1633)));
    return list_ref(list_ref(table, math_floor(number/4)),number%4);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair),.5),
                               sine_sound(tail(frequency_pair),.5)));
}
const tone = make_dtmf_tone;
const freq = get_dtmf_frequencies;

function dailUtil(soundBuilder, ls){
    if(is_null(ls)){
        return soundBuilder;
    }else{
        return dailUtil(consecutively(list(soundBuilder,tone(freq(head(ls))),silence_sound(.1))),tail(ls));
    }
}
function dial(list_of_digits) {
    // your answer here
    return dailUtil(silence_sound(0),list_of_digits);
}

// Test
play(dial(list(6,2,3,5,8,5,7,7)));

// Task 4

// Copy your functions get_dtmf_frequencies,
// make_dtmf_tone and dial here.
function get_dtmf_frequencies(number) {
    // your answer here
    const table = list(list(pair(941,1336),pair(697,1209),pair(697,1336),pair(697,1477)),
                       list(pair(770,1209),pair(770,1336),pair(770,1477),pair(852,1209)),
                       list(pair(852,1336),pair(852,1477),pair(941,1209),pair(941,1477)),
                       list(pair(697,1633),pair(770,1633),pair(852,1633),pair(941,1633)));
    return list_ref(list_ref(table, math_floor(number/4)),number%4);
}

function make_dtmf_tone(frequency_pair) {
    // your answer here
    return simultaneously(list(sine_sound(head(frequency_pair),.5),
                               sine_sound(tail(frequency_pair),.5)));
}
const tone = make_dtmf_tone;
const freq = get_dtmf_frequencies;

function dailUtil(soundBuilder, ls){
    if(is_null(ls)){
        return soundBuilder;
    }else{
        return dailUtil(consecutively(
                                     list(soundBuilder,
                                          tone(freq(head(ls))),
                                          silence_sound(.1))
                                      ),
                                      tail(ls));
    }
}
function dial(list_of_digits) {
    // your answer here
    return dailUtil(silence_sound(0),list_of_digits);
}

function dial_all(list_of_numbers) {
    // your answer here
    const ls = filter((n)=>!equal(n, list(1,8,0,0,5,2,1,1,9,8,0)),list_of_numbers);
    const toPlay = accumulate((a,b)=>consecutively(list(dial(a),
                                                        tone(freq(11)),
                                                        silence_sound(.1),
                                                        b)
                                                   ),
                              silence_sound(0),
                              ls);
    return toPlay;
}

// Test
play(dial_all(
 list(
     list(1,8,0,0,5,2,1,1,9,8,0),  // not played!!!
     list(6,2,3,5,8,5,7,7),
     list(0,0,8,6,1,3,7,7,0,9,5,0,0,6,1))
 ));