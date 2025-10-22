// performs a constant-space
// linear time in-place list reversal.
// can be done better.
function TABA_reverse(xs) {
    function visit(ys) {
        if (is_null(ys)) {
            // once we reach the end of the
            // list, provide the original
            // list to work on
            return xs;
        } else {
            const h = head(ys);
            // there - traverse to the end of the list
            const back = visit(tail(ys));
            // back again
            set_head(back, h);
            // get the next element in the list
            return tail(back);
        }
    }
    visit(xs);
    return xs;
}

const xs = list(1, 2, 3, 4);
const ys = tail(tail(xs));
display_list(xs, "xs_before: ");
display_list(ys, "ys_before: ");
// zs uses the same cells as xs
const zs = TABA_reverse(xs);
display_list(zs, "zs: ");
display_list(xs, "xs_after: ");
display_list(ys, "ys_after: ");
zs === xs;