function sparkle(el) {
    if(Math.random() > 0.85) {
        const textRect = el.getBoundingClientRect()
        console.log(textRect)
    
        const sparkle = document.createElement("img")
        sparkle.className = "sparkle"
        sparkle.setAttribute("alt", "sparkle icon")
        if(Math.random() > 0.5) {
            sparkle.src = "./images/sparkles1.svg"
        } else {
            sparkle.src = "./images/sparkles2.svg"
        }
        sparkle.style.left = `${Math.random() * (textRect.left - textRect.right) + textRect.right}px`
        sparkle.style.top = `${Math.random() * (textRect.top - textRect.bottom) + textRect.bottom - textRect.height/3}px`

        let dHeight = textRect.height / 5 * 2
        const sparkleSize = Math.floor(Math.random() * (dHeight/2 - dHeight/2.75) + dHeight/2.75)
        dHeight += sparkleSize
        sparkle.style.width = `${dHeight}px`
        sparkle.style.height = `${dHeight}px`
        document.body.appendChild(sparkle)

        //filter: hue-rotate(90deg);
        const hueshift = Math.floor(Math.random() * (-65 - 65) + 65)
        sparkle.style.filter = `hue-rotate(${hueshift}deg)`

        let c = 0
        let marginL = 0
        let marginU = 0
        let multiplier = 0
        const desired = Math.floor(Math.random() * (dHeight/1.5 - dHeight/2.5) + dHeight/2.5)
        if(Math.random() > 0.5) {
            multiplier = 1
        } else {
            multiplier = -1
        }
        const sparkleA = setInterval(() => {
            c++
            sparkle.style.marginLeft = `${marginL}px`
            sparkle.style.marginTop = `${marginU}px`
            marginL = desired/30 * c * multiplier
            marginU = marginL/2
            if(c > 30) {
                sparkle.remove()
                clearInterval(sparkleA)
            }
        }, 50)
    }
} 

let interval

window.addEventListener("load", () => {
    setInterval(() => {
        document.querySelectorAll(".sparkleP").forEach(el => { 
            clearInterval(interval) // lazy coping w/ ajax lol
            interval = setInterval(() => { sparkle(el) }, 100)
        })
    }, 555)
})
