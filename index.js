document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector(".card")
  for(const card of cards){
    card.addEventListener("click", flipper)
  }
  
  function flipper(event){
    const target = event.currentTarget
    target.style.trasnform = "rotateY(180deg)"
    target.addEventListener("click", innerFlipper)
  }

  function innerFlipper (event){
    const target = event.currentTarget
    target.style.trasnform = "rotateY(180deg)"
    target.addEventListener("click", flipper)
    target.removeEventListener("click", innerFlipper)
  }
})