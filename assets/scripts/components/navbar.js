const navbar = () => {
  const d = document,
    btn = d.querySelector('.NavBar-btn'),
    panel = d.querySelector('.NavBar-panel')

  btn.addEventListener('click', e => {
    e.preventDefault()
    panel.classList.toggle('is-active')
    btn.classList.toggle('is-active')
  })
}

export default navbar
