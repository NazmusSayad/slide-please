const slider = document.getElementById("slider"),
  slider__main = document.getElementById("slider__main"),
  slider__background = document.getElementById("slider__background"),
  hide__slider = () => {
    slider.className = "hide"
    leftMove = width
    setTimeout(() => {
      slider.removeAttribute("class")
    }, 210)
  }

let oldpos,
  width = -slider__main.clientWidth,
  leftMove = width

document.addEventListener("pointermove", () => {
  const current = event.clientX
  if (event.buttons) {
    leftMove += current - oldpos
    leftMove = leftMove > 0 ? 0 : leftMove < width ? width : leftMove

    slider__main.style.left = leftMove + "px"
    slider__background.style.opacity = 1 - leftMove / width

    if (width - leftMove < -15) {
      slider__background.style.display = "block"
    }
  }
  oldpos = current
})

document.addEventListener("pointerdown", () => {
  if (leftMove === 0) {
    slider__main.style.left = "0px"
    slider__background.style.display = "block"
    slider__background.style.opacity = 1
  }
  slider.removeAttribute("class")
})

document.addEventListener("pointerup", () => {
  if (leftMove < width / 2) {
    hide__slider()
  } else {
    slider.className = "show"
    leftMove = 0
  }
  slider__main.removeAttribute("style")
  slider__background.removeAttribute("style")
})

window.addEventListener("resize", () => {
  width = -slider__main.clientWidth
  if (slider.className == "show") {
    leftMove = 0
  } else {
    leftMove = width
  }
})

slider__background.addEventListener("click", hide__slider())
