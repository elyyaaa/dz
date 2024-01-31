document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=60');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderCards = (posts) => {
        posts.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = 'https://ww2.doramasmp4.city/wp-content/uploads/2023/11/xBnscv5BrJREKVSvh0le61y4KDk.jpg';
            image.alt = 'Card Image';
            image.style.maxWidth = '100%'; // Добавленный стиль

            const title = document.createElement('h3');
            title.textContent = post.title;

            const description = document.createElement('p');
            description.textContent = post.body;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);
            cardContainer.appendChild(card);
        });
    };

    const init = async () => {
        const posts = await fetchData();
        if (posts) {
            renderCards(posts);
        }
    };

    init();
});
