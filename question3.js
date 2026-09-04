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
