const imges =["0.jpeg", "1.jpeg", "3.jpeg", "5.jpeg",];
const chosenImage = imges[Math.floor(Math.random() * imges.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.append(bgImage);
bgImage.classList.add("bgSize");

const toggleBtn = document.querySelector("#changemode_btn");
const natureBtn = document.querySelector("#naturemode_btn");

function handleToggleBtnClick(){
  toggleButton(toggleBtn);
  bgImage.classList.add("hidden");
}

function toggleButton(self){
  const body = document.querySelector("body");
  const sunImoge = document.querySelector("#changemode_btn span:first-child");
  const moonImoge = document.querySelector("#changemode_btn span:nth-child(2)");
  const btnText = document.querySelector("#changemode_btn span:last-child");
  const clock = document.querySelector("h2#clock");
  const loginForm = document.querySelector("#login-form");
  if(self.value === "Dark Mode"){
    body.style.backgroundColor = "#1e1f21";
    body.style.color ="white";
    self.value = "Light Mode";
    btnText.innerText = "Light Mode";
    sunImoge.classList.remove("hidden")
    moonImoge.classList.add("hidden")
    toggleBtn.classList.remove("darkbtn_theme");
    toggleBtn.classList.add("lightbtn_theme");
    clock.style.color = "white";
    loginForm.classList.add("login-form__white");
    loginForm.classList.remove("login-form__black");
    natureBtn.classList.remove("naturebtn_dark_theme");
    natureBtn.classList.add("naturebtn_light_theme");
  } else {
    body.style.backgroundColor = "white";
    body.style.color ="black";
    self.value ="Dark Mode";
    btnText.innerText = "Dark Mode";
    sunImoge.classList.add("hidden");
    moonImoge.classList.remove("hidden");
    toggleBtn.classList.add("darkbtn_theme");
    toggleBtn.classList.remove("lightbtn_theme");
    clock.style.color = "black";
    loginForm.classList.add("login-form__black");
    loginForm.classList.remove("login-form__white");
    natureBtn.classList.add("naturebtn_dark_theme");
    natureBtn.classList.remove("naturebtn_light_theme");
  }
}

function handleNatureBtnClick(){
  bgImage.classList.remove("hidden");
  window.location.reload();
}

toggleBtn.addEventListener("click", handleToggleBtnClick);

natureBtn.addEventListener("click", handleNatureBtnClick);