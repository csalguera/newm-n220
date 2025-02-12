const h1Ref = document.getElementById('title')
const letterGradeRefs = document.getElementsByClassName('letter-grade')
const pRef = document.querySelector('p')

console.log(h1Ref);
console.log(letterGradeRefs);
console.log(pRef);

const h1AltRef = document.querySelector('#title')

console.log(h1AltRef);

const liRefs = document.querySelectorAll('li')

console.log(liRefs);

const ulRef = document.querySelector('ul')

console.log(ulRef.textContent);
console.log(ulRef.innerText);
console.log(ulRef.innerHTML);

pRef.innerText = 'The cozy farmer ate the little green rock.'

ulRef.innerHTML = '<li class="letter-grade">C</li>'
ulRef.innerHTML += '<li class="letter-grade">D</li>'
ulRef.innerHTML += '<li class="letter-grade no-display">E</li>'
ulRef.innerHTML += '<li class="letter-grade">F</li>'

h1Ref.style.backgroundColor = 'brown'
h1Ref.style.color = 'white'

pRef.style.backgroundColor = '#00ff0050'
pRef.style.color = 'rgb(255, 50, 0)'
pRef.style.height = '400px'
pRef.style.width = '400px'

document.querySelector('li').style.display = 'none'

h1Ref.style.display = 'none'
h1Ref.style.display = 'inline'

const ulLiRefs = ulRef.querySelectorAll('li')

console.log(ulLiRefs);

const googleLinkRef = document.querySelector('a.google')

googleLinkRef.href = 'https://google.com'
googleLinkRef.target = '_blank'

const inputRef = document.querySelector('input')
inputRef.setAttribute('placeholder', 'Green Jello with the Fruit')

pRef.dataset.age = '89'
console.log(pRef);
console.log(pRef.dataset);

pRef.classList.add('blue')
pRef.classList.remove('blue')

const newLi = document.createElement('li')
newLi.textContent = 'G'
newLi.classList.add('letter-grade')
ulRef.appendChild(newLi)