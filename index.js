const leftLinks = document.querySelectorAll(`.left-menu a`),
      mapLinks = document.querySelectorAll(`.map a`),
      info = document.querySelector(`.info`)

leftLinks.forEach((elem) => {
  elem.addEventListener('mouseenter', (e) => {
    let self = e.currentTarget
    let sefClass = self.getAttribute('href')
    let color = self.dataset.color
    let currentElement = document.querySelector(`.map a[href="${sefClass}"]`)
    let currentPolygon = currentElement.querySelectorAll('polygon')
    let currentPath = currentElement.querySelectorAll('path')

    if (currentPolygon) {
      currentPolygon.forEach((el) => {
        el.style.cssText = `fill: ${color}; stroke-width: 2px`
      })
    }
    if (currentPath) {
      currentPath.forEach((el) => {
        el.style.cssText = `fill: ${color}; stroke-width: 2px`
      })
    }

    self.classList.add('active')
  })

  elem.addEventListener('mouseleave', (e) => {
    let self = e.currentTarget
    let sefClass = self.getAttribute('href')
    let currentElement = document.querySelector(`.map a[href="${sefClass}"]`)
    let currentPolygon = currentElement.querySelectorAll('polygon')
    let currentPath = currentElement.querySelectorAll('path')

    if (currentPolygon) {
      currentPolygon.forEach((el) => {
        el.style.cssText = ``
      })
    }
    if (currentPath) {
      currentPath.forEach((el) => {
        el.style.cssText = ``
      })
    }

    self.classList.remove('active')
  })
})

mapLinks.forEach((elem) => {
  elem.addEventListener('mouseenter', (e) => {
    let self = e.currentTarget
    let sefClass = self.getAttribute('href')
    let color = self.dataset.color
    let currentElement = document.querySelector(`.left-menu a[href="${sefClass}"]`)
    let currentPolygon = self.querySelectorAll('polygon')
    let currentPath = self.querySelectorAll('path')

    if (currentPolygon) {
      currentPolygon.forEach((el) => {
        el.style.cssText = `fill: ${color}; stroke-width: 2px`
      })
    }
    if (currentPath) {
      currentPath.forEach((el) => {
        el.style.cssText = `fill: ${color}; stroke-width: 2px`
      })
    }
    currentElement.classList.add('active')
  })

  elem.addEventListener('mouseleave', (e) => {
    let self = e.currentTarget
    let sefClass = self.getAttribute('href')
    let currentElement = document.querySelector(`.left-menu a[href="${sefClass}"]`)
    let currentPolygon = self.querySelectorAll('polygon')
    let currentPath = self.querySelectorAll('path')

    if (currentPolygon) {
      currentPolygon.forEach((el) => {
        el.style.cssText = ``
      })
    }
    if (currentPath) {
      currentPath.forEach((el) => {
        el.style.cssText = ``
      })
    }
    currentElement.classList.remove('active')
  })
})