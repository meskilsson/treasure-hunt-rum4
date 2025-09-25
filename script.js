// Räknare
let foundCount = 0;
let time = 0;
let timer;

// Hämta HUD-element
const foundCountEl = document.getElementById("foundCount");
const timerEl = document.getElementById("timer");

// Starta timern
timer = setInterval(() => {
  time++;
  timerEl.textContent = time;
}, 1000);

function checkAllFound() {
  if (foundCount === 10) {
    clearInterval(timer);
    alert("Alla skatter hittade på " + time + " sekunder!");
  }
}


// --- Här ska ni lägga in era egna skatter --- //
// Exempel: skatt 1
const treasure1 = document.getElementById("treasure1");
treasure1.addEventListener("click", () => {
  treasure1.style.color = "red";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
    checkAllFound();
});


const treasure2 = document.getElementById("treasure2");
treasure2.addEventListener("click", () => {
  treasure2.style.color = "blue";
  treasure2.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure2.hidden = false;
  treasure2.classList.remove("hidden");
if (getComputedStyle(treasure2).display === "none") {
    treasure2.style.display = "block";
}
  treasure2.style.visibility = "visible";
    checkAllFound();
  
});

const treasure3 = document.getElementById("treasure3");
treasure3.addEventListener('click', () => {
  treasure3.innerHTML = "<h1>Du hittade en skatt!</h1>"; 
  const heading = treasure3.querySelector("h1");
  heading.style.color = "blue";
  foundCount++;
  foundCountEl.textContent = foundCount;
  treasure3.hidden = false;
  treasure3.classList.remove("hidden");
if (getComputedStyle(treasure3).display === "none") {
    treasure3.style.display = "block";
}
  treasure3.style.visibility = "visible";
  checkAllFound();
})

const treasure4 = document.getElementById("treasure4");

const treasure5 = document.getElementById("treasure5");

const treasure6 = document.getElementById("treasure6");

const treasure7 = document.getElementById("treasure7");

const treasure8 = document.getElementById("treasure8");

const treasure9 = document.getElementById("treasure9");

const treasure10 = document.getElementById("treasure10");
// ... fortsätt för alla skatter ...