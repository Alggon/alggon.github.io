function createResume()
{
    const response = fetch('docs/Resume.txt')
    .then((res) => res.text())
    .then((text) => {
        const container = document.querySelector("#resume");
    
        const resumeText = document.createElement('p')
        
        resumeText.className = 'resumeText';
    
        resumeText.innerHTML = `
        <p>${text}</p>
        `;
    
        container.appendChild(resumeText);
    });
}

createResume();