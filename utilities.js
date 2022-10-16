const processSearch = (datalimit) => {  // 9 no work use data limit becouse how much i want show mobile phone there
    toggoleSpiner(true) // 8 under the toggole spiner
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    if (searchText.length) {
        loadPhones(searchText, datalimit);
    }
    else {
        // swal.fire({
        // title: 'Warning!',
        // text: 'Please Search Mobile Phone',
        // icon: 'warning',
        // confirmButtonText: 'Cancel'
        // })
                Swal.fire({
        template: '#my-template'
        })
    }
}



