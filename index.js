// Code your solution in this file!
function distanceFromHqInBlocks(passengerLocation){
    const hqBlock = 42;
    const distance = passengerLocation - hqBlock;
    return Math.abs(distance);
}
function distanceFromHqInFeet(passengerLocation) {
    const oneBlockInFeet = 264;
    const blocksFromHq = distanceFromHqInBlocks(passengerLocation);
    return (blocksFromHq * oneBlockInFeet); 
}
function distanceTravelledInFeet(pickUpBlock, dropOffBlock) {
    const blocksTraveled = Math.abs(pickUpBlock - dropOffBlock);
    const oneBlockInFeet = 264;
    return (blocksTraveled * oneBlockInFeet); 
}
function calculatesFarePrice(pickUpBlock, dropOffBlock) {
    const feetTraveled = distanceTravelledInFeet(pickUpBlock, dropOffBlock);
    if (feetTraveled < 400) {
        return 0
    } else if (feetTraveled > 400 && feetTraveled < 2000) {
        return ((feetTraveled - 400) * 0.02)
    } else if (feetTraveled > 2000 && feetTraveled < 2500) {
        return 25
    } else if (feetTraveled > 2500) {
        return "cannot travel that far"
    }
}