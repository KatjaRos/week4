const submitBtn = document.getElementById("submit-data")
const input = document.getElementById("input-show")
const container = document.querySelector(".show-container")

submitBtn.addEventListener("click", async () => {
    const query = input.value.trim()
    container.innerHTML="";
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=better%20call%20saul`);
    const data = await response.json();
    
    data.forEach(item => {
        const show = item.show;
        const showDiv = document.createElement('div');
        showDiv.classList.add('show-data');
        const img = document.createElement('img');
        img.src = show.image ? show.image.medium : "";
        img.alt = show.name;

        const infoDiv = document.createElement('div')
        infoDiv.classList.add('show-info');

        const title = document.createElement('h1');
        title.textContent = show.name;

        const summary = document.createElement('div');
        summary.innerHTML = show.summary 

        infoDiv.appendChild(title);
        infoDiv.appendChild(summary);
        showDiv.appendChild(img);
        showDiv.appendChild(infoDiv);
        container.appendChild(showDiv);

    });

});