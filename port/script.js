fetch("port/projects.json")
  .then((response) => {
    console.log(response)
    return response.text()
  })
  