const processSearch = (datalimit) => {  // 9 no work use data limit becouse how much i want show mobile phone there
    toggoleSpiner(true) // 8 under the toggole spiner
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText, datalimit);
}