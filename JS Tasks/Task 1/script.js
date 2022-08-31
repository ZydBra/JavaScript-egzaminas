/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
function convertWeight(e) {
    e.preventDefault();
    const inputKg = document.getElementById('search').value;
    const outputDiv = document.getElementById('output');
    const outputLb = document.createElement("p");
    const outputGr = document.createElement("p");
    const outputOz = document.createElement("p");
    const kg = Number(inputKg);
    const lb = kg * 2.2046.toFixed(0);
    const gr = kg / 0.0010000;
    const oz = kg * 35.274.toFixed(0);
    outputLb.innerText = "Weight in lb: "+lb + ";";
    outputGr.innerText = "Weight in g: "+gr + ";";
    outputOz.innerText = "Weight in oz: "+oz +".";
    outputDiv.append(outputLb, outputGr, outputOz);
    outputDiv.style.backgroundColor = "#f7f7f7";
  }

document.getElementById('submit-btn').addEventListener('click', convertWeight);
