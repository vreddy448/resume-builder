export const education = {
    "data": {
        "highestQualification": "Bachelor of Technology in Electronics & Communication Engineering",
        "university": "Jawaharlal Nehru Technological University, Kakinada, India",
        "passedOutYear": "April, 2016",
        "cgpa": "8.71"
    }

};

export const experience = {
  "data": [
      {
          "company": "Pegasystems",
          "details": [
              "Designed and implemented a responsive web interface to inform candidates of their job search progress and trending skills in the market",
              "Designed and developed a responsive web interface for Messaging and Notifications on recruiter, client and candidate platforms"
          ],
          "endDate": "Till Date",
          "position": "Software Engineer",
          "startDate": "Dec 2018",
          "url": "https://rivierapartners.com"
      },
      {
          "company": "Tata Consultancy Services",
          "details": [
              "Experience in designing User Interface (UI) web applications using ReactJs, HTML5, HTML4, CSS3, CSS, XHTML, Java Script, jQuery, AJAX, JSON, Wicket, MVC.",
              "Hands on experience.js in creating components using ReactJs & Developed user interface prototypes.",
              "Expertise in debugging and troubleshooting existing code using Developer Tools.",
              "Well versed with UI tools like eclipse, sublime, notepad++ for developing.",
              "Developed Web services to allow communication between applications through REST over HTTP.",
              "Created Web service methods and also worked on with making changes to the WSDL and soap protocols as required by the design for the application",
              "Responsibilities include bug fixing, adding feature requests, enhancements and new development.",
              "Good Knowledge in Insurance Domain Concepts.",
              "Actively involved in defining the requirements for the application, prepared functional specifications and actively\n" +
              "involved in the database design for the module."
          ],
          "endDate": "Dec 2018",
          "position": "System Engineer",
          "startDate": "Jul 2016",
          "url": "https://rivierapartners.com"
      }
  ]
};

export const skills = {
    "data": [
        {
            "name": "Front End",
            "skills": [
                "React",
                "Angular",
                "Redux",
                "Redux Saga",
                "Redux Thunk",
                "Nuclear",
                "Bootstrap",
                "jQuery",
                "Javascript (ES6)",
                "HTML",
                "CSS",
                "Websockets"
            ]
        },
        {
            "name": "Back End",
            "skills": [
                "C#",
                "Node",
                "MySQL",
                "PostgreSQL"
            ]
        },
        {
            "name": "Developer Tools",
            "skills": [
                "Webpack",
                "Gulp",
                "Jest",
                "Karma",
                "Mocha",
                "Chai",
                "Enzyme",
                "Git"
            ]
        },
        {
            "name": "Concepts",
            "skills": [
                "Database Systems",
                "Data Structures and Algorithms",
                "Flux",
                "MVC",
                "Operating Systems",
                "Software Design and Architecture"
            ]
        }
    ]
};

export const certifications = {
    "data": [
        {
            "name": "Pega Certified System Architect 7.4"
        },
        {
            "name": "Programming in HTML5 with JavaScript and CSS3 – Microsoft Certified Professional."
        },
        {
            "name": "Oracle Certified Expert, Java EE 6 Web Services Developer."
        },
        {
            "name": "Oracle Certified Professional Java SE 6 Programmer"
        },
        {
            "name": "INS21 (Property and Liability Insurance Principles) – AINS Certified."
        },
    ]
};

export const achievements = {
    "data": [
        {
            "content": "Achieved Fifth Prize in Innovation Zeta Project Competition – TCS India & Received “Champions of ILP” badge (at Training Center)."
        },
        {
            "content": "Received Star Team Award for the Optimization Project I had worked."
        },
        {
            "content": "Secured 1st prize in WITRICITY, at national level technical fest, TECHNOZION, for 3 consecutive years 2013, 2014, and 2015 held at NIT Warangal."
        },
        {
            "content": "Secured 2nd prize in I-ENGINEERING, HOVERCRAFT, at, TECHNOZION’14 in held at NIT Warangal."
        }
    ]
};

export const personalDetails = {
    "data": [
        {
            "label": "Date of Birth",
            "value": "13-07-1996"
        },
        {
            "label": "Hobbies",
            "value": "Pencil Sketches, listening to Music, Videogames."
        },
        {
            "label": "Languages Known",
            "value": "Telugu, English and Hindi, Tamil (Beginner level)"
        }
    ]
};

export const declaration = {
    "data": `Here by I declare that all the details mentioned above are genuine to the best of my knowledge, and hoping to have a bright career prospects & personal enhancement with your esteemed organization.`
};
export const years = () => {
    const start = (new Date().getFullYear() - 20);
    const end = new Date().getFullYear();
    let yearList = ['YEAR'];
    for (let year = start ; year <=end; year++){
        yearList.push(year);
    }
    return yearList;
};

export const months = ['MONTH', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

export const skillGroups = ['Skill Group','Front End', 'Back End', 'Tools', 'Other'];
