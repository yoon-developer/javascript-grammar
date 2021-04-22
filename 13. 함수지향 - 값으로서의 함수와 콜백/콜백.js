// 정렬
function sortNumber(a,b){
    console.log(a, b);
    /* b - a
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0;
    }
    */
    return b-a;
}
var numbers = [20, 10, 9,8,7,6,5,4,3,2,1];
console.log(numbers.sort(sortNumber)); // [ 20, 10, 9, 8, 7, 6,  5, 4, 3, 2, 1 ]