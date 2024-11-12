

//1
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

//2
const cities = [];

//3
//fecthing the resource using fetch API
const res = fetch(endpoint);
// console.log(res);

//4
res.then(cityExtract => cityExtract.json())
.then(data => cities.push(...data));

//5
//function to search for city names and wordsTomatch
function findMatches(wordsTomatch, cities){
return cities.filter(place => {

    //using regwx to match the desire names of city or woed
    const regex = new RegExp(wordsTomatch, 'gi');
    //we  are filtering through array of objects. we have city and state properties
    return place.city.match(regex) || place.state.match(regex);
})
}

//8
function displayMatches(){
    // console.log(this)
    const searchCities = findMatches(this.value, cities);
    // console.log(searchCities);
    const html = searchCities.map( find => {

        //9  
        //highlighting the words that matches search wordss
        const regex = new RegExp(this.value, 'gi')
        const highlightMatchedCity = find.city.replace(regex, `<span class='hl'>${this.value}</span>`); 
        const highlightMatchedState = find.state.replace(regex, `<span class='hl'>${this.value} </span>`) ; 
      return  `
        <li>
        <span class='name'>${highlightMatchedCity}, ${highlightMatchedState}</span>
        <span class='population'>${find.population}</span>
        </li>
        `
    }).join('');

      suggestion.innerHTML = html;
}

//6
const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

//7
// searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);