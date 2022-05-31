"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function listPokemons() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        const pokemons = yield response.json();
        let random1 = Math.floor(Math.random() * 1120);
        let list = [];
        for (var i = 0; i < 6; i++) {
            let names = pokemons.results[random1].name;
            random1 = random1 + 1;
            list.push(names);
        }
        let img1 = document.getElementById('img1');
        img1.setAttribute('alt', list[0]);
        let img2 = document.getElementById('img2');
        img2.setAttribute('alt', list[1]);
        let img3 = document.getElementById('img3');
        img3.setAttribute('alt', list[2]);
        let img4 = document.getElementById('img4');
        img4.setAttribute('alt', list[3]);
        let img5 = document.getElementById('img5');
        img5.setAttribute('alt', list[4]);
        let img6 = document.getElementById('img6');
        img6.setAttribute('alt', list[5]);
        let dev1 = document.getElementById('name1');
        dev1.innerHTML = list[0];
        let dev2 = document.getElementById('name2');
        dev2.innerHTML = list[1];
        let dev3 = document.getElementById('name3');
        dev3.innerHTML = list[2];
        let dev4 = document.getElementById('name4');
        dev4.innerHTML = list[3];
        let dev5 = document.getElementById('name5');
        dev5.innerHTML = list[4];
        let dev6 = document.getElementById('name6');
        dev6.innerHTML = list[5];
        const res1 = yield fetch(`https://pokeapi.co/api/v2/pokemon/${list[0]}`);
        const pokemon1 = yield res1.json();
        const res2 = yield fetch(`https://pokeapi.co/api/v2/pokemon/${list[1]}`);
        const pokemon2 = yield res2.json();
        const res3 = yield fetch(`https://pokeapi.co/api/v2/pokemon/${list[2]}`);
        const pokemon3 = yield res3.json();
        const res4 = yield fetch(`https://pokeapi.co/api/v2/pokemon/${list[3]}`);
        const pokemon4 = yield res4.json();
        const res5 = yield fetch(`https://pokeapi.co/api/v2/pokemon/${list[4]}`);
        const pokemon5 = yield res5.json();
        const res6 = yield fetch(`https://pokeapi.co/api/v2/pokemon/${list[5]}`);
        const pokemon6 = yield res6.json();
        img1.setAttribute('src', pokemon1.sprites.front_default);
        img2.setAttribute('src', pokemon2.sprites.front_default);
        img3.setAttribute('src', pokemon3.sprites.front_default);
        img4.setAttribute('src', pokemon4.sprites.front_default);
        img5.setAttribute('src', pokemon5.sprites.front_default);
        img6.setAttribute('src', pokemon6.sprites.front_default);
    });
}
window.addEventListener("load", function () {
    listPokemons();
});
