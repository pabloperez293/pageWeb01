let hamburguer  = document.querySelector(`.hamburguer`);
let menu  = document.querySelector(`.menuNav`);

// console.log(menu);
// console.log(hamburguer);

// Le damos a hamburguer un evento que cuando presione click realice lo siguiente 
hamburguer.addEventListener(`click`, () =>{
    // cada vez que toquemos la hamb se quita o se coloca el menu
    menu.classList.toggle(`spread`);
})

window.addEventListener(`click`, e =>{
    // console.log(e.target);
    if(menu.classList.contains(`spread`) && e.target != menu && e.target != hamburguer ){
           menu.classList.toggle(`spread`);
    }
})
