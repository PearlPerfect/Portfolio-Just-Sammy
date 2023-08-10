let words = document.querySelectorAll(".home__changed-words");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";

    letters.forEach((letter) =>{
        let span = document.createElement("span")
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});


let currentWordIndex = 0;
let maxWordsIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changedText = () =>{
    let currentWord =words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordsIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) =>{
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) =>{
        letter.className = "letter behind";
        setTimeout(() =>{
            letter.className = "letter in"
        }, 340 + i * 80)
    });
    currentWordIndex = currentWordIndex === maxWordsIndex ? 0 : currentWordIndex + 1;   
};
changedText();
setInterval(changedText,3000);
const form = document.getElementById("form");
form.addEventListener("submit", function(){
    setTimeout(function(){
        window.location.href ="/index.html"
    },1);
});


 const lightMode = document.querySelector("#lightMood");
 const darkMode = document.querySelector("#darkMood");
 const theme = localStorage.getItem("theme");
 theme && document.body.classList.add(theme);
 
 lightMode.addEventListener("click", function(){
    document.body.classList.add("light-mode");
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode"); 
            darkMode.style.display = "flex";
            lightMode.style.display = "none"; 
    }

        
})

 darkMode.addEventListener("click", function(){
    localStorage.removeItem("theme");
    document.body.removeAttribute("class");
    document.body.classList.remove("light-mode");
    darkMode.style.display = "none"
    lightMode.style.display = "flex"

    

 })


 const menuBarIcon = document.querySelector("#header__menuBarBtn");
 const menueBar = document.querySelector(".mobile-NavBar");
 const closeNavBar = document.querySelector("#header__closeBtn");
//  const mobileLinks = document.querySelector(".mobile__NavBar-Links");
 
 menuBarIcon.addEventListener("click", function(){
    menueBar.style.display = "flex"
    closeNavBar.style.display ="block"
    menuBarIcon.style.display = "none"
    
 });

 closeNavBar.addEventListener("click", function(){
    menueBar.style.display = "none";
    menuBarIcon.style.display = "block";
    closeNavBar.style.display ="none";
    window.location.href = "/index.html";
 })

