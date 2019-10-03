let arr = [10, 2, 15, -2,-10];

const countPsumN = function (arr) {
    let pCount = "";
    let nSum = "";
    let solution = [];
    if (arr == null || arr.length == 0) {
        return "empty array"
    } else {
        for (let index = 0; index < arr.length; index++) {
            if (Math.sign(arr[index]) == 1 ) {
                pCount++
            } if (Math.sign(arr[index]) == -1) {
                nSum -= arr[index];            
            }  
        } 
        solution.push(pCount)
        solution.push (nSum)
        return solution
    }
}