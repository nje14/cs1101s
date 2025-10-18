//Task 1

const increment_repeater =
    repeater => f => x => f(repeater(f)(x));  // complete the
                        // lambda expression
//this took me an embarrassingly long time to figure out
const twice = f => x => f(f(x));

const thrice = increment_repeater(twice);
const fourtimes = increment_repeater(thrice);

const warn = thrice(display);
warn("ALERT");          // should display "ALERT"
                        // three times in orange
const bigwarn = fourtimes(display);
bigwarn("A L E R T");   // should display "A L E R T"
                        // four times in orange
                        // (the REPL will display
                        // "A L E R T"a fifth time
                        // [in white] as the value
                        // returned by bigwarn)

//Task 2

const pair = (x, y) => f => f(x, y);

const head = p => p((x,y)=>x) ;  // complete lambda expression
const tail = p => p((x,y)=>y);  // complete lambda expression


head(pair(1, 2)) === 1; // should return true
tail(pair(1, 2)) === 2; // should return true

//Task 3

/*

enter your answer here; no explanation required
Ω(n)
*/

//Task 4

//editor's note: solution was awarded 0 xp for not using iter_count
//editor's note: AI was used to explain what was going on and partially generate code
//editor's note: i still can't believe they introduced lambda calculus in T1W3

const zero_repeater = f => x => x;
const one_repeater = f => x => f(zero_repeater, () => zero_repeater(f)(x));
const two_repeater = f => x => f(one_repeater, () => one_repeater(f)(x));
const three_repeater = f => x => f(two_repeater, () => two_repeater(f)(x));

const to_int = repeater => repeater((iter_count, x) => x() + 1)(0);
                                                //x is a function
const increment_repeater = repeater => f => x => f(repeater, () => repeater(f)(x));

const add_repeaters = (repeater1, repeater2) => f => x =>{
    return repeater1(f)(repeater2(f)(x));
};
//can i just say this is one of the most painful quests
//i have had the misfortune to encounter in my
//programming career :,)
//to_int(increment_repeater(three_repeater));
to_int(add_repeaters(two_repeater,
                     three_repeater));  // should return 5
//to_int(add_repeaters(one_repeater, three_repeater));

//Task 5

    const zero_repeater = f => x => x;
    const one_repeater = f => x => f(zero_repeater, () => zero_repeater(f)(x));
    const two_repeater = f => x => f(one_repeater, () => one_repeater(f)(x));
    const three_repeater = f => x => f(two_repeater, () => two_repeater(f)(x));
    
    const to_int = repeater => repeater((iter_count, x) => x() + 1)(0);


const decrement_repeater = repeater => repeater((prev, x)=>prev)(zero_repeater);
                                                    //x is not called here
//hi so as you may have guessed i did use ai for some portions of this quest
//i dont get how this module expects people to figure this out on their own
//other than prior knowledge so please forgive me ;-;
//i would provide the chat log but i wasnt logged in (i didnt have a openai account prior to this)
//and the chat log wasnt saved 
//i asked chatgpt mainly on what was happening 
//and for some idea on how to implement for 4 and 5
//i also did consult my avenger on what was happening
to_int(decrement_repeater(three_repeater));  // should return 2