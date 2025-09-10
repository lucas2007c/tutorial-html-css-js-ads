const cardStock = document.querySelector("#card-stock")

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
                <h3>${ticker}</h3>
                <h3>${bolsa}</h3>
            </header>

            <main class="flexrow">
                <h1 class="positive">&#9650 U$${valor}</h1>
                <img src="./img/trending-up.svg">
            </main>

            <footer>
                <h3>Nº Ativos: ${ativos}</h3>
                <h3>U$${total}</p>
            </footer>

            <div class="actions">
                <button onclick="openEditCard(event)">Editar</button>
                <button onclick="deleteCard(event)">Excluir</button>
            </div>
        </div>
    `

    cardStock.innerHTML += card
    closeModal()
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
    const ticker = card.querySelector("#cardTicker").innerText;
    const bolsa = card.querySelector("#cardBolsa").innerText;
    const valor = card.querySelector("main h1 span").innerText;
    const ativos = card.querySelector("#cardAtivos").innerText;

    const inputTicker = document.querySelector("#editTicker");
    inputTicker.value = ticker;

    const inputCardID = document.querySelector("#cardID")
    inputCardID.value = ticker;

    const selectBolsa = document.querySelector("#editBolsa");
    const option = selectBolsa.querySelector(`option[value=${bolsa}]`);
    option.setAttribute("selected", true)

    const inputValor = document.querySelector("#editValor");
    inputValor.value = valor;

    const inputAtivos = document.querySelector("#editAtivos");
    inputAtivos.value = ativos;

    openModal("#edit");
}

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

    const cardTicker = cardEditing.querySelector("#cardTicker");
    cardTicker.innerText = ticker

    const cardBolsa = cardEditing.querySelector("#cardBolsa");

    const cardValor = cardEditing.querySelector("main h1 span");
    cardValor.innerText = valor

    const cardAtivos = cardEditing.querySelector("#cardAtivos");
    cardAtivos.innerText = ativos

    closeModal("#edit")
}