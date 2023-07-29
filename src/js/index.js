
import axios from "axios";
import { fetchBreeds, fetchCatByBreed } from "../js/cat-api"

axios.defaults.headers.common["x-api-key"] = "live_PNR13y21QiKW1koHf2WRQD6nqfrvsSKqfg3KNt4285JhnbWOCJ2I75hAjyoX0v2S";

const select = document.querySelector(".breed-select")
const catInfo = document.querySelector(".cat-info")
const loader = document.querySelector('.loader')
const error = document.querySelector('.error')

select.addEventListener("change", onSelectChange)
  loader.classList.remove('is-hidden');
    // select.classList.add('is-hidden');
      error.classList.remove('is-hidden')

function createCatList() {
    
    loader.classList.remove('is-hidden');
    // select.classList.add('is-hidden');
    error.classList.add('is-hidden')

    //обробляємо результат запиту на бекенд (всі породи котів)
    fetchBreeds()
        .then(data => {
         console.log(data);
            const optionsList = data.map(({ id, name }) => ` <option value="${id}">${name}</option>`
            ).join(' ');
            
            select.innerHTML = optionsList;
            console.log(select);

           
            // Отримали дані успішно, ховаємо лоадер показуємо селект
            loader.classList.add('is-hidden');
            // select.classList.remove('is-hidden')
        })
        .catch(error => {
            console.log(error)
           
        });
};

createCatList();



function onSelectChange(event) {
    loader.classList.remove('is-hidden');
    // catInfo.classList.add('is-hidden');

    const selectedBreedId = event.currentTarget.value;
    console.log(selectedBreedId);

    fetchCatByBreed(selectedBreedId)
        .then(data => {
            markup(data);
            loader.classList.add('is-hidden');
             catInfo.classList.remove('is-hidden');
        })
        .catch(error => {
        // loader.classList.add('is-hidden');
           console.log('Oops! Something went wrong! Try reloading the page!')
        });
}

function markup(data) {
    const { breeds, url } = data[0];
    const { name, temperament, description } = breeds[0];
    const beerdCard = `<img class="pfoto-cat" width = "300px" src="${url}" alt="${name}">
    <div class="text-part">
  <h2 class="name-cat">${name}</h2>
  <p class="deskr-cat">${description}</p>
  <p class="temperament-cat"><span class="temperament-label">Temperament:</span> ${temperament}</p>  </div>`;

    catInfo.innerHTML = beerdCard;

}


//   <h2 class="breed_name"></h2>
//  <p class="breed_description"></p>
//  <p class="breed_temperament"></p> 




// <<p>
//   Selected option text: <span class="text-output">none</span>
// <p>
// <p>
//   Selected option value: <span class="value-output">none</span>
// <p> 

//   <select class="pizza-select">
//     <option value="four_meats">Four Meats</option>
//     <option value="royal_cheese">Royal Cheese</option>
//     <option value="vegetarian">Vegetarian</option>
//     <option value="smoked_salmon">Smoked Salmon</option>
//   </select> 
