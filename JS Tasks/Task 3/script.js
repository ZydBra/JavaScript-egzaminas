/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

function getData () {
    fetch(ENDPOINT)
        .then(res => res.json())
        .then(data => {
            ShowUsers(data)
        })
        .catch(error => {
            alert(error)
        })
};

function ShowUsers(data) {
    document.getElementById('message').remove();
    data.forEach(entry => {
        const outputDiv = document.getElementById('output');
        const userDiv = document.createElement('div');
        const userLogin = document.createElement('h3');
        const userUrl = document.createElement('img');
        outputDiv.append(userDiv);
        userDiv.className = "user_div";
        userLogin.textContent = entry.login;
        userUrl.src = entry.avatar_url;
        userUrl.alt = "User " + entry.login + " picture"; 
        userDiv.append(userLogin, userUrl)
    });
}

document.getElementById('btn').addEventListener('click', getData);
