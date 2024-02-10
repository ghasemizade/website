let avatarElem = document.querySelector('.avatar')
let cardContentElem = document.querySelector('.card-content')
let bodyElem = document.querySelector('body')
let flag = false

avatarElem.addEventListener('click', () => {
    if (flag) {
        avatarElem.classList.add("active")
        cardContentElem.classList.add("active")
        bodyElem.style.backgroundColor = "#161623"
        flag = false
    } else {
        avatarElem.classList.remove("active")
        cardContentElem.classList.remove("active")
        bodyElem.style.backgroundColor = "#eee"
        flag = true
    }
})
console.log(avatarElem);