const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
     'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const ULElement = document.getElementById('bands');

// Function to remove leading articles
function removeArticles(str) {
    const articles = /^(a|an|the)\s+/i;
    return str.replace(articles, '');
  }
  
  // Sort the bands while ignoring leading articles
  const sortedBands = bands.slice().sort((a, b) => {
    const aWithoutArticle = removeArticles(a);
    const bWithoutArticle = removeArticles(b);
    return aWithoutArticle.localeCompare(bWithoutArticle); 
  });
  
  sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    ULElement.appendChild(li);
  });