// flèche pour remonter en haut de la page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}
//bouton CV
document.getElementById("cv-link").addEventListener("click", function(event) {
    event.preventDefault();
   
    window.open("https://drive.google.com/file/d/1M9pHTKMPmZ_bbOLJXfjO5IcIe8Pcluzo/view?usp=sharing","_blank");
});