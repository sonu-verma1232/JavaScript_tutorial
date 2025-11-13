let count = 0;


function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue(){
    if(count == 10){
        alert("Your instagram post gained 10 followers! Congratulations!");
    }
    else if(count == 20){
        alert("Your instagram post gained 20 followers! Keep it up!");
    }
}

function increaseCount() {
    count++;  // Increment  the count by 1
    displayCount();  // Display the count
    checkCountValue();  // Check count value and display messages
}

function resetCount(){
    document.getElementById("countDisplay").innerHTML = 0;
    alert("Followers count has been reset.");
}