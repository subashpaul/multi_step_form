let addOnnPrice = []
let addOnn = []

document.querySelector('.monthly-st3').addEventListener('click', (e) => {

    if (!e.target.closest('.mo-addons'))
        return
    e.target.closest('.mo-addons')?.classList.toggle('checked')
    let checkbox = e.target.closest('.mo-addons')?.getElementsByTagName('input')[0]
    const input = document.getElementById(`${e.target.id}`)
    // console.log(e.target.id, input)

    if (e.target !== input)
        checkbox.checked = checkbox.checked ? false : true


    if (e.target === input) {
        // console.log(input.checked)
        checkbox.checked = checkbox.checked ? true : false
    }
    addOnn = []
    addOnnPrice = []
    document.querySelectorAll('.mo-addons').forEach(element => {
        // console.log(element)
        if (element.getElementsByTagName('input')[0].checked) {
            // console.log('checked')
            addOnn.push(element.getElementsByTagName('h2')[0].innerText)
            addOnnPrice.push(+element.getElementsByTagName('p')[0].innerText.at(2))
        }
    });

    localStorage.setItem('addOnn', addOnn.join(' + '))
    localStorage.setItem('addOnnprice', addOnnPrice.join(' '))

    // localStorage.setItem('addOnn', )
    // localStorage.setItem('addOnnprice',)
})
