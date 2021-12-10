export const personalInfo = {
  personalProfile: [
    {
      firstName: "Antony",
      lastName: "Chacko",
      occupation: "Learner | Full-Stack Web Developer",
      city: "Bengaluru",
      country: "India",
      email: "antony101tony@gmail.com",
      phone: "+917012590855",
      socialMediaLinks: {
        linkedInUrl: "https://www.linkedin.com/in/tonyantonypooyappallil/",
        githubUrl: "https://github.com/tonyPooyappallil",
      },
    },
  ],
  education: [
    {
      id: 1,
      schoolName: "Masai School",
      degree: "",
      speciality: `Full-Stack Web Developement`,
      city: "Bangalore",
      year: {
        start: "May 2021 ",
        end: "Present",
      },
    },
    {
      id: 2,
      schoolName: `Saintgits College of Engineering`,
      degree: `B.Tech`,
      speciality: `Electronics and Instrumentation`,
      city: "Kottayam",
      year: {
        start: "2014",
        end: "2018",
      },
    },
  ],

  jobs: [
    {
      id: "job1",
      title: "Quality Controller",
      company: "ENCONPASS",
      year: {
        start: "Jan 2019",
        end: "March 2021",
      },
      city: "Bangalore",
      description: [
        "Inspecting the Quality of Industrial Automation Control panels and preparing reports.",
        "Performing in-house Control Panel testing and assisting the customers with it.",
      ],
    },
  ],

  skills: {
    codingSkills: [
      {
        id: "skills1",
        category: "Front-End",
        languages: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "MongoDb",
          "ExpressJS",
          "React JS",
        ],
      },

      // {
      //   id: "skills2",
      //   category: "Back-End",
      //   languages: ["Next.JS", "Python"],
      // },
      // {
      //   id: "skills3",
      //   category: "Databases",
      //   languages: ["PostgreSQL", "MySql"],
      // },
      // {
      //   id: "skills4",
      //   category: "Source Control",
      //   languages: ["Git", "GitHub"],
      // },
    ],
    languages: [
      {
        id: "lang1",
        title: "English",
        level: "Professional",
      },
      {
        id: "lang2",
        title: "Malayalam",
        level: "Native",
      },
      {
        id: "lang3",
        title: "Kannada",
        level: "Professional",
      },
      {
        id: "lang4",
        title: "Hindi",
        level: "Basic",
      },
      {
        id: "lang5",
        title: "Tamil",
        level: "Basic",
      },
    ],
    softSkills: [
      `Team Collaboration`,
      `Remote Work`,
      ` proactive and creative thinking`,
      `Problem solver`,
    ],

    courses: [
      // {
      //   id: "course1",
      //   title: `React - The Complete Guide (incl Hooks, React Router, Redux) - Academind`,
      //   url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
      //   certificate:
      //     "https://www.udemy.com/certificate/UC-3a850640-b580-48db-abc6-d8f42eb7ff53/",
      // },
      // {
      //   id: "course2",
      //   title: `The Complete Web Developer in 2021: Zero to Mastery - Zero To Mastery Academy`,
      //   url: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
      //   certificate:
      //     "https://udemy-certificate.s3.amazonaws.com/pdf/UC-855c0a51-9124-486f-9c1c-d13e3871a8db.pdf",
      // },
      // {
      //   id: "course3",
      //   title: `Complete Python Developer in 2021: Zero to Mastery - Zero To Mastery Academy`,
      //   url: "https://www.udemy.com/course/complete-python-developer-zero-to-mastery/",
      //   certificate:
      //     "https://www.udemy.com/certificate/UC-c839c267-f408-4552-a195-e1b7d59cd1bd/",
      // },
      // {
      //   id: "course4",
      //   title: `Complete SQL + Databases Bootcamp: Zero to Mastery - Zero To Mastery Academy`,
      //   url: "https://www.udemy.com/course/complete-sql-databases-bootcamp-zero-to-mastery/",
      //   certificate:
      //     "https://www.udemy.com/certificate/UC-dbba7d1c-c40b-4126-a187-14f40128458a/",
      // },
    ],
  },

  projects: [
    {
      id: 0,
      title: "Ecogenic",
      githubUrl: "https://github.com/stockchandu/Project-Ecogenic",
      url: "https://ecogenic-life.netlify.app/",
      image:
        "https://camo.githubusercontent.com/04e565fb9cdc5d5836986eb85244cff72ab02c1411d910ff952478f9f2c608a1/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3135382f312a6f67554f5034524a525a6c326b77706f5357367637772e706e67",
      description: `Eco Genic is a project which focuses on helping people attain their sustainable 
        lifestyle using Green Behavior.This App concept uses a carbon footprint calculator to
         help you track your environmental 
         impact in real-time so you can attain your sustainable goals. `,
      isOpen: false,
    },
    {
      id: 1,
      title: "HealthKart Clone",
      githubUrl: "https://github.com/hramdas/HealthKart",
      url: "https://heawealthy.netlify.app/index.html",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAk1BMVEX///8Cs7QAUnn4/v5Rw8QAr7CftsUcW3/b9PSl4eETt7cFVHoAT3eKobMYWX4ATHU+bo3r8vX09/lEdZOnvMkwv8DP6+sjZId/n7NNeJTC0drj9vfp7PBzlKl0yssyaYqy5eWS2dlniJ/C5uYARHC8zNfU3uWC1NVmy8yguMfA0Nre5+wAPWyvw89909RUgJuQrL73WZhqAAAE4klEQVR4nO2aa1viOhRGa7DNSEoKBYUycBAUFBmE///rzk6bK5eRnukZGeddH6SUNslq0r2TPEYRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcPa2afHZ7a/N4W5Pvn93iutzFN/X49tktrktdwzYMrw4YwvD6gSEMrx8YwvD6KQ3j2HmeOY7j6kuThvkgSZbmyzhJklwfbxOPiX8LXbUNylglyd4rMQnZasP2fD6/NX30Mp//Y6zo/Ks+flfXxIHhhoroHdSmC56cq3KQe9fnM5ZNzZdRxlJdWt5NmeV55d+hfgnqXGfsh/u2EcwnLbThPX0aqzatjh50z8W0GHwsj+M7uuR7O+zDTsaygV9b8mxKzopxdaqXBlWyWWDYlcIadgSXxrAvuTxpOGacs8Svc8B4dmTIeXX/5YbxixK8P3gPObWjGxhS0WUVqoEDz1BIU+WlhrI/WFcEo3QqqKDCX4WHhvk6UfcMudyV95pR+pFh/KrKvD2ING8pPapsExoO96rgHbWWl7/kZY3JTOoqgz7/iaFYRCfoDelRceH3amioGUoxsl8uMWwrwff4wHCqNJj3mpOhnPVMc4PBVEjROW5wbcMtPcKF3/qmDL9FLqtYw1xyMRJydmCoxxT9uPNUGjKk6/dvTA69od6I4VNkAo5vSDrFZijTt5OG9CYVjRtuMi5X6sku3bkahvE5QxVGH44yfquQNEKnwjUxMKQ6LupDuZhU9EZhpFnk+oeJ67C9kP0oWgj/4V1uOPf20nzDu/fIhNHAcCV4uom2qRy6WOcMl4ILPxGfNeQy06go6WcLc/6Hiytd9VCjJTm5lHi5oY9v+KCizEt8ZDhi6hXMKT258GgMJ2tpYunHhkIjDwzNeZcPxxkXVGhvJr0o9uuGJa32oWFOhahqpv6QoWwhU/Xc6ZP5k6ufjNJuR1PIYJTa8x37pKiucuSPysFa2/DhSdM6YXj8HqphqKoep/Tye4ZcEvR3Nw5ULog0+48izYTavZ9sNhPKGZmts06kqTiMNJQIVSydH8TSHeWJHtU2YdwVpgz7RdGnpBzMrJqJpQN6mFzj6vz1bEFu9/TRug0M84xbJHeGcrbJ814hZTA7a8ZwJ8sBUg4SM7NowvApvonLcBpkfDMeyyHJTEo0c5plxlN/rtOI4UrNgosKiuPmNW9mThN7Ob8ypGA3rCrb0ZAxrbHZgjpx6E+YmzCkfJnl9j5psm0zhuXJ6DW2hqvMJQlKG2bFZg0p/vgzgf9gKIux5q1nWm2tVFQyyYgMmbnUTnXqG8avUbB6onht+2glbHpyGZ/emcvy4fn1YarR+XDMpLAJiJ6wmVAM1IpRX2qXwvUNb+JHuuTRGFLOdS2j1stdfmBIK1V/nJ0zrLHGX1CSdTOZIUtFdURrfIs15GlW17Aap3O9i7F8Zs8uoe8z0wpa45uu3aXMm27l/TQ7ZVhjnyYJNmjG9vzKu9JGt3WSuHx86T7NPR3PdR8ug92fSWLKW7l9mE3iV6KaHEwBfieX7rXd/A97bb+Hv2S/FIYwvGpgCMPrB4YwvH5geMQfZ/j1/7/06/+PMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgK/EvMTeERejjZ0IAAAAASUVORK5CYII=",
      description:
        "It's an E-Commerce website clone which sells wellness and fitness needs.",
      isOpen: false,
    },

    {
      id: 2,
      title: "Zulily Clone",
      githubUrl: "https://github.com/tonyPooyappallil/ZulilyClone",
      url: "https://zulily-clone.netlify.app/index.html",
      image:
        "data:image/png;base64,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",
      description: "Clone of Zulily E-Commerce website",
      isOpen: false,
    },
    // {
    //   title: "Food Ordering App ",
    //   githubUrl: "https://github.com/melcool99/food-order-app",
    //   url: "https://mlc-foodorder.netlify.app/",
    //   image: "https://source.unsplash.com/featured/?food",
    //   description: "Food Order mockup in React, using Firebase",
    // },
    // {
    //   title: "Weather App",
    //   githubUrl: "https://github.com/melcool99/weather-app",
    //   url: "https://mlc-weather.netlify.app/",
    //   image: "https://source.unsplash.com/featured/?weather",
    //   description: `Vanilla JavScript weather application using OpenWeather free API's and Netlifly serverless functions`,
    // },
    // {
    //   title: "Robofriends",
    //   githubUrl: "https://github.com/melcool99/robofriends",
    //   url: "https://melcool99.github.io/robofriends/",
    //   image: "https://source.unsplash.com/featured/?robots",
    //   description: "Search your robot",
    // },
  ],
  hobbies: [
    // "Technology",
    // "Gadgets",
    // "Crypto",
    // "Blockchain",
    // "Football",
    // "Video Games",
    // "Poker",
  ],
};
