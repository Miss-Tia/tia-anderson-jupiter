/* date object */
const today = new Date();

/* current year */
const thisYear = today.getFullYear();

/* footer select */
const footer = document.querySelector('footer');

/* new p for copyright */
const copyright = document.createElement('p');

/* inner HTML of the copyright element */
copyright.innerHTML = `&copy; ${thisYear} Tia Anderson. All rights reserved.`;

/* Add the copyright to footer */
footer.appendChild(copyright);

/* skills array */
const skills = ["JavaScript", "HTML", "CSS", "Liquid", "GitHub"];

/* select skills section */
const skillsSection = document.getElementById('skills');

/* skills list within the skills section select */
const skillsList = skillsSection.querySelector('ul');

/* for loop- skills array and create li */
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
/* form */

document.addEventListener("DOMContentLoaded", function () {
    /* Select form */
    const messageForm = document.querySelector("form[name='leave_message']");

    /* Add submit event listener */
    messageForm.addEventListener("submit", function (event) {
        /* Prevent default submission behavior */
        event.preventDefault();

        /* Get form values */
        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        /* Log values to console */
        console.log("Name:", usersName);
        console.log("Email:", usersEmail);
        console.log("Message:", usersMessage);

        /* Select the #messages section */
        const messageSection = document.getElementById("messages");

         /* Select ul inside #messages */
        const messageList = messageSection.querySelector("ul");

        /* Create new li */
        const newMessage = document.createElement("li");

        /* inner HTML for new message */
        newMessage.innerHTML = `
            <a href="mailto:${usersEmail}">${usersName}</a>: 
            <span>${usersMessage}</span>
        `;

        /* remove button */
        const removeButton = document.createElement("button");
        removeButton.innerText = "remove";
        removeButton.type = "button";

        /* click event listener to remove button */
        removeButton.addEventListener("click", function () {
            const entry = removeButton.parentNode;
            entry.remove();
        });

        /* Append remove button to the new message */
        newMessage.appendChild(removeButton);

        /* Append new message to the message list */
        messageList.appendChild(newMessage);    

        /* Reset form */
        messageForm.reset();
    });
});
/* Fetch GH Repo */
fetch("https://api.github.com/users/Miss-Tia/repos")
    .then(response => response.json())
    .then(repos => {
        const repositories = repos;
        console.log("Repositories", repositories);
    })
    .catch(error => console.error("Error fetching repositories:", error));
    fetch("https://api.github.com/users/Miss-Tia/repos")
  .then(response => response.json()) /* Convert response to JSON */
  .then(data => {
      const repositories = data; /* Store parsed data */
      console.log(repositories); /* Log repositories */

      /* Select projects section */
      const projectSection = document.getElementById("projects");

      /* Select projects section list */
      const projectList = projectSection.querySelector("ul");

      /* for loop for repositories array */
      for (let i = 0; i < repositories.length; i++) {
          const project = document.createElement("li"); /* Create a new li */
          project.innerText = repositories[i].name; /* Set text to repo name */
          projectList.appendChild(project); /* Append to projectList */
      }
  })
  .catch(error => console.error("Error fetching repositories:", error));