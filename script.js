document
  .getElementById("akanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const birthDate = document.getElementById("birthDate").value;
    const gender = document.getElementById("gender").value;

    if (!birthDate || !gender) {
      alert("Please fill out all fields!");
      return;
    }

    const date = new Date(birthDate);
    const dayOfWeek = date.getDay();

    const maleNames = [
      "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame",
    ];
    const femaleNames = [
      "Akosua",
      "Adwoa",
      "Abenaa",
      "Akua",
      "Yaa",
      "Afua",
      "Ama",
    ];

    let akanName = "";

    if (gender === "male") {
      akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
      akanName = femaleNames[dayOfWeek];
    }

    document.getElementById("akanName").textContent = akanName
      ? `Your Akan name is ${akanName}!`
      : "Could not determine your Akan name.";
  });
