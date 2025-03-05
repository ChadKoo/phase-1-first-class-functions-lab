const names = ["Antonia", "Nuru", "Amari", "Mo"]
const returnFirstTwoDrivers = function (names){
    return names.slice(0,2)
}

const returnLastTwoDrivers = function (names){
    return names.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(fare){
    return function(ride){
            return fare*ride
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(names, drivers){
    if(drivers === returnFirstTwoDrivers){
        return names.slice(0,2)
    }else if(drivers === returnLastTwoDrivers)
        return names.slice(2)
}

