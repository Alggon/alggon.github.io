const repoList = ["LSBL", "Portalized", "Project-Alterity", "alggon.github.io", "Project-Waves"];

function CreateCard(repoName) {
    const card = document.createElement('article');
    card.className = 'projectCard';
    card.dataset.repo = repoName;

    card.innerHTML = `
        <h3 class ="title">Loading...</h3>
        <p class ="description">Loading...</p>
        <a href="#" class="button">Github link <i class="fa-sharp fa-solid fa-code-branch"></i></a>
    `;

    return card;
}

const container = document.querySelector('#projectDiv');

repoList.forEach(repoName => {
    const card = CreateCard(repoName);
    container.appendChild(card);
    LoadProject(card);
});

async function LoadProject(card) {
    const repoName = card.dataset.repo;

    const response = await fetch(`https://api.github.com/repos/Alggon/${repoName}`);

    const datas = await response.json();

    card.querySelector('h3').textContent = datas.name;
    description = datas.description;

    card.querySelector('.description').textContent = description ? description : "No description.";

    const githubLink = card.querySelector('.button');
    githubLink.href = `https://github.com/Alggon/${repoName}`;
}

const burgerBtn = document.querySelector('#burgerButton');
const burgerContent = document.querySelector('#contactBurger');

burgerBtn.addEventListener('mouseover', () => {
    burgerContent.classList.toggle('open');
});