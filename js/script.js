
const infoPoke = document.getElementsByClassName("pokemon-form");
const selectPok = document.getElementById("pokemon-select");
const infoclick = document.getElementById("get-pokemon");
const pokeInfo = document.getElementById("pokemon-info");
 




 
const infoAnimal= () => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
     .then((response) =>{
        if(!response.ok){
            throw new Error('not working')
        };
         
        return response.json();
        
     })
      .then((data) =>{
        console.log(data)
        displayInfo(data);
    
      })
      .catch(() => {
        //console.error('problema api')
      })

};



infoclick.addEventListener('click', infoAnimal => {
    





})




let displayInfo = (pokemon) =>{

    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    console.log('name of profile' + pokemon.name);
     selectPok.appendChild(card);


     card.innerHTML= `
     <img scr=" ${pokemon.sprites.front_shiny}"/>
     <h2> Name: ${pokemon.name}<h2>
     <p> Species: ${pokemon.types[1].type.name}<p>
     <p> Height: ${pokemon.height}<p>
     <p> Weight :${pokemon.weight}<p>
     
     `
     
pokeInfo.appendChild(card);

};












