console.log('Window 7 is still the only OS to use');

// alert('Run away now!!!')

const getFavoritePeepFlavor = () => {
  const flavor = prompt("What's your favorite peep flavor?", "Regular")
  console.log("Favorite flavor:", flavor);
}

const isTyGettingFlyers = () => {
  const chooseToLeave = confirm("Are you going to go get the flyers?")
  console.log('Ty is getting the flyers:', chooseToLeave);
}
