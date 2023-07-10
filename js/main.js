/* Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€ */


let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function submitForm(event) {
    event.preventDefault();
    console.log("test");
    let userHours = document.getElementById("inputHours").value;
    let typeWork = document.getElementById("inputWork").value;
    let userDiscount = document.getElementById("inputCode").value;

    let price;
    if (typeWork == "backend") {
        price = userHours * 20.5;
        typeWork = "backend developer"
    } else if (typeWork == "frontend") {
        price = userHours * 15.3;
        typeWork = "Frontend developer"
    } else if (typeWork == "analysis") {
        price = userHours * 33.6;
        typeWork = "Project analysis"
    }

    if (discountCodes.includes(userDiscount)) {
        price = price / 100 * 75;
    }

    if (userDiscount.length >= 1 && !discountCodes.includes(userDiscount)) {
        document.getElementById("discountMessage").classList.remove("d-none");
        return false;
    }

    document.getElementById("formDiv").classList.add("d-none");
    document.getElementById("finalContainer").classList.remove("d-none");

    document.getElementById("priceId").innerHTML = "Price: €" + price.toFixed(2);
    document.getElementById("hoursId").innerHTML = "Hours requested: " + userHours;
    document.getElementById("workId").innerHTML = "Type of work: " + typeWork;
}