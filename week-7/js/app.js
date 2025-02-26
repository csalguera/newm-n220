const h1Ref = document.querySelector('h1')
const nameRef = document.querySelector('#name')
const sizeRef = document.querySelector('#size')

const changeH1Style = () => {
  if (h1Ref.style.backgroundColor !== 'red') {
    h1Ref.style.backgroundColor = 'red'
  } else {
    h1Ref.style.backgroundColor = 'white'
  }
}

const changeH1Color = (evt) => {
  h1Ref.style.color = evt.target.value
}

const chageH1Size = (evt) => {
  const fontSzie = Number(evt.target.value)
  if (fontSzie >= 8) {
    h1Ref.style.fontSize = `${evt.target.value}px`
  } else {
    evt.target.value = 8
  }
}

h1Ref.addEventListener('click', changeH1Style)
nameRef.addEventListener('change', changeH1Color)
sizeRef.addEventListener('input', chageH1Size)