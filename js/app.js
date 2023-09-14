// load AI data
const loadAiData = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
        const data = await res.json();
        displayAiData(data.data.tools)
    } catch (error) {
        console.log(error)
    }
}
//display Ai Data
const displayAiData = (ais) => {
    const aisContainer = document.getElementById('ais-container');

    ais.forEach(ai => {
        const { name, image, features, published_in } = ai;
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
                                <button class="rounded-circle  text-danger"><i
                                        class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
            </div>
        `
        aisContainer.appendChild(aiDiv)
        //console.log(ai)
        console.log(features)
    });
}
loadAiData()