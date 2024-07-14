const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Tasto calcola premuto');

    const inputKm = document.getElementById('inputkm').value;
    console.log(inputKm);

    const inputAge = document.getElementById('inputage').value;
    console.log(inputAge);

    const passenger = document.getElementById('inputname').value


    let price = (inputKm * 0.21);
    console.log(price);

    let random1_100 = (Math.random() * 100) + 1;
    random1_100 = Math.floor(random1_100)
    console.log ('il num random 1-100 è: ',random1_100); // numero biglietto casuale

    let random1_20 = (Math.random() * 20) + 1;
    random1_20 = Math.floor(random1_20)
    console.log ('il num random 1-20 è: ',random1_20); // numero carrozza casuale

    const ticket = document.getElementById('ticket');
    ticket.classList.remove('d-none')

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

    if (price < 5){ // il prezzo non scende sotto i 5 euro
        price = (5);
    }
    document.getElementById('number1-20').innerHTML = random1_20;
    document.getElementById('number1-100').innerHTML = random1_100;
    document.getElementById('finalprice').innerHTML = (price).toFixed(2);
    document.getElementById('passenger').innerHTML = passenger;
});
