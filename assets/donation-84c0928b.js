import"./main-f66476a6.js";document.addEventListener("DOMContentLoaded",function(){const c=document.getElementById("menu-button"),t=document.getElementById("dropdown-menu"),o=document.querySelectorAll("#donation_list li a"),d=document.querySelectorAll("#dropdown-menu button"),i=document.querySelectorAll(".content-section");t.style.display="none",c.addEventListener("click",function(){t.style.display==="block"?(t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{t.style.display="none"},300)):(t.style.display="block",setTimeout(()=>{t.style.opacity="1",t.style.transform="scale(1)"},10))}),document.addEventListener("click",function(e){!c.contains(e.target)&&!t.contains(e.target)&&(t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{t.style.display="none"},300))}),o[0].parentElement.classList.add("active"),o.forEach(e=>{e.addEventListener("click",function(s){s.preventDefault(),o.forEach(a=>{a.parentElement.classList.remove("active");const l=a.querySelector("h2");l&&l.classList.add("opacity-70")}),this.parentElement.classList.add("active");const n=this.querySelector("h2");n&&n.classList.remove("opacity-70")})}),d.forEach(e=>{e.addEventListener("click",function(){i.forEach(n=>n.classList.add("hidden"));const s=this.getAttribute("data-target");document.getElementById(s).classList.remove("hidden"),t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{t.style.display="none"},300),c.querySelector("p").textContent=this.textContent})}),o.forEach(e=>{e.addEventListener("click",function(){i.forEach(n=>n.classList.add("hidden"));const s=this.getAttribute("data-target");document.getElementById(s).classList.remove("hidden")})})});
