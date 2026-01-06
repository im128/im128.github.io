// ==============================
// AUTO-GENERATE DATA FOR 2000–2025
// ==============================
const reefData = {};

for (let year = 2000; year <= 2025; year++) {
  reefData[year] = {
    ph: (8.10 - (year - 2000) * 0.004).toFixed(3),   // gradual acidification
    tempK: (298 + (year - 2000) * 0.2).toFixed(1),  // gradual warming
    img: `images/reef${year}.jpg`
  };
}

// ==============================
// PASSWORD
// ==============================
function checkPwd() {
  const input = document.getElementById("pwdInput").value;

  if (input === "Password1!") {
    document.getElementById("passwordOverlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    const slider = document.getElementById("yearSlider");
    loadYear(slider.value);
  } else {
    document.getElementById("pwdError").innerText = "Incorrect password.";
  }
}

// ==============================
// LOAD YEAR (WITH SAVE)
// ==============================
function loadYear(year) {
  document.getElementById("yearValue").innerText = year;

  const data = reefData[year];

  document.getElementById("oceanPh").innerText = data.ph;
  document.getElementById("oceanTemp").innerText = data.tempK;

  const imageDisplay = document.getElementById("imageDisplay");
  imageDisplay.innerHTML = `
    <img src="${data.img}" class="reefImg" onerror="this.outerHTML='<p style=color:#888>No image for ${year}</p>'">
  `;

  // ---- LOAD SAVED TEXT ----
  const savedText = localStorage.getItem("reefText_" + year) || "";

  const container = document.getElementById("yearTextContainer");
  container.innerHTML = `
    <h3>${year} Notes</h3>
    <textarea id="yearTextarea" placeholder="WRITE ALL YOUR TEXT FOR ${year} HERE..."></textarea>
  `;

  const textarea = document.getElementById("yearTextarea");
  textarea.value = savedText;

  // ---- SAVE ON EVERY INPUT ----
  textarea.oninput = function () {
    localStorage.setItem("reefText_" + year, this.value);
  };
}

// ==============================
// SLIDER LISTENER
// ==============================
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("yearSlider");

  slider.min = 2000;
  slider.max = 2025;
  slider.value = 2000;

  slider.addEventListener("input", function () {
    loadYear(this.value);
  });
});
