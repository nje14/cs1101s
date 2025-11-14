function binSearch(arr, x){
    let l = 0;
    let r = array_length(arr);
    while(r>l){
        
        let guess = math_floor((r+l)/2);
        
        if(arr[guess]===x){
            return true;
        }else if(arr[guess]>x){
            r = guess-1;
        }else if(arr[guess]<x){
            l = guess + 1;
        }
    }
    return false;
}
let arr = [1,2,4,5,6,7,8,10,13,25];
binSearch(arr, 15);
