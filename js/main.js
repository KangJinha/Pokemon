const readyPokemon = document.querySelector("#readyPokemon");
const buttonsHeader = document.querySelectorAll(".btn-header");

let URL = "https://pokeapi.co/api/v2/pokemon/";
let URL2 = "https://pokeapi.co/api/v2/pokemon-species/";
//한국이름은 이걸로 가져와야하는데...
let pokeHead = 100;

for (let i = 1; i <= pokeHead; i++) {
    fetch(URL + i)
        .then((res) => res.json())
        .then((poke) => showPokemon(poke));
}

// for (let i = 1; i <= pokeHead; i++) {
//     fetch(URL2 + i)
//         .then((res) => res.json())
//         .then((data) => showPokemon(data));
// }

//fetch로 가져온데이타를 showPokemon함수로 가져온다
function showPokemon(poke) {
    let type = poke.types.map(
        (type) => `<p class="${type.type.name} type">${type.type.name}</p>`
    );
    type = type.join("");
    //array형식으로 되어있는것을 string로 변경!!

    let pokeId = poke.id.toString();
    if (pokeId.length === 1) {
        pokeId = "00" + pokeId;
    } else if (pokeId.length === 2) {
        pokeId = "0" + pokeId;
    }
    //pokeId 자리수맞춰주기
    const div = document.createElement("div");
    div.classList.add("pokemon");
    div.innerHTML = `
        <p class="pokemon-id-back">#${pokeId}</p>
        <div class="class pokemon-image">
            <img
                src="${poke.sprites.other["official-artwork"].front_default}"
                alt="${poke.name}"
            />
        </div>
        <div class="pokemon-info">
            <div class="name-container">
                <p class="pokemon-id">#${pokeId}</p>
                <h2 class="pokemon-name">
                ${poke.name}
                </h2>
            </div>
            <div class="pokemon-types">
                ${type}
            </div>
            <div class="pokemon-stats">
                <p class="stat">${poke.height}M</p>
                <p class="stat">${poke.weight}KG</p>
            </div>
        </div>
    `;
    readyPokemon.append(div);
}

buttonsHeader.forEach((btn) =>
    btn.addEventListener("click", (event) => {
        const btnId = event.currentTarget.id;
        console.log(btnId);
        readyPokemon.innerHTML = "";

        for (let i = 1; i <= pokeHead; i++) {
            fetch(URL + i)
                .then((res) => res.json())
                .then((data) => {
                    if (btnId === "all") {
                        showPokemon(data);
                    } else {
                        const types = data.types.map((type) => type.type.name);
                        if (types.some((type) => type.includes(btnId))) {
                            showPokemon(data);
                        }
                    }
                });
        }
    })
);
