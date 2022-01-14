const userBirthday = document.querySelector(".user-birthday");
const userNumber = document.querySelector(".user-number");
const btnFind = document.querySelector(".find-btn");
const btnCross = document.querySelector(".cross-btn");
const outputPara = document.querySelector(".output-para");
const privacyPara = document.querySelector(".privacy");
const imgElement = document.querySelector(".img-output");
btnFind.addEventListener("click", () => {
  let sumOfBirthday = 0;
  let birthInput = userBirthday.value;
  let numInput = userNumber.value;

  if (birthInput === "" || numInput === "") {
    setStyle("Enter some value first.", "red", "./images/think.png");
    return;
  }
  birthInput = birthInput.replaceAll("-", "");
  birthInput = parseInt(birthInput);
  numInput = parseInt(numInput);
  if (numInput < 1) {
    setStyle("Lucky number must be grater than 0", "red", "./images/think.png");
    return;
  } else {
    while (birthInput) {
      sumOfBirthday += birthInput % 10;
      birthInput = Math.floor(birthInput / 10);
    }
    if (sumOfBirthday % numInput === 0) {
      setStyle(
        "Yay 👏 ! Your birthday is lucky. 🎉🎉",
        "rgb(1, 255, 77)",
        "./images/smiley.png"
      );
    } else {
      setStyle(
        "Opps! Your birthday is not lucky. 🙁🙁",
        "black",
        "/images/sad.png"
      );
    }
  }
});
btnCross.addEventListener("click", () => {
  privacyPara.style.visibility = "hidden";
});

function setStyle(paraText, paraColor, imgSrc) {
  outputPara.innerHTML = `${paraText}`;
  outputPara.style.color = `${paraColor}`;
  imgElement.src = `${imgSrc}`;
}
