document.addEventListener("DOMContentLoaded", () => {
  const profileDiv = document.createElement("div");
  profileDiv.classList.add("profile");

  const img = document.createElement("img");
  img.src = "https://randomuser.me/api/portraits/lego/6.jpg";
  img.classList.add("user-img");
  profileDiv.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = "John Doe";
  profileDiv.appendChild(h2);

  const p1 = document.createElement("p");
  p1.textContent = "Software Engineer in Test";
  p1.classList.add("user-title");
  profileDiv.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "Web Developer";
  profileDiv.appendChild(p2);

  const p3 = document.createElement("p");
  p3.textContent = "San Francisco, CA";
  profileDiv.appendChild(p3);

  const skills = {
    languages: [
      "JavaScript",
      "Python",
      "Java",
      "React",
      "HTML",
      "CSS",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Cypress",
      "Selenium",
    ],
    tools: ["Git", "GitHub", "Jira"],
    interests: ["Hiking", "Cooking", "Traveling"],
  };

  function showMore() {
    const p4 = document.createElement("p");
    p4.textContent = `Languages: ${skills.languages.join(", ")}`;
    profileDiv.appendChild(p4);

    const p5 = document.createElement("p");
    p5.textContent = `Tools: ${skills.tools.join(", ")}`;
    profileDiv.appendChild(p5);

    const p6 = document.createElement("p");
    p6.textContent = `Interests: ${skills.interests.join(", ")}`;
    profileDiv.appendChild(p6);

    btn.style.display = "none"; // Hide "Show More" button
    btn2.style.display = "inline-block"; // Show "Show Less" button
  }

  function showLess() {
    // Remove additional paragraphs added by "Show More"
    profileDiv.removeChild(profileDiv.lastElementChild); // p6
    profileDiv.removeChild(profileDiv.lastElementChild); // p5
    profileDiv.removeChild(profileDiv.lastElementChild); // p4

    btn.style.display = "inline-block"; // Show "Show More" button
    btn2.style.display = "none"; // Hide "Show Less" button
  }

  const btn = document.createElement("button");
  btn.textContent = "Show More";
  btn.classList.add("btn");
  btn.addEventListener("click", showMore);
  profileDiv.appendChild(btn);

  const btn2 = document.createElement("button");
  btn2.textContent = "Show Less";
  btn2.classList.add("btn");
  btn2.style.display = "none"; // Initially hide "Show Less" button
  btn2.addEventListener("click", showLess);
  profileDiv.appendChild(btn2);

  // Append profileDiv to the body
  document.body.appendChild(profileDiv);
});
