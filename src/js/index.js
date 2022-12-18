
const btn = document.querySelector("button")
const imgDiv = document.querySelector("#img-article")
btn.addEventListener('click', ()=> {
    const country = document.querySelector('#country').value.toLowerCase();
    if (document.querySelector("article")) {
        document.querySelectorAll("article").forEach((article) => { article.remove() })
    }
    getCountryData(country)
})

const getCountryData = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const countries = await res.json()
    let name = countries[0].name.common.toLowerCase();
    const data = countries[0]
    if (name === country)
    {const html = `
        <article class="country">
            <img class="" src="${data.flags.png}" />
            <div class="mt-2">
            <p class=""><span>Continent :</span>${data.continents}</p>
            <p class=""><span>Name :</span>${data.name.common}</p>
            <p class=""><span>Population :</span>${(data.population /10000000)
            .toFixed(2)} crore</p>
            <p class=""><span>Capital :</span>${data.capital}</p>
            </div>
            <p class="flex">Coat of Arms :<img class="w-6 m-2" src="${data.coatOfArms.png}" /></p>
        </article>
     `;
imgDiv.insertAdjacentHTML('beforeend', html);}


}

