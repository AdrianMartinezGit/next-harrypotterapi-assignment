const getHarryPotterData = async () => {
    const promise = await fetch("https://potterhead-api.vercel.app/api/characters");
    const data = await promise.json();

    console.log(data);

    return data;
}

export default getHarryPotterData;