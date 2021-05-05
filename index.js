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

const infoUser = document.getElementById('userInfo')

if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position)
    const p = document.createElement('p')
    p.classList.add('position')
    p.textContent = `широта: ${position.coords.latitude}, долгота: ${position.coords.longitude}`
    infoUser.append(p)
  })

  const watch = navigator.geolocation.watchPosition((newPosition) => {
    const p = document.querySelector('.position')
    p.textContent = `широта: ${newPosition.coords.latitude}, долгота: ${newPosition.coords.longitude}`
  })

  setTimeout(() => {
    navigator.geolocation.clearWatch(watch)
    showNotification()
  }, 10 * 1000)
} else {
  console.log('geolocation api не предоставляется вашим браузером')
}

function showNotification() {
  const notification = new Notification('уведомление об отключении слежки', {
    body: 'мы больше за вами не следим!',
    icon: 'https://image.shutterstock.com/image-vector/outline-location-icon-illustration-vector-600w-1039285465.jpg'
  })

  notification.onclick = (e) => {
    window.location.href = 'https://google.com'
  }
}

if (Notification.permission === 'granted') {
  showNotification()
} else if (Notification.permission !== 'denied') {
  Notification.requestPermission()
    .then((permission) => {
      if (permission === 'granted') {
        showNotification()
      }
    })
}