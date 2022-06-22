
const seedUsers = [
    {
        "userhandle": "Sparkling-Alligator",
        "password": "123",
        "avatar": "https://firebasestorage.googleapis.com/v0/b/collab-or-8.appspot.com/o/images%2F1.n9m2a8vsjh?alt=media&token=975ee5dc-42cf-4a5b-83a8-c3fdbc5bb6d4",
        "bio": "I'm an aspiring UX/UI designer and a recent gradate from a UX/UI bootcamp, with previous experience as a graphic designer. I love designing digital products that are beautiful, accessible, and intuitive to use. My particular interest right now are social media apps!\n\nI'm looking to practice my skills more and to collab with any kind of web developers. I have some prototypes I would love to have built into web apps, but I'm also open for working on the ideas of others. Message me to chat about potential projects!",
        "role": "UX/UI designer",
        "shortBio": "Early-career designer on the prowl for collabs!",
        "socialMedia": {
            "Portfolio": "https://www.etsy.com/market/alligator_portfolio",
            "LinkedIn": "https://www.linkedin.com/"
          },
          "skills": [
            "photoshop",
            "figma",
            "UX research",
            "html",
            "css"
          ],
    },
    {
        userhandle: "SQLrillex",
        "password": "123",
        "skills": [
            "sql",
            "express",
            "nodejs",
            "mongodb",
            "html",
            "css",
            "git",
            "tdd",
            "vscode"
        ],
        "avatar": "https://firebasestorage.googleapis.com/v0/b/collab-or-8.appspot.com/o/images%2F1.u8lh2s9e1?alt=media&token=2f1065f2-4027-4a57-9515-030e422280a3",
        "bio": "I'm a back-end engineer specializing in database design. I'm interested in building fun passion project and getting to know more developers and designers. In particular, I'd love to find some front-end and UX/UI collaborators who can design and build appealing and user-friendly interfaces for my apps.",
        "role": "Back-end developer",
        "shortBio": "Database design is my passion",
        "socialMedia": {}
    },
    {
        "userhandle": "the_fullstack_pancake",
        "password": "$2a$10$f5uM4JTeU69wT5ZEaNarW.mo31r7Vya88FLmoSBeL41vUgUP2Aud.",
        "skills": [
          "html",
          "css",
          "sass",
          "reactjs",
          "express",
          "nodejs",
          "sql",
          "mongodb",
          "git",
          "tdd",
          "vscode",
          "angularjs"
        ],
        "avatar": "https://firebasestorage.googleapis.com/v0/b/collab-or-8.appspot.com/o/images%2F1.zy6l4c021x?alt=media&token=ec7cf87c-d479-4c9e-892a-d14f9ff6e418",
        "bio": "I'm a self-taught web developer with one year of work experience. I seek interesting and challenging projects to practice new technologies and add to my personal portfolio. \n\nI'm looking to collaborate with and learn from all kinds of developers and designers, and I'm particularly interested in building larger projects that are planned thoughtfully and are meant to scale. \n\nMessage me to discuss any ideas or just to chat!",
        "role": "Full-stack developer",
        "shortBio": "Passionate about mastering web development across the stack. Tech addict. Syrup enthusiast. ",
        "socialMedia": {
          "Portfolio": "https://www.stackedpancakehouse.ca/breakfast.php",
          "Twitter": "https://twitter.com/pancakeswap"
        }
    }


    // {
    //     "userhandle": "kmyrtle0",
    //     "password": "123",
    //     avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLPufM0ODujqACYwbEBGNPtTVh-BKM2mYS2vfNWMnGzCWxHPdtqNO8CSY61JBt1ZPosI&usqp=CAU",
    //     role: "Front-end developer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["HTML", "CSS", "jQuery", "ReactJS", "Git", "test-driven development"],
    //     socialMedia: {
    //         Portfolio: "https://kmyrtle0.github.io",
    //         LinkedIn: "https://www.linkedin.com/in/kmyrtle0",
    //         GitHub: "https://github.com/kmyrtle0",
    //         Twitter: "https://twitter.com/kmyrtle0",
    //     }
    // }, 
    // {
    //     "userhandle": "rgostridge1",
    //     "password": "123",
    //     avatar: "https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/smudge-the-viral-cat.jpg",
    //     role: "Front-end developer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["HTML", "CSS", "ReactJS", "VueJS", "NodeJS", "Git"],
    //     socialMedia: {
    //         Portfolio: "https://rgostridge1.github.io",
    //         GitHub: "https://github.com/rgostridge1",
    //         Instagram: "https://twitter.com/kmyrtle0"
    //     }
    // }, 
    // {
    //     "userhandle": "lreardon2",
    //     "password": "123",
    //     avatar: "https://i.redd.it/ngakkkdiaux21.jpg",
    //     role: "UX/UI designer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["HTML", "CSS", "Figma", "UX research", "Git"],
    //     socialMedia: {
    //         Portfolio: "https://lreardon2.github.io",
    //         Instagram: "https://twitter.com/lreardon2"
    //     }
    // }, 
    // {
    //     "userhandle": "fpeers3",
    //     "password": "123",
    //     avatar: "https://www.meme-arsenal.com/memes/d57849838dbdab4d17fb394e98f736f7.jpg",
    //     role: "UX/UI designer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["HTML", "CSS", "Figma", "UX research", "Photoshop", "Git"],
    //     socialMedia: {
    //         Portfolio: "https://fpeers3.github.io",
    //         Instagram: "https://twitter.com/fpeers3"
    //     } 
    // }, 
    // {
    //     "userhandle": "dsporrij4",
    //     "password": "123",
    //     avatar: "https://i.kym-cdn.com/photos/images/original/000/407/236/e7c.jpg",
    //     role: "Full-stack developer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["Git", "NodeJS", "Express", "HTML", "CSS", "SQL", "React"],
    //     socialMedia: {
    //         Portfolio: "https://dsporrij4.github.io",
    //         LinkedIn: "https://www.linkedin.com/in/dsporrij4"
    //     }            
    // }, 
    // {
    //     "userhandle": "rgaskal5",
    //     "password": "123",
    //     avatar: "https://i.pinimg.com/originals/89/83/6b/89836b183ea389576c9fa498d6d8f665.jpg",
    //     role: "Back-end developer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["Git", "SQL", "MongoDB", "NodeJS", "Express"]
        
    // }, 
    // {
    //     "userhandle": "tbaumadier6",
    //     "password": "123",
    //     avatar: "https://i.pinimg.com/originals/09/d5/d6/09d5d6781337ab568987c8de790dd76c.png",
    //     role: "Back-end developer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["Git", "SQL", "MongoDB", "NodeJS", "Express", "HTML", "CSS"]
    // }, 
    // {
    //     "userhandle": "earnley7",
    //     "password": "123",
    //     avatar: "https://i.kym-cdn.com/photos/images/newsfeed/002/205/323/176.jpg",
    //     role: "UX/UI designer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["Git", "SQL", "MongoDB", "NodeJS", "Express", "HTML", "CSS"]

    // }, 
    // {
    //     "userhandle": "isylvester8",
    //     "password": "123",
    //     avatar: "https://i.kym-cdn.com/photos/images/facebook/001/384/534/e6e.jpg",
    //     role: "UX/UI designer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["HTML", "CSS", "Figma", "UX research"]
    // }, 
    // {
    //     "userhandle": "bmadelin9",
    //     "password": "123",
    //     avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTWL3kpvHi9BemU6AiP3MrxyTHxiriQwwaQ&usqp=CAU",
    //     role: "Full-stack developer",
    //     bio: "We will write some bios later",
    //     shortBio: "This is a short bio",
    //     skills: ["Git", "NodeJS", "Express", "HTML", "CSS", "MongoDB", "VueJS", "AngularJS"]
    // }
    ]

    module.exports = seedUsers;
