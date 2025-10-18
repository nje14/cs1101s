// My contest entry
//count_tokens(`
function runes_contest() {
    function rgb(a, mode,offset){
        //mode accepts: 
        // -1/3for red
        //0 for green
        // 1/3for blue
        const temp = a - mode + offset;
        const i = temp>1?temp-1:temp<0?temp+1:temp;
        
        return 0<i&&i<0.16666666667
               ?6*i
               :0.16666666666<=i&&i<=.5
               ?1
               :.5<i&&i<0.66666666666
               ?4-6*i
               :0;
    }
    function recur(i, n, runeBuilder, rune, tfx, tfy, sf,offset){
        return i<=n
        ?recur(
                i+1,
                n,
                overlay_frac(0, 
                            runeBuilder, 
                            rotate(i*6.28318530718/n, 
                                    color(translate(tfx,tfy,scale(sf,rune)),
                                        rgb(i/n,-.3333333333,offset),
                                        rgb(i/n,0,offset),
                                        rgb(i/n,.3333333333,offset))
                                )
                            ),
                rune,
                tfx,
                tfy,
                sf,
                offset)
                :runeBuilder;
    }
    
    const rtn = overlay_frac(0,
                        overlay_frac(0,
                                     recur(1,16,blank,corner,0.4,0.2, 0.2,.1875),
                                     recur(1, 16, blank, sail, 0.6,0.6, 0.6,.1875)
                                     ),
                        overlay_frac(0,
                                     recur(1,8,blank,quarter_turn_left(corner),.35,.35,.35,0),
                                    black(square)
                                    )
                        );
    const correction =  overlay_frac(0, translate(.18,-.178,scale(0.25,rotate(-2.35619449019, color(corner,1,.75,0)))),translate(.355,.11,scale(.11,quarter_turn_left(red(corner)))));
    return overlay_frac(0,correction,rtn);
}
//`);

    
    // const rtn = overlay_frac(0,
    //                     overlay_frac(0,
    //                                  recur(1,16,blank,translate(.4,.2,scale(.2,corner))),
    //                                  recur(1, 16, blank, translate(.6,.6,scale(.6,sail)))
    //                                  ),
    //                     overlay_frac(0,
    //                                  recur(1,8,blank,translate(-.2,0,scale(.2,flip_vert(corner)))),
    //                                 black(square)
    //                                 )
    //                     );

// Keep this show function call

show(runes_contest());