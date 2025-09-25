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

let treasure1Found = false;

treasure1.addEventListener("click", () => {
    if(treasure1Found) return;
    treasure1Found = true;
  treasure1.style.color = "red";
  treasure1.textContent = "💎";
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure1.hidden = false;
  treasure1.classList.remove("hidden");
if (getComputedStyle(treasure1).display === "none") {
    treasure1.style.display = "block";
}
  treasure1.style.visibility = "visible";
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
treasure4.addEventListener("click", () => {
  treasure4.style.color = "blue";
  treasure4.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure4.hidden = false;
  treasure4.classList.remove("hidden");
if (getComputedStyle(treasure4).display === "none") {
    treasure4.style.display = "block";
}
  treasure4.style.visibility = "visible";
    checkAllFound();
  });

const treasure5 = document.getElementById("treasure5");

treasure5.addEventListener("click", () => {
  treasure5.style.color = "blue";
  treasure5.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure5.hidden = false;
  treasure5.classList.remove("hidden");
if (getComputedStyle(treasure5).display === "none") {
    treasure5.style.display = "block";
}
  treasure5.style.visibility = "visible";
    checkAllFound();
 }); 

const treasure6 = document.getElementById("treasure6");

treasure6.addEventListener("click", () => {
  treasure6.style.color = "blue";
  treasure6.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure6.hidden = false;
  treasure6.classList.remove("hidden");
if (getComputedStyle(treasure6).display === "none") {
    treasure6.style.display = "block";
}
  treasure6.style.visibility = "visible";
    checkAllFound();
  });

const treasure7 = document.getElementById("treasure7");

treasure7.addEventListener("click", () => {
  treasure7.style.color = "blue";
  treasure7.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure7.hidden = false;
  treasure7.classList.remove("hidden");
if (getComputedStyle(treasure7).display === "none") {
    treasure7.style.display = "block";
}
  treasure7.style.visibility = "visible";
    checkAllFound();
  
});
const treasure8 = document.getElementById("treasure8");

treasure8.addEventListener("click", () => {
  treasure8.style.color = "blue";
  treasure8.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure8.hidden = false;
  treasure8.classList.remove("hidden");
if (getComputedStyle(treasure8).display === "none") {
    treasure8.style.display = "block";
}
  treasure8.style.visibility = "visible";
    checkAllFound();
  
});
const treasure9 = document.getElementById("treasure9");

treasure9.addEventListener("click", () => {
  treasure9.style.color = "blue";
  treasure9.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure9.hidden = false;
  treasure9.classList.remove("hidden");
if (getComputedStyle(treasure9).display === "none") {
    treasure9.style.display = "block";
}
  treasure9.style.visibility = "visible";
    checkAllFound();
  });

const treasure10 = document.getElementById("treasure10");
treasure10.addEventListener("click", () => {
  treasure10.style.color = "blue";
  treasure10.textContent = "💎"; 
  foundCount++;
  foundCountEl.textContent = foundCount;
  alert("Grattis! Du hittade en skatt!");
  treasure10.hidden = false;
  treasure10.classList.remove("hidden");
if (getComputedStyle(treasure10).display === "none") {
    treasure10.style.display = "block";
}
  treasure10.style.visibility = "visible";
    checkAllFound();
});