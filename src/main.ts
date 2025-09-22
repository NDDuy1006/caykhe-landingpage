import './style.css'
import { setupCounter } from './counter.ts'

import './styles/main.scss'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// toTop Button displays when scroll pass happy section
const toTopBtn = document.getElementById("toTop")
const triggerSection = document.getElementById("happySection")

window.addEventListener("scroll", () => {
  console.log("HAHAHAHAH");
  
  const triggerPoint = (triggerSection?.offsetTop || 0) + (triggerSection?.offsetHeight || 0);
  
  if (window.scrollY > triggerPoint) {
    if (toTopBtn) toTopBtn.style.display = "block";
  } else {
    if (toTopBtn) toTopBtn.style.display = "none";
  }
})

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
