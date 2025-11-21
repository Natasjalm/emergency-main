/*const*/
const ArmV = document.querySelector("#_hotspotArmV_");
const ArmH = document.querySelector("#_hotspotArmH_");
const Hoved = document.querySelector("#_hotspotHoved_");

/* Arm V */

/* Når musen kommer over skifter den farve*/
console.log(ArmV);
ArmV.addEventListener("mouseover", mouseOverArmV);

function mouseOverArmV() {
  console.log("mouseOverArmV");
  ArmV.style.fill = "#273e47";
}
/* Når musen er væk er den den gamle farve*/
ArmV.addEventListener("mouseout", mouseOutArmV);

function mouseOutArmV() {
  console.log("mouseOutArmV");
  ArmV.style.fill = "#a4243b";
}

/* Når man klikker skifter h1*/

ArmV.addEventListener("click", clickArmV);

function clickArmV() {
  console.log("clickArmV");
  document.querySelector(".info-text> h2").textContent = "Pil en klementin";
  document.querySelector(".placeholder").textContent = "Pille en klementin i stedet for at grine";
  document.querySelector("#efficiency").innerHTML = `<p>Nogle gange må man ikke grine. Du sidder midt i en seriøs samtale, nogen siger noget helt tungt - og din hjerne tænker: “Det her er det sjoveste nogensinde.”</p>
 <p> Så hvad gør du? Du piller en klementin.
Langsomt. Fokusér på skrællen. Snus til citrusduften.
Ingen mærker, at du kæmper for livet - de tror bare, du elsker frugt. </p>`;
  document.querySelector("#requirement").innerHTML = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 564.58 412.07">
  <path d="M334.57,259.36c-.39,83.8-69.53,145.57-154.8,151.73-90.66,6.55-164.53-55.61-154.8-151.73,14.12-89.39,93.29-168.09,172.5-136.66,84.31-22.06,137.47,58.03,137.11,136.66Z" style="fill: #f7941d; stroke: #231f20; stroke-miterlimit: 10;"/>
  <polygon points="231.57 .72 242.92 6.52 204.03 123.43 196.06 123.43 231.57 .72" style="fill: #8b5f3d; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M216.83,49.76s-87.69,17.15-90.83,39.13,29.47,13.04,29.47,13.04c0,0,57.73-29.95,56.28-33.09l5.07-19.08Z" style="fill: #006838; stroke: #231f20; stroke-miterlimit: 10;"/>
</svg><p>Klementinen bliver din redning.
Den holder dine fingre travle, munden lukket og stemningen intakt.
En lille, orange undskyldning for ikke at grine, når du virkelig burde tie stille.</p>`;
}

/* Arm H */

console.log(ArmH);
ArmH.addEventListener("mouseover", mouseOverArmH);

function mouseOverArmH() {
  console.log("mouseOverArmH");
  ArmH.style.fill = "#273e47";
}
/* Når musen er væk er den den gamle farve*/
ArmH.addEventListener("mouseout", mouseOutArmH);

function mouseOutArmH() {
  console.log("mouseOutArmH");
  ArmH.style.fill = "#a4243b";
}

/* Når man klikker skifter h1*/

ArmH.addEventListener("click", clickArmH);

function clickArmH() {
  console.log("clickArmH");
  document.querySelector(".info-text> h2").textContent = "Tjek nyhederne";
  document.querySelector(".placeholder").textContent = "Tjek nyhederne i stedet for at grine";
  document.querySelector("#efficiency").innerHTML = `<p>Midt i en alt for seriøs samtale, når latteren banker på, kan du ikke bare stoppe den med viljestyrke… men der er en løsning: Tjek nyhederne.</p>
 <p>Forestil dig alle kriserne, skandalerne og absurd kaos i verden. Pludselig føles dit fnis helt ligegyldigt - hvem kan grine, når menneskeheden går ad helvede til i realtid?</p>`;
  document.querySelector("#requirement").innerHTML = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.33 601.58">
  <path d="M52.95,73.6l226.33,19.59s21.99,4.2,24.83,30.79c0,0,31.22,414.98,3.55,444.37,0,0-14.9,34.29-45.41,22.39,0,0-184.47,26.59-209.3-5.6,0,0-24.12-19.59-19.16-103.57,0,0,5.75-82.58-.67-83.28s14.86-109.87,4.22-115.47c0,0-4.97-163.05-.71-174.25,4.26-11.2-7.09-9.1,16.32-34.99Z" style="fill: #6d6f71; stroke: #595a5c; stroke-miterlimit: 10;"/>
  <path d="M69.25,120.22l5.68,414.28s-.71,16.1,23.41,16.8c24.12.7,48.95,0,48.95,0l97.91-2.8s31.22,4.9,30.51-25.19c-.71-30.09-12.06-121.07-9.22-144.86,0,0,10.64-214.84.71-220.44,0,0,4.97-43.39-37.6-46.89l-117.78-8.4s-36.89-12.6-42.57,17.5Z" style="fill: #ed3e48; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M77.88,159.77l3.46,47.81s8.46,13.37,21.54,1.67c0,0,9.61-26.41-14.23-27.75,0,0,23.06-7.36,16.15-16.05-6.92-8.69-16.53-13.04-26.91-5.68Z" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <polyline points="114.03 181.17 114.73 187.58 116.72 205.91" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M129.8,183.51s-9.37-4.24-15.07,4.07" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M139.8,193.54s17.31,1.67,13.46-3.34c-3.85-5.02-16.54,0-16.54,0,0,0-9.23,5.02-6.92,12.04,2.31,7.02,15.38,3.68,15.38,3.68" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M172.49,189.53s-15.77-.67-20.38,13.04c-4.61,13.71,32.3,2.01,20.38-13.04Z" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="177.1" y1="208.65" x2="172.49" y2="189.53" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="195.18" y1="169.13" x2="192.94" y2="208.65" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <polyline points="207.87 185.04 192.94 193.54 207.87 205.91" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="220.56" y1="195.48" x2="220.56" y2="208.65" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="220.56" y1="180.25" x2="220.56" y2="184.2" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="229.73" y1="189.16" x2="229.73" y2="206.71" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M244.48,207.48s3.61-16.05-3.43-15.63c-7.03.42-11.55,3.18-11.55,3.18" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M262.71,188.89s-11.15-.43-11.15,11.23,19.1-6.61,10.37-11.24" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M261.78,200.43c-4.35-4.15,14.03,36.39-1.01,32.44-15.93-4.18-9.21-8.64-9.21-8.64" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <polyline points="92.97 307.71 88.12 266.81 110.67 303.92 116.72 268.08" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M124.74,289.79s3.15,5.48,11.64,1.26c8.49-4.22-9.21-16.23-11.64-1.26Z" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M139.77,303.7s-19.2,6.75-15.03-13.91" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M156.26,283.89l5.58,19.61,5.09-12.65s10.67,19.12,18.19,14.3c7.52-4.82,6.55-21.26,6.55-21.26" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M219.55,281.36s-11.88-7.17-13.82,3.58c-1.94,10.75,12.37,7.71,12.37,7.71,0,0,13.09,2.83,3.88,10.42-9.21,7.59-13.09-1.69-13.09-1.69" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="255.44" y1="271.24" x2="255.44" y2="289.58" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="254.75" y1="297.87" x2="254.75" y2="302.87" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <ellipse cx="175.49" cy="573.82" rx="15.63" ry="16.94" style="fill: #231f20; stroke: #231f20; stroke-miterlimit: 10;"/>
</svg><p> Læs om økonomiske sammenbrud, politiske dramaer og katte, der overtager internettet. Føl, hvordan al let humor mister sin magt, mens du absorberer verdens elendighed. Og når samtalen ender, kan du trække vejret igen - stadig levende, men med masken intakt og en smule mere apokalyptisk visdom.</p>`;
}

console.log(Hoved);
Hoved.addEventListener("mouseover", mouseOverHoved);

function mouseOverHoved() {
  console.log("mouseOverHoved");
  Hoved.style.fill = "#273e47";
}
/* Når musen er væk er den den gamle farve*/
Hoved.addEventListener("mouseout", mouseOutHoved);

function mouseOutHoved() {
  console.log("mouseOutHoved");
  Hoved.style.fill = "#a4243b";
}

/* Når man klikker skifter h1*/

Hoved.addEventListener("click", clickHoved);

function clickHoved() {
  console.log("clickHoved");
  document.querySelector(".info-text> h2").textContent = "Tænk på døden";
  document.querySelector(".placeholder").textContent = "Tænk på døden i stedet for at grine";
  document.querySelector("#efficiency").innerHTML = `<p>Midt i en alt for seriøs samtale, når latteren banker på, kan du ikke bare stoppe den med viljestyrke… men der er en løsning: Tænk på døden Forestil dig din egen gravsten. </p>
  <p>Forestil dig, at du bliver mumie. Forestil dig… ja, alt det mørke og uundgåelige. Pludselig føles alt andet småt og trivielt - og den der fnisen forsvinder hurtigere, end du kan sige “reinkarnation”</p>`;
  document.querySelector("#requirement").innerHTML = `<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.54 610.71">
  <path d="M235.5,85.65s-39.11-21.42-64.25,12.1c0,0-52.14,205.77-26.07,270.02,0,0,11.17,144.39-41.9,210.43-53.07,66.04,75.42-42.83,66.11-74.49,0,0,13.97,102.42-1.86,106.14,0,0,48.42-54,63.31-146.18,0,0,22.35,145.25,41.9,146.18,19.55.93,0-144.32,0-144.32,0,0,49.35,141.53,67.97,134.08,18.62-7.45,0-63.31,0-63.31l26.07,20.48s-22.35-139.66-51.21-156.42l41.9,21.42s-61.45-87.52-57.73-106.14c.96-4.81,1.92-22.41,2.63-45.81.13-4.35.25-8.9.37-13.61,1.61-68.01,1.03-168.49-6.72-165.91,0,0-17.69-20-30.73-11.39-13.04,8.6-29.8,6.74-29.8,6.74Z" style="fill: #231f20; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M277.06,44.91c0,10.39,2.08,31.52-8.7,27.5s-52.93-3.05-63.65-.04c-10.72,3-8.67-17.09-8.67-27.46,0-24.53,18.14-44.41,40.51-44.41s40.51,19.88,40.51,44.41Z" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10;"/>
  <circle cx="221.11" cy="29.68" r="8.26" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10;"/>
  <circle cx="252.19" cy="29.68" r="8.26" style="fill: #fff; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="223.01" y1="58.97" x2="223.03" y2="70.62" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="232.05" y1="58.92" x2="232.48" y2="69.96" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="241.45" y1="58.39" x2="242.06" y2="69.43" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <line x1="250.47" y1="58.39" x2="250.95" y2="69.43" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <polyline points="237.87 39.76 232.88 47.66 242.28 48.19 237.12 39.94" style="fill: none; stroke: #231f20; stroke-miterlimit: 10;"/>
  <polygon points="342.67 125.75 304.32 277.78 304.32 321.28 311.33 338.12 345.95 132.3 342.67 125.75" style="fill: #754c29; stroke: #231f20; stroke-miterlimit: 10;"/>
  <path d="M459.43,156.33s-39.09-84.05-113.48-29.17c0,0,85.55-5.44,113.48,29.17Z" style="fill: #6d6f71; stroke: #231f20; stroke-miterlimit: 10;"/>
</svg> <p>Tænk på skeletter, på skæbnen, på universets kolde ligegyldighed. Føl, hvordan al latter mister sin magt, mens du stirrer ind i det endelige sort. Og når samtalen er ovre, kan du trække vejret igen - stadig levende, men med masken intakt.</p>`;
}
