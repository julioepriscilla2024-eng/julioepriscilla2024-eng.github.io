
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement


function changeTheme(){
    const currectTheme = rootHtml.getAttribute("data-theme");
 
    currectTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") :
    rootHtml.setAttribute("data-theme", "dark");

    toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);