const skills = {
  title: "skills",
  data: {
    "Front-end": [
      "HTML",
      "CSS",
      "SASS",
      "jQuery",
      "ReactJS",
      "VueJS",
      "AngularJS",
    ],
    "Back-end": ["NodeJS", "Express", "SQL", "MongoDB"],
    "UX/UI": ["Photoshop", "Figma", "UX research"],
    Other: ["Git", "test-driven development", "VS Code"],
  },
};

const roles = {
  title: "roles",
  data: [
    "UX/UI designer",
    "Full-stack developer",
    "Front-end developer",
    "Back-end developer",
  ],
};

const socialMedia = {
  title: "socialMedia",
  data: ["Portfolio", "GitHub", "LinkedIn", "Twitter"],
};

const options = [skills, roles, socialMedia];
module.exports = options;
