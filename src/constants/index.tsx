import {
  heroDesktop,
  heroTablet,
  heroFull,
  teacherGongBig,
  teacherGongSm,
  studyMode,
  selfTest,
  confidence,
  speed,
  vocab,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "我的經驗",
  },
  {
    id: "reviews",
    title: "學生評論",
  },
  {
    id: "trial",
    title: " 預定試教",
  },
  {
    id: "teaching",
    title: "我的教育概念",
  },
];

export const heroSection = {
  id: "hero",
  photoSmall: teacherGongSm,
  photoBig: teacherGongBig,
  teacherName: "STEVEN 龔少",
  tagline: "英文家教老師",
  phoneLink: "tel:0987-988258",
  phone: "0987-988258",
  lineLink: "https://msng.link/o?luvwinnie7969=ln",
  line: "luvwinnie7969",
  backgroundSmall: heroTablet,
  backgroundLarge: heroDesktop,
  backgroundXL: heroFull,
};

export const experience = {
  headerEng: "My teaching style",
  headerCn: "教學方式",
  word1: "經驗",
  paragraph1:
    "我曾在多家補習班與公立學校教過英文，教學對象下至四歲，上至五十歲。因此，在目前的教育環境下，從學習的角度出發，英語學習者在學習過程中會有哪些瓶頸，會有哪些負面情緒，我都深有體悟；從教學的角度出發，補教業及學校教育體制會有哪些不足，會有哪些教學錯誤，我也相當清楚。因此，針對學習者，我除了提供更有效的學習方式，也會幫助調適學習者的心態；而身為教學者，我也會盡力彌補一般英語教學的不足，並導正不當的教學方式。讓英語學習者在學習的路上多點樂趣，少點壓力，乃至學出興趣，是我致力想做到的事。",
  word2: "教學",
  paragraph2:
    "語言學來就是要用的。即便學習英語的目的是為了升學或考取證照，而非是為了加強口說能力，學習者還是應該以「說」為基礎去學習英語，因為唯有如此，才能打下良好的學習基礎，並有能力在日後記更多的單字，或學更多的文法。為此，我特別設計出「口語化教學」，以最直接的方式，幫助學習者提升口說能力，並在最大程度上，輔助學習者在校取得好成績及考取證照。口語化的教學主要是以「句子」為單位，教導學習者中翻英的轉換技巧。然而，因為中翻英的考試只出現在學測與研究所的考試上，所以一直不被英語教學者所重視。",
  word3: "自學",
  paragraph3:
    "從小三到國三，我雖也都有補習英文，但在補習班教我英文的老師主要都是外師。老實說，居多的外師並不懂如何教英文，但因為他們能提供最直接的英語使用環境，所以只要英語學習者有一定的「自學能力」，就能在與外國人的接觸當中，打下良好的英文基礎。然而，有自學能力的人並不多，尤其在目前這種「把英語當學科」的教育環境下，學習者要有正確的學習方式都很難了，更別提要自學。因此，如何培養學生的自學能力，是我教學的重中之重。學習英語畢竟是一條漫漫長路，若不培養一定的自學能力，終究難以習得英語這項語言。靠山山倒，靠人人老，靠自己最好！",
};

export const reviews = [
  {
    id: "review 1",
    name: "Eddie",
    content:
      "經驗豐富的老師，不會死板的教文法，而是由口說為主，重視說話的邏輯。可以找自己有興趣的主題，客製化上課，要學習流利的口說與連音就找Steven！",
  },
  {
    id: "review 2",
    name: "仲佑",
    content:
      "老師教學認真，非常有耐心的指導學員的觀念與口說技巧，例如一些時態能用比較好理解的方式讓人記憶。",
  },
  {
    id: "review 3",
    name: "Yi Wen Wang",
    content: "老師教學認真，文法和構句也都可以清楚說明。",
  },
];

export const advantages = [
  {
    id: "adv 1",
    img: studyMode,
    title: "學習模式",
    content: "反覆的英文對談加上中翻英訓練",
  },
  {
    id: "adv 2",
    img: selfTest,
    title: "檢驗成效的方法",
    content: "每次英語對談都可自行檢驗",
  },
  {
    id: "adv 3",
    img: confidence,
    title: "學習信心",
    content: "越常講英文，英語能力必定越提升，信心也會隨之增加",
  },
  {
    id: "adv 4",
    img: speed,
    title: "學習速度",
    content:
      "初期學習速度雖較慢，但單字不易忘，文法觀念也具系統性，在後期能培養出強烈語感，學習速度也隨之加快",
  },
  {
    id: "adv 5",
    img: vocab,
    title: "背單子",
    content:
      "照音拼字，並知道那些單字無法對應中文，在學習中可大幅降低被中文干擾的狀況",
  },
];
