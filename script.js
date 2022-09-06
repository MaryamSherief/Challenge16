fetch("data.json")
.then(res => res.json())
.then ( data => {

    let nums = []
    data.forEach(data => nums.push(data.amount))
    const maxNum  = Math.max(...nums)

    data.forEach(data => {
        const bars = document.querySelector(".bars")

        const statDiv = document.createElement("div")
        statDiv.className = "day"

        const dayDiv = document.createElement("small")
        dayDiv.className = "small"
        dayDiv.textContent = data.day
        statDiv.appendChild(dayDiv)

        const dataDiv = document.createElement("div")
        dataDiv.setAttribute("data-value",`$${data.amount}`)
        const height = data.amount * 2
        dataDiv.style.height = `${height}px`
        dataDiv.className = "data"
        statDiv.appendChild(dataDiv)

        if(maxNum === data.amount) {
            dataDiv.classList.add("active")
        }
 
        bars.appendChild(statDiv)
    })
}
)