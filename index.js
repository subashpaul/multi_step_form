document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('name', e.target.name.value)
    localStorage.setItem('email', e.target.email.value)
    localStorage.setItem('phoneNo', e.target.num.value)
    e.target.reset()
    window.location.href = '/stage2.html'
})

