//Q4
// The following are PREDECLARED:
// red, blue, stack, heart, nova, show
// Please do not import them.

function love(rune) {
    // edit the return expression
    return stack(red(heart),rune);
}

show(love(blue(nova)));

// To view the rune, click on the blinking icon on the right panel to see the image.
// Don't forget to click on the airplane icon to run the tests :)
// As a reminder, if the tests are open, then the run button will run all tests.

//Q5

// The following are PREDECLARED:
// show, stackn, quarter_turn_left, quarter_turn_right,
// and all the basic runes: nova, heart, etc.
// Please do not import them.
// Do not import the beside, besiden, beside_frac functions.
// They will not work.

function besiden(n, rune) {
    return quarter_turn_left(stackn(n,quarter_turn_right(rune)));
}

show(besiden(5, heart));

// To view the rune, click on the blinking icon on the right panel to see the image.
// Don't forget to click on the airplane icon to run the tests :)
// As a reminder, if the tests are open, then the run button will run all tests.


