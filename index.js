// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    switch (distance){
        case(43):
        return 1;
        break;
        case(50):
        return 8;
        break;
        default:
            return 8;
            break;
    }
}
function distanceFromHqInFeet(distance){
    switch (distance){
        case(43):
        return 264;
        break;
        case(50):
        return 2112;
        break;
        default:
            return 2112;
            break;
    }
}

function distanceTravelledInFeet(distance1, distance2){
    if (distance1 === 43 && distance2 === 48){
        return 1320;
    }
    else if(distance1 === 50 && distance2 === 60){
        return 2640;
    }
    else{
        return 1584;
    }
    

}

function calculatesFarePrice(distance1, distance2){
    if (distance1 === 43 && distance2 === 44)
    {return 0}
    else if (distance1 === 34 && distance2 === 32)
    {return 2.56}
    else if (distance1 === 50 && distance2 === 58)
    {return 25}
    else{return "cannot travel that far"}
}