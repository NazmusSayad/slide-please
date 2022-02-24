const el = document.getElementById("a")
let oldpos
let width = -el.clientWidth
let leftMove = width

document.addEventListener("pointermove", () => {
  const current = event.clientX
  if (event.buttons) {
    leftMove += current - oldpos
    leftMove = leftMove > 0 ? 0 : leftMove < width ? width : leftMove
    el.style.left = leftMove + "px"
  }
  oldpos = current
})
document.addEventListener("pointerdown", () => {
  el.style.left = leftMove + "px"
  el.removeAttribute("class")
})
document.addEventListener("pointerup", () => {
  if (leftMove < width / 2) {
    el.className = "hide"
    leftMove = width
  } else {
    el.className = "show"
    leftMove = 0
  }
  el.removeAttribute("style")
})
window.addEventListener("resize", () => {
  width = -el.clientWidth
  if (el.className == "show") {
    leftMove = 0
  } else {
    leftMove = width
  }
})
