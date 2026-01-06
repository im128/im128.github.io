// ==============================
// REEF DATA (EDIT VALUES IF NEEDED)
// ==============================
let reefData = {
  "2000": { ph: "8.10", tempK: "298", img: "images/reef2000.jpg" },
  "2001": { ph: "8.095", tempK: "298.5", img: "images/reef2001.jpg" },
  "2002": { ph: "8.09", tempK: "299", img: "images/reef2002.jpg" },
  "2003": { ph: "8.085", tempK: "299.5", img: "images/reef2003.jpg" },
  "2004": { ph: "8.08", tempK: "300", img: "images/reef2004.jpg" },
  "2005": { ph: "8.075", tempK: "300.5", img: "images/reef2005.jpg" },
  "2010": { ph: "8.06", tempK: "301", img: "images/reef2010.jpg" },
  "2015": { ph: "8.04", tempK: "302", img: "images/reef2015.jpg" },
  "2020": { ph: "8.02", tempK: "303", img: "images/reef2020.jpg" },
  "2025": { ph: "8.00", tempK: "304", img: "images/reef2025.jpg" }
};

// ==============================
// PASSWORD SYSTEM
// ==============================
function checkPwd(){
  let input = document.getElementById("pwdInput").value;
  if(input === "Password1!"){
    document.getElementById("passwordOverlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";

    // Load initial year
    updateYearDisplay(document.getElementById("yearSlider").value);
  } else {
    document.getElementById("pwdError").innerText = "Incorrect password.";
  }
}

// ==============================
// YEAR SLIDER + DATA LOADING
// ==============================
function updateYearDisplay(year){
  document.getElementById("yearValue").innerText = year;

  let data = reefData[year] || { ph: "?", tempK: "?", img: "" };

  // Update ocean data
  document.getElementById("oceanPh").innerText = data.ph;
  document.getElementById("oceanTemp").innerText = data.tempK;

  // Update image
  document.getElementById("imageDisplay").innerHTML = data.img
    ? `<img src="${data.img}" alt="Reef ${year}" class="reefImg">`
    : `<p style="color:#777">No image available for ${year}</p>`;

  // Load saved text for this year
  let savedText = localStorage.getItem("reefText_" + year) || "";

  // Update sidebar text area
  document.getElementById("yearTextContainer").innerHTML = `
    <h3>${year} Notes</h3>
    <textarea id="yearTextarea" placeholder="WRITE ALL YOUR TEXT FOR ${year} HERE...">${savedText}</textarea>
  `;

  // Auto-save as user types
  document.getElementById("yearTextarea").addEventListener("input", function(){
    localStorage.setItem("reefText_" + year, this.value);
  });
}

// ==============================
// OPTIONAL: AUTO LOAD FIRST YEAR
// ==============================
document.addEventListener("DOMContentLoaded", function(){
  let slider = document.getElementById("yearSlider");
  if(slider){
    updateYearDisplay(slider.value);
  }
});
