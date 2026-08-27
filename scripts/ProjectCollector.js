const repoList = ["LSBL", "Portalized", "Project-Alterity"];

function CreateCard(repoName){
    const card = document.createElement('article');
    card.className = 'projectCard';
    card.dataset.repo = repoName;

    card.innerHTML = `
        <h3 class ="title">Loading...</h3>
        <p class ="description">Loading...</p>
        <a href="#" class="github-link">Github link</a>
    `;

    return card;
}

const container = document.querySelector('#projectDiv');

repoList.forEach(repoName => {
    const card = CreateCard(repoName);
    container.appendChild(card);
    LoadProject(card);
});

async function LoadProject(card){
    const repoName = card.dataset.repo;

    const response = await fetch(`https://api.github.com/repos/Alggon/${repoName}`);
    
    const datas = await response.json();

    card.querySelector('h3').textContent = datas.name;
    description = datas.description;

    card.querySelector('.description').textContent = description ? description : "No description.";

    const githubLink = card.querySelector('.github-link');
    githubLink.href = `https://github.com/Alggon/${repoName}`;
}