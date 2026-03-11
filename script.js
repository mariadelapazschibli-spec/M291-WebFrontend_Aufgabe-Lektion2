const dino = document.getElementById('dino')
const rock = document.getElementById('rock')
const score = document.getElementById('score')

function jump() {
  dino.classList.add('jump-animation')
  setTimeout(() => dino.classList.remove('jump-animation'), 500)
}

/* neu: Funktion collide beschreibt Animation bei Kollision */
function collide() {
  dino.style.transform = "rotate(-90deg)"
}

/* neu: Funktion resetDino macht Dino Animation rückgängig */
function resetDino() {
  dino.style.transform = "rotate(0deg)"
}

document.addEventListener('keypress', (event) => {
  if (!dino.classList.contains('jump-animation')) {
    jump()
  }
})

setInterval(() => {
  const dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue('top'),
  )
  const rockLeft = parseInt(
    window.getComputedStyle(rock).getPropertyValue('left'),
  )
  score.innerText++

/* neu: Funktion resetDino wird ausgelöst*/
  if (rockLeft < 0) {
    rock.style.display = 'none'
    resetDino()
  } else {
    rock.style.display = ''
  }

/* neu: Funktion collide wird ausgelöst */
  if (rockLeft < 50 && rockLeft > 0 && dinoTop > 150) {
    score.innerText = 0
    collide()
  }
}, 25)
