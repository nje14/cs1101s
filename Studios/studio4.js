function pascal(row, position){
    if(row<=1||position===0||row===position){
        return 1;
    }else{
        return pascal(row-1,position)+pascal(row-1,position-1);
    }
}
//(4,3)
//(3,2)               (3,3)
//(2,1)         (2,2) 1
//(1,1) (1,2)   1
//1 1 

//compose(math_sqrt, math_log)(math_E)
//=sqrt(log(E)) = sqrt(1) = 1
// /compose(math_log, math_sqrt)(math_E * math_E)\
//=log(sqrt(E^2))=log(E)=1