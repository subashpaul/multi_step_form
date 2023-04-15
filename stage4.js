const planTitle = document.querySelector('.plan-title')
const add = document.querySelector('.add')
const total = document.querySelector('.total')
const addOnnPrice = localStorage.getItem('addOnnprice').split(' ')
const addOnn = localStorage.getItem('addOnn').split(' + ')
// console.log(addOnn, addOnnPrice.reduce((acc, ele) => acc = acc + Number(ele), 0))
let html = ''
planTitle.innerHTML = `${localStorage.getItem('plan')}(${localStorage.getItem('subscription')})`

document.querySelector('.plan-price').innerText = '+' + localStorage.getItem('price')[2] + `${localStorage.getItem('subscription') === 'Monthly' ? '/mo' : '/yr'
    }`;

addOnn.forEach((e, i) => {
    // console.log(e)
    html += `<p> ${e} <span><b>+${addOnnPrice[i]}${localStorage.getItem('subscription') === 'Monthly' ? '/mo' : '/yr'
        }</b ></span ></p> `;

})
add.insertAdjacentHTML("afterbegin", html)

let tHtml = ''
tHtml = `<p> Total(${localStorage.getItem('subscription')})
    <h2> +${addOnnPrice.reduce((acc, ele) => acc = acc + Number(ele), 0)}${localStorage.getItem('subscription') === 'Monthly' ? '/mo' : '/yr'}</h2> `
total.insertAdjacentHTML('afterbegin', tHtml)

