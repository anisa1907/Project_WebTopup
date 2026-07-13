const API_URL = "http://localhost:5000/api/games";

async function loadGames() {

    const status = document.getElementById("status");
    const gameList = document.getElementById("game-list");

    // Loading
    status.textContent = "Loading data game...";

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Gagal mengambil data");
        }

        const games = await response.json();

        // Success
        status.textContent = "Data berhasil dimuat.";
        gameList.innerHTML = "";

        games.forEach(game => {

            gameList.innerHTML += `
                <div class="card">
                    ${game.name}
                </div>
            `;

        });

    } catch (error) {

        // Error
        status.textContent =
            "Backend belum tersedia. Menampilkan data sementara.";

        gameList.innerHTML = `
            <div class="card">Mobile Legends</div>
            <div class="card">Free Fire</div>
            <div class="card">PUBG Mobile</div>
        `;

        console.error(error);

    }

}

loadGames();