let iconContainer = document.querySelector(".icon-container");

let mySocial = [
  {
    id: 1,
    imgSrc: "./media/myLinks/linktree.png",
    title: "link tree",
    link: "https://linktr.ee/khaled_elbadawy",
    isActive: true,
  },
  {
    id: 2,
    imgSrc: "./media/myLinks/linkedin.png",
    title: "linked in",
    link: "https://www.linkedin.com/in/khaled-elbadawy/",
    isActive: true,
  },
  {
    id: 3,
    imgSrc: "./media/myLinks/behance.png",
    title: "behance",
    link: "https://www.behance.net/khaled-elbadawy",
    isActive: true,
  },
  {
    id: 4,
    imgSrc: "./media/myLinks/codepen.png",
    title: "codepen",
    link: "https://codepen.io/khaled-elbadawy",
    isActive: true,
  },
  {
    id: 5,
    imgSrc: "./media/myLinks/github.png",
    title: "github",
    link: "https://github.com/khaled-el-badawy",
    isActive: true,
  },
  {
    id: 6,
    imgSrc: "./media/myLinks/whatsapp.png",
    title: "wtsApp Ch",
    link: "https://whatsapp.com/channel/0029Vb6VbXF9Bb5pLidjST3Z",
    isActive: true,
  },
  {
    id: 7,
    imgSrc: "./media/myLinks/instagram.png",
    title: "instagram",
    link: "https://www.instagram.com/programmer_badawy",
    isActive: true,
  },
  {
    id: 8,
    imgSrc: "./media/myLinks/researchgate.png",
    title: "research gate",
    link: "https://www.researchgate.net/profile/Khaled-Elbadawy-2",
    isActive: false,
  },
  {
    id: 9,
    imgSrc: "./media/myLinks/wuzzuf.webp",
    title: "wuzzuf",
    link: "https://wuzzuf.net/me/khaled-elbadawy",
    isActive: true,
  },
  {
    id: 10,
    imgSrc: "./media/myLinks/Indeed.png",
    title: "indeed (CV)",
    link: "https://profile.indeed.com/p/khalede-569tsdf",
    isActive: true,
  },
  {
    id: 11,
    imgSrc: "./media/myLinks/xing (1).png",
    title: "xing",
    link: "https://www.xing.com/profile/khaled_elbadawy",
    isActive: false,
  },
  {
    id: 12,
    imgSrc: "./media/myLinks/baeed-logo.png",
    title: "بعيد",
    link: "https://baaeed.com/u/Khaled_elbadawy",
    isActive: true,
  },
  {
    id: 13,
    imgSrc: "./media/myLinks/dribbble.png",
    title: "dribbble",
    link: "https://dribbble.com/khaled-elbadawy",
    isActive: false,
  },
  {
    id: 14,
    imgSrc: "./media/myLinks/pinterest.png",
    title: "pinterest",
    link: "https://www.pinterest.com/khaled_elbadawy",
    isActive: false,
  },
  {
    id: 15,
    imgSrc: "./media/myLinks/bayt.png",
    title: "bayt",
    link: "https://people.bayt.com/khaled-elbadawy",
    isActive: true,
  },
];

function displayIcons(data) {
  iconContainer.innerHTML = "";

  data.map((e) => {
    if (e.isActive === false) {
      iconContainer.innerHTML += `
        <a  target="_blank" class="box inactive">
        <div class="image"><img src="${e.imgSrc}" alt="" /></div>
        <h4 class="title">${e.title}</h4>
        </a>
        `;
    } else {
      iconContainer.innerHTML += `
    <a href="${e.link}" target="_blank" class="box">
      <div class="image"><img src="${e.imgSrc}" alt="" /></div>
      <h4 class="title">${e.title}</h4>
    </a>
    `;
    }
  });
}

window.addEventListener("load", () => {
  displayIcons(mySocial);
});
