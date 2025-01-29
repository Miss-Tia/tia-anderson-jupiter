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