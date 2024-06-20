function rolldice() {
    const numofdice = document.getElementById("numofdice").value;
    const result = document.getElementById("dice-result");
    const image = document.getElementById("dice-image");
    const images = [];
    const values = [];
    for (let i = 0; i < numofdice; i++) {
        let random = Math.floor(Math.random() * 6) + 1;
        values.push(random);
        images.push(`<img src="dice_images/${random}.png" alt="image ${random}">`);
    }
    result.textContent = `Dice: ${values.join(', ')}`;
    image.innerHTML = images.join('');
}