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
const skills = ["JavaScript", "HTML", "CSS", "Liquid", "GitHub", "Relational Database"];

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
    const messageForm = document.querySelector("form[name='leave_message']");
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    // Initially hide the messages section
    if (messageList.children.length === 0) {
        messageSection.style.display = "none";
    }

    messageForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        const newMessage = document.createElement("li");
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message-container");

        const nameLink = document.createElement("a");
        nameLink.href = `mailto:${usersEmail}`;
        nameLink.innerText = usersName;
        nameLink.classList.add("message-name");

        const messageText = document.createElement("span");
        messageText.innerText = `: ${usersMessage}`;
        messageText.classList.add("message-text");

        messageContainer.appendChild(nameLink);
        messageContainer.appendChild(messageText);

        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.classList.add("edit-button");

        editButton.addEventListener("click", function () {
            const newMessageText = prompt("Edit your message:", messageText.innerText.slice(2));
            if (newMessageText !== null) {
                messageText.innerText = `: ${newMessageText}`;
            }
        });

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("remove-button");

        removeButton.addEventListener("click", function () {
            newMessage.remove();
            toggleMessageSection();
        });

        newMessage.appendChild(messageContainer);
        newMessage.appendChild(editButton);
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        toggleMessageSection(); // Show message when added

        messageForm.reset();
    });

    function toggleMessageSection() {
        if (messageList.children.length === 0) {
            messageSection.style.display = "none";
        } else {
            messageSection.style.display = "block";
        }
    }
});

/* fetch GH repos */
fetch("https://api.github.com/users/Miss-Tia/repos")
    .then(response => response.json())
    .then(repos => {
        const repositories = repos;
        console.log("Repositories", repositories);

        /* select projects section */
        const projectSection = document.getElementById("projects");

        /* select projects section list */
        const projectList = projectSection.querySelector("ul");
        projectList.innerHTML = "";

        /* loop through repos and create links */
        repositories.forEach(repo => {
            const projectItem = document.createElement("li"); 
            const projectLink = document.createElement("a"); // anchor

            projectLink.href = repo.html_url; // set GH url
            projectLink.textContent = repo.name; // repo name text
            projectLink.target = "_blank"; // target= new tab
            projectLink.rel = "noopener noreferrer"; 

            projectItem.appendChild(projectLink); // add link to li
            projectList.appendChild(projectItem); // add li to projects
        });
    })
    .catch(error => console.error("Error fetching repositories:", error));