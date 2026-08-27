async function loadGames() {
    const response = await fetch('docs/GamesData.json');
    const games = await response.json();

    const container = document.querySelector('#gamesGrid');

    games.forEach(element => {
        const article = createGameCard(element);
        container.appendChild(article);
    });
}

loadGames();

function createGameCard(card)
{
    const article = document.createElement('div');
    article.className = 'gameCard';

    article.innerHTML = `
    <div class="content">
    <h3>${card.title}</h3>
    <p>Description : ${card.description}</p>
    <p class="roleText">Role(s) : ${card.role}<p>
    </div>
    <iframe width=480 height=270 src="${card.link}" frameborder=0 allowfullscreen></iframe>
    `;

    return article;
}