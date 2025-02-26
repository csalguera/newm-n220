const h1Ref = document.querySelector('h1')

const changeH1Style = () => {
  if (h1Ref.style.backgroundColor !== 'red') {
    h1Ref.style.backgroundColor = 'red'
  } else {
    h1Ref.style.backgroundColor = 'lightgray'
  }
}

h1Ref.addEventListener('click', changeH1Style)