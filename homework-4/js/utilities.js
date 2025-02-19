export const findAverage = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum / arr.length
}

export const appendElements = (arr, el, ref) => {
  for (let i = 0; i < arr.length; i++) {
    const element = document.createElement(el)
    el.textContent = `${arr[i]}`
    ref.appendChild(element)
  }
}