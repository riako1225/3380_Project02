const contacts = document.getElementsByClassName('contact-item');
const element = document.getElementsByClassName('contact-item');
const pagination_element = document.getElementById('paginiation');

let displayItem = contacts[0].style.display;
for(i=0; i<=10;i++){
    element.innerText = contacts[i];
}



const current_page = 1;
const rows = 10;

function DisplayList(items, wrapper, rows_per_page, page){
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    console.log(paginatedItems);
    for(let i = 0; i < paginatedItems.length; i++){
        let item = paginatedItems[i];

        let item_element = document.createElement('div');
        item_element.classList.add('item');
        item_element.innerText = item;

        wrapper.appendChild(item_element);

    }
}


DisplayList(list_items, list_element, rows, current_page);
