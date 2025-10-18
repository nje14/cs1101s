//Task 1 
function main(){

    ev3_speak("pneumonoultramicroscopicsilicovolcanoconiosis");
}

//Task 2
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

//Task 3

const leftMotor = ev3_motorA();
const rightMotor = ev3_motorD(); 
ev3_motorSetStopAction(leftMotor, "brake");
ev3_motorSetStopAction(rightMotor, "brake");

ev3_motorGetPosition(leftMotor);
ev3_motorGetPosition(rightMotor);

const speed = 200;
const turnAmount = 180;

ev3_runToRelativePosition(leftMotor, turnAmount, speed);
ev3_runToRelativePosition(rightMotor, -turnAmount, speed);

ev3_pause(1500);

ev3_motorStop(leftMotor);
ev3_motorStop(rightMotor);

//Task 4

const leftMotor = ev3_motorA();
const rightMotor = ev3_motorD(); 

ev3_motorSetStopAction(leftMotor, "brake");
ev3_motorSetStopAction(rightMotor, "brake");

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

moveForward(10, 200);
turnDegrees(90, 200);
moveForward(5, 200);
turnDegrees(-90, 200);
moveForward(15, 200);

ev3_motorStop(leftMotor);
ev3_motorStop(rightMotor);