let userType = "employee";

if(userType == "employee"){
    console.log("You are authorized to have access to 'Dietary Services'");
}
else if(userType == "enrolled member"){
    console.log("You are authorized to have access to 'Dietary Service' and one-on-one interaction with a dietician.");
}
else if(userType == "subscriber"){
    console.log("You are authorized to have partial access to facilitate 'Dietary Service' only");
}
else{
    console.log("You need to enroll or at least subscribe first to avail this facility.");
}

