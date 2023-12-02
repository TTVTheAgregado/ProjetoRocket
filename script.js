function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains("light")) {
    //se tiver o light mode,adicionar a imagem light
    img.setAttribute("src", "./assets/igor.jpg")
  } else {
    //se tiver sem, manter a imagem normal
    img.setAttribute("src", "./assets/igor.jpg")
  }
}
