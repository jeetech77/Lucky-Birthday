const userBirthday = document.querySelector(".user-birthday");
const userNumber = document.querySelector(".user-number");
const fintBtn = document.querySelector(".find-btn");
const outputPara=document.querySelector(".output-para");
var sumOfBirthday=0;
fintBtn.addEventListener('click', () => {
    var birthInput = userBirthday.value;
    var numInput = userNumber.value;
    birthInput = birthInput.replaceAll("-", '');
    birthInput = parseInt(birthInput);
    numInput = parseInt(numInput);
    while(birthInput){
        sumOfBirthday+=(birthInput%10);
        birthInput=Math.floor(birthInput/10);
    }
    if (sumOfBirthday%numInput===0) {
        outputPara.innerHTML="Yay 👏 ! Your birthday is lucky. 🎉🎉"
    }
    else{
        outputPara.innerHTML="Opps 😗! Your birthday is not lucky. 🙁🙁"
        
    }
})