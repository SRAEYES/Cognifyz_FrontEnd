// Change Background Color
const changeBackgroundButton = document.getElementById(
  "changeBackgroundButton"
);
const sectionsToChange = [
  document.body,
  document.querySelector("header"),
  document.querySelector("footer"),
];
const colors = ["#f0f0f0", "#e6f7ff", "#fff0f6", "#e8f5e9", "#fffde7"];

changeBackgroundButton.addEventListener("click", () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  sectionsToChange.forEach(
    (section) => (section.style.backgroundColor = randomColor)
  );
});

// Fetch Users from API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const usersList = document.getElementById("users-list");
    data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.className = "user";
      userDiv.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p><a href="https://${user.website}" target="_blank">${user.website}</a></p>
            `;
      usersList.appendChild(userDiv);
    });
  });

// Client-Side Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");

  feedback.classList.add("hidden");
  feedback.innerHTML = "";

  if (!name || !email || !phone || !message) {
    feedback.innerHTML = "All fields are required.";
    feedback.classList.remove("hidden");
    return;
  }

  if (!/^[a-zA-Z ]+$/.test(name)) {
    feedback.innerHTML = "Name must only contain letters.";
    feedback.classList.remove("hidden");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    feedback.innerHTML = "Invalid email address.";
    feedback.classList.remove("hidden");
    return;
  }

  if (!/^\d{10}$/.test(phone)) {
    feedback.innerHTML = "Phone number must be 10 digits.";
    feedback.classList.remove("hidden");
    return;
  }

  feedback.innerHTML = "Form submitted successfully!";
  feedback.style.color = "green";
  feedback.classList.remove("hidden");
  this.reset();
});
