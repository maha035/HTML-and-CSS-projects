
const colorBtn = document.getElementById('color-gen-btn');
const hexDisplay = document.getElementById('hex-text');
colorBtn.addEventListener('click', () =>{
    const hexCharacters = '0123456789ABCDEF';
    let hexString = '#';

    for(let i =0 ; i < 6 ; i++){
        const randomIndex = Math.floor(Math.random() * 16);
        hexString += hexCharacters[randomIndex];
    }

    document.body.style.backgroundColor = hexString;
    hexDisplay.textContent = hexString;
})