const endpoint ='https://data.humdata.org/dataset/e66dbc70-17fe-4230-b9d6-855d192fc05c/resource/83dba4b0-992f-4748-b037-4b55ecc0c3b4/download/nigeria_lga.json';

const lga = [];

// const res = fetch(endpoint);
// res.then( lgaToJson => lgaToJson.json()).then(extractLga => lga.push(extractLga));

fetch(endpoint)
  .then(lgaToJson => lgaToJson.json())
  .then(jsonData => {
    // Check if features exists and is an array
    if (jsonData.features && Array.isArray(jsonData.features)) {
      jsonData.features.forEach(feature => {
        // Extract NAME_1 and NAME_2 from properties
        const name1 = feature.properties.NAME_1;
        const name2 = feature.properties.NAME_2;
        
        // You can push these values into your 'lga' array
        lga.push({ NAME_1: name1, NAME_2: name2 });

        // log each pair
        // console.log(`State: ${name1}, LGA: ${name2}`);
      });
    } else {
      console.error('Invalid JSON structure: Expected an array in "features"');
    }
  })
  .catch(error => {
    console.error('Error fetching the data:', error);
  });


  function findMatches(wordsToMatch, lga) {
    return lga.filter(place => {
      const regex = new RegExp(escapeRegex(wordsToMatch), 'gi');
      return (place.NAME_1 && place.NAME_1.match(regex)) || (place.NAME_2 && place.NAME_2.match(regex));
    });
  }
  
  function escapeRegex(str) {
    return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'); // Escape special characters for regex
  }
  
  function displayMatches() {
    const searchedLga = searchInput.value.trim();
  
    if (searchedLga === '') {
      suggestion.innerHTML = ''; // Clear suggestions if input is empty
      return;
    }
  
    const searchLga = findMatches(searchedLga, lga);
    const html = searchLga.map(find => {
      const regex = new RegExp(escapeRegex(searchedLga), 'gi');
      const highlightMatchedLga = find.NAME_1.replace(regex, `<span class='hl'>${searchedLga}</span>`);
      const highlightMatchedState = find.NAME_2.replace(regex, `<span class='hl'>${searchedLga}</span>`);
  
      return `
        <li>
          <span class='name'>${highlightMatchedLga}, ${highlightMatchedState}</span>
        </li>
      `;
    }).join('');
  
    suggestion.innerHTML = html;
  }
  
  const searchInput = document.querySelector('.search');
  const suggestion = document.querySelector('.suggestions');
  
  searchInput.addEventListener('keyup', displayMatches);
  

