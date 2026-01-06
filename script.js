let reefData = {
  "2000": { ph: "8.10", tempK: "298" , img: "images/reef2000.jpg" },
  "2005": { ph: "8.08", tempK: "299" , img: "images/reef2005.jpg" },
  "2010": { ph: "8.06", tempK: "300" , img: "images/reef2010.jpg" },
  "2015": { ph: "8.04", tempK: "301" , img: "images/reef2015.jpg" },
  "2020": { ph: "8.02", tempK: "302" , img: "images/reef2020.jpg" },
  "2025": { ph: "8.00", tempK: "303" , img: "images/reef2025.jpg" }
};

function checkPwd(){
  let input = document.getElementById("pwdInput").value;
  if(input === "Password1!"){
    document.getElementById("passwordOverlay").style.display="none";
    document.getElementById("mainContent").style.display="block";
  } else {
    document.getElementById("pwdError").innerText="Incorrect password.";
  }
}

function updateYearDisplay(year){
  document.getElementById("yearValue").innerText=year;
  let data = reefData[year] || { ph:"?", tempK:"?", img:"" };
  document.getElementById("oceanPh").innerText = data.ph;
  document.getElementById("oceanTemp").innerText = data.tempK;

  document.getElementById("imageDisplay").innerHTML=`
    <img src="${data.img}" alt="Reef ${year}" class="reefImg">
  `;

  document.getElementById("yearTextContainer").innerHTML=`
    <textarea placeholder="YOUR TEXT FOR ${year} HERE"></textarea>
  `;
}
