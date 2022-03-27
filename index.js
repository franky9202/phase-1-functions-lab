const headQuarters = 42
    function distanceFromHqInBlocks(streetNumber){
        return Math.abs (headQuarters - streetNumber)   
    }

const distance = 264
    function distanceFromHqInFeet(streetNumber){
        distanceFromHqInBlocks()
        return Math.abs ((headQuarters - streetNumber) * distance)
    }

    function distanceTravelledInFeet(streetNumber, streetNumber2){
    return Math.abs ((streetNumber - streetNumber2) * distance )
    }

    function calculatesFarePrice(start, destination){
        let finalDestination = distanceTravelledInFeet(start, destination)
        if(finalDestination < 400){
            return 0
        }
        if(finalDestination > 2500){
            return 'cannot travel that far'
        }
        if(finalDestination > 400 && finalDestination <= 2000){
            return ((finalDestination - 400) * .02)
        }
        else
        return 25
    }