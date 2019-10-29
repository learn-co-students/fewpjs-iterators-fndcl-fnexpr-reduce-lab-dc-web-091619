const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function total(arr){
    let totalb =  0
    return arr.reduce(function(totalb, e){
        return totalb + e
    })
}

let totalBatteries = total(batteryBatches)
