const items = [18, 24, 17, 3]

function calculateTotal(price, tax = 0.07, discountRate = 0.1) {
  if (price > 100) {
    return price * (1 + tax) * (1 - discountRate * 2)
  } else if (price > 50) {
    return price * (1 + tax) * (1 - discountRate)
  } else {
    return price * (1 + tax)
  }
}

function showItems() {
  const newSection = document.createElement('section')
  newSection.innerHTML = '<h4>Items</h4>'

  let total = 0
  for (let i = 0; i < items.length; i++) {
    newSection.innerHTML += `<p>$${items[i]}</p>`
    total += items[i]
  }

  newSection.innerHTML += '<hr />'
  newSection.innerHTML += `<p>$${calculateTotal(total)}</p>`
  document.body.appendChild(newSection)
}

showItems()