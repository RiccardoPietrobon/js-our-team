// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//     MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const my_team = [

    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }

];


//     MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe

for (const user of my_team) {
    console.log("Nome: " + user.nome);
    console.log("Ruolo: " + user.ruolo);
    console.log("Foto: " + user.foto);

};


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card / schede

const portfolio = document.getElementById("box-card");

for (const user of my_team) {

    // portfolio.innerHTML += `
    // Username: ${user.nome}, <br>
    // Ruolo: ${user.ruolo}, <br>
    // Foto: ${user.foto}.
    // `

    portfolio.innerHTML += `
<div class="col-4 p-2">
    <div class="card" style="width: 18rem;">
        <img src="./img/${user.foto}" class="card-img-top" alt="foto_cv">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> Nome: <h2>${user.nome}</h2></li>
                <li class="list-group-item"> Ruolo: <h2>${user.ruolo}</h2></li>
            </ul>
    </div>
</div>
        `

}



