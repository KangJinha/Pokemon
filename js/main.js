const listaPokemon = document.querySelector("#listaPokemon");

let URL = "https://pokeapi.co/api/v2/pokemon-species/";

for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
        .then((res) => res.json())
        .then((data) => mostrarPokemon(data));
}
//fetch로 가져온데이타를 mostrarPokemon함수로 가져온다
function mostrarPokemon(poke) {
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#025</p>
        <div class="class pokemon-imagen">
            <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                alt="Pikachu"
            />
        </div>
        <div class="pokemon-info">
            <div class="nombre-contenedor">
                <p class="pokemon-id">#025</p>
                <h2 class="pokemon-nombre">${poke.names[2].name}</h2>
            </div>
            <div class="pokemon-tipos">
                <p class="electric tipo">ELECTRIC</p>
                <p class="fighting tipo">FIGHTING</p>
            </div>
            <div class="pokemon-stats">
                <p class="stat">4M</p>
                <p class="stat">60KG</p>
            </div>
        </div>
    `;
    listaPokemon.append(div);
}

/* <div class="pokemon">
    <p class="pokemon-id-back">#025</p>
    <div class="class pokemon-imagen">
        <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            alt="Pikachu"
        />
    </div>
    <div class="pokemon-info">
        <div class="nombre-contenedor">
            <p class="pokemon-id">#025</p>
            <h2 class="pokemon-nombre">피카츄</h2>
        </div>
        <div class="pokemon-tipos">
            <p class="electric tipo">ELECTRIC</p>
            <p class="fighting tipo">FIGHTING</p>
        </div>
        <div class="pokemon-stats">
            <p class="stat">4M</p>
            <p class="stat">60KG</p>
        </div>
    </div>
</div> */
