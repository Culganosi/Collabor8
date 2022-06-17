
const skills = {
    title: "skills",
    data: {
        frontend: ["HTML", "CSS", "SASS", "jQuery", "ReactJS", "VueJS", "AngularJS"],
        backend: ["NodeJS", "Express", "SQL", "MongoDB"], 
        uxui: ["Photoshop", "Figma", "UX research"],
        other: ["Git", "test-driven development", "VS Code"]
    }
}


const roles = {
    title: "roles", 
    data: [
        "UX/UI designer", 
        "Full-stack developer", 
        "Front-end developer", 
        "Back-end developer"
    ]
}

const socialMedia = {
    title: "socialMedia", 
    data: ["Portfolio", "GitHub", "LinkedIn", "Twitter", "Instagram"]
}

const proposalCategories = {
    title: "categories", 
    data: ["Category 1", "Category 2", "Category 3"]
}



const options = [skills, roles, socialMedia, proposalCategories];
module.exports = options;


