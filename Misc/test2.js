import {adsr,consecutively, letter_name_to_midi_note, noise_sound, play, silence_sound, bell,
    get_duration, is_sound, make_sound, simultaneously, stacking_adsr, trombone, cello, get_wave, 
    letter_name_to_frequency, midi_note_to_frequency, piano, play_wave, sawtooth_sound, stop, violin, sine_sound
} from "sound";
play(consecutively(list(piano(62,.3),piano(62,.3),piano(74,.3),piano(69,.3))));
