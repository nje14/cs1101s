function main(){
    ev3_speak("We're no strangers to love You know the rules and so do I A full commitment's what I'm thinkin' of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up, never gonna let you down Never gonna run around and desert you Never gonna make you cry, never gonna say goodbye Never gonna tell a lie and hurt you");
}

function run10(){
    const lWheel = ev3_motorA();
    const rWheel = ev3_motorD();

    display(ev3_connected(lWheel) ? "A connected" : "A not connected");
    display(ev3_connected(rWheel) ? "B connected" : "B not connected");
    display(ev3_motorGetPosition(lWheel));
    display(ev3_motorGetPosition(rWheel));
    ev3_runToRelativePosition(lWheel, 3000, 180);//modify magic numbers
    ev3_runToRelativePosition(rWheel, 3000, 180);
    ev3_pause(1000);
    
    
}

main();
