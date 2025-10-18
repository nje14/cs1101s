//Task 1
const drum_envelope = adsr(0.05, 0.95, 0, 0);

function snare_drum(note, duration) {
    /* your answer here */
    return drum_envelope(noise_sound(duration));
    
}

function bass_drum(note, duration) {
    /* your answer here */
    const ls = list(79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149);
    //list of prime numbers s.t. 75<=n<=150
    //obtained by using: display_list(filter(n=>isPrime(n),enum_list(75,150)));
    return drum_envelope(simultaneously(map(n=>sine_sound(n, duration),ls)));
}
function mute(note, duration) {
    /* your answer here */
    
    return silence_sound(duration);
}

// Test
//play(snare_drum(50, 0.2));
//play(bass_drum(50, 0.2));

play(consecutively(list(snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2),
                        mute(0, 0.2),
                        snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2))));

//Task 2

function generate_list_of_note(letter_name, list_of_interval) {
    /* your answer here */
    function generateUtil(curr, listBuilder, ls){
        if(is_null(ls)){
            return listBuilder;
        }else{
            return generateUtil(curr+head(ls), append(listBuilder, list(curr+head(ls))),tail(ls));
        }
    }
    const a = letter_name_to_midi_note(letter_name);
    return generateUtil(a, list(a), list_of_interval);
}

const major_scale_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
const c_major_scale = generate_list_of_note("C4", major_scale_interval);

display(c_major_scale);

function list_to_sound(list_of_midi_note, duration, instrument) {
    /* your answer here */
    return consecutively(map((n)=>instrument(n, duration),list_of_midi_note));
}

const c_major_scale_sound = list_to_sound(c_major_scale, 0.4, cello);
//play(c_major_scale_sound);

const harmonic_minor_scale_interval = list(2, 1, 2, 2, 1, 3, 1, -1, -3, -1, -2, -2, -1, -2);

const melodic_minor_scale_interval = list(2, 1, 2, 2, 2, 2, 1, -2, -2, -1, -2, -2, -1, -2);


const c_harmonic_minor_scale = generate_list_of_note("C4", harmonic_minor_scale_interval);
const c_harmonic_minor_scale_sound = list_to_sound(c_harmonic_minor_scale, 0.4, cello);
//play(c_harmonic_minor_scale_sound);

const c_melodic_minor_scale = generate_list_of_note("C4", melodic_minor_scale_interval);
const c_melodic_minor_scale_sound = list_to_sound(c_melodic_minor_scale, 0.4, cello);
//play(c_melodic_minor_scale_sound);

//Task 3

// copy your functions generate_list_of_note and list_to_sound
// from the previous Question here
function generate_list_of_note(letter_name, list_of_interval) {
    /* your answer here */
    function generateUtil(curr, listBuilder, ls){
        if(is_null(ls)){
            return listBuilder;
        }else{
            return generateUtil(curr+head(ls), append(listBuilder, list(curr+head(ls))),tail(ls));
        }
    }
    const a = letter_name_to_midi_note(letter_name);
    return generateUtil(a, list(a), list_of_interval);
}
function list_to_sound(list_of_midi_note, duration, instrument) {
    /* your answer here */
    return consecutively(map((n)=>instrument(n, duration),list_of_midi_note));
}

const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each, instrument) {
    /* your answer here */
    const len = length(arpeggio);
    if(len<4){//O(n)
        return silence_sound(0);
    }else{
        
    }
    function play4sound(listBuilder, ls, n){
     
        return n<3
               ?play4sound(append(listBuilder,list(head(ls))), tail(ls),n+1)
               :append(listBuilder, list(head(ls)));
    }
    function arpeggUtil(listBuilder, ls, n){
      
        return n < len-4
               ?arpeggUtil(append(listBuilder,play4sound(list(),ls,0)),tail(ls),n+1)
               :append(listBuilder,play4sound(list(),ls,0));
    }
    return consecutively(map(n=>instrument(n, duration_each),arpeggUtil(list(),arpeggio,0)));
}

// Test
play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));

//Task 4

function simplify_rhythm(rhythm) {
    /* your answer here */
    return is_number(rhythm)
               ?list(rhythm)
               :is_pair(rhythm)&&is_number(tail(rhythm))
               ?accumulate(append,null,build_list((n)=>simplify_rhythm(head(rhythm)),tail(rhythm)))
               :accumulate((a,b)=>append(simplify_rhythm(a),b),list(),rhythm);
}

// Test
const my_rhythm = pair(list(pair(list(1,2,0,1), 2), list(1,3,0,1,3,1,0,3)), 3);
const my_simple_rhythm = simplify_rhythm(my_rhythm);
display_list(my_simple_rhythm);

const correct_simple_rhythm = list(1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,
        2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3);
equal(my_simple_rhythm, correct_simple_rhythm);

//Task 5

const drum_envelope = adsr(0.05, 0.95, 0, 0);

// paste your snare_drum, mute and simplify_rhythm
// from Questions 1 and 4 here
function snare_drum(note, duration) {
    /* your answer here */
    return drum_envelope(noise_sound(duration));
}
function simplify_rhythm(rhythm) {
    /* your answer here */
    function simplifyUtil(rhythm){
        //display(rhythm);
        return is_number(rhythm)
               ?list(rhythm)
               :is_pair(rhythm)&&is_number(tail(rhythm))
               ?accumulate(append,null,build_list((n)=>simplifyUtil(head(rhythm)),tail(rhythm)))
               :accumulate((a,b)=>append(simplifyUtil(a),b),list(),rhythm);
    }
    return simplifyUtil(rhythm);
}
function mute(note, duration) {
    /* your answer here */
    
    return silence_sound(duration);
}

function percussions(distance, list_of_sounds, rhythm) {
    /* your answer here */
    const ls = map(n=>list_ref(list_of_sounds,n),simplify_rhythm(rhythm));
    function percussionUtil(rhythm,n){

        return is_null(rhythm)
               ?silence_sound(0)
               :simultaneously(
                   list(
                       consecutively(
                           list(
                               silence_sound(n*distance),
                               head(rhythm)
                           )
                       ),
                       percussionUtil(tail(rhythm),n+1)
                   )
               );
    }
    return percussionUtil(ls,0);
    
}

// Test
const my_mute_sound = mute(50, 0.7);
const my_snare_drum = snare_drum(50, 0.7);
const my_cello = cello(50, 0.7);
const my_bell = bell(72, 1);
play(percussions(0.5,
         list(my_mute_sound,
              my_snare_drum,
              my_cello,
              my_bell),
         list(1,2,1,0,3,1,0)));