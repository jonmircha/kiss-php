const sw = () => {
  // registro del sw
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', { scope: './' })
      .then(reg => console.log('Registro de sw exitoso', reg))
      .catch(err => console.warn('Error al tratar de registrar el sw', err))
  }
}

export default sw
