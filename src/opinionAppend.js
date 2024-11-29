const saveOpinion = (name, email, opinion) => {
  const opinions = JSON.parse(localStorage.getItem("opinions")) || [];
  opinions.push({ name, email, opinion });
  localStorage.setItem("opinions", JSON.stringify(opinions));
};

const displayOpinions = () => {
  const opinionsContainer = document.getElementById("opinionsContainer");
  const opinions = JSON.parse(localStorage.getItem("opinions")) || [];
  opinionsContainer.innerHTML = "";

  opinions.forEach(({ name, email, opinion }) => {
    const opinionDiv = document.createElement("div");
    opinionDiv.classList.add("opinion");
    opinionDiv.innerHTML = `
          <div><strong>Nome:</strong> ${name}</div>
          <div><strong>Email:</strong> ${email}</div>
          <div><strong>Opinião:</strong> ${opinion}</div>
        `;
    opinionsContainer.appendChild(opinionDiv);
  });
};

const form = document.getElementById("opinionForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const opinion = document.getElementById("opinion").value;

  saveOpinion(name, email, opinion);

  displayOpinions();

  form.reset();
});

window.onload = displayOpinions;
