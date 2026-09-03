function getDayType(d){
    const day = d;
    
    switch (day){
        case "Friday":
        console.log("Weekend");
        break;
        case "Saturday":
        case "Sunday":
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        console.log("Working Day");
        break;
        default:
        console.log("Invalid Day")
    }
}
