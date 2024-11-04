function createNachrichten(json) {
   const nachrichten = document.getElementById("nachrichten")
    nachrichten.innerText = ''

    json.forEach((item) => {
        console.log(item)
       const span= document.createElement('span')
        const del = document.createElement('span')
        del.innerText = '🪣'
        del.classList.add('delete')
        const div= document.createElement('div')
        div.classList.add('message')
        div.appendChild(span)
        div.appendChild(del)
        span.innerText = item
        nachrichten.appendChild(div)
    })
}
const loadPixels = async () => {
    const response = await fetch('/wichtel');
    const json = await response.json();

    createNachrichten(json)
}
document.getElementById('ok').onclick = () => {
    const textContent = document.getElementById('text').value
    console.log(textContent)

    fetch("/wichtel", {
        method: "POST",
        body: JSON.stringify({
            name: textContent,

        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(()=> {



        loadPixels()
        
    })


}
loadPixels()