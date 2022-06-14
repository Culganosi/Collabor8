const seedProposals = [
    {
        author: "kmyrtle0", //This will change to userIDs in the database
        status: "Active",
        title: "Tinder for turtles",
        description: "I want to make a social media dating app (for turtles!) with lots of cool features including video chats, romantic music playlists, ice breaker games and more. I'm good at front-end development and I already started fleshing out many ideas, but I'm looking for a partner who can focus more on organizing the database and buildig the server API. Message me to discuss more! :D",
        seeking: ["Back-end developer"],
        shortDescription: "A dating app for an untapped market",
        image: "https://images.fineartamerica.com/images-medium-large-5/turtles-in-love-guillermo-julia.jpg"
    },
    {
        author: "kmyrtle0",
        status: "Active",
        title: "Personal portfolio",
        description: "I have built a draft of my personal portfolio, but I want someone with a good eye for design to have a look and give me some suggestions about how to make it appealing and easy to navigate. In return I'm open to lending my skills to any project of yours! Please get in touch!",
        seeking: ["UX/UI designer"],
        shortDescription: "Looking for critiques and suggestions from people with an eye for design!",
        image: "https://alvarotrigo.com/blog/assets/imgs/2021-10-16/jack-web-developer-portfolio.jpeg"
    },
    {
        author: "lreardon2", 
        status: "Active",
        title: "Hobby-matching",
        description: "I want to build an app that is similar to meetup.com but users can find and chat with users with similar hobbies directly and create and schedule events in their area. I have already done a lot of work on planning the functionality and design of the app according to the best user experience practices and accessibility standards. I'm looking for a full-stack developer to work on bringing this vision to life. If you're interested, please get in touch!",
        seeking: ["Front-end developer", "Back-end developer", "Full-stack developer"],
        shortDescription: "Like meetup.com but with direct matching",
        image: "https://toggl.com/blog/wp-content/uploads/2018/10/productive-hobbies-940x588.jpg"
    },
    {
        author: "kmyrtle0",
        status: "Inactive",
        title: "Concerts near you",
        description: "An app that is like Google maps but specifically for concert events and has an integrated calendar.",
        seeking: ["Back-end developer", "UX/UI designer"],
        shortDescription: "A Google Maps, calendar and Spotify mashup",
        image: "https://torontoguardian.com/wp-content/uploads/2022/01/concert-gef7d57588_1280-1.jpg"
    },

]

module.exports = seedProposals;