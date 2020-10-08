document.querySelector("nav").style.backgroundColor = "transparent";

let nav = document.querySelector('nav');

window.addEventListener('scroll', e => {
   e.preventDefault();
   if (window.scrollY >= 200) {
      nav.style.backgroundColor = '#FFFFFF';
   } else {
      nav.style.backgroundColor = 'transparent';
   }
})


function openNav() {
   document.getElementById("mySidebar").style.width = "100%";
   document.getElementById("main").style.marginRight = "350px";
   document.getElementById("main").style.display = "none";
}

function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginRight = "0";
   document.getElementById("main").style.display = "block";
}

function closeToggle() {
   document.getElementById("mySidebar").style.display = "none";
   document.getElementById("main").style.display = "block";
   location.reload();
}