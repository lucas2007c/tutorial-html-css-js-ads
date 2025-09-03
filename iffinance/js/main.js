const modal = document.querySelector(".modal")
const cardStock = document.querySelector("#card-stock")

function openModal() {
    modal.style.display = "flex"
}

function closeModal() {
    modal.style.display = "none"
}

function addTicker(event) {
    event.preventDefault();
    const ticker = event.target.ticker.value;
    const bolsa = event.target.bolsa.value;
    const valor = event.target.valor.value;
    const ativos = event.target.ativos.value;

    const total = valor * ativos;

    const card = `
        <div class="card">
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
        </div>
    `

    cardStock.innerHTML += card
    closeModal()
}