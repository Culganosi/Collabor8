const skills = {
  title: "skills",
  data: {
    "Front-end": [
      "HTML",
      "CSS",
      "Sass",
      "jQuery",
      "ReactJS",
      "Angular",
      "VueJS",
      "ThreeJS",
    ],
    "Back-end": [
      "NodeJS",
      "Express",
      "Ruby",
      "Django",
      "Flask",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "GraphQL",
    ],
    "UX/UI": [
      "Figma",
      "Photoshop",
      "Illustrator",
      "Adobe XD",
      "UX research",
      "Wireframing",
      "Information architecture",
    ],
    Other: ["Git", "Test-driven development", "VSCode"],
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
