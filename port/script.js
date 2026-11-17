const title = document.querySelector(".title")
const full = document.querySelector(".full-name")
const faward = document.querySelector(".first")
const saward = document.querySelector(".second")
const taward = document.querySelector(".third")
const detail = document.querySelector(".detail")

fetch("port/projects.json")
  .then((response) => {
    console.log(response)
    return response.text()
  })

.then((text) => { // Step 2 · Parse the JSON 

    const info = JSON.parse(text)
    console.log(info)

    for (const anime of info) { 
      const tr = document.createElement("div");
      tr.innerHTML = `
        <img class="pic" src="purepee.jpg" />
        <h2 class="title">Pure Pee</h2>
        <h3 class="full-name">Smart Urine Screening at the Point-of-Care</h3>
        <ul>
          🏆-Awards
          <li class="first">Special Award · MIIC 2025</li>
          <li class="second">Silver Award · New Gen 2025</li>
           <li class="third">Copper Award · TU Awards</li>
        </ul>
        <div style="justify-content: center; align-items: center; text-align: center;">
        <h4 class="detail">
          PurePee is a low-cost point-of-care device that reads urine test
          strips automatically with an RGB sensor, a camera and AI. It helps
          people in remote areas screen early for diabetes and kidney disease.
        </h4>
        </div>
    `;
    rows.append(tr);
    }
  });