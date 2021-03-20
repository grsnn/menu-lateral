let waves = document.querySelectorAll('.waves');
let item = document.querySelectorAll('.list .item');

const container = document.getElementById('containerMenu');
const menuLateral = document.getElementById('containerLateral');

const iconShow = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-times');

//mostrar contenedor del menu
iconShow.addEventListener('click', () => {
    container.classList.add('active')
    iconShow.classList.add('inactiveI')
    iconClose.classList.add('activeI')
    setTimeout(() => {
        menuLateral.classList.add('active')
    }, 300);
})

//funsion close
const closeMenu = () => {
    menuLateral.classList.remove('active')
    iconShow.classList.remove('inactiveI')
    iconClose.classList.remove('activeI')
    setTimeout(() => {
        container.classList.remove('active')
    }, 400);
}

//ocultar contenedor del menu
iconClose.addEventListener('click', closeMenu);

//si quieres que al dar clic fuera del menu este se oculte active esta opcion
/*containerMenu.addEventListener('click', closeMenu)*/


//efecto a la lista del menu
waves.forEach((collback) => {
    collback.addEventListener('click', e => {
        e.preventDefault();
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        collback.appendChild(ripple);
        setTimeout(function() {
            ripple.remove();
        }, 600);
    })
})

item.forEach((collback) => {
    collback.addEventListener('click', () => {
        item.forEach((item) => item.classList.remove('active'))
        collback.classList.add('active');
    })
})