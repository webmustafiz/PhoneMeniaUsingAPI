// first 
const loadPhones = async (searchText,datalimit) => {    // import utilities function(datalimit)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`//    4 no work(search text)
    const res = await fetch(url);
    const data = await res.json()
    displayPhones(data.data,datalimit)   //use data limit must becouse how much i want theere data /phone
}

// second   (2)
const displayPhones = (phones,datalimit) => { // use same and again (dataLimit)
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerText = ''; // 5   input field clear 5 no work

    // 9 no work there show all button 
    const showAll = document.getElementById('show-all')
    if ( datalimit  && phones.length > 10) { //use (data limit must)
        phones = phones.slice(0, 10)
    showAll.classList.remove('d-none')
    }
    else {
        showAll.classList.add('d-none')
    }
    // phones = phones.slice(0, 10)   //6 no work
    
                //  7 no work Error Massage
    const noPhoneFound = document.getElementById('no-found-massage');
    if (phones.length === 0) {
        noPhoneFound.classList.remove('d-none')
    }
    else {
        noPhoneFound.classList.add('d-none')
    }
    // forEch be under the displayphones functions
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div')
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text"></p>
                </div>
                    <a onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-similer" data-bs-toggle="modal" data-bs-target="#phoneDetailsModal">Show Details</a>

            </div>
        `;
        phoneContainer.appendChild(phoneDiv)
        
    })
    // 8 no work under the toggole spiner stop loading
    toggoleSpiner(false)
}

// 3rd work button and input field 
document.getElementById('btn-search').addEventListener('click', function () {
    processSearch(10)
})

// 8 no work spiner/loading
const toggoleSpiner = isloading => {
    const loaderSections = document.getElementById('loader');
    if (isloading) {
        loaderSections.classList.remove('d-none')
    }
    else {
        loaderSections.classList.add('d-none')
    }
}

// show all button adn show more
document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch()
})


// 10 no work show all button and import the functions
const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayePhoneDetails(data.data)
}


// 12 no work to do (modal)open
const displayePhoneDetails = phone => {
    console.log(phone)
    const modalTitle = document.getElementById('phoneDetailsModalLabel');
    modalTitle.innerHTML = `
        <h2 class="brand-header">Brand : ${phone.brand}</h2>
        <img class="phone-image" src="${phone.image}" alt="">
        <br>
        <h4 class="cheapset">Memory : ${phone.mainFeatures.memory}</h4>
        <h3 class="cheapset">Main Features : ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet : 'Chepset has not relised'}</h3>
        <h4 class="display-size"> Display Size : ${phone.mainFeatures.displaySize}</h4>
        <h5 class="relise-date">Relise Date : ${phone.releaseDate? phone.releaseDate:'Upcoming'}</h5>
        
    `;
}

// 11 no work do the connect the Enter button click and see search result
document.getElementById('search-field').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        processSearch(10)
    }
})


loadPhones('apple')