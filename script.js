let openBtn = document.getElementById("eyeCheck");
let inputBtn = document.getElementById("passwordEntry");
let strengthDisplay = document.getElementById("strengthCheck")

openBtn.addEventListener("click", ()=>{
    // console.log(inputBtn.type)
    let inputType = inputBtn.type
    if(inputType === "password"){
        inputBtn.type = "text";
        openBtn.src = "eye-open.png"
    }
    else{
        inputBtn.type = "password";
        openBtn.src = "eye-close.png"
    }
})

function checkStrength(value){

let upperCount = 0;
let lowerCount = 0;
let numbersCount = 0;
let specialCount = 0;

for (let char of value){
    if(/[A-Z]/.test(char)){
        ++upperCount;
        // console.log("upper count incremented")
    }
    else if(/[a-z]/.test(char)){
        // console.log("lower count incremented")
        ++lowerCount;
    }
    else if(/[0-9]/.test(char)){
        // console.log("number count incremented")
        ++numbersCount;
    }
    else if(/[^a-zA-Z0-9]/.test(char)){
        // console.log("special count incremented")
        ++specialCount;
    }
}
// console.log(upperCount, lowerCount, numbersCount, specialCount)

if((upperCount>0) && (lowerCount>0) && (numbersCount>0) && (specialCount>0)){
    strengthDisplay.style.display = "block"
    strengthDisplay.innerHTML = "Password is strong";
    strengthDisplay.style.background = "green"
}
else if(inputBtn.value.length > 0){
    strengthDisplay.style.display = "block"
    strengthDisplay.innerHTML = "Password is weak";
    strengthDisplay.style.background = "red"
}
else{
    strengthDisplay.style.display = "none"

}
}

setInterval(() => {
    checkStrength(inputBtn.value)
}, 500);