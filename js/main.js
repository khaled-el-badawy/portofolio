/*start skills*/
const toolIcon = document.querySelectorAll(
  "section.skills .container ul li img"
);
const toolInfo = document.querySelector(".tool-info");
const toolName = document.querySelector(".tool-info h2");
const skillsSection = document.querySelector(".skills");
const toolDescription = document.querySelector(".tool-info p");

// --- قائمة البيانات (تبقى كما هي) ---
const toolsData = [
  {
    name: "HTML",
    description: "HTML is the standard markup language for creating Web pages.",
  },
  {
    name: "CSS",
    description: "CSS is the language we use to style an HTML document.",
  },
  {
    name: "JavaScript",
    description: "JavaScript is the programming language of the Web.",
  },
  {
    name: "Bootstrap",
    description:
      "A free front-end framework for faster and easier web development.",
  },
  {
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    name: "Git",
    description:
      "A distributed version control system for tracking changes in source code.",
  },
  {
    name: "GitHub",
    description:
      "A provider of Internet hosting for software development and version control.",
  },
];

// --- دالة عرض التفاصيل (تبقى كما هي) ---

function showDetails(tool) {
  toolInfo.classList.remove("show");
  void toolInfo.offsetWidth;
  toolName.innerHTML = tool.name;
  toolDescription.innerHTML = tool.description;
  toolInfo.classList.add("show");
}

// ربط كل أيقونة بالحدث
toolIcon.forEach((clickedIcon, index) => {
  clickedIcon.addEventListener("click", () => {
    // الخطوة 1: إزالة التنسيق من كل الأيقونات أولاً
    // نقوم بالمرور على كل أيقونة وإزالة الـ class منها
    toolIcon.forEach((icon) => {
      icon.classList.remove("active-icon");
    });

    // الخطوة 2: إضافة التنسيق فقط للأيقونة التي تم الضغط عليها
    clickedIcon.classList.add("active-icon");

    // الخطوة 3: عرض التفاصيل الخاصة بالأيقونة المضغوطة (الكود القديم)
    const correspondingToolData = toolsData[index];
    showDetails(correspondingToolData);
  });
});

const options = { threshold: 0.8 };

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (toolIcon.length > 0 && toolsData.length > 0) {
        toolIcon[0].classList.add("active-icon");
        showDetails(toolsData[0]);
      }
      observer.unobserve(entry.target);
    }
  });
}, options);

observer.observe(skillsSection);

/*end skills*/
/* Start projects */
let cardsTopRow = document.querySelector(
  "section.projects .container .row.top"
);
let cardsBottomRow = document.querySelector(
  "section.projects .container .row.bottom"
);
let cardsData = [
  {
    id: 1,
    imgSrc: "./media/pro1.jpg",
    title: "savyy",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    imgSrc: "./media/pro2.jpg",
    title: "Canvix",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    imgSrc: "./media/pro3.jpg",
    title: "3OTOL",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    imgSrc: "./media/pro4.jpg",
    title: "ELGANTER",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 5,
    imgSrc: "./media/pro5.jpg",
    title: " Barista",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 6,
    imgSrc: "./media/pro6.jpg",
    title: "DITTO.",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

function displayTcards(data) {
  // cardsTopRow.innerHTML = "";
  data.map((e) => {
    cardsTopRow.innerHTML += `
    <div class="project-card">
    <div class="img-box">
    <img src=${e.imgSrc} alt="" />
    </div>
    <div class="content">
    <a href="" target="_blank"><h3>${e.title}</h3></a>
    <p>${e.description}</p>
    </div>
    </div>
    `;
    console.log(e);
  });
}
function displayBcards(data) {
  // cardsTopRow.innerHTML = "";
  data.map((e) => {
    cardsBottomRow.innerHTML += `
    <div class="project-card">
    <div class="img-box">
    <img src=${e.imgSrc} alt="" />
    </div>
    <div class="content">
    <a href="" target="_blank"><h3>${e.title}</h3></a>
    <p>${e.description}</p>
    </div>
    </div>
    `;
    console.log(e);
  });
}

window.addEventListener("load", () => {
  displayTcards(cardsData.slice(0,3));
  displayBcards(cardsData.slice(3,6));
});

/* End projects */

