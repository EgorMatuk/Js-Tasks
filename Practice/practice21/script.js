//https://jsonplaceholder.typicode.com/posts

const getAllPosts = (count = 3) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`)
        .then(response => response.json())
        .then(
            (data) => {
                data.forEach((element) => {
                    document.querySelector('#posts').insertAdjacentHTML('afterbegin', `
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">${element.title}</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>`)
                });
            })
}

document.querySelector('#five-bews').addEventListener('click', () => {
    getAllPosts(5);
});

document.querySelector('#ten-bews').addEventListener('click', () => {
    getAllPosts(10);
});