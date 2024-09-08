"use strict";
var _a;
// Function to update resume display
const updateResume = (resume) => {
    const resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = `
        <h2>${resume.name}</h2>
        <p>Email: ${resume.email}</p>
        <p>Phone: ${resume.phone}</p>
        <p>Location: ${resume.location}</p>
        <h3>Education</h3>
        <p>${resume.education}</p>
        <h3>Skills</h3>
        <p>${resume.skills}</p>
        <h3>Experience</h3>
        <p>${resume.experience}</p>
      `;
    }
    else {
        console.error('Resume Output element not found');
    }
};
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const locationElement = document.getElementById("location");
    const educationElement = document.getElementById("education");
    const skillsElement = document.getElementById("skills");
    const experienceElement = document.getElementById("experience");
    const resumeData = {
        name: nameElement.value,
        email: emailElement.value,
        phone: phoneElement.value,
        location: locationElement.value,
        education: educationElement.value,
        skills: skillsElement.value,
        experience: experienceElement.value,
    };
    updateResume(resumeData);
});
const handleResize = () => {
    const mobileView = window.matchMedia("(max-width: 600px)");
    if (mobileView.matches) {
        console.log("Switching to mobile view");
        document.body.style.fontSize = "14px";
    }
    else {
        console.log("Switching to desktop view");
        document.body.style.fontSize = "16px";
    }
};
window.addEventListener("resize", handleResize);
handleResize();
