// ----------------------------------------------------------------------------
// PREDECLARED FUNCTIONS AND CONSTANTS
// ----------------------------------------------------------------------------


const leftMotor = ev3_motorA();
const rightMotor = ev3_motorD(); 
const ultraSensor = ev3_ultrasonicSensor();

ev3_motorSetStopAction(leftMotor, "brake");
ev3_motorSetStopAction(rightMotor, "brake");

function moveForward(distanceCm, speed) {
    const conversionFactor = 20;
    const rotation = distanceCm * conversionFactor;
    ev3_runToRelativePosition(leftMotor, rotation, speed);
    ev3_runToRelativePosition(rightMotor, rotation, speed);
    ev3_pause(math_abs(rotation / speed * 1000) + 300);
}

function turnDegrees(angle, speed) { // turns clockwise
    const turnFactor = 2; 
    const rotation = angle * turnFactor;
    ev3_runToRelativePosition(leftMotor, -rotation, speed);
    ev3_runToRelativePosition(rightMotor, rotation, speed);
    ev3_pause(math_abs(rotation / speed * 1000) + 300);
}


function untilObstacle(move, distanceCm){//maximum distance is 260cm
    const distanceFromObstacle = checkObstacle();
    if (distanceFromObstacle < 260){
        display(distanceFromObstacle);
        move(distanceFromObstacle - distanceCm);
    }
}

function checkObstacle(){//returns distance from obstacle in 10cm
    const conversionFactor = 0.105;
    return ev3_ultrasonicSensorDistance(ultraSensor) 
                                * conversionFactor;
}

function movePastObstacle(distance, tolerance){
    untilObstacle(d => moveForward(d, 200), 10);
    const direction = (math_random()>=0.5)?1:-1;
    
    const rotation = 90 * direction;
    turnDegrees(rotation, 180);
    while(true){
        moveForward(distance, 200);
        turnDegrees(-rotation, 400);
        if(checkObstacle()<tolerance){
            turnDegrees(rotation, 400);
        }else{
            
            break;
        }
    }
    turnDegrees(rotation,180);
    moveForward(10, 200);
    turnDegrees(-rotation,180);
    moveForward(30,200);
    
}
movePastObstacle(10,10);
