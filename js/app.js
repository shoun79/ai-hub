const loadAiData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools')
    const data = await res.json();

}

loadAiData()