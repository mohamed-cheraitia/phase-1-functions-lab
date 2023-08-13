// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42 ;
    return Math.abs(someValue - hqLocation);


}
function distanceFromHqInFeet(someValue) {
    const blockFeet = 264; 
    const blocks = distanceFromHqInBlocks(someValue); 
    return blocks * blockFeet; 

}
console.log(distanceFromHqInBlocks(20))
console.log(distanceFromHqInFeet(20))

function distanceTravelledInFeet(startingBlock, endingBlock){
    const blockDest = 264 ;
    const distince = Math.abs(endingBlock - startingBlock) * blockDest;
    return distince;
}
console.log(distanceTravelledInFeet(300, 50));

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(destination - start) * 264; 
  
    if (distance === 0 || distance < 400) {
      const result =  0 ;
      return result ;

    } else if (distance >= 400 && distance < 2000) {
      const price = 0.2 * (distance - 400) /10; 
      return  price ;
    } else if (distance >= 2000 && distance <= 2500) {
      const charges = 25 ;
      return charges;
    } else {
      return "cannot travel that far";
    }
  }
  console.log(calculatesFarePrice(34 , 32));