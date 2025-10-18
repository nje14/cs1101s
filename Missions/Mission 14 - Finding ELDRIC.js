//Task 1

function main() {
    let pressed = ev3_touchSensorPressed(ev3_touchSensor3());
    //pressed returns true or false 
    
    while (pressed === false) {
        pressed = ev3_touchSensorPressed(ev3_touchSensor3());
        display(ev3_reflectedLightIntensity(ev3_colorSensor()));
        ev3_pause(1000);
    }
    
}

main();

//Task 2

const leftMotor = ev3_motorA();
const rightMotor = ev3_motorD(); 
const ultraSensor = ev3_ultrasonicSensor();

ev3_motorSetStopAction(leftMotor, "brake");
ev3_motorSetStopAction(rightMotor, "brake");

function main() {
    let pressed = ev3_touchSensorPressed(ev3_touchSensor3());
    let colour = ev3_colorSensorGetColor(ev3_colorSensor());
    display(colour);
    //pressed returns true or false 
    
    function moveForward(distanceCm, speed) {
        const conversionFactor = 36;
        const rotation = distanceCm * conversionFactor;
        ev3_runToRelativePosition(leftMotor, rotation, speed);
        ev3_runToRelativePosition(rightMotor, rotation, speed);
        ev3_pause(math_abs(rotation / speed * 1000) + 300);
    }
    
    function turnDegrees(angle, speed) {
        const turnFactor = 2; 
        const rotation = angle * turnFactor;
        ev3_runToRelativePosition(leftMotor, -rotation, speed);
        ev3_runToRelativePosition(rightMotor, rotation, speed);
        ev3_pause(math_abs(rotation / speed * 1000) + 300);
    }
    
    while ((pressed === false) && (colour === 1)) {
        moveForward(1,200);
        pressed = ev3_touchSensorPressed(ev3_touchSensor3());
        colour = ev3_colorSensorGetColor(ev3_colorSensor());
        display(colour);
    }
    
}    
main();

//Task 3

// Your program here.
function main() {
    const leftMotor = ev3_motorA();
    const rightMotor = ev3_motorD(); 
    const ultraSensor = ev3_ultrasonicSensor();

    ev3_motorSetStopAction(leftMotor, "brake");
    ev3_motorSetStopAction(rightMotor, "brake");
    let pressed = ev3_touchSensorPressed(ev3_touchSensor3());
    let colour = ev3_colorSensorGetColor((ev3_colorSensor()));
    const black = 1;
    
    //pressed returns true or false 
    
    function moveForward(distanceCm, speed) {
        const conversionFactor = 36;
        const rotation = distanceCm * conversionFactor;
        ev3_runToRelativePosition(leftMotor, rotation, speed);
        ev3_runToRelativePosition(rightMotor, rotation, speed);
        ev3_pause(math_abs(rotation / speed * 1000) + 300);
    }
    
    function turnDegrees(angle, speed) {
        const turnFactor = 2; 
        const rotation = angle * turnFactor;
        ev3_runToRelativePosition(leftMotor, -rotation, speed);
        ev3_runToRelativePosition(rightMotor, rotation, speed);
        ev3_pause(math_abs(rotation / speed * 1000) + 300);
    }
    function test(){//test for presence of black line OR button pressed (to kill)
        if(ev3_colorSensorGetColor(ev3_colorSensor())===black){
            display("Line detected");
            return true;
        }
        if(ev3_touchSensorPressed(ev3_touchSensor3())){
            display("Early break");
            return true;
        }
        return false;
    }
    while(true){
        pressed = ev3_touchSensorPressed(ev3_touchSensor3());
        colour = ev3_colorSensorGetColor((ev3_colorSensor()));
        if(pressed){
            display("Early break");
            break;
        }
        if(colour === black){//handling if line detected
            moveForward(2,200);
        }
        else{//handling if no line detected
            let exit = false;
            for(let i = 0; i < 9; i = i + 1){
                if(i<4){//sweep left
                    turnDegrees(22.5,200);
                }
                else if(i===4){//rotate to original position
                    turnDegrees(-90,200);
                }
                else{//sweep right
                    turnDegrees(-22.5,200);
                }
                if(test()){//test for line
                    break;//break if present
                }
                if(i===8){
                    turnDegrees(90,200);
                    display("Err-NoLineFound");
                    exit = true;
                }
            }
            if(exit){
                break;
            }
        }
    }
    display("End");
}    
main();