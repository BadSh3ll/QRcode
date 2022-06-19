const wrapper = document.querySelector('.wrapper');
const btn = wrapper.querySelector('.button');
const qrInput = wrapper.querySelector('.form input');
const qrimg = wrapper.querySelector('.qr-code img');

btn.addEventListener('click', () => {
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput.value}`;
    if (qrInput.value){
        qrimg.src = url;
        console.log(url);
    }
    btn.innerText = "Generating..."
    qrInput.value = '';
    wrapper.classList.add('generate');
    qrimg.classList.add('generate');
    qrimg.addEventListener('load', () => {
        btn.innerText = "Generate QR Code"

    })

});
