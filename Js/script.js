
const getData = async ()=>{
    const response = await fetch('https://fakestoreapi.com/products?limit=8')
    const data = await response.json()
    

    return data;
    
};

getData().then((fetchedData) =>{
    let results = "";
    fetchedData.map((clothes) =>{
        results += `
        <div class="card1">
        <div class="image-section">
            <img src=${clothes.image} alt="">
        </div>
        <div class="details">
         <h4 class="title">${clothes.title.slice(0, 12)}</h4>
        <p>${clothes.description.slice(0,47)}..</p>
        <h5 class='price'>$${clothes.price}</h5>
        </div>
    </div>
        `
    })
    document.getElementById('main').innerHTML = results
})