const github = document.querySelector(".logo-github")
const port = document.querySelector(".logo-briefcase")
const steam = document.querySelector(".logo-steam")

const a = [steam,port,github]

for (const i of a){
    i.addEventListener("mouseenter", function() {
    i.classList.add("show")
    })

    i.addEventListener("mouseleave", function() {
    i.classList.remove("show")
    })
}