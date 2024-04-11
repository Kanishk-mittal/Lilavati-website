document.addEventListener('DOMContentLoaded', function() {
    const markdownContentDiv = document.getElementById('lilavati_description');
    const markdownFilePath = 'https://raw.githubusercontent.com/Project-Leelavati/Leelavati/main/README.md'; // Replace with your Markdown file URL


    fetch(markdownFilePath)
        .then(response => response.text())
        .then(markdownText => {
            const converter = new showdown.Converter();
            const html = converter.makeHtml(markdownText);
            markdownContentDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading Markdown file:', error);
        });
});
