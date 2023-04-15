
const month = Array.from(document.querySelector('.monthly')?.getElementsByTagName('span'))
const sw = document.querySelector('.switch')
sw.addEventListener('click', (e) => {
    month.forEach(e => e.classList.toggle('month-active'))
    // console.log(e.target.checked)
    const val = !e.target.checked ? 'Monthly' : 'Yearly'
    localStorage.setItem('subscription', val)
})


document.querySelector('.subscriptions').addEventListener('click', (e) => {
    // console.log(e.target)
    const card = e.target
    if (!e.target.closest('.item')) {
        // if (!(card.classList.contains('advance') || card.classList.contains('arcade') || card.classList.contains('pro'))) {
        console.log('return')
        return
    }
    else {
        document.querySelectorAll('.item').forEach(ele => {
            // console.log(ele)
            if (card !== ele) {
                // console.log('not same')
                ele.classList.remove('selected')
            }
        })
        // if (!(card.closest('.item').classList.contains('selected')))
        card.closest('.item').classList.toggle('selected')
        localStorage.setItem('plan', card.closest('.item').getElementsByTagName('p')[0].innerText)
        localStorage.setItem('price', card.closest('.item').getElementsByTagName('span')[0].innerText)
        // innerText.trim().split('\n'))
    }

})

