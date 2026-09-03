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
