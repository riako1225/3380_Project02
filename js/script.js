let contacts = document.getElementsByClassName('contact-item');
let displayState = contacts[0].style.display;

let page = document.getElementsByClassName('page');
let pageNumbers = document.createElement('ul');
pageNumbers.setAttribute('class', 'pagination');
pageNumbers.setAttribute('id', 'pagination');

window.display = [];

//////////////
//Functions///
//////////////

//Determines number of page #'s needed
function pagesNeeded(count){
  let pagesToCreate = Math.floor(count/10);
  if(count%10 != 0) {
    pagesToCreate += 1;
  };
  return pagesToCreate;
};

//Gets the range of names to display ('Names 0-10 or Names 30-40')
function displayRange(goToPage, dataSet) {
  if(dataSet === "disp") {
    var data = window.display;
  } else {
    var data = contacts;
  }
  if(goToPage == 1) {
    let min = 0;
    let max = 10;
    showHide(min, max, data);
  } else {
    let stringify = goToPage.toString() + "0";
    let min = parseInt(stringify) - 10;
    let max = parseInt(stringify);
    showHide(min, max, data)
  };
};

//Hides all students then displayes appropriate students
function showHide(min, max, data) {
  for(let i = 0; i < data.length; i++) {
    data[i].style.display = 'none';
  }
  for(let i = min; i < max; i++) {
    data[i].style.display = displayState;
  }
};


//Creates Pagination Links (Page numbers at bottom of screen);
function addPaginationLinks(contactLength , dataSet) {
  let paginationLinks = document.getElementById('pagination');
  if(paginationLinks != null) {
    paginationLinks.innerHTML = " ";
    page.remove(paginationLinks);
    // return;
  };
  let pagesToCreate = pagesNeeded(contactLength);
  for(let i = 1; i < pagesToCreate + 1; i+=1) {
    let numberToAdd = document.createElement('li');
    let pageNumberLink = document.createElement('a');
    pageNumberLink.innerHTML = i;
    let displayCall = 'displayRange(' + i + ',' + '\'' + dataSet + '\'' + ')';
    pageNumberLink.setAttribute('onClick', displayCall)
    pageNumberLink.setAttribute('href', '#')
    // numberToAdd.appendChild(pageNumberLink);
    // let pageNumber = pageNumbers.appendChild(numberToAdd);
  }
//   page.appendChild(pageNumbers);
  displayRange(1, dataSet);
};

//Adds pagination links and sets default view to 10 people
addPaginationLinks(contacts.length, 'stud');
displayRange(1, 'stud');
