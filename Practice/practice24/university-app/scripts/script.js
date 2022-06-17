const renderUniverList = async() =>{

    const dataUniver = await getUniversList();
    const uList = document.querySelector('#list-matches');

    uList.innerHTML = '';
    dataUniver.forEach(element => {
        uList.innerHTML += `
            <a href="#!" class="collection-item">
                <span class="badge">${element.name}</span>
                <span class="badge">1</span>
                <i class = "material-icons">arrow_forward</i>
            </a>
        `
    });
}
renderUniverList();