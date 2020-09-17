const name = "01079*87959"; //여기에 자기 엔트리아이디를 입력하세요
const realname = "문성호"; //내가 새로 추가함
const living = "korea, seoul, seodaemun-gu";
const userid = "5ec33d0cbcb447015a162945"; //여기에 자기 유저아이디를 입력하세요 (엔트리콘솔창에 user._id를 치면 자신의 유저아이디를 볼수있어요)
const gitname = "sungho0205"; //여기에 자기 깃허브아이디를 입력하세요 (깃허브계정이 없으면 그냥 avocad5를 입력하세요<ㅍ)
const nickname = "전화번호"; //여기에 자기 별명을 입력하세요
const myment = "👨‍💻"; //여기에 상태메시지를 입력하세요
const mywork = "이진수↔십진수 변환기"; //여기에 자신의 대표작품을 입력하세요
const career = "2년"; //여기에 자신의 경력을 입력하세요
const explanation = "hello👋"; //여기에 자기소개를 입력하세요
const maincolor = "#00FC1D"; //여기에 메인컬러를 입력하세요 #87FFB7
const subcolor = "#00A5FF"; //여기에 서브컬러를 입력하세요
const projectname = [
  "이진수↔십진수 변환기",
  "벽돌깨기[β]",
  "bestchat",
  "주식투자게임",
  "updown:age",
  "영단어사전",
]; //여기에 자기 엔트리작품 이름을 입력하세요 (저는 3개만 했지만 여러분은 엄청 많이 하셔도 되요)
const projectment = [
  "좋아요 100🎉🎉",
  "재미있게 벽돌을 깨보세요!😁",
  "최고의 채팅,bestchat👍",
  "주식을 투자하며 경제관념을 익히세요!💲",
  "인기 게임을 리메이크🎮",
  "영단어들을 찾아보세요!"
];
const projectid = [
  "5f03caba86edaa002c7cece3",
  "5f4b4572569bdd00ad6d346d",
  "5f2a131808db2f00564497c1",
  "5ec33e0667bcb80036424f99",
  "5ee9753f57d2fc018826a345",
  "5f545365a2eb270b0ed38741",
]; //여기에 자기 엔트리작품 id를 입력하세요
const theme = "light"; //light또는 dark를 입력하세요

function load() {
  for (var i = 0; i < projectname.length; i++) {
    document.getElementsByClassName("project")[0].innerHTML +=
      '<a href="https://playentry.org/01079187959/' +
      String(projectid[i]) +
      '"><img class="pimg" src="https://playentry.org/uploads/thumb/' +
      String(projectid[i].substring(0, 4)) +
      "/" +
      String(projectid[i]) +
      '.png"><div class="pdiv"><p class="pname"><strong>' +
      String(projectname[i]);
    '</strong></p><p class="pment">' +
      String(projectment[i]) +
      "</p></div></a>";
  }
  var avatar =
    "https://playentry.org/uploads/profile/" +
    String(userid.substring(0, 2)) +
    "/" +
    String(userid.substring(2, 4)) +
    "/avatar_" +
    String(userid) +
    ".png";
  document.title = String(nickname) + "'s homepage😎";
  document.querySelector("body > div.name").innerHTML = name;
  document.querySelector("body > div.ment").innerHTML = myment;
  document.querySelector(
    "body > div.container > svg > path"
  ).style.fill = maincolor;
  document.querySelector("body > div.profile > a").href =
    "https://playentry.org/01079187959";
  document.querySelector("body > div.profile > a").innerHTML =
    "<img src=" + String(avatar) + ">";
  document.querySelector("body > div.profile > div").innerHTML =
    "<p>엔트리ID : " +
    String(name) +
    "</p><p>이름 : " +
    String(realname) +
    "</p><p>사는곳 : " +
    String(living) +
    "</p><p>대표작 : " +
    String(mywork) +
    "</p><p>경력 : " +
    String(career) +
    "</p><p>소개 : " +
    String(explanation) +
    "</p>";
  document.querySelector("body > div.footer").innerHTML =
    '<a href="https://playentry.org/uploads/profile/5f/58/avatar_5f58a41d3ec8c201a2d2ed56.png?v=1599644801203"><span>카카오톡</span></a><a href="tel:01079187959"><span>Phone</span></a><a href="mailto:moon7959@kakao.com"><span>Email</span></a><a href="https://github.com/' +
    String(gitname) +
    '><span>Github</span></a><a href="https://playentry.org/01079187959#!/"><span>Entry</span></a>';
  var css =
    ".project a div:hover{background-color: " + String(maincolor) + ";}";
  var style = document.createElement("style");
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  document.getElementsByTagName("head")[0].appendChild(style);
}

function darkmode() {
  var p = document.getElementsByTagName("p");
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "white";
  }
  var pdiv = document.getElementsByClassName("pdiv");
  var pimg = document.getElementsByClassName("pimg");
  for (var i = 0; i < pdiv.length; i++) {
    pdiv[i].style.backgroundColor = "#505050";
    pdiv[i].style.boxShadow = "0 0 30px -15px #111111";
    pimg[i].style.boxShadow = "0 0 30px -15px #111111";
  }
  document.querySelector("body").style.backgroundColor = "#1E1E1E";
  document.querySelector("body > div.projecttext").style.color = "white";
  document.querySelector("body > div.contact").style.color = "white";
  document.querySelector("body > div.profile > a > img").style.boxShadow =
    "0 0 30px -15px #111111";
}

load();
if (theme === "dark") {
  darkmode();
}
