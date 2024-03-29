import React from 'react';

const ABOUT_DATA = [
  {
    id: 1,
    title: "About Noemi",
    imageUrl: "https://res.cloudinary.com/dtewjoisz/image/upload/v1591347934/website-resized/noemi_gipna1.png",
    groupPhotoUrl: "https://res.cloudinary.com/dtewjoisz/image/upload/v1591347933/website-resized/le_wagon_363_x1p6tw.jpg",
    contactPhotoUrl: "https://res.cloudinary.com/dtewjoisz/image/upload/v1590627123/projects/about/noemipic_mk5j5c.jpg",
    myStory: ["Hello, my name is Salvina Noemi, or just Noemi. I am an Italian web developer.", 
      "In my 20s I left Italy to live first in London and then in Tokyo. I have been living in Tokyo since 2017.", 
      "My background is in education. When I was in London I started working as a nanny and then I became a private tutor and an Italian teacher. I moved to Tokyo after I met my husband. In Tokyo I mostly worked as an English instructor.",
      "I love teaching, but after I developed an interest in coding, I decided to change career."
    ],
    aboutTech: ["In 2019 I started coding  as a way to learn something new and creative, but I soon realized that programming wasn’t just a hobby and I wanted to make it my career. That’s when I attended Le Wagon coding bootcamp to speed up my learning and be with like-minded individuals. The bootcamp was an amazing experience that taught me a lot about programming but also how to collaborate with a team to bring ideas to life.", 
    "After the bootcamp I started freelancing and applying everything I learned. I am now looking for opportunities as a developer. I would love to help develop an amazing product.",
    "I would describe myself as curious and hard working. I enjoy programming and the constant learning that comes with it. I like to be challenged and I don’t give up until I complete my tasks."],
    techSkills: ["Ruby on Rails", "HTML", "CSS/SCSS", "JavaScript", "Object Oriented Programming", "SQL", "React", "API", "GIT", "Github", "Heroku", "Test-Driven Development", "Wireframing and design", "Figma", "Photoshop"],
    otherSkills: ["Communication skills", "Ability to deliver effective presentations", "Public speaking", "Teaching", "Teamwork", "Leadership", "Italian (fluent)", "English (fluent/CPE cambridge C2)", "Japanese (conversational/JLPT N3)"],
    links: [
      {
        id: 1,
        title: "Le Wagon Demo Day batch #363",
        icon: <i className="fab fa-youtube link-icon"></i>,
        url: "https://youtu.be/STqGjE6j5AI"
      },
      {
        id: 2,
        title: "Coding isn’t just for boys: stories of our women graduates",
        icon: <i className="far fa-newspaper link-icon"></i>,
        url: "https://www.lewagon.com/blog/women-graduates-tokyo"
      }
    ]
  }
]

export default ABOUT_DATA;
