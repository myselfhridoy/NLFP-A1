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
