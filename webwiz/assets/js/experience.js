AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/fullstck.jpg",
    place: "Independent projects",
    time: "(May, 2024 - present)",
    desp: "<li>Built production-ready web apps using React (JSX) + Django REST Framework.</li> <li>Designed secure authentication systems (login, signup, role-based access).</li> <li>Integrated frontend with REST APIs, handled CORS, tokens, and deployments.</li>  <li> Used Git & GitHub professionally for version control and collaboration. </li>",
  },
  {
    title: "AI product developer",
    cardImage: "assets/images/experience-page/notexia.png",
    place: "Personal project",
    time: "(sept, 2025 - present)",
    desp: "<li>Developed an AI-powered note-taking system with audio playback.</li><li>Implemented assignment detection and structured content extraction.</li><li>Designed backend logic for AI conversations and media handling.</li> <li>Built a clean, student-friendly UI focused on usability and performance.</li>",
  },
  {
    title: "E-Commerce systems developer",
    cardImage: "assets/images/experience-page/ecommerce.webp",
    place: "IIT, Bombay",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GitHub Open Source Contributions",
    cardImage: "assets/images/experience-page/github.png",
    description:
      "Contributed to public repositories and developer tools",
  },
  {
    title: "Developer tooling",
    cardImage: "assets/images/experience-page/devtools.jpg",
    description:
      "Contributed to public repositories and developer tools. <br/>Created authentication-ready boilerplates for rapid development.</br> Shared code to help developers build faster.",
  },
  {
    title: "Personal Open Source Projects",
    cardImage: "assets/images/experience-page/notexia.png",
    description:
      "Built and maintained core features for an AI-powered note-taking system",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
