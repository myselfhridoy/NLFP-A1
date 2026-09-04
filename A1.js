//Problem 1
function describeValue(a){
    console.log(`"${typeof(a)} | ${!!a}"`)
}

//Problem 2
function getDayType(d){
    const day = d.toUpperCase();
    
    
    switch (day){
        case "FRIDAY":
        console.log("Weekend");
        break;
        case "SATURDAY":
        case "SUNDAY":
        case "MONDAY":
        case "TUESDAY":
        case "WEDNESDAY":
        case "THURSDAY":
        console.log("Working Day");
        break;
        default:
        console.log("Invalid Day")
    }
}

//Problem 3
function validateUsername(username){
    const userName = username.toLowerCase();
    const userNameLength = userName.length;
    const userNameIncludeAdmin = userName.includes("admin"); 
    const userNameIncludeSpace = userName.includes(" ");
    //console.log(userNameInclude)
    
    if(userNameLength<4){
        console.log("Too Short");
    }
    else if(userNameIncludeAdmin === true && userNameIncludeSpace === true){
        console.log("No Space Allowed\nReserved Word")
    }
    else if(userNameLength>4 && userNameIncludeSpace){
        console.log("No Space Allowed");
    }
    else if(userNameLength>4 && userNameIncludeAdmin === true){
        console.log("Reserved Word");
    }
    else{
        console.log("Available")
    }
}

//Problem 4
function getCngFare(distance=0, isNight=false, waitingMinutes=0){
    
    if (distance < 0 || waitingMinutes < 0) {
        return "Invalid input";
    }
    let fare = 50;
    
    
    if(distance>2&&isNight===true){
        fare = fare+((distance-2)*15)+waitingMinutes*2
        const totalBill = fare + (fare*0.2)
        return totalBill;
        
    }
    else if(distance>0&&distance<=2&&isNight===true){
        const totalBill = fare + (fare*0.2)
        return totalBill;
        
    }
    else if(distance>0&&distance<=2){
        return fare;
    }
    else{
        fare = fare+((distance-2)*15)+waitingMinutes*2;
        return fare;
    }
    
    
    
}

//Problem 5
const getChaseVerdict=(target, scored, ballsLeft)=>{
    const runsNeeded = target - scored;
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    if(runsNeeded<=0){
        console.log("Won")
    }
    else if(runsNeeded>0&&ballsLeft==0){
        console.log("Lost")
    }
    else if(requiredRate<=6){
        console.log(`Need ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`);
    }
    else if(requiredRate>6&&requiredRate<=12){
        console.log(`Need ${runsNeeded} runs in ${ballsLeft} balls | Tough`);
    }
    else if(requiredRate>12){
        console.log(`Need ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`)
    }
}
