function distanceFromHqInBlocks(pickUpstreet){
let distanceInBlocks;

distanceInBlocks = pickUpstreet-42;
return Math.abs(distanceInBlocks);

}

function distanceFromHqInFeet(someValue){
let distanceInFeet = distanceFromHqInBlocks(someValue) * 264;
return distanceInFeet;
} 

function distanceTravelledInFeet(start, destination){
const distanceWalked = destination-start;
const distanceTotal =  distanceWalked * 264;
return Math.abs(distanceTotal);

}

function calculatesFarePrice (start,destination){
let  distanceTravel;
distanceTravel = distanceTravelledInFeet(start,destination);
let travelFee;
if(distanceTravel <=400){
    travelFee = 0; 
}
    else if (distanceTravel>=400 & distanceTravel<=2000){
        
        travelFee = (distanceTravel-400)*0.02;
    }
        else if (distanceTravel >2000 & distanceTravel <=2500){
            travelFee = 25;
        }
        else if (distanceTravel > 2500){
            travelFee = 'cannot travel that far'
        }

return travelFee;
}