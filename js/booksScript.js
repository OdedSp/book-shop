'use strict';
console.log('Book Shop');

var gBooks = [
    {
        id: 'sandman1',
        name: 'Sandman vol.1',
        price: 90,
        desc: 'The first installment in Neil Gaiman\'s groundbreaking graphic novel series',
        rating: 8,
        likeCount: 0,
        dislikeCount: 0
    },
    {
        id: 'maus',
        name: 'MAUS',
        price: 180,
        desc: 'A shattering graphic novel by Art Spiegelman about the holocaust, based on the testimony of the artist\'s father.',
        rating: 8,
        likeCount: 0,
        dislikeCount: 0
    },
    {
        id: 'ronin',
        name: 'Ronin',
        price: 60,
        desc: 'honestly it\'s like \'meh\'',
        rating: 6,
        likeCount: 0,
        dislikeCount: 0
    },
    {
        id: 'sandman2',
        name: 'Sandman vol.2',
        price: 90,
        desc: 'Dive even deeper into the world of Neil Gaiman\'s Sandman',
        rating: 8,
        likeCount: 0,
        dislikeCount: 0
    },
];

function renderBooks() {
    var strHtml = ''
    for (var i = 0; i < gBooks.length; i++) {
        var currBook = gBooks[i];
        strHtml += `
        <div class="col-sm-4">
        <div class="panel panel-primary">
          <div class="panel-heading"> ${ currBook.name } </div>
          <div class="panel-body"><img src="img/${currBook.id}.jpg" class="img-responsive cover-preview" style="width:100%" alt="${currBook.name} cover"></div>
          <div class="panel-footer">Only ${ currBook.price }₪!
          <button type="button" class="btn btn-info" data-toggle="modal" data-target="#modal${i}">Read</button>
          <button type="button" class="btn btn-primary" onclick="updateBook(${i})">Update</button>
          <button type="button" class="btn btn-default" onclick="deleteBook(${i})">Delete</button>
          </div>
        </div>
      </div>
    </div>
        `
    }
    document.querySelector('#catalog').innerHTML = strHtml;
}

function renderModals() {
    var strHtml = ''
    for (var i = 0; i < gBooks.length; i++) {
        var currBook = gBooks[i];
        strHtml += `
        <div class="col-sm-4">
        <div class="modal fade" id="modal${i}" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">${currBook.name}</h4>
            </div>
            <div class="modal-body">
            <img src="img/${currBook.id}.jpg" class="img-responsive" style="width:100%" alt="${currBook.name} cover">
            <hr>  
            <p>${currBook.desc}</p>
            <br>
            <p>WHAMMY's rating: ${currBook.rating}</p>
            <button type="button" class="btn btn-success" onclick="upLike(this, ${i})">&#128077; <p class="vote-up">${currBook.likeCount}</p></button>
            <button type="button" class="btn btn-danger" onclick="upDislike(this, ${i})">&#128078;<p class="vote-down">${currBook.dislikeCount}</p></button>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
          
        </div>
      </div>
        `
    }
    document.querySelector('#modals').innerHTML = strHtml;
}

function init() {
    renderBooks();
    renderModals();
}

function deleteBook(i) {
    gBooks.splice(i,1);
        renderBooks();     renderModals();;
}

function updateBook(i) {
    var newId;
    newId = prompt('Enter new book ID.\
    \nIf you do not wish to change it, just press OK');
    if (newId === '') {
        newId = gBooks[i].id;
    }
    var newName;
    newName = prompt('Enter new book name.\
    \nIf you do not wish to change it, just press OK');
    if (newName === '') {
        newName = gBooks[i].name;
    }
    var newPrice;
    newPrice = prompt('Enter new book price.\
    \nIf you do not wish to change it, just press OK');
    if (newPrice === NaN) {
        newPrice = gBooks[i].price;
    }
    var newDesc;
    newDesc = prompt('Write some words about the book.\
    \nIf you do not wish to change it, just press OK');
    if (newDesc === '') {
        newDesc = gBooks[i].desc;
    }
    gBooks[i] =
    {
        id: newId,
        name: newName,
        price: newPrice,
        desc: newDesc
    }
        renderBooks();     renderModals();
}


function addBook() {
    var newId;
    newId = prompt('Enter new book ID.\
    \nYou can also leave it blank');
    if (newId === '') {
        newId = 'scott';
    }
    var newName;
    newName = prompt('Enter new book name.\
    \nYou can also leave it blank');
    if (newName === '') {
        newName = 'Scott Pilgrim Complete Box Set';
    }
    var newPrice;
    newPrice = prompt('Enter new book price.\
    \nYou can also leave it blank');
    if (newPrice === '') {
        newPrice = 300;
    }
    var newDesc;
    newDesc = prompt('Write some words about the book.\
    \nYou can also leave it blank');
    if (newDesc === '') {
        newDesc = 'It\'s the firckin best. Just trust me on this, okay?';
    }
    var newBook =
    {
        id: newId,
        name: newName,
        price: newPrice,
        desc: newDesc,
        rating: 9,
        likeCount: 0,
        dislikeCount: 0
    }
    gBooks.push(newBook);
        renderBooks();     renderModals();;
}

function upLike (elButton, i) {
    gBooks[i].likeCount++;
    elButton.querySelector('p').innerText = gBooks[i].likeCount;
}

function upDislike(elButton, i) {
    gBooks[i].dislikeCount++;
    elButton.querySelector('p').innerText = gBooks[i].dislikeCount;
}