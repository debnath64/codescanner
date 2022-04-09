const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".from input"),
generateBtn = document.querySelector(".from button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click",() => {
    let qrValue = qrInput.value;
    if(!qrValue) return;//if input is empty then retrun from here
    qrImg.src =` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
     wrapper.classList.add("active"); //for use button
     generateBtn.innerText = "Generate Qr Code";
    })
});