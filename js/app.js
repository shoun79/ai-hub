// load AI data
const loadAiData = async (dataLimit) => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
        const data = await res.json();
        displayAiData(data.data.tools, dataLimit)
    } catch (error) {
        console.log(error)
    }
}
//display Ai Data
const displayAiData = (ais, dataLimit) => {
    const aisContainer = document.getElementById('ais-container');
    aisContainer.textContent = '';
    if (dataLimit) {
        ais = ais.slice(0, 6);
    }
    ais.forEach(ai => {
        const { name, image, features, published_in, id } = ai;
        const aiDiv = document.createElement('div');
        aiDiv.classList.add('col');
        aiDiv.innerHTML = `
            <div class="card p-4">
            <img height="250px" src="${image ? image : "https://i.ibb.co/g9CSkZQ/image.png"}"  alt="NO IMAGE FOUND">
                <div class="card-body">
                    <h5 class="card-title">Features</h5>
                    <ol class="p-0 ps-3">
                        <li> ${features[0]}</li>
                        <li> ${features[1]}</li>
                        <li> ${features[2]}</li>
                    </ol>

                </div>
                <div class="card-footer d-flex justify-content-between align-items-center">
                            <div>
                                <h4>${name}</h4>
                                <h6><i class="fa-solid fa-calendar-days"></i> ${published_in}</h6>
                            </div>
                            <div>
                                <button onclick="${loadAisDetails(id)}" class="rounded-circle text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"><i
                                        class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
            </div>
        `
        aisContainer.appendChild(aiDiv)
        //console.log(ai)


    });
    toggleSpinner(false) //stop spinner
}

//load all ais data
const loadAllData = (dataLimit) => {
    toggleSpinner(true) //start spinner
    loadAiData(dataLimit)
    document.getElementById('see-more').style.display = 'none';

}

//see more ais
document.getElementById('see-more').addEventListener('click', function () {
    loadAllData();
});

// spinner toggler function
const toggleSpinner = isLoading => {
    const spinner = document.getElementById('spinner');
    if (isLoading) {
        spinner.classList.remove('d-none')
    }
    else {
        spinner.classList.add('d-none')
    }
}

//load Ais Details
const loadAisDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
        .then(res => res.json())
        .then(data => console.log(data.data))
}

loadAiData(6)