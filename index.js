const cards = document.querySelectorAll('.card');
console.log(cards)

const observer = new IntersectionObserver((entries)=>{
    console.log(entries)
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting)
    })
})
// observer.observe(cards[0])
// cards.forEach(card => {
//     observer.observe(card)
// });

const lastObserver = new IntersectionObserver((entries)=>{
    const lastCard = entries[0];
    if(!lastCard.isIntersecting) return 
    loadingNewCard()
    lastObserver.unobserve(lastCard.target)
    lastObserver.observe(document.querySelector(".card:last-child"))
})

lastObserver.observe(document.querySelector(".card:last-child")); 
const cardContainer = document.querySelector(".card-container");
function loadingNewCard(){
    const LoadingCard = document.createElement("p");
    LoadingCard.textContent = "Loading...";
    LoadingCard.classList.add("loading")
    cardContainer.append(LoadingCard)
     setTimeout(function(){getRemove()},1000);;
   for(let i=0;i<10;i++){ 
    const card = document.createElement('div');
    card.textContent = "New Card Added";
    card.classList.add("card");
    const l = document.querySelector("p");
    // if(l){setTimeout(function(){l.remove()}),2000 * i}
    // cardContainer.removeChild(LoadingCard)
    // observer.observe(card);
    cardContainer.append(card);
}
}
async function  getRemove(){
    await document.querySelector(".loading").remove();
    // await el.remove()
    
    console.log(el)
}