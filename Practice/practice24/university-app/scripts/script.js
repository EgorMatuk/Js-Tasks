const renderUniverList = async() =>{
    const univerCurrent = document.getElementById('current-tour').value;
    const dataUniver = await getUniversList(univerCurrent);
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

document.getElementById('current-tour').addEventListener('change',renderUniverList);