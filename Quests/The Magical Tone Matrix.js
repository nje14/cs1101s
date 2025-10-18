// Question 1

// copy generate_list_of_note from Mission "Musical Diversions"
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


const pentatonic_list_of_interval = list(2, 2, 3, 2, 3);

// repeat_pattern from Lecture L2

function repeat_list_of_note(n, fn, list_of_note) {
    return n === 0 ? list_of_note : repeat_list_of_note(n - 1, fn, fn(list_of_note));
}

function repeated_scale(note, list_of_interval, n, duration, instrument) {
    // your solution goes here
    const interval_ls = repeat_list_of_note(n, n=>append(n, list_of_interval), null);
    //display_list(interval_ls);
    const note_ls = generate_list_of_note(note,interval_ls);
    
    return map(n=>instrument(n,duration),note_ls);
    
    
}

//play(consecutively(repeated_scale("C4", pentatonic_list_of_interval,
//                                  2, 1, cello)));
play(consecutively(repeated_scale("C4", list(2,1,1,3),3,.5,cello)));



// Question 2

function play_matrix(duration, list_of_sounds) {
    /* your answer here */
    //call get_matrix() at the start and make a local copy
    //reduces the need to call get_matrix() in the future + non destructive
    const matrix = get_matrix();//matrix = list of rows, matrix[0] = row zero
    
    //a function that takes in an input n
    //and returns a list of all sounds to be played from column n
    const eachCol = n=>accumulate((a,b)=>list_ref(list_ref(matrix,a),n)?pair(list_ref(list_of_sounds,a),b):b, list(), enum_list(0,15));
    
    //a void function that: plays col(n) 
    //and calls itself after a delay of t = duration
    function playSound(n){
        const next = n>=15?0:n+1;
        
        play(simultaneously(eachCol(n)));
        set_timeout(()=>playSound(next),1000*duration);
        
    }
    
    
    return playSound(0);
    
}

function stop_matrix() {
    /* your answer here */
    clear_all_timeout();

}

// copy your functions generate_list_of_note and repeated_scale
// from Question 1 here
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


const pentatonic_list_of_interval = list(2, 2, 3, 2, 3);

// repeat_pattern from Lecture L2

function repeat_list_of_note(n, fn, list_of_note) {
    return n === 0 ? list_of_note : repeat_list_of_note(n - 1, fn, fn(list_of_note));
}

function repeated_scale(note, list_of_interval, n, duration, instrument) {
    // your solution goes here
    const interval_ls = repeat_list_of_note(n, n=>append(n, list_of_interval), null);
    //display_list(interval_ls);
    const note_ls = generate_list_of_note(note,interval_ls);
    
    return map(n=>instrument(n,duration),note_ls);
    
    
}
// end of copy
const sounds = repeated_scale("C4", pentatonic_list_of_interval, 3, 0.2, cello);

play_matrix(0.5, sounds);
set_timeout(stop_matrix,.5*1000*35);