filp =() =>{
    document.getElementById('Card').classList.toggle('flipped')
    document.querySelector('#front .reflection').classList.toggle('move')
    document.querySelector('#back .relfection').classList.toggle('move')
}
document.getElementById('show-btn').addEventListener('click',flip)
document.getElementById('hide-btn').addEventListener('click',flip)

