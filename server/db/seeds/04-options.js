
const skills = {
    title: "skills",
    data: {
        frontend: ["HTML", "CSS", "SASS", "jQuery", "ReactJS", "VueJS", "AngularJS"],
        backend: ["NodeJS", "Express", "SQL", "MongoDB"], 
        uxuiproduct: ["Photoshop", "Figma", "UX research"],
        other: ["Git", "test-driven development", "VS Code"]
    }
}

const roles = {
    title: "roles", 
    data: [
        "UX/UI designer", 
        "Product designer", 
        "Full-stack developer", 
        "Front-end developer", 
        "Back-end developer"]
}

const socialMedia = {
    title: "socialMedia", 
    data: [
        {title: "Portfolio", fontAwesomeIcon: "fa-solid fa-crown"},
        {title: "GitHub", fontAwesomeIcon: "fa-brands fa-github-alt"},
        {title: "LinkedIn", fontAwesomeIcon: "fa-brands fa-linkedin-in"},
        {title: "Behance", fontAwesomeIcon: "fa-brands fa-behance"},
        {title: "Medium", fontAwesomeIcon: "fa-brands fa-medium"},
        {title: "Facebook", fontAwesomeIcon: "fa-brands fa-facebook-f"},
        {title: "Twitter", fontAwesomeIcon: "fa-brands fa-twitter"},
        {title: "Instagram", fontAwesomeIcon: "fa-brands fa-instagram"},
        {title: "YoutTube", fontAwesomeIcon: "fa-brands fa-youtube"}
    ]
}

const categories = {
    title: "categories", 
    data: ["Category 1", "Category 2", "Category 3"]
}



const options = [skills, roles, socialMedia, categories];
module.exports = options;


