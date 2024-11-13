const endpoint ='https://data.humdata.org/dataset/e66dbc70-17fe-4230-b9d6-855d192fc05c/resource/83dba4b0-992f-4748-b037-4b55ecc0c3b4/download/nigeria_lga.json';

const lga = [];

const res = fetch(endpoint);
// res.then( lgaToJson => lgaToJson.json()).then(extractLga => lga.push(extractLga));


res.then(lgaToJson => lgaToJson.json())
   .then(jsonData => {
    //   console.log(jsonData.features);
      if (jsonData.features && Array.isArray(jsonData.features)) {
         lga.push(...jsonData.features); 
      } else {
         console.error('Invalid JSON structure: Expected an array named "lgas"');
      }
   });


   function findMatches(wordsTomatch, lga){
    return lga.filter(place => {
    
        //using regwx to match the desire names of Lga or woed
        const regex = new RegExp(wordsTomatch, 'gi');
        //we  are filtering through array of objects. we have Lga and state properties
        return place.NAME_1.match(regex) || place.NAME_2.match(regex);
    })
    }

function displayMatches(){
    console.log(this);

    const searchLga = findMatches(this.value, lga);
    console.log(searchLga);
    let searchedLga = this.value;
    const html = searchLga.map( find => {
        //10            ----check 
        if(searchedLga !== ''){
        //9  
        //highlighting the words that matches search words
        const regex = new RegExp(searchedLga, 'gi');
        const highlightMatchedLga = find.NAME_1.replace(regex, `<span class='hl'>${searchedLga}</span>`); 
        const highlightMatchedState = find.NAME_2.replace(regex, `<span class='hl'>${searchedState} </span>`); 
      return  `
        <li>
        <span class='name'>${highlightMatchedLga}, ${highlightMatchedState}</span>
        </li>
        `
    }
    //else {
    //     return `
    //     <li>
    //       <span class='name'>${find.Lga}, ${find.state}</span>
    //       <span class='population'>${find.population}</span>
    //     </li>
    //   `;
    // };
}).join('')
suggestion.innerHTML = html;
}


//6
const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

//7
// searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

