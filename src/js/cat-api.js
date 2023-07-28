import axios from "axios";

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
    return axios.get(`${BASE_URL}/breeds`)
        .then(response => {
            console.log(response.data);
            // повертаємо  дані з response.data( Axios автоматично розпізнає JSON-дані)
            return response.data;
           
        })
        .catch(error => {

            throw new Error("Помилка запиту:", error.message);
        });

}


function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
        .then(response => {
            console.log(response.data);
            // повертаємо  дані з response.data( Axios автоматично розпізнає JSON-дані)
            return response.data;
        })
        .catch(error => {

            throw new Error("Помилка запиту:", error.message);
        });

  }

export { fetchBreeds, fetchCatByBreed };





// ===========================================
// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");
// const valueOutput = document.querySelector(".value-output");

// setOutput();

// select.addEventListener("change", setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
  
//   console.log( select.value);
//   const selectedOptionIndex = select.selectedIndex;
//   console.log( select.selectedIndex);
//   const selectedOptionText = select.options[selectedOptionIndex].text;
//   console.log(select.options[selectedOptionIndex].text);

//   textOutput.textContent = selectedOptionText;
  
//   valueOutput.textContent = selectedOptionValue;
// }
