//1. //MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

const teamMembers = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      foto: 'angela-caroll-chief-editor.jpg'
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'walter-gordon-office-manager.jpg'
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: 'scott-estrada-developer.jpg'
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'barbara-ramos-graphic-designer.jpg'
    }
  ];




//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto (in questo fase usiamo il ciclo for…in )

for (let member in teamMembers) {
  console.log(`Nome: ${teamMembers[member].nome}, Ruolo: ${teamMembers[member].ruolo}, Foto: ${teamMembers[member].foto}`);
}

//MILESTONE 2:
//Stampare le stesse informazioni su DOM sotto forma di stringhe. Metodo document.createElement() per creare un nuovo elemento HTML per ogni membro  + metodo document.appendChild() per aggiungere
const teamContainer = document.getElementById('team-container');

for (let member in teamMembers) {
  const memberDiv = document.createElement('div');
  const nomeP = document.createElement('p');
  const ruoloP = document.createElement('p');
  const fotoImg = document.createElement('img');

  nomeP.textContent = `Nome: ${teamMembers[member].nome}`;
  ruoloP.textContent = `Ruolo: ${teamMembers[member].ruolo}`;
  fotoImg.src = teamMembers[member].foto;

  memberDiv.appendChild(nomeP);
  memberDiv.appendChild(ruoloP);
  memberDiv.appendChild(fotoImg);

  teamContainer.appendChild(memberDiv);
}


