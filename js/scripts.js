const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Tasto calcola premuto');

    const inputKm = document.getElementById('inputkm').value;
    console.log(inputKm);

    const inputAge = document.getElementById('inputage').value;
    console.log(inputAge);

    let price = (inputKm * 0.21);
    console.log(price);

    if (inputAge < 18){
        let discount = ((inputKm * 0.21) * 20 / 100);
        price = (price - discount);
        console.log('Il prezzo scontato per gli under 18 è:',price);
    }

    else if (inputAge > 65){
        let discount = ((inputKm * 0.21) * 40 / 100);
        price = (price - discount);
        console.log('Il prezzo scontato per i superiori di 65 anni è:',price);
    }

    // if (price < 10){ // il prezzo non scende sotto gli €10
    //     price = (10).toFixed(2);
    // }
    document.getElementById('finalprice').innerHTML = price.toFixed(2);
});
