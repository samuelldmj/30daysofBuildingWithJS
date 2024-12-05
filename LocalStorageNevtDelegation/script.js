const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

//11 parse on page load
const items = JSON.parse(localStorage.getItem('items')) || [];

//1  create and Add fucntion to event listner
function addItem(e){
    console.log('hello');

    //2 prevent page from refreshing
    e.preventDefault();

    //4 text to extract the input the user has typed into it.
    const text = (this.querySelector('[name = item]')).value;

    //3 create an object
    const item = {
        text : text,
        done :  false
    };

    console.log(item);
 
    //6 put it in the items array
    items.push(item);

    //8 calling the htmlElement renderer
    htmlListRenderer(items, itemsList);

    //10 saving into localstorage
    localStorage.setItem('items', JSON.stringify(items));

    //5 clean the form input field
    this.reset();
}


//7 create the html of items
//first parameter is for the items saved in the array. 
//second parameter is the html container to render the items into
function htmlListRenderer(items = [], htmlListElement){
htmlListElement.innerHTML = items.map((item, i) => {
     //9  create input element and  adding all these attributes into the input element
     return `
            <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
            <label for="item${i}">${item.text}</label>
            </li>
            `
}).join('');
}

//14
function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    htmlListRenderer(items, itemsList);
}

//0
addItems.addEventListener('submit', addItem);

//13 
itemsList.addEventListener('click', toggleDone);

//12 call on page load
htmlListRenderer(items, itemsList);


//make a button to uncheck all and check all. the changes should reflect on local storage.