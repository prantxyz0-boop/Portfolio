const box = document.querySelector(".js")

fetch("port/projects.json")
  .then((response) => {
    console.log(response)
    return response.text()
  })

  .then((text) => { // Step 2 · Parse the JSON 

    const info = JSON.parse(text)
    console.log(info)
    let count = 0

    for (const d of info) {
      const div = document.createElement("div");
      div.getElementsByClassName(count)
      div.innerHTML = `
      <div class="big-box">
        <img class="pic" src="${d.photo}" />
        <h2 class="title">${d.title}</h2>
        <h3 class="full-name">${d.subtitle}</h3>
        <ul>
          🏆-Awards
          <li class="first">${d.award1}</li>
          <li class="second">${d.award2}</li>
           <li class="third">${d.award3}</li>
        </ul>
        <div style="justify-content: center; align-items: center; text-align: center;">
          <h4 class="detail">${d.details}</h4>
        </div>
      </div>
    `;
      count = count + 1
      box.append(div);
    }
  });

const back = document.querySelector(".hover")
const glass = document.querySelector(".big-box")
const glass2 = document.querySelector("#1")
const glass3 = document.querySelector("#2")

const a = [glass,back,glass2,glass3]

for (const i of a){
    i.addEventListener("mouseenter", function() {
      i.classList.add("show")
      i.classList.remove("unshow")
    })

    i.addEventListener("mouseleave", function() {
      i.classList.remove("show")
      i.classList.add("unshow")
    })
}