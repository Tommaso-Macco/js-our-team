// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
// - Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.



// Collego dove andranno a stamparsi le carte nell'html
const containerStampa = document.querySelector(".team-container")
console.log(containerStampa);

// Creo un array di oggetti per mettere le carte base e dopo quelli che verranno aggiunti

let baseTeam = [
    {
        "img" : "img/wayne-barnett-founder-ceo.jpg", 
        "nome" : "Wayne Barnett",
        "lavoro" : "Founder & CEO"
    },
    {
        "img" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Angela Caroll",
        "lavoro" : "chief editor" 
    },
    {
        "img" : "img/angela-lopez-social-media-manager.jpg",
        "nome" : "angela Lopez",
        "lavoro" :"Social Media Manager"
    },
    {
        "img" : "img/barbara-ramos-graphic-designer.jpg",
        "nome" : "Barbara Ramos",
        "lavoro" : "Graphic Designer"
    },
    {
        "img" : "img/scott-estrada-developer.jpg",
        "nome" : "Scott Estrada",
        "lavoro" : "Developter"
    },
    {
        "img" : "img/walter-gordon-office-manager.jpg",
        "nome" : "Walter Gordon",
        "lavoro" : "Office Manager"
    }
]
console.log(baseTeam);

// Creo la funzione per aggiungere un membro
// Collego il bottone
let button = document.getElementById("addMemberButton")
// aggiungo alla lista eventi il click
button.addEventListener("click",
// Creo la funzione
function addMemberFunction() {
    // prendo i valori dai vari input nell'html
    let nameCard = document.getElementById("name").value;
    let roleCard = document.getElementById("role").value;
    let imgCard = document.getElementById("image").value;
    
    // creo una array dove metto i value dell'html
    let newCard = {
        "nome" : nameCard,
        "lavoro" : roleCard,
        "img" : imgCard,
    }
    // pusho la nuova carta nell'array degli oggetti creato all'inzio
    baseTeam.push(newCard);
    console.log(baseTeam);

}
);


// Creo la funzione per stampare le carte nell'html sia quelle vecchie che nuove

