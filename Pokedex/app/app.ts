
async function listPokemons(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const pokemons = await response.json();  
    let random1 = Math.floor(Math.random() * 1120);
    let list=[];
    for(var i=0; i<6;i++){

        let names = pokemons.results[random1].name;
        random1 =random1+1;
        list.push(names);
    }

    let img1 = document.getElementById('img1');
    img1!.setAttribute('alt', list[0]);
    let img2 = document.getElementById('img2');
    img2!.setAttribute('alt', list[1]);
    let img3 = document.getElementById('img3');
    img3!.setAttribute('alt', list[2]);
    let img4 = document.getElementById('img4');
    img4!.setAttribute('alt', list[3]);
    let img5 = document.getElementById('img5');
    img5!.setAttribute('alt', list[4]);
    let img6 = document.getElementById('img6');
    img6!.setAttribute('alt', list[5]);
    
    let dev1 = document.getElementById('name1');
    dev1!.innerHTML = list[0];
    let dev2 = document.getElementById('name2');
    dev2!.innerHTML = list[1];
    let dev3 = document.getElementById('name3');
    dev3!.innerHTML = list[2];
    let dev4 = document.getElementById('name4');
    dev4!.innerHTML = list[3];
    let dev5 = document.getElementById('name5');
    dev5!.innerHTML = list[4];
    let dev6 = document.getElementById('name6');
    dev6!.innerHTML = list[5];
    
    const res1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${list[0]}`);
    const pokemon1 = await res1.json();
    const res2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${list[1]}`);
    const pokemon2 = await res2.json();
    const res3 = await fetch(`https://pokeapi.co/api/v2/pokemon/${list[2]}`);
    const pokemon3 = await res3.json();
    const res4 = await fetch(`https://pokeapi.co/api/v2/pokemon/${list[3]}`);
    const pokemon4 = await res4.json();
    const res5 = await fetch(`https://pokeapi.co/api/v2/pokemon/${list[4]}`);
    const pokemon5 = await res5.json();
    const res6 = await fetch(`https://pokeapi.co/api/v2/pokemon/${list[5]}`);
    const pokemon6 = await res6.json();

    
    img1!.setAttribute('src', pokemon1.sprites.front_default);
    img2!.setAttribute('src', pokemon2.sprites.front_default);
    img3!.setAttribute('src', pokemon3.sprites.front_default);
    img4!.setAttribute('src', pokemon4.sprites.front_default);
    img5!.setAttribute('src', pokemon5.sprites.front_default);
    img6!.setAttribute('src', pokemon6.sprites.front_default);
}

window.addEventListener("load",function(){
    listPokemons();
});



