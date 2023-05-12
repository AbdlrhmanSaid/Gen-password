let genSerial = Array.from("123456789abcdefgklmnopqrstuvwxyz");
let finalSerial = [];

let gen = document.querySelector(".gen");
let serial = document.querySelector(".serial");

let logdcon = document.querySelector(".log");
let log = document.querySelector("button");
let war = document.querySelector(".warning");

gen.onclick = function () {
  logdcon.classList.remove("done");
  let finalSerial = [];
  for (let i = 0; i < 9; i++) {
    finalSerial.push(genSerial[Math.floor(Math.random() * genSerial.length)]);
  }
  serial.innerHTML = `#${finalSerial.join("")}`;
  log.onclick = function () {
    let pass = document.querySelector("#pass");
    let name = document.querySelector("#name");
    if (pass.value !== serial.innerHTML || name.value === "") {
      pass.classList.add("wrong");
      name.classList.add("wrong");
      logdcon.classList.remove("done");
      war.style.display = "block";
    } else {
      pass.classList.remove("wrong");
      logdcon.classList.add("done");
      serial.innerHTML = "Done";
      gen.remove();
    }
  };
};
