
const url = `https://api.thecatapi.com`;
const api_key = "live_PNR13y21QiKW1koHf2WRQD6nqfrvsSKqfg3KNt4285JhnbWOCJ2I75hAjyoX0v2S";
let storedBreeds = [];

fetch(`${url}/v1/breeds?_limit=5&_sort=name&limit=100`, {
    headers: {
        'x-api-key': api_key
    }
})
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    })
    .then((data) => {
   
        //filter to only include those with an `image` object
        data = data.filter(img => img.image?.url != null);
   
        storedBreeds = data;
   
        for (let i = 0; i < storedBreeds.length; i++) {
            const breed = storedBreeds[i];
            let option = document.createElement('option');
     
            //skip any breeds that don't have an image
            if (!breed.image) continue
     
            //use the current array index
            option.value = i;
            option.innerHTML = `${breed.name}`;
            document.getElementById('breed_selector').appendChild(option);
    
        };
        //show the first breed by default
        showBreedImage(9);
    })
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
    document.getElementById("breed_json").textContent = storedBreeds[index].temperament;
  

    document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url;
    document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url;
};
























// //  import axios from "axios";
// //   axios.defaults.headers.common["x-api-key"] = "live_PNR13y21QiKW1koHf2WRQD6nqfrvsSKqfg3KNt4285JhnbWOCJ2I75hAjyoX0v2S";

// // https://api.thecatapi.com/v1/breeds?api_key=live_PNR13y21QiKW1koHf2WRQD6nqfrvsSKqfg3KNt4285JhnbWOCJ2I75hAjyoX0v2S&breed_ids=1
// const url = 'https://api.thecatapi.com/v1/breeds';
// const api_key = "live_PNR13y21QiKW1koHf2WRQD6nqfrvsSKqfg3KNt4285JhnbWOCJ2I75hAjyoX0v2S";
// // const options = {
// //     headers: {'x-api-key':api_key},

// //     };

// //  function fetchBreeds(){
// fetch(`${url}?api_key=${api_key}&breed_ids=1`).then(response => {
//     console.log(response);

// });
// //     .then(breeds => {
// //         console.log(breeds);
    
// //     })
// //     .catch(error => {
// //         console.log(error); 
// //     });
// // };
// // fetchBreeds();