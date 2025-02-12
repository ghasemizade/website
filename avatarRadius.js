const avatar = document.querySelector('.avatar')



function changeRadius() {
    avatar.style.borderTopRightRadius = Math.floor(Math.random() * 100) + "%";
    avatar.style.borderTopLeftRadius = Math.floor(Math.random() * 100) + "%";
    avatar.style.borderBottomRightRadius = Math.floor(Math.random() * 100) + "%";
    avatar.style.borderBottomLeftRadius = Math.floor(Math.random() * 100) + "%";

    setTimeout(changeRadius, 500);
}


changeRadius();
