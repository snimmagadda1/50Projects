const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
console.log('running')
btn.addEventListener('click', () => {
  console.log('clicked');
    search.classList.toggle('active')
    input.focus()
})