import { appendElements } from "./utilities.js"

const img1 = {
  url: 'https://fastly.picsum.photos/id/804/300/400.jpg?hmac=Y6cx9oentnw75-Q7gYdlaJBBAnSAlUHRYXbvFMIrZNI'
}

const img2 = {
  url: 'https://fastly.picsum.photos/id/185/300/400.jpg?hmac=7jvc9SGhArOCJhgLoOfYSTezJsc1xrIXhDOXkiZSrbs'
}

const img3 = {
  url: 'https://fastly.picsum.photos/id/229/300/400.jpg?hmac=CZOWn8sQ8oa9EfbMZw5tYqPMNKK0mNOYUsEgz81K8io'
}

const img4 = {
  url: 'https://fastly.picsum.photos/id/211/300/400.jpg?hmac=l0zi1AkBxaPoAMnWav0iWH8TsWfblHXdm_IGSNDMFWQ'
}

const photos = [
  img1,
  img2,
  img3,
  img4,
]

const galleryRef = document.querySelector('#gallery')

appendElements(photos, 'img', galleryRef)