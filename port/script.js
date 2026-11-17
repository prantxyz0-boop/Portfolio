const box = document.querySelector(".js")

fetch("port/projects.json")
  .then((response) => {
    console.log(response)
    return response.text()
  })

  .then((text) => { // Step 2 · Parse the JSON 

    const info = JSON.parse(text)
    console.log(info)

    for (const d of info) {
      const div = document.createElement("div");
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
      box.append(div);
    }
  });