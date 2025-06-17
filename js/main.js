const lightThemeBtn = document.querySelector("#lightthemebtn");
const darkThemeBtn = document.querySelector("#darkthemebtn");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav button");
const quickLinks = document.querySelectorAll(".quick-actions button");
const quotePara = document.getElementById("quote");
try {
  const jsonQuotesLinks = document.getElementById("json-quotes").textContent;
  console.log("Raw JSON string:", jsonQuotesLinks);

  const quotesArray = JSON.parse(jsonQuotesLinks);
  console.log("Parsed array:", quotesArray);
} catch (error) {
  console.error("Error parsing JSON:", error);
}

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    sections.forEach((section) => {
      section.style.display = "none";
    });
    sections[index].style.display = "flex";
  });

  //show active tab by giving the active class to the right nav link
  link.addEventListener("click", () => {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

quickLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    sections.forEach((section) => {
      section.style.display = "none";
    });
    sections[index + 1].style.display = "flex";
  });
});
loadTheme();
lightThemeBtn.addEventListener("click", () => {
  user.prefernces.theme = "light";
  localStorage.setItem("user", JSON.stringify(user));
  loadTheme();
});

darkThemeBtn.addEventListener("click", () => {
  user.prefernces.theme = "dark";
  localStorage.setItem("user", JSON.stringify(user));
  loadTheme();
});

function loadTheme() {
  //check loacal storage
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    if (user.prefernces.theme === "dark") {
      document.body.classList.add("dark-theme");
      darkThemeBtn.style.display = "none";
      lightThemeBtn.style.display = "block";
    } else {
      document.body.classList.remove("dark-theme");
      lightThemeBtn.style.display = "none";
      darkThemeBtn.style.display = "block";
    }
  }
}

const user = {
  username: "User",
  password: "",
  prefernces: {
    theme: "dark",
    fontSize: "medium",
  },
};
