import"./main-93047baa.js";document.addEventListener("DOMContentLoaded",function(){const o=document.getElementById("menu-button"),t=document.getElementById("dropdown-menu"),n=document.querySelectorAll("#donation_list li a");t.style.display="none",o.addEventListener("click",function(){t.style.display==="block"?(t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{t.style.display="none"},300)):(t.style.display="block",setTimeout(()=>{t.style.opacity="1",t.style.transform="scale(1)"},10))}),document.addEventListener("click",function(e){!o.contains(e.target)&&!t.contains(e.target)&&(t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{t.style.display="none"},300))}),n[0].parentElement.classList.add("active"),n.forEach(e=>{e.addEventListener("click",function(s){s.preventDefault(),n.forEach(i=>{i.parentElement.classList.remove("active");const d=i.querySelector("h2");d&&d.classList.add("opacity-70")}),this.parentElement.classList.add("active");const c=this.querySelector("h2");c&&c.classList.remove("opacity-70")})})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll("#dropdown-menu button"),t=document.querySelectorAll(".content-section");o.forEach(n=>{n.addEventListener("click",function(){t.forEach(s=>s.classList.add("hidden"));const e=this.getAttribute("data-target");document.getElementById(e).classList.remove("hidden")})})});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll("#donation_list li"),t=document.querySelectorAll(".content-section");o.forEach(n=>{n.addEventListener("click",function(){t.forEach(s=>s.classList.add("hidden"));const e=this.getAttribute("data-target");document.getElementById(e).classList.remove("hidden")})})});
