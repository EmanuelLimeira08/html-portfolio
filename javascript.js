const navMenu = document.querySelector('.navbar')

function openSideBar(){
    navMenu.classList.add('show')
}

function closeSideBar(){
    navMenu.classList.remove('show')
}

window.onscroll = () => {
    navMenu.classList.remove('show')
}