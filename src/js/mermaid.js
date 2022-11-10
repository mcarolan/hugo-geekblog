
document.addEventListener("DOMContentLoaded", function (event) {
  import("mermaid")
    .then(({ default: md }) => {
      md.initialize({
        flowchart: { useMaxWidth: true },
      })
    })
    .catch((error) => console.error(error))
})
