console.log("teste")

function editTicker(event) {
    event.preventDefault();

    const form = event.target;

    const cardID = form.cardID.value;
    const ticker = form.ticker.value;
    const bolsa = form.bolsa.value;
    const valor = form.valor.value;
    const ativos = form.ativos.value;

    const total = valor * ativos;

    const cardEditing = document.getElementById(cardID)

    const cardTicker = cardEditing?.querySelector(".cardTicker");
    cardTicker.innerText = ticker

    const cardBolsa = cardEditing?.querySelector(".cardBolsa");
    cardBolsa.innerText = bolsa

    const cardValor = cardEditing?.querySelector("main h1 span");
    cardValor.innerText = valor

    const cardAtivos = cardEditing?.querySelector(".cardAtivos");
    cardAtivos.innerText = ativos

    const cardTotal = cardEditing?.querySelector(".cardTotal");
    cardTotal.innerText = total

    closeModal("#edit")

}

function openModal(modalID) {
    const modal = document.querySelector(modalID)
    modal.style.display = "flex"
}

function closeModal(modalID) {
    const modal = document.querySelector(modalID)
    modal.style.display = "none"
}

function addTicker(event) {
    event.preventDefault();
    const form = event.target;
    const ticker = form.ticker.value;
    const bolsa = form.bolsa.value;
    const valor = form.valor.value;
    const ativos = form.ativos.value;

    const total = valor * ativos;

    const card = `
        <div class="card" id="${ticker}" onmouseenter="showButtons(event)" onmouseleave="hideButtons(event)">
            <header>
                <h3 class="cardTicker">${ticker}</h3>
                <h3 class="cardBolsa">${bolsa}</h3>
            </header>

            <main class="flexrow">
                <h1 class="positive">&#9650 U$<span>${valor}</span></h1>
                <img src="./img/trending-up.svg">
            </main>

            <footer>
                <h3>Nº Ativos: <span class="cardAtivos">${ativos}</span></h3>
                <h3>U$ <span class="cardTotal">${total}</span></p>
            </footer>

            <div class="actions">
                <button onclick="openEditCard(event)">Editar</button>
                <button onclick="deleteCard(event)">Excluir</button>
            </div>
        </div>
    `
    const cards = document.querySelector("#cards")
    cards.innerHTML += card
    closeModal("#add")
    form.reset()
}

function showButtons(event) {
    const card = event.target
    const buttons = card.querySelector(".actions")
    buttons.style.display = "flex"
}

function hideButtons(event) {
    const card = event.target
    const buttons = card.querySelector(".actions")
    buttons.style.display = "none"
}

function deleteCard(event) {
    const card = event.target.closest(".card");
    card.remove()
}

function openEditCard(event) {
    const card = event.target.closest(".card");
    const ticker = card.querySelector(".cardTicker").innerText;
    const bolsa = card.querySelector(".cardBolsa").innerText;
    const valor = card.querySelector("main h1 span").innerText;
    const ativos = card.querySelector(".cardAtivos").innerText;

    const inputTicker = document.querySelector("#editTicker");
    inputTicker.value = ticker;

    const cardID = card.getAttribute("id");
    const inputCardID = document.querySelector("#cardID")
    inputCardID.value = cardID;

    const selectBolsa = document.querySelector("#editBolsa");
    const option = selectBolsa.querySelector(`option[value=${bolsa}]`);
    option.setAttribute("selected", true)

    const inputValor = document.querySelector("#editValor");
    inputValor.value = valor;

    const inputAtivos = document.querySelector("#editAtivos");
    inputAtivos.value = ativos;

    openModal("#edit");
}

