const form = document.querySelector('#form')
const eventCards = document.querySelector('.cards')
form.addEventListener('submit', function(event){
    event.preventDefault()
    const title = eventTitle.value
    const date = eventDate.value
    const cat = category.value
    const desc = description.value

    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <h2>${title}</h2>
        <p>${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="deleteCard">X</div>
    `
    card.querySelector('.deleteCard').addEventListener('click', function(){card.remove() })
    eventCards.appendChild(card)
    console.log("done")
})

document.addEventListener('keydown',(event) =>  {
    document.querySelector('.key').innerText = event.key

})

eventCards.addEventListener('click', function(e) {
    if (e.target.classList.contains('deleteCard')) {
        e.target.parentElement.remove()
    }
})


const clearBtn = document.querySelector('.events button:first-child')
clearBtn.addEventListener('click', function() {
    eventCards.innerHTML = ""
})

const sampleBtn = document.querySelector('.events button:nth-child(2)')
sampleBtn.addEventListener('click', function() {

    const samples = [
        {title: "Documentation", date: "2025-08-23", cat: "Meetup", desc: "KRMU Documentation Day"},
        {title: "Birthday", date: "2025-10-11", cat: "Social", desc: "18th Birthday"}
    ]

    samples.forEach(sample => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <h2>${sample.title}</h2>
            <p>${sample.date}</p>
            <button>${sample.cat}</button>
            <p>${sample.desc}</p>
            <div class="deleteCard">X</div>
        `
        eventCards.appendChild(card)
    })
})

document.addEventListener('click', function(e){
    if(e.target.classList.contains('card')){
        console.log("Parent:", e.target.parentElement)
        console.log("First Child:", e.target.firstElementChild)
        console.log("Next Sibling:", e.target.nextElementSibling)
        console.log("Children:", e.target.children)
    }
})
