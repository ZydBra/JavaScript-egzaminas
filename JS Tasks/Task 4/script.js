/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => {
            ShowCars(data)
        })
        .catch(error => {
            alert(error)
        });

function ShowCars(data) {
    data.forEach(entry => {
        const outputDiv = document.getElementById('output');
        const producerDiv = document.createElement('div');
        const brand = document.createElement('h1');
        const models = document.createElement('p');
        outputDiv.append(producerDiv);
        producerDiv.className = "producer_div";
        brand.textContent = entry.brand;
        models.textContent = entry.models.join(", ") + ".";
        producerDiv.append(brand, models)
    });
}
