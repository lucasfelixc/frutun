const adcIntervals = document.getElementById('linkIntervals')
const intervals = document.querySelector('.intervals')
const content = document.querySelector('.content')

const exit = document.querySelector('.exit')

adcIntervals.addEventListener('click', e => {
    intervals.classList.toggle('on')
    content.style.display = 'block'
})

exit.addEventListener('click', e => {
    intervals.classList.toggle('on')
    content.style.display = 'none'
})