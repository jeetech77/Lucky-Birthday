const userBirthday = document.querySelector(".user-birthday");
const userNumber = document.querySelector(".user-number");
const btnFind = document.querySelector(".find-btn");
const btnCross = document.querySelector(".cross-btn");
const outputPara = document.querySelector(".output-para");
const privacyPara = document.querySelector(".privacy");
const imgElement = document.querySelector(".img-output");
btnFind.addEventListener('click', () => {
    let sumOfBirthday = 0;
    let birthInput = userBirthday.value;
    let numInput = userNumber.value;
    console.log(birthInput);
    console.log(numInput);
    if (birthInput === '' || numInput === "") {
        outputPara.innerHTML = "Enter some value first.";
        outputPara.style.color = 'red';
        imgElement.src = './images/think.png';
        return;
    }
    birthInput = birthInput.replaceAll("-", '');
    birthInput = parseInt(birthInput);
    numInput = parseInt(numInput);
    if (numInput<1) {
        outputPara.innerHTML = "Lucky number must be grater than 0";
        outputPara.style.color = 'red';
        imgElement.src = './images/think.png';
        return;
    }
    else{
        while (birthInput) {
        sumOfBirthday += (birthInput % 10);
        birthInput = Math.floor(birthInput / 10);
    }
    if (sumOfBirthday % numInput === 0) {
        outputPara.innerHTML = "Yay 👏 ! Your birthday is lucky. 🎉🎉";
        outputPara.style.color = 'rgb(1, 255, 77)';
        imgElement.src = './images/smiley.png';
    } else {
        outputPara.innerHTML = "Opps! Your birthday is not lucky. 🙁🙁"
        outputPara.style.color = 'black';
        imgElement.src = '/images/sad.png';
    }}
})
btnCross.addEventListener('click', () => {
    privacyPara.style.visibility = "hidden";
})